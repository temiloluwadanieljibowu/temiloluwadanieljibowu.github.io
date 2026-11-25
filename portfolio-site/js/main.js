/* =============================================================================
   Page assembly and interactions.
   Renders every section from window.PORTFOLIO (data/content.js) using
   window.Components (js/components.js), then wires up navigation, the light /
   dark theme switch, the case-study dialog, image lightbox, experience filters,
   scroll reveals and the contact form.
   ========================================================================== */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const C = window.Components;
  if (!D || !C) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Display order: the current project first, then the rest by date (oldest → newest).
  const all = D.projects || [];
  const projects = [
    ...all.filter((p) => p.current),
    ...all.filter((p) => !p.current).sort((a, b) => String(a.sortDate || "").localeCompare(String(b.sortDate || ""))),
  ];
  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));

  /* ---------------------------------------------------------------------------
     Render
     ------------------------------------------------------------------------ */
  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
    return el;
  }
  function hideSection(id) {
    const s = document.getElementById(id);
    if (s) s.hidden = true;
    const link = $(`.nav-links a[href="#${id}"]`);
    if (link) link.parentElement.hidden = true;
  }

  function render() {
    const p = D.profile;
    const brand = $('[data-bind="brand"]');
    if (brand) brand.textContent = p.name.split(" ").map((w, i, a) => (i < a.length - 1 ? w[0] + "." : w)).join(" ");

    setHTML("hero-root", C.hero(p, D.hero, projects, D.orbit || []));
    setHTML("projects-root", C.projectsLayout(projects));

    if (C.has(D.experience)) {
      setHTML(
        "experience-root",
        `${C.experienceFilters(D.experience)}<ol class="exp-grid">${D.experience.map((e, i) => C.experienceCard(e, byId, i)).join("")}</ol>`
      );
    } else hideSection("experience");

    if (C.has(D.skills)) {
      setHTML("skills-root", D.skills.map(C.skillCard).join(""));
      const note = document.getElementById("skills-note");
      if (note && D.skillsNote) note.textContent = D.skillsNote;
    } else hideSection("skills");

    setHTML("about-root", C.about(D, byId));

    setHTML("contact-root", C.contact(D.contact, p));
    setHTML("footer-root", C.footer(p, D.meta || {}));

    // Nav résumé button mirrors the résumé setting.
    const r = C.resumeLink(p);
    $$(".nav-resume").forEach((a) => {
      a.href = r.href;
      a.textContent = r.label.replace(/^Download /, "").replace(/^./, (c) => c.toUpperCase());
      if (r.attrs.includes("download")) a.setAttribute("download", "");
      if (r.attrs.includes("data-request-resume")) a.setAttribute("data-request-resume", "");
    });
  }

  /* ---------------------------------------------------------------------------
     Light / dark theme (the initial theme is set by a tiny script in <head>)
     ------------------------------------------------------------------------ */
  function initTheme() {
    const root = document.documentElement;
    const meta = $('meta[name="theme-color"]');
    const buttons = $$("[data-theme-toggle]");

    const apply = (theme, save) => {
      root.setAttribute("data-theme", theme);
      if (meta) meta.setAttribute("content", theme === "light" ? "#f6f7fb" : "#05070f");
      buttons.forEach((b) => {
        const next = theme === "light" ? "dark" : "light";
        b.setAttribute("aria-label", `Switch to ${next} mode`);
        b.setAttribute("title", `Switch to ${next} mode`);
        b.setAttribute("aria-pressed", String(theme === "light"));
      });
      if (save) {
        try {
          localStorage.setItem("theme", theme);
        } catch {
          /* storage unavailable — the choice lasts for this visit only */
        }
      }
      document.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
    };

    apply(root.getAttribute("data-theme") || "dark", false);
    buttons.forEach((b) =>
      b.addEventListener("click", () => {
        root.classList.add("theme-transition");
        apply(root.getAttribute("data-theme") === "light" ? "dark" : "light", true);
        setTimeout(() => root.classList.remove("theme-transition"), 400);
      })
    );
  }

  /* ---------------------------------------------------------------------------
     Navigation: sticky header, mobile menu, active section
     ------------------------------------------------------------------------ */
  function initNav() {
    const header = $(".site-header");
    const toggle = $(".nav-toggle");
    const menu = $("#nav-menu");

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        closeMenu();
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 960px)").addEventListener("change", closeMenu);

    // Highlight the nav link for the section in view.
    const links = $$(".nav-links a");
    const sections = links.map((a) => document.getElementById(a.getAttribute("href").slice(1))).filter(Boolean);
    const home = document.getElementById("home");
    if (home) sections.unshift(home); // no link is highlighted while the hero is in view
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (!en.isIntersecting) return;
            links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
          });
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      sections.forEach((s) => io.observe(s));
    }
  }

  /* ---------------------------------------------------------------------------
     Scroll reveal (respects reduced motion)
     ------------------------------------------------------------------------ */
  function initReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------------------
     Experience filters (All / Capstone / Research / Employment …)
     ------------------------------------------------------------------------ */
  function initFilters() {
    const bar = $("#experience .filters");
    if (!bar) return;
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest("[data-filter]");
      if (!chip) return;
      const value = chip.dataset.filter;
      $$("[data-filter]", bar).forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      $$("#experience .exp-item").forEach((item) => {
        item.hidden = value !== "all" && item.dataset.type !== value;
        if (!item.hidden) item.classList.add("is-visible");
      });
    });
  }

  /* ---------------------------------------------------------------------------
     Case-study dialog — deep-linkable via #project/<id>
     ------------------------------------------------------------------------ */
  const dialog = $("#case-study");
  const dialogRoot = $("#case-study-root");
  const baseTitle = document.title;
  let lastFocus = null;
  let openedFromPage = false;

  function openCase(id) {
    const i = projects.findIndex((p) => p.id === id);
    if (i < 0) return closeCase(false);
    const p = projects[i];
    dialogRoot.innerHTML = C.caseStudy(p, projects[i - 1], projects[i + 1]);
    dialogRoot.scrollTop = 0;
    document.title = `${p.title} | ${D.profile.name}`;
    if (!dialog.open) {
      lastFocus = document.activeElement;
      dialog.showModal();
      document.documentElement.classList.add("modal-open");
    }
    $(".cs-title", dialogRoot)?.focus?.();
  }

  function closeCase(updateHash = true) {
    if (dialog.open) dialog.close();
    document.documentElement.classList.remove("modal-open");
    document.title = baseTitle;
    $$("video", dialogRoot).forEach((v) => v.pause());
    if (updateHash && location.hash.startsWith("#project/")) {
      if (openedFromPage) history.back();
      else history.replaceState(null, "", "#projects");
    }
    openedFromPage = false;
    if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
  }

  function route() {
    const m = location.hash.match(/^#project\/([\w-]+)/);
    if (m) openCase(m[1]);
    else if (dialog.open) closeCase(false);
  }

  function initCaseStudies() {
    // Card / in-page links push a history entry so Back closes the dialog.
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#project/"]');
      if (!a) return;
      e.preventDefault();
      const target = a.getAttribute("href");
      if (location.hash === target) return route();
      openedFromPage = openedFromPage || !dialog.open;
      if (dialog.open) history.replaceState(null, "", target);
      else history.pushState(null, "", target);
      route();
    });
    window.addEventListener("hashchange", route);
    window.addEventListener("popstate", route);

    dialog.addEventListener("click", (e) => {
      if (e.target.closest("[data-close-case]")) closeCase();
      else if (e.target === dialog || e.target === dialogRoot) closeCase(); // click outside the panel
    });
    dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      closeCase();
    });
    route();
  }

  /* ---------------------------------------------------------------------------
     Interest orbit: pauses on hover/focus, icons open an info panel
     ------------------------------------------------------------------------ */
  function initOrbit() {
    const stage = $(".orbit-stage");
    const panel = $("#orbit-panel");
    if (!stage || !panel) return;
    const items = Object.fromEntries((D.orbit || []).map((o) => [o.id, o]));
    const buttons = $$(".orbit-btn", stage);
    let hovering = false;
    let focused = false;
    let current = null; // id of the open panel
    let trigger = null; // button that opened it
    let closeTimer = 0;

    const sync = () => stage.classList.toggle("is-paused", hovering || focused || !!current);

    buttons.forEach((b) => {
      b.addEventListener("pointerenter", () => { hovering = true; sync(); });
      b.addEventListener("pointerleave", () => { hovering = false; sync(); });
    });
    panel.addEventListener("pointerenter", () => { hovering = true; sync(); });
    panel.addEventListener("pointerleave", () => { hovering = false; sync(); });
    stage.addEventListener("focusin", () => { focused = true; sync(); });
    stage.addEventListener("focusout", (e) => {
      if (!stage.contains(e.relatedTarget)) { focused = false; sync(); }
    });

    function open(id, btn) {
      const item = items[id];
      if (!item) return;
      clearTimeout(closeTimer);
      buttons.forEach((b) => b.setAttribute("aria-expanded", String(b === btn)));
      panel.innerHTML = C.orbitPanel(item, byId);
      panel.dataset.category = item.category;
      panel.hidden = false;
      requestAnimationFrame(() => panel.classList.add("is-open"));
      current = id;
      trigger = btn;
      sync();
      $("#orbit-panel-title", panel)?.focus({ preventScroll: true });
      // Keep the panel on screen without jumping the page around.
      setTimeout(() => {
        const r = panel.getBoundingClientRect();
        if (r.bottom > window.innerHeight || r.top < 0) panel.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
      }, 60);
    }

    function close(returnFocus = true) {
      if (!current) return;
      const btn = trigger;
      current = null;
      trigger = null;
      buttons.forEach((b) => b.setAttribute("aria-expanded", "false"));
      panel.classList.remove("is-open");
      closeTimer = setTimeout(() => { if (!current) panel.hidden = true; }, reduceMotion ? 0 : 220);
      if (returnFocus && btn && panel.contains(document.activeElement)) btn.focus({ preventScroll: true });
      sync();
    }

    stage.addEventListener("click", (e) => {
      const btn = e.target.closest(".orbit-btn");
      if (btn) {
        if (current === btn.dataset.orbit) close();
        else open(btn.dataset.orbit, btn);
        return;
      }
      if (e.target.closest("[data-orbit-close]")) close();
      else if (e.target.closest('#orbit-panel a[href^="#project/"]')) close(false);
    });
    // Click anywhere else closes the panel.
    document.addEventListener("pointerdown", (e) => {
      if (current && !panel.contains(e.target) && !e.target.closest(".orbit-btn")) close(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && current) {
        e.stopPropagation();
        close();
      }
    });
  }

  /* ---------------------------------------------------------------------------
     Lightbox for gallery images
     ------------------------------------------------------------------------ */
  function initLightbox() {
    const lb = $("#lightbox");
    const img = $("#lightbox-img");
    const cap = $("#lightbox-caption");
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lightbox]");
      if (!btn) return;
      img.src = btn.dataset.lightbox;
      img.alt = btn.dataset.alt || "";
      cap.textContent = btn.dataset.caption || "";
      lb.showModal();
    });
    lb.addEventListener("click", (e) => {
      if (e.target === lb || e.target.closest("[data-close-lightbox]") || e.target === img) lb.close();
    });
  }

  /* ---------------------------------------------------------------------------
     Contact form (composes an email — no server needed) + copy email
     ------------------------------------------------------------------------ */
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-shown");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("is-shown"), 2400);
  }

  function initContact() {
    document.addEventListener("click", async (e) => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        toast("Email address copied");
      } catch {
        toast(btn.dataset.copy);
      }
    });

    const form = $("#contact-form");
    if (!form) return;
    const err = $("#cf-error");

    // "Request résumé" buttons scroll to the form and pre-fill a résumé request.
    document.addEventListener("click", (e) => {
      if (!e.target.closest("[data-request-resume]")) return;
      form.hidden = false;
      $("#cf-done").hidden = true;
      $("#cf-subject").value = "Résumé request";
      $("#cf-message").placeholder = "Tell me a little about the role or opportunity, and I'll email you a copy of my résumé.";
      setTimeout(() => $("#cf-name").focus({ preventScroll: true }), reduceMotion ? 0 : 450);
    });

    const done = $("#cf-done");
    const submitBtn = form.querySelector('button[type="submit"]');
    const cfg = (D.contact && D.contact.form) || {};

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      const name = f.name.trim();
      const email = f.email.trim();
      const message = f.message.trim();
      const missing = [];
      if (!name) missing.push("your name");
      if (!/^\S+@\S+\.\S+$/.test(email)) missing.push("a valid email");
      if (!message) missing.push("a message");
      if (missing.length) {
        err.textContent = "Please add " + missing.join(", ").replace(/, ([^,]*)$/, " and $1") + ".";
        const first = form.querySelector(missing[0] === "your name" ? "#cf-name" : missing[0] === "a message" ? "#cf-message" : "#cf-email");
        first?.focus();
        return;
      }
      err.textContent = "";

      const typed = f.subject.trim();
      const isResume = /^r[ée]sum[ée] request/i.test(typed);
      const subject = isResume ? `Résumé request from ${name}` : typed || `Portfolio message from ${name}`;
      const mailtoHref = `mailto:${D.profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom ${name} (${email})`)}`;

      // Spam trap filled in: quietly pretend it worked.
      if (f.website) return showDone(name, isResume);

      const direct = cfg.provider === "formsubmit" || (cfg.provider === "web3forms" && cfg.web3formsKey);
      if (!direct) {
        window.location.href = mailtoHref;
        toast("Opening your email app…");
        return;
      }

      setSending(true);
      try {
        await sendMessage({ name, email, subject, message, type: isResume ? "Résumé request" : "General message" });
        showDone(name, isResume);
      } catch (error) {
        console.warn("Contact form could not send:", error.message);
        err.innerHTML = `Sorry, your message couldn't be sent just now. Please try again, or <a href="${C.esc(mailtoHref)}">email me directly</a>.`;
      } finally {
        setSending(false);
      }
    });

    function setSending(on) {
      submitBtn.disabled = on;
      submitBtn.querySelector("span").textContent = on ? "Sending…" : "Send message";
      form.setAttribute("aria-busy", String(on));
    }

    // Delivers the message to your inbox through the service set in content.js.
    async function sendMessage(m) {
      let url;
      let body;
      if (cfg.provider === "web3forms") {
        url = "https://api.web3forms.com/submit";
        body = { access_key: cfg.web3formsKey, subject: m.subject, from_name: "Portfolio website", name: m.name, email: m.email, replyto: m.email, request_type: m.type, message: m.message };
      } else {
        url = `https://formsubmit.co/ajax/${cfg.formsubmitId || D.profile.email}`;
        body = { _subject: m.subject, _replyto: m.email, _template: "table", _captcha: "false", name: m.name, email: m.email, request_type: m.type, message: m.message };
      }
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      const ok = res.ok && (data.success === true || data.success === "true");
      if (!ok) throw new Error(data.message || `HTTP ${res.status}`);
      return data;
    }

    function showDone(name, isResume) {
      const first = C.esc(name.split(/\s+/)[0]);
      done.innerHTML = `
        <p class="card-label">${isResume ? "Request sent" : "Message sent"}</p>
        <h3>Thanks, ${first}!</h3>
        <p>${isResume ? "Your résumé request is in my inbox. I'll email you a copy soon." : "Your message is in my inbox, and I'll get back to you soon."}</p>
        <button type="button" class="btn btn-outline btn-sm" data-form-again>Send another message</button>`;
      form.reset();
      $("#cf-message").placeholder = "";
      form.hidden = true;
      done.hidden = false;
      done.focus({ preventScroll: true });
      toast(isResume ? "Résumé request sent" : "Message sent");
    }

    done.addEventListener("click", (e) => {
      if (!e.target.closest("[data-form-again]")) return;
      done.hidden = true;
      form.hidden = false;
      $("#cf-name").focus();
    });
  }

  /* ---------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  render();
  initTheme();
  initNav();
  initReveal();
  initFilters();
  initCaseStudies();
  initOrbit();
  initLightbox();
  initContact();
})();
