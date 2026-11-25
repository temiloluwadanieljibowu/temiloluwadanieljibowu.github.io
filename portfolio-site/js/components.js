/* =============================================================================
   Reusable UI components.
   Each function takes data from data/content.js and returns an HTML string.
   main.js decides where each component is placed and wires up interactions.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // Tiny markdown: **bold**, `code`, [text](url). Input is escaped first.
  const md = (s) =>
    esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`(.+?)`/g, "<code>$1</code>")
      .replace(/\[(.+?)\]\((https?:\/\/[^\s)]+|[\w./#-]+)\)/g, '<a href="$2">$1</a>');

  const shortName = (p) => p.shortTitle || p.title.split(/ [—:] /)[0];
  const has = (v) => (Array.isArray(v) ? v.length > 0 : v !== undefined && v !== null && v !== "");
  const list = (items, cls = "") => `<ul class="${cls}">${items.map((i) => `<li>${md(i)}</li>`).join("")}</ul>`;
  const isExternal = (href) => /^https?:\/\//.test(href);
  const extAttrs = (href) => (isExternal(href) ? ' target="_blank" rel="noopener noreferrer"' : "");
  const emoji = (e, label = "") =>
    `<span class="emoji" ${label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'}>${esc(e)}</span>`;

  /* ---------- icons (24×24, stroke-based) ---------- */
  const ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h10"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    pdf: '<path d="M6 3h8l5 5v13H6z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    video: '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="M16 10l5-3v10l-5-3z"/>',
    repo: '<path d="M6 3v12M18 9a3 3 0 1 0 0-.01M6 21a3 3 0 1 0 0-.01M6 15a3 3 0 1 0 0 .01M18 12c0 3-3 4-6 4"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    board: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><circle cx="16" cy="15" r="1.5"/><path d="M9.5 9H14v4.5M8 10.5V15h6.5"/>',
    scope: '<rect x="2" y="4" width="20" height="14" rx="2"/><path d="M5 13l2.5-4 2.5 6 2.5-8 2.5 6h4M8 21h8"/>',
    people: '<circle cx="8" cy="9" r="3"/><circle cx="16.5" cy="9" r="3"/><path d="M2.5 19a5.5 5.5 0 0 1 11 0M12 19a5 5 0 0 1 9.5-1"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5V17M7.5 7.3v.2M11.5 17v-6.5M11.5 13.5c0-2 1.2-3 2.7-3s2.3 1 2.3 3V17"/>',
    github: '<path d="M9 19c-4 1.3-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    award: '<circle cx="12" cy="9" r="6"/><path d="M8.5 14L7 22l5-3 5 3-1.5-8"/>',
    flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
    flask: '<path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21a2 2 0 0 1 2-2h13v2H6"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>',
    computer: '<rect x="3" y="4" width="18" height="12" rx="1.8"/><path d="M8 20h8M12 16v4M7 9l2 1.5L7 12M11 12h4"/>',
    drone: '<rect x="10" y="10" width="4" height="4" rx="1"/><path d="M10 10L7.5 7.5M14 10l2.5-2.5M10 14l-2.5 2.5M14 14l2.5 2.5"/><ellipse cx="6" cy="6" rx="3.2" ry="1.3"/><ellipse cx="18" cy="6" rx="3.2" ry="1.3"/><ellipse cx="6" cy="18" rx="3.2" ry="1.3"/><ellipse cx="18" cy="18" rx="3.2" ry="1.3"/>',
    openbook: '<path d="M3 5.5C5.5 4.2 8.6 4.3 12 6.4c3.4-2.1 6.5-2.2 9-.9V19c-2.5-1.3-5.6-1.2-9 .9-3.4-2.1-6.5-2.2-9-.9z"/><path d="M12 6.4V19.9"/>',
    dumbbell: '<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
    basketball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5.7 5.6c3.4 3.4 3.4 9.4 0 12.8M18.3 5.6c-3.4 3.4-3.4 9.4 0 12.8"/>',
    soccer: '<circle cx="12" cy="12" r="9"/><path d="M12 8.2l3.2 2.3-1.2 3.8h-4l-1.2-3.8z"/><path d="M12 8.2V3.3M15.2 10.5l4.4-1.6M14 14.3l2.8 3.9M10 14.3l-2.8 3.9M8.8 10.5L4.4 8.9"/>',
  };
  // Orbit icon names map to the drawings above ("book" uses the open book).
  const ORBIT_ICONS = { chip: "chip", computer: "computer", drone: "drone", book: "openbook", dumbbell: "dumbbell", basketball: "basketball", soccer: "soccer" };
  const CATEGORY = { tech: "Engineering", life: "Outside the lab" };
  const icon = (name, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ICONS[name] || ""}</svg>`;

  /* ---------- experience / project type labels ---------- */
  const TYPES = {
    Capstone: { cls: "t-capstone", icon: "flag" },
    Research: { cls: "t-research", icon: "flask" },
    Employment: { cls: "t-employment", icon: "briefcase" },
    "Course project": { cls: "t-course", icon: "book" },
    "Personal project": { cls: "t-personal", icon: "spark" },
  };
  const typeBadge = (type) => {
    if (!type) return "";
    const t = TYPES[type] || { cls: "t-course", icon: "spark" };
    return `<span class="type-badge ${t.cls}">${icon(t.icon)}${esc(type)}</span>`;
  };

  /* ---------- buttons & links ---------- */
  function resumeLink(profile) {
    const r = profile.resume || {};
    if (r.available && r.file) {
      return { href: r.file, label: "Download résumé", icon: "download", attrs: " download" };
    }
    // On-request mode: send visitors to the contact form (main.js pre-fills the subject).
    return { href: "#contact", label: "Request résumé", icon: "mail", attrs: " data-request-resume" };
  }

  function button({ href, label, variant = "primary", iconName, attrs = "", size = "" }) {
    return `<a class="btn btn-${variant}${size ? " btn-" + size : ""}" href="${esc(href)}"${attrs}${extAttrs(href)}>${
      iconName ? icon(iconName) : ""
    }<span>${esc(label)}</span></a>`;
  }

  /* ---------- top of the page ---------- */
  // Your photo with the interactive orbit of interests around it.
  // Each icon sits in a slot rotated to its starting angle; the whole ring
  // spins, and each icon's wrapper spins the opposite way so it stays upright.
  function orbitStage(profile, items) {
    const words = profile.name.trim().split(/\s+/);
    const initials = [words[0], words[words.length - 1]].map((w) => w[0]).join("");
    const alt = esc(profile.photoAlt || profile.name);
    const inner = !profile.photo
      ? `<span class="avatar-monogram" aria-hidden="true">${esc(initials)}</span>`
      : profile.photoLight
        ? `<img class="logo-on-dark" src="${esc(profile.photo)}" alt="${alt}" width="320" height="320" fetchpriority="high" />
           <img class="logo-on-light" src="${esc(profile.photoLight)}" alt="${alt}" width="320" height="320" />`
        : `<img src="${esc(profile.photo)}" alt="${alt}" width="320" height="320" fetchpriority="high" />`;
    const slots = (items || [])
      .map(
        (o) => `<li class="orbit-slot" style="--a:${Number(o.angle) || 0}deg">
          <div class="orbit-upright">
            <button type="button" class="orbit-btn cat-${esc(o.category)}" data-orbit="${esc(o.id)}"
              aria-label="${esc(o.title)}: ${esc(CATEGORY[o.category] || "")}. Open details" aria-haspopup="dialog" aria-expanded="false" aria-controls="orbit-panel">
              ${icon(ORBIT_ICONS[o.icon] || "spark")}
              <span class="orbit-tip" aria-hidden="true">${esc(o.short || o.title)}</span>
            </button>
          </div>
        </li>`
      )
      .join("");
    const cats = [...new Set((items || []).map((o) => o.category))];
    return `
      <div class="orbit-stage">
        <div class="orbit-path" aria-hidden="true"></div>
        <div class="avatar" ${profile.photo ? "" : `role="img" aria-label="${esc(profile.name)} monogram"`}>${inner}</div>
        ${slots ? `<ul class="orbit-ring" aria-label="About me: select an interest to learn more">${slots}</ul>` : ""}
        <div class="orbit-panel" id="orbit-panel" role="dialog" aria-modal="false" aria-labelledby="orbit-panel-title" hidden></div>
      </div>
      ${
        slots
          ? `<p class="orbit-legend">${cats
              .map((c) => `<span class="legend-item"><span class="legend-dot cat-${esc(c)}" aria-hidden="true"></span>${esc(CATEGORY[c] || c)}</span>`)
              .join("")}<span class="orbit-hint">Select any icon to learn more</span></p>`
          : ""
      }`;
  }

  // Contents of the small panel that opens when an orbit icon is selected.
  function orbitPanel(o, byId) {
    const facts = has(o.facts)
      ? `<dl class="op-facts">${o.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`
      : "";
    const chips = has(o.chips)
      ? `${o.chipsLabel ? `<p class="op-label">${esc(o.chipsLabel)}</p>` : ""}<ul class="tags tags-sm">${o.chips.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`
      : "";
    const projects = (o.projects || []).filter((id) => byId[id]);
    const links = projects.length
      ? `<p class="op-links"><span class="op-label">See it in</span>${projects
          .map((id) => `<a href="#project/${esc(id)}">${esc(shortName(byId[id]))} ${icon("arrow")}</a>`)
          .join("")}</p>`
      : "";
    return `
      <div class="op-card cat-${esc(o.category)}">
        <button type="button" class="icon-btn icon-btn-sm op-close" data-orbit-close aria-label="Close">${icon("close")}</button>
        <div class="op-head">
          <span class="op-icon" aria-hidden="true">${icon(ORBIT_ICONS[o.icon] || "spark")}</span>
          <div><p class="op-kicker">${esc(CATEGORY[o.category] || "")}</p><h3 id="orbit-panel-title" tabindex="-1">${esc(o.title)}</h3></div>
        </div>
        <p class="op-text">${md(o.text)}</p>
        ${facts}${chips}${links}
      </div>`;
  }

  function hero(profile, heroData, ordered, orbitItems) {
    const r = resumeLink(profile);
    const glance = ordered
      .map(
        (p) => `<li><a href="#project/${esc(p.id)}">
          ${emoji(p.emoji || "✦")}
          <span class="glance-name">${esc(shortName(p))}</span>
          <span class="glance-date">${p.current ? '<span class="pulse" aria-hidden="true"></span>Now' : esc(p.timeline)}</span>
        </a></li>`
      )
      .join("");
    const metrics = (heroData.metrics || [])
      .map((m) => `<li><span class="metric-value">${esc(m.value)}</span><span class="metric-label">${esc(m.label)}</span></li>`)
      .join("");
    return `
      <div class="hero-main">
        <p class="hero-eyebrow reveal">${esc(heroData.eyebrow)}</p>
        <h1 class="hero-name reveal" id="hero-name">${esc(profile.name)}</h1>
        <p class="hero-headline reveal">${md(profile.headline)}</p>
        ${profile.intro ? `<p class="hero-intro reveal">${md(profile.intro)}</p>` : ""}
        ${has(profile.focus) ? `<ul class="hero-focus reveal" aria-label="Focus areas">${profile.focus.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>` : ""}
        <div class="hero-actions reveal">
          ${button({ href: "#projects", label: "See my projects", variant: "primary", iconName: "arrow" })}
          ${button({ href: r.href, label: r.label, variant: "outline", iconName: r.icon, attrs: r.attrs + " data-resume-link" })}
          ${profile.linkedin ? `<a class="icon-btn icon-btn-lg" href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">${icon("linkedin")}</a>` : ""}
          ${profile.github ? `<a class="icon-btn icon-btn-lg" href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">${icon("github")}</a>` : ""}
          <a class="icon-btn icon-btn-lg" href="#contact" aria-label="Contact me">${icon("mail")}</a>
        </div>
      </div>
      <div class="hero-side reveal">${orbitStage(profile, orbitItems)}</div>
      <div class="hero-bottom reveal">
        ${glance ? `<nav class="glance" aria-label="My projects"><p class="card-label">My projects</p><ul>${glance}</ul></nav>` : ""}
        ${metrics ? `<ul class="metrics" aria-label="By the numbers">${metrics}</ul>` : ""}
      </div>`;
  }

  /* ---------- projects ---------- */
  function statusBadge(status) {
    const live = /progress/i.test(status);
    return `<span class="badge ${live ? "badge-live" : ""}">${live ? '<span class="pulse" aria-hidden="true"></span>' : ""}${esc(status)}</span>`;
  }

  // Which kinds of technical documentation a project includes (shown on its card).
  function docBadges(p) {
    const kinds = new Set((p.gallery || []).map((g) => g.kind));
    const out = [];
    if (p.diagram || kinds.has("diagram")) out.push("Architecture diagram");
    if (kinds.has("schematic")) out.push("Schematics");
    if (has(p.tables)) out.push("Technical tables");
    if (kinds.has("hardware") || p.cover) out.push("Hardware photos");
    if (has(p.testing) || kinds.has("test")) out.push("Test plan");
    if ((p.links || []).some((l) => l.type === "pdf")) out.push("Report");
    if (p.video) out.push("Demo video");
    return out;
  }

  function projectCard(p, i, variant = "compact") {
    const img = p.cover || {};
    const style = [img.position ? `object-position:${img.position}` : "", img.fit ? `object-fit:${img.fit}` : ""].filter(Boolean).join(";");
    const highlights = (p.stats || []).filter((s) => s.highlight).slice(0, 2);
    const feature = variant === "feature";
    return `
      <article class="project-card project-card-${variant} reveal" style="--i:${i}">
        <a class="project-link" href="#project/${esc(p.id)}" aria-label="Read the ${esc(p.title)} case study">
          <div class="project-media${img.fit === "contain" ? " media-contain" : ""}">
            <img src="${esc(img.card || img.src)}" alt="${esc(img.alt)}" loading="${feature ? "eager" : "lazy"}" decoding="async"${style ? ` style="${style}"` : ""} />
            <div class="project-badges">${typeBadge(p.type)}${statusBadge(p.status)}</div>
          </div>
          <div class="project-body">
            ${feature ? `<p class="now-label"><span class="pulse" aria-hidden="true"></span>What I'm working on now</p>` : ""}
            <p class="project-meta"><span>${esc(p.context)}</span>${feature ? `<span>${esc(p.timeline)}</span>` : ""}</p>
            <h3 class="project-title">${feature ? "" : emoji(p.emoji || "")}${esc(feature ? p.title : shortName(p))}</h3>
            <p class="project-tagline">${md(p.tagline)}</p>
            <p class="project-role">${icon("user")}<span><span class="muted">My role:</span> ${esc(p.role)}</span></p>
            ${
              highlights.length
                ? `<ul class="highlights">${highlights.map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("")}</ul>`
                : ""
            }
            ${feature ? `<p class="doc-badges"><span class="doc-label">Inside:</span>${docBadges(p).map((d) => `<span>${esc(d)}</span>`).join("")}</p>` : ""}
            <span class="project-cta">Read the case study ${icon("arrow")}</span>
          </div>
        </a>
      </article>`;
  }

  // Current project front and center, earlier ones side by side in date order.
  function projectsLayout(ordered) {
    const current = ordered.filter((p) => p.current);
    const rest = ordered.filter((p) => !p.current);
    const first = rest[0] ? rest[0].timeline.match(/\d{4}/) : null;
    const last = rest[rest.length - 1] ? rest[rest.length - 1].timeline.match(/\d{4}/) : null;
    return `
      ${current.map((p, i) => projectCard(p, i, "feature")).join("")}
      ${
        rest.length
          ? `<div class="track-head reveal">
              <h3 class="subhead">Earlier projects</h3>
              ${first && last ? `<p class="track-range" aria-label="In order from ${first[0]} to ${last[0]}">${first[0]} ${icon("arrow")} ${last[0]}</p>` : ""}
            </div>
            <ol class="track" aria-label="Earlier projects in date order">${rest
              .map(
                (p, i) => `<li class="track-item">
                  <div class="track-marker" aria-hidden="true"><span class="track-dot"></span><span class="track-date">${esc(p.timeline)}</span></div>
                  ${projectCard(p, i + 1, "compact")}
                </li>`
              )
              .join("")}</ol>`
          : ""
      }`;
  }

  /* ---------- case study pieces ---------- */
  function stats(items) {
    if (!has(items)) return "";
    return `<ul class="stats">${items
      .map((s) => `<li class="stat"><span class="stat-value">${esc(s.value)}</span><span class="stat-label">${esc(s.label)}</span></li>`)
      .join("")}</ul>`;
  }

  function diagram(d) {
    if (!d || !has(d.rows)) return "";
    const node = (s) => {
      const [title, sub] = s.split("|");
      return `<div class="dg-node"><span class="dg-title">${esc(title)}</span>${sub ? `<span class="dg-sub">${esc(sub)}</span>` : ""}</div>`;
    };
    const link = (s) => `<div class="dg-link" aria-label="connected via ${esc(s)}"><span class="dg-link-label">${esc(s)}</span><span class="dg-arrow" aria-hidden="true"></span></div>`;
    const rows = d.rows
      .map(
        (r) => `
        <div class="dg-row">
          ${r.label ? `<p class="dg-row-label">${esc(r.label)}</p>` : ""}
          <div class="dg-chain">${r.chain.map((s, i) => (i % 2 === 0 ? node(s) : link(s))).join("")}</div>
        </div>
        ${r.bridge ? `<div class="dg-bridge"><span>${esc(r.bridge)}</span></div>` : ""}`
      )
      .join("");
    return `<figure class="diagram"><figcaption class="block-title">${icon("layers")}${esc(d.title || "System diagram")}</figcaption>${rows}</figure>`;
  }

  function table(t) {
    return `
      <figure class="data-table">
        <figcaption class="block-title">${icon("board")}${esc(t.title)}</figcaption>
        <div class="table-scroll" tabindex="0" role="region" aria-label="${esc(t.title)}">
          <table>
            <thead><tr>${t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join("")}</tr></thead>
            <tbody>${t.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${md(c)}</th>` : `<td>${md(c)}</td>`)).join("")}</tr>`).join("")}</tbody>
          </table>
        </div>
        ${t.note ? `<p class="table-note">${md(t.note)}</p>` : ""}
      </figure>`;
  }
  const tablesFor = (p, stage) => (p.tables || []).filter((t) => (t.stage || "docs") === stage).map(table).join("");

  function stack(s) {
    if (!s) return "";
    return `<div class="stack">${Object.entries(s)
      .map(([k, v]) => `<div class="stack-group"><p class="stack-label">${esc(k)}</p><ul class="tags">${v.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`)
      .join("")}</div>`;
  }

  function linkButton(l) {
    const map = { pdf: "pdf", video: "video", repo: "repo", external: "external" };
    return button({ href: l.href, label: l.label, variant: "outline", size: "sm", iconName: map[l.type] || "external" });
  }

  const GALLERY_GROUPS = [
    ["diagram", "System diagrams"],
    ["schematic", "Schematics and PCB layouts"],
    ["hardware", "Hardware"],
    ["cad", "CAD models"],
    ["test", "Test captures"],
  ];

  function gallery(items) {
    if (!has(items)) return "";
    const thumbOf = (g) =>
      g.thumb || (g.src.endsWith(".webp") && !g.src.endsWith("-card.webp") ? g.src.replace(/\.webp$/, "-card.webp") : g.src);
    const tile = (g) => `<li><button type="button" class="gallery-item" data-lightbox="${esc(g.src)}" data-caption="${esc(g.caption || "")}" data-alt="${esc(g.alt)}">
        <img src="${esc(thumbOf(g))}" alt="${esc(g.alt)}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${esc(g.src)}'" />
        ${g.caption ? `<span class="gallery-caption">${esc(g.caption)}</span>` : ""}
      </button></li>`;
    const known = new Set(GALLERY_GROUPS.map(([k]) => k));
    const groups = GALLERY_GROUPS.map(([kind, label]) => [label, items.filter((g) => g.kind === kind)]);
    groups.push(["Images", items.filter((g) => !known.has(g.kind))]);
    return groups
      .filter(([, g]) => g.length)
      .map(([label, g]) => `<div class="gallery-group"><p class="stack-label">${esc(label)}</p><ul class="gallery">${g.map(tile).join("")}</ul></div>`)
      .join("");
  }

  function decisionCard(d) {
    return `
      <li class="decision">
        <p class="decision-title">${esc(d.title)}</p>
        <p class="decision-choice">${icon("check")}<span><strong>${esc(d.chose)}</strong>${d.over ? `<span class="muted"> over ${esc(d.over)}</span>` : ""}</span></p>
        ${d.why ? `<p class="decision-why"><span class="kv">Why</span>${md(d.why)}</p>` : ""}
        ${d.tradeoff ? `<p class="decision-trade"><span class="kv">Trade-off</span>${md(d.tradeoff)}</p>` : ""}
      </li>`;
  }

  function caseStudy(p, prev, next) {
    const img = p.cover || {};
    const c = p.contribution || {};

    const contribution =
      has(c.summary) || has(c.items)
        ? `<section class="contribution" aria-labelledby="cs-role">
            <h3 class="contribution-title" id="cs-role">${icon("user")}My role and what I did</h3>
            ${has(c.summary) ? `<p class="contribution-summary">${md(c.summary)}</p>` : ""}
            ${has(c.items) ? list(c.items, "checklist") : ""}
            ${has(c.teamNote) ? `<p class="team-note">${icon("users")}<span>${md(c.teamNote)}</span></p>` : ""}
            ${c.planned ? `<div class="planned"><p class="cs-sub">${esc(c.planned.title)}</p>${list(c.planned.items, "planned-list")}</div>` : ""}
          </section>`
        : "";

    // The five-stage engineering flow: Problem → Decisions → Implementation → Testing → Results.
    const stages = [
      {
        key: "problem",
        title: "Problem",
        body: has(p.problem)
          ? p.problem.map((t) => `<p>${md(t)}</p>`).join("") + (has(p.objectives) ? `<p class="cs-sub">Goals</p>${list(p.objectives, "checklist")}` : "")
          : "",
      },
      {
        key: "decisions",
        title: "Engineering decisions",
        body: has(p.decisions) ? `<ul class="decisions">${p.decisions.map(decisionCard).join("")}</ul>${tablesFor(p, "decisions")}` : "",
      },
      {
        key: "implementation",
        title: "Implementation",
        body:
          (has(p.implementation)
            ? `<ol class="steps">${p.implementation.map((a) => `<li><h4>${esc(a.title)}</h4><p>${md(a.text)}</p></li>`).join("")}</ol>`
            : "") +
          diagram(p.diagram) +
          tablesFor(p, "implementation"),
      },
      {
        key: "testing",
        title: "Testing and validation",
        body:
          (has(p.testing)
            ? `<ul class="tests">${p.testing.map((t) => `<li><h4>${icon("scope")}${esc(t.title)}</h4><p>${md(t.text)}</p></li>`).join("")}</ul>`
            : "") +
          tablesFor(p, "testing") +
          (has(p.issues)
            ? `<p class="cs-sub">Problems we hit and how we fixed them</p><div class="issues">${p.issues
                .map(
                  (x) => `<div class="issue">
                    <p class="issue-q"><span class="issue-tag">Problem</span>${esc(x.issue)}</p>
                    <p class="issue-a"><span class="issue-tag tag-accent">Fix</span>${md(x.fix)}</p>
                  </div>`
                )
                .join("")}</div>`
            : ""),
      },
      {
        key: "results",
        title: /progress/i.test(p.status) ? "Results so far" : "Results",
        body: (has(p.results) ? list(p.results, "checklist") : "") + (has(p.next) ? `<p class="cs-sub">What's next</p>${list(p.next, "next-list")}` : ""),
      },
    ].filter((s) => s.body);

    const flow = stages.length
      ? `<section class="flow" aria-labelledby="cs-flow">
          <h3 class="cs-h3" id="cs-flow">How it came together</h3>
          <ol class="flow-map" aria-hidden="true">${stages.map((s, i) => `<li><span>${i + 1}</span>${esc(s.title)}</li>`).join("")}</ol>
          <ol class="flow-stages">${stages
            .map(
              (s, i) => `<li class="flow-stage" id="stage-${s.key}">
                <div class="flow-marker" aria-hidden="true">${i + 1}</div>
                <div class="flow-body"><h3 class="flow-title">${esc(s.title)}</h3>${s.body}</div>
              </li>`
            )
            .join("")}</ol>
        </section>`
      : "";

    const video = p.video
      ? `<figure class="cs-video">
           <video controls muted playsinline preload="metadata"${p.video.poster ? ` poster="${esc(p.video.poster)}"` : ""}${
             p.video.width && p.video.height ? ` width="${p.video.width}" height="${p.video.height}" style="aspect-ratio:${p.video.width}/${p.video.height}"` : ""
           }>
             <source src="${esc(p.video.src)}#t=0.5" type="video/mp4" />
             Your browser can't play this video. <a href="${esc(p.video.src)}">Download it instead.</a>
           </video>
           ${p.video.caption ? `<figcaption>${esc(p.video.caption)}</figcaption>` : ""}
         </figure>`
      : "";

    const docsTables = tablesFor(p, "docs");
    const docsGallery = gallery(p.gallery);
    const docs =
      docsTables || docsGallery || video
        ? `<section class="cs-section" aria-labelledby="cs-docs"><h3 class="cs-h3" id="cs-docs">Technical documentation</h3>${docsTables}${
            video ? `<div class="gallery-group"><p class="stack-label">Demo</p>${video}</div>` : ""
          }${docsGallery}</section>`
        : "";

    const navLink = (q, dir) =>
      q
        ? `<a class="cs-nav-link ${dir}" href="#project/${esc(q.id)}"><span class="muted">${dir === "prev" ? "← Previous" : "Next →"}</span><span>${esc(shortName(q))}</span></a>`
        : "<span></span>";

    return `
      <article class="cs-panel">
      <div class="cs-topbar">
        <p class="cs-crumb">Case study</p>
        <button class="icon-btn" type="button" data-close-case aria-label="Close case study">${icon("close")}</button>
      </div>
      <header class="cs-hero">
        <button type="button" class="cs-hero-media${img.fit === "contain" ? " media-contain" : ""}" data-lightbox="${esc(img.src)}" data-alt="${esc(img.alt)}" data-caption="${esc(img.alt)}" aria-label="Enlarge cover image">
          <img src="${esc(img.src)}" alt="${esc(img.alt)}"${img.position ? ` style="object-position:${img.position}"` : ""} />
        </button>
        <div class="cs-hero-text">
          <div class="project-badges">${typeBadge(p.type)}${statusBadge(p.status)}</div>
          <h2 class="cs-title" id="cs-title" tabindex="-1">${esc(p.title)}</h2>
          <p class="cs-tagline">${md(p.tagline)}</p>
          <ul class="cs-meta">
            <li>${icon("flag")}<span>${esc(p.context)}</span></li>
            <li>${icon("calendar")}<span>${esc(p.timeline)}</span></li>
            <li>${icon("users")}<span>${esc(p.team)}</span></li>
            <li class="cs-meta-role">${icon("user")}<span>${esc(p.role)}</span></li>
          </ul>
          ${has(p.links) ? `<div class="cs-links">${p.links.map(linkButton).join("")}</div>` : ""}
        </div>
      </header>
      <div class="cs-body">
        ${stats(p.stats)}
        ${contribution}
        ${flow}
        ${docs}
        ${p.stack ? `<section class="cs-section" aria-labelledby="cs-tools"><h3 class="cs-h3" id="cs-tools">Tools and technologies</h3>${stack(p.stack)}</section>` : ""}
      </div>
      <nav class="cs-nav" aria-label="More projects">${navLink(prev, "prev")}${navLink(next, "next")}</nav>
      </article>`;
  }

  /* ---------- skills ---------- */
  function skillCard(g, i) {
    return `
      <article class="card skill-card reveal" style="--i:${i}">
        <div class="skill-head">${icon(g.icon || "spark", "icon icon-badge")}<h3>${esc(g.category)}</h3></div>
        ${(g.groups || [{ items: g.items || [] }])
          .map(
            (grp) => `<div class="skill-group">${grp.label ? `<p class="skill-label">${esc(grp.label)}</p>` : ""}<ul class="tags">${grp.items
              .map((s) => `<li>${esc(s)}</li>`)
              .join("")}</ul></div>`
          )
          .join("")}
      </article>`;
  }

  /* ---------- experience ---------- */
  function experienceFilters(items) {
    const types = [...new Set(items.map((e) => e.type).filter(Boolean))];
    if (types.length < 2) return "";
    const btn = (value, label, extra = "") =>
      `<button type="button" class="filter-chip${extra}" data-filter="${esc(value)}" aria-pressed="${value === "all"}">${label}</button>`;
    return `<div class="filters reveal" role="group" aria-label="Filter experience by type">
      ${btn("all", "All")}
      ${types.map((t) => btn(t, `${icon((TYPES[t] || {}).icon || "spark")}${esc(t)}`, ` ${(TYPES[t] || {}).cls || ""}`)).join("")}
    </div>`;
  }

  function experienceCard(e, byId, i) {
    return `
      <li class="exp-item card reveal" data-type="${esc(e.type || "")}" style="--i:${i}">
        <div class="exp-top">${typeBadge(e.type)}<p class="exp-dates">${esc(e.dates)}</p></div>
        <h3 class="exp-role">${esc(e.role)}</h3>
        <p class="exp-org">${esc(e.org)}</p>
        ${has(e.points) ? list(e.points, "exp-points") : ""}
        ${has(e.tags) ? `<ul class="tags tags-sm">${e.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}
        ${e.project && byId[e.project] ? `<a class="text-link" href="#project/${esc(e.project)}">Read the case study ${icon("arrow")}</a>` : ""}
      </li>`;
  }

  /* ---------- about (bio, education, interests, leadership, certifications) ---------- */
  function about(D, byId) {
    const a = D.about || {};
    const p = D.profile;
    const r = D.research;

    const interests = r && has(r.interests)
      ? `<div class="interests"><p class="stack-label">${esc(r.intro || "Research interests")}</p><ul>${r.interests
          .map(
            (it) => `<li><strong>${esc(it.title)}.</strong> ${md(it.text)}${
              it.project && byId[it.project] ? ` <a class="text-link text-link-sm" href="#project/${esc(it.project)}">${esc(shortName(byId[it.project]))}</a>` : ""
            }</li>`
          )
          .join("")}</ul></div>`
      : "";

    const education = `
      <aside class="card edu reveal" aria-labelledby="edu-title">
        <div class="edu-head">${icon("cap", "icon icon-badge")}<div><h3 id="edu-title">${esc(p.degree)}</h3><p class="muted">${esc(p.school)}</p></div></div>
        <dl class="edu-facts">
          <div><dt>Graduation</dt><dd>${esc(p.graduation)}</dd></div>
          ${has(p.gpa) ? `<div><dt>GPA</dt><dd>${esc(p.gpa)}</dd></div>` : ""}
          <div><dt>Based in</dt><dd>${esc(p.location)}</dd></div>
        </dl>
        ${
          has(D.honors)
            ? `<p class="stack-label">Honors</p><ul class="honor-list">${D.honors
                .map((h) => `<li>${icon("award")}<span><strong>${esc(h.title)}</strong> <span class="muted">${esc(h.date)}</span></span></li>`)
                .join("")}</ul>`
            : ""
        }
        ${has(a.coursework) ? `<p class="stack-label">Relevant coursework</p><ul class="tags tags-sm">${a.coursework.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
      </aside>`;

    const leadership = has(D.leadership)
      ? `<h3 class="subhead reveal">Leadership and activities</h3><div class="leadership-grid">${D.leadership
          .map(
            (l, i) => `
            <article class="card lead-card reveal" style="--i:${i}">
              <p class="lead-kind">${esc(l.kind || "")}</p>
              <h4>${esc(l.title)}</h4>
              <p class="lead-org">${esc(l.org)}<span class="muted"> · ${esc(l.dates)}</span></p>
              ${l.text ? `<p class="lead-text">${md(l.text)}</p>` : ""}
              ${
                has(l.roles)
                  ? `<ul class="lead-roles">${l.roles
                      .map(
                        (ro) => `<li>${
                          ro.project && byId[ro.project] ? `<a href="#project/${esc(ro.project)}">${esc(ro.label)}</a>` : `<strong>${esc(ro.label)}</strong>`
                        }<span>${esc(ro.detail)}</span></li>`
                      )
                      .join("")}</ul>`
                  : ""
              }
            </article>`
          )
          .join("")}</div>`
      : "";

    const groups = {};
    (D.certifications || []).forEach((c) => (groups[c.group || "Certificates"] = groups[c.group || "Certificates"] || []).push(c));
    const certs = has(D.certifications)
      ? `<h3 class="subhead reveal">Certifications <span class="count">${D.certifications.length}</span></h3>
          <div class="cert-columns">${Object.entries(groups)
            .map(
              ([g, items]) => `<div class="cert-group reveal"><p class="stack-label">${esc(g)}</p><ul class="cert-list">${items
                .map(
                  (c) => `<li>
                    <div class="cert-main"><span class="cert-title">${esc(c.title)}</span><span class="cert-meta">${esc(c.issuer)} · ${esc(c.date)}${
                    c.duration ? ` · ${esc(c.duration)}` : ""
                  }</span></div>
                    <div class="cert-actions">
                      ${c.file ? `<a class="icon-btn icon-btn-sm" href="${esc(c.file)}" target="_blank" rel="noopener" aria-label="View certificate: ${esc(c.title)}">${icon("pdf")}</a>` : ""}
                      ${c.verify ? `<a class="icon-btn icon-btn-sm" href="${esc(c.verify)}" target="_blank" rel="noopener noreferrer" aria-label="Verify: ${esc(c.title)}">${icon("external")}</a>` : ""}
                    </div>
                  </li>`
                )
                .join("")}</ul></div>`
            )
            .join("")}</div>`
      : "";

    return `
      <div class="about-grid">
        <div class="about-text reveal">${(a.paragraphs || []).map((t) => `<p>${md(t)}</p>`).join("")}${interests}</div>
        ${education}
      </div>
      ${leadership}
      ${certs}`;
  }

  /* ---------- contact ---------- */
  function contact(c, profile) {
    const r = resumeLink(profile);
    const f = c.form || {};
    const sendsDirect = f.provider === "formsubmit" || (f.provider === "web3forms" && !!f.web3formsKey);
    const rows = [
      `<li><span class="contact-icon">${icon("mail")}</span><div><p class="contact-k">Email</p>
         <p class="contact-v"><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a>
         <button class="icon-btn icon-btn-sm" type="button" data-copy="${esc(profile.email)}" aria-label="Copy email address">${icon("copy")}</button></p></div></li>`,
      profile.linkedin
        ? `<li><span class="contact-icon">${icon("linkedin")}</span><div><p class="contact-k">LinkedIn</p><p class="contact-v"><a href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(
            profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
          )}</a></p></div></li>`
        : "",
      profile.github
        ? `<li><span class="contact-icon">${icon("github")}</span><div><p class="contact-k">GitHub</p><p class="contact-v"><a href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer">${esc(
            profile.github.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
          )}</a></p></div></li>`
        : "",
      `<li><span class="contact-icon">${icon("pin")}</span><div><p class="contact-k">Location</p><p class="contact-v">${esc(profile.location)}</p></div></li>`,
    ].join("");

    return `
      <div class="contact-grid">
        <div class="contact-info reveal">
          <p class="eyebrow"><span>05</span>Contact</p>
          <h2 id="contact-title">${esc(c.heading)}</h2>
          <p class="section-lede">${md(c.text)}</p>
          <ul class="contact-list">${rows}</ul>
          <div class="contact-actions">
            ${button({ href: r.href, label: r.label, variant: "primary", iconName: r.icon, attrs: r.attrs + " data-resume-link" })}
          </div>
        </div>
        <form class="card contact-form reveal" id="contact-form" novalidate>
          <p class="card-label">Send a message</p>
          <div class="field-row">
            <div class="field">
              <label for="cf-name">Name</label>
              <input id="cf-name" name="name" type="text" autocomplete="name" required />
            </div>
            <div class="field">
              <label for="cf-email">Your email</label>
              <input id="cf-email" name="email" type="email" autocomplete="email" required />
            </div>
          </div>
          <div class="field">
            <label for="cf-subject">Subject <span class="muted">(optional)</span></label>
            <input id="cf-subject" name="subject" type="text" />
          </div>
          <div class="field">
            <label for="cf-message">Message</label>
            <textarea id="cf-message" name="message" rows="4" required></textarea>
          </div>
          <!-- Spam trap: hidden from people, bots tend to fill it in -->
          <div class="hp-field" aria-hidden="true"><label for="cf-website">Website</label><input id="cf-website" name="website" type="text" tabindex="-1" autocomplete="off" /></div>
          <p class="form-error" id="cf-error" role="alert"></p>
          <button class="btn btn-primary btn-block" type="submit">${icon("mail")}<span>${sendsDirect ? "Send message" : "Compose email"}</span></button>
          <p class="form-hint">${
            sendsDirect ? "Your message goes straight to my inbox." : `Opens your email app with the message ready to send to ${esc(profile.email)}.`
          }</p>
        </form>
        <div class="card form-done" id="cf-done" role="status" aria-live="polite" tabindex="-1" hidden></div>
      </div>`;
  }

  /* ---------- footer ---------- */
  function footer(profile, meta) {
    const year = new Date().getFullYear();
    const social = [
      `<a href="mailto:${esc(profile.email)}" aria-label="Email">${icon("mail")}</a>`,
      profile.linkedin ? `<a href="${esc(profile.linkedin)}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a>` : "",
      profile.github ? `<a href="${esc(profile.github)}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon("github")}</a>` : "",
    ].join("");
    return `
      <a class="footer-brand" href="#home" aria-label="${esc(profile.name)}, back to top">
        <img class="logo-on-dark" src="assets/images/brand/logo-full-dark.png" alt="" width="352" height="260" loading="lazy" />
        <img class="logo-on-light" src="assets/images/brand/logo-full-light.png" alt="" width="352" height="260" loading="lazy" />
      </a>
      <div class="footer-meta">
        <p>© ${year} ${esc(profile.name)} · ${esc(profile.degree)}, ${esc(profile.school.replace(/^The /, ""))}</p>
        <p class="muted">Updated ${esc(meta.lastUpdated)} · <a href="#home">Back to top ↑</a></p>
      </div>
      <div class="footer-social">${social}</div>`;
  }

  window.Components = {
    esc, md, has, shortName, icon, button, resumeLink,
    hero, orbitPanel, projectsLayout, caseStudy, skillCard,
    experienceFilters, experienceCard, about, contact, footer,
  };
})();
