/* =============================================================================
   PORTFOLIO CONTENT: edit this file to update the website.
   -----------------------------------------------------------------------------
   Everything you see on the site (text, projects, skills, experience, links)
   lives here. You do not need to touch the HTML, CSS or other JavaScript.

   Quick rules
   • Text goes inside "double quotes". Wrap a phrase in **double asterisks** to
     make it bold, and in `backticks` to show it as code.
   • Lists live inside [ square brackets ], separated by commas.
   • Image paths are relative to index.html (e.g. "assets/images/...").
   • An empty value ("" or []) hides that item or section automatically.
   • Lines marked  // TODO  need information from you.
   • Writing style: keep it conversational and go easy on dashes.

   Keep this file consistent with your latest résumé
   (../private/Temiloluwa-Daniel-Jibowu-Resume.pdf, which is never published).
   See README.md → “Updating content” for step-by-step examples.
   ========================================================================== */

window.PORTFOLIO = {
  /* ---------------------------------------------------------------------------
     1. PROFILE: name, contact details and links used across the whole site
     ------------------------------------------------------------------------ */
  profile: {
    name: "Temiloluwa Daniel Jibowu",
    title: "Electrical Engineering Student",
    // Your main introduction: the first sentence is shown large, the second below it.
    headline: "Electrical Engineering student focused on embedded systems, hardware integration, and wireless communication.",
    intro: "Through hands-on experience with STM32 and ESP32 microcontrollers, PCB design, sensor integration, and autonomous drone development, I enjoy building practical solutions that connect hardware, software, and real-world applications.",
    focus: ["Embedded Systems", "Hardware Integration", "Wireless Communication", "Autonomous Systems"],
    seeking: "Hardware and embedded systems roles: embedded firmware, hardware integration, and test and validation.",
    school: "The University of Texas at Arlington",
    degree: "B.S. Electrical Engineering",
    graduation: "May 2027 (expected)",
    gpa: "3.959 / 4.00",
    location: "Arlington, Texas",
    email: "temiloluwadanieljibowu@gmail.com",
    linkedin: "https://www.linkedin.com/in/temiloluwajibowu/",
    github: "", // TODO: paste your GitHub URL, e.g. "https://github.com/your-handle"

    // The circle in the middle of the orbit. A square image works best (≈640×640 px).
    // photo shows on the dark theme; photoLight (optional) replaces it on the light theme.
    // To use your headshot again: photo: "assets/images/profile/temiloluwa-jibowu.webp"
    // and remove photoLight. Leave photo "" to show your initials instead.
    photo: "assets/images/profile/logo-avatar-dark.webp",
    photoLight: "assets/images/profile/logo-avatar-light.webp",
    photoAlt: "TJ logo of Temiloluwa Daniel Jibowu",

    // Résumé is sent on request only. It is NOT hosted on the site, so your phone
    // number never appears publicly. Every “Request résumé” button takes visitors
    // to the contact form with “Résumé request” filled in; you reply with the copy
    // kept in ../private/. (To offer a public download instead, put a PDF in
    // assets/docs/, set `file` to its path and `available: true`, after removing
    // your phone number from it.)
    resume: {
      file: "",
      available: false,
    },

  },

  /* ---------------------------------------------------------------------------
     ORBIT: the icons that circle your photo. Each one opens a small panel.
     • category: "tech" (engineering, gold) or "life" (outside the lab, blue)
     • icon: chip, computer, drone, book, dumbbell, basketball, soccer
     • angle: starting position in degrees (0 = right, 90 = bottom, 180 = left,
       270 = top). Seven icons spaced 51.4° apart keep the ring even, with the
       engineering icons on the left and the personal ones on the right.
     • Optional: facts [[label, value]], chips [...], status, projects [ids]
     ------------------------------------------------------------------------ */
  orbit: [
    {
      id: "embedded",
      category: "tech",
      icon: "chip",
      angle: 257.1,
      title: "Embedded Systems & Hardware Integration",
      short: "Embedded systems",
      text: "Embedded systems are at the center of my engineering interests. I've worked with STM32 and ESP32 microcontrollers to build wireless communication systems, integrate sensors, and interface electronic components. My experience includes SPI communication, custom PCB design, and hardware debugging. I'm especially interested in designing reliable systems where hardware, firmware, and communication technologies work together seamlessly.",
      chips: ["STM32", "ESP32-C6", "SPI · I²C · UART", "PCB design", "FHSS"],
      projects: ["agile-wireless-transceiver", "self-balancing-platform"],
    },
    {
      id: "computing",
      category: "tech",
      icon: "computer",
      angle: 205.7,
      title: "Computer Systems & Technology",
      short: "Computer systems",
      text: "I'm particularly interested in understanding how hardware and software work together to create dependable computing systems. My engineering projects have given me practical experience with microcontrollers, embedded programming, and hardware and software integration. I enjoy working with tools such as C, Python, MATLAB, STM32CubeIDE, and Linux, and I'm continuing to expand my knowledge of computer systems and architecture.",
      chips: ["C", "Python", "MATLAB", "STM32CubeIDE", "Linux", "Git"],
    },
    {
      id: "autonomous",
      category: "tech",
      icon: "drone",
      angle: 154.3,
      title: "Autonomous Systems & Research",
      short: "Autonomous systems",
      text: "My engineering interests extend into autonomous systems, intelligent sensing, and wireless communication. In summer research, I prototyped a three node ESP-NOW relay on ESP32-C6 boards as the first stage of a decentralized drone mesh network, and connected IMUs and ultrasonic sensors to give real time obstacle alerts. I'm also part of a senior design project sponsored by State Farm that is developing an autonomous aerial platform to collect roof imagery for AI based damage assessment. My responsibilities include camera integration and supporting autonomous flight development.",
      facts: [
        ["Drone mesh research", "Summer 2026 · completed"],
        ["State Farm capstone", "In progress · goals still in development"],
      ],
      projects: ["state-farm-ai-drone"],
    },
    {
      id: "education",
      category: "tech",
      icon: "book",
      angle: 102.9,
      title: "Education & Continuous Learning",
      short: "Education",
      text: "I'm pursuing a Bachelor of Science in Electrical Engineering at the University of Texas at Arlington, with an expected graduation date of May 2027. My academic interests center on embedded systems, digital system design, electronics, and computer engineering. Beyond the classroom, I enjoy applying theory through research and hands-on engineering projects. My involvement with IEEE-HKN (Eta Kappa Nu) has also strengthened my interest in leadership, collaboration, and professional development.",
      facts: [
        ["University", "UT Arlington"],
        ["Degree", "B.S. Electrical Engineering"],
        ["Graduation", "May 2027 (expected)"],
        ["GPA", "3.959 / 4.00"],
      ],
      chips: ["Circuit Analysis", "Digital System Design", "Embedded Systems", "Analog & Digital Signal Processing", "Electromagnetism Theory"],
      chipsLabel: "Relevant coursework",
    },
    {
      id: "fitness",
      category: "life",
      icon: "dumbbell",
      angle: 308.6,
      title: "Fitness & Wellness",
      short: "Fitness",
      text: "Fitness is an important part of my daily routine and personal development. I enjoy early morning workouts, usually starting around 6:00 a.m., with a particular preference for training my upper body while keeping my lower body routine balanced. I also like tracking my progress and aim for at least 10,000 steps every day. For me, staying active reinforces consistency, discipline, and long term personal growth.",
    },
    {
      id: "basketball",
      category: "life",
      icon: "basketball",
      angle: 0,
      title: "Basketball",
      short: "Basketball",
      text: "I've become increasingly interested in basketball and enjoy following both established stars and emerging talent. Some of my favorite players include Stephen Curry, Michael Jordan, Nikola Jokić, and Victor Wembanyama. I'm a San Antonio Spurs supporter, drawn to the franchise's history, legends like David Robinson, Tim Duncan, and Kawhi Leonard, and the exciting potential of Dylan Harper.",
    },
    {
      id: "football",
      category: "life",
      icon: "soccer",
      angle: 51.4,
      title: "Football (Soccer)",
      short: "Football",
      text: "I'm a passionate Real Madrid supporter and enjoy following European football. Jude Bellingham and Kylian Mbappé are among my favorite current players, while Cristiano Ronaldo remains my favorite of all time. I admire the dedication, skill, and competitive mentality it takes to perform consistently at the highest level.",
    },
  ],

  /* ---------------------------------------------------------------------------
     2. TOP OF THE PAGE: who you are, at a glance
     ------------------------------------------------------------------------ */
  hero: {
    eyebrow: "UT Arlington · Class of 2027",
    // Quick numbers recruiters can scan in seconds.
    metrics: [
      { value: "3.959", label: "GPA, Dean's List every semester since Fall 2024" },
      { value: "1 km", label: "real time range on our frequency hopping radio link" },
      { value: "+30%", label: "RF range after I added external antennas in research" },
      { value: "20%", label: "better heater accuracy on the team I managed" },
    ],
  },

  /* ---------------------------------------------------------------------------
     3. PROJECTS: the project marked `current: true` sits front and center.
     The rest line up side by side in date order using `sortDate` (YYYY-MM).
     Each case study follows: Problem → Engineering decisions → Implementation
     → Testing & validation → Results. Optional fields: stats, decisions,
     implementation, diagram, testing, issues, tables, next, links, video, gallery.
     `type`: "Capstone", "Course project", "Research" or "Personal project".
     Gallery `kind`: "diagram", "schematic", "hardware", "cad" or "test".
     Table `stage`: "decisions", "implementation", "testing" or "docs" (default).
     ------------------------------------------------------------------------ */
  projects: [
    /* ======================================================================= */
    {
      id: "state-farm-ai-drone",
      current: true,
      sortDate: "2026-08",
      emoji: "🚁",
      shortTitle: "State Farm AI Drone",
      title: "State Farm AI Drone: Autonomous Roof Inspection",
      type: "Capstone",
      tagline:
        "My senior capstone, sponsored by State Farm. We're building an ArduPilot drone that captures consistent, straight-on 4K roof photos so an AI model can spot roof damage more accurately.",
      context: "EE Senior Design · Sponsored by State Farm",
      timeline: "Aug 2026 to now",
      status: "In progress",
      team: "3 EE + 5 or more CS students",
      role: "Camera Integration Lead",
      cover: {
        src: "assets/images/projects/state-farm-ai-drone/current-build.webp",
        card: "assets/images/projects/state-farm-ai-drone/current-build-card.webp",
        alt: "Assembled X650 carbon fiber quadcopter on a lab table with a gimbal camera mounted underneath",
        position: "50% 45%",
      },
      tags: ["Pixhawk 6X", "ArduPilot", "SIYI A8 mini", "MK32", "MAVLink · UART"],
      stats: [
        { value: "4K · 8 MP", label: "stills from a 3 axis gimbal camera", highlight: true },
        { value: "85%+", label: "model accuracy target on a held out test set", highlight: true },
        { value: "3.6 mm/px", label: "ground sample distance at an 8 m standoff (calculated)" },
        { value: "~25 min", label: "estimated flight time on two 6S packs, 20% reserve" },
      ],
      contribution: {
        summary:
          "I lead **camera integration**, which covers installing the camera and gimbal and programming the gimbal, and I work on **autonomous flight development**. I work alongside our team lead, who owns the flight controller setup, and with the CS team toward the 85%+ accuracy target.",
        items: [
          "Integrated the SIYI A8 mini gimbal camera with the MK32 ground controller, so the operator can steer the gimbal remotely and watch real time video.",
          "Working to make image capture consistent across roof materials, lighting, angles and weather, which helps the model classify damage more reliably.",
          "Responsible for mounting the camera and gimbal on the X650 frame with a clear view and room to pitch, yaw and roll.",
          "Programming the gimbal with the team lead: setting up ArduPilot's SIYI driver so mission commands aim the camera and fire the shutter at each waypoint.",
          "Helping build a documented, repeatable evaluation framework so future teams can compare model versions fairly.",
        ],
        teamNote: "Our EE team has 3 students working with 5 or more CS students. A teammate owns performance testing, the camera mount design and CS team liaison.",
        planned: {
          title: "Next up: a verified image delivery pipeline",
          items: [
            "Add a Raspberry Pi as an onboard computer to send still images, while the MK32 keeps handling live video.",
            "Build a status light: solid green when images arrive and pass an integrity check, solid red if they fail, blinking while queued or uploading.",
            "Start with a private, self hosted test endpoint, then look at secure cloud upload options.",
          ],
        },
      },
      problem: [
        "In this cross disciplinary capstone, a CS team is building an AI model that classifies roof damage for insurance underwriting and claims. It struggles with hail, wind, wear and missing shingles when photos vary in angle, scale, lighting and weather. Commercial inspection drones are closed systems that don't feed a custom model easily, and manual roof inspections are slow, inconsistent and risky for the inspector.",
        "Our EE team is building an open, modular drone that flies the same mission on every roof and brings back high resolution photos on a microSD card. Together with the CS team we're aiming for 85%+ model accuracy on a held out test set.",
      ],
      objectives: [
        "Fly from a launch point to a target roof, take photos at planned spots, and fly back on its own",
        "Keep the camera square to each roof face at a fixed distance so every photo has the same scale",
        "Let a human take over at any moment",
        "Leave a modular platform that future teams can extend with onboard detection",
      ],
      decisions: [
        {
          title: "Airframe",
          chose: "Holybro X650 development kit",
          over: "sourcing parts separately",
          why: "It ships a matched Pixhawk 6X, GPS, telemetry radio, motors, ESCs and propellers, which removes most of the integration risk. Its 6.3 kg takeoff limit leaves plenty of room for the camera.",
          tradeoff: "The kit is the biggest share of the budget.",
        },
        {
          title: "Flight controller",
          chose: "Pixhawk 6X",
          over: "Pixhawk 6C",
          why: "Triple redundant IMUs and dual barometers help it hold position in wind, which the sponsor asked for.",
          tradeoff: "It costs more than the 6C.",
        },
        {
          title: "Autopilot firmware",
          chose: "ArduPilot Copter 4.7",
          over: "PX4 (as shipped)",
          why: "ArduPilot has a built in SIYI driver, so the autopilot can aim the gimbal and trigger the shutter directly without a companion computer.",
        },
        {
          title: "Flight mode",
          chose: "Autonomous waypoint missions",
          over: "manual flight",
          why: "It adds no hardware cost, and a planned mission repeats the same path, altitude and camera angle on every roof. That gives the CS team a much more consistent dataset.",
        },
        {
          title: "Image scale",
          chose: "Fly closer at a fixed distance",
          over: "zooming in",
          why: "The camera's 6× zoom is digital and turns off while recording 4K, so distance sets the image scale instead.",
        },
        {
          title: "Batteries",
          chose: "Two 6S 8000 mAh packs in parallel",
          over: "one pack",
          why: "It gives the longest estimated flight (about 25 vs 19 minutes with a 20% reserve) and keeps the drone around 4.2 kg, well under the 6.3 kg limit.",
          tradeoff: "The second pack adds only about 35% more flight time for 935 g of extra weight.",
        },
      ],
      implementation: [
        {
          title: "Camera and ground station",
          text: "The SIYI A8 mini connects to the MK32 air unit over Ethernet. The MK32 handheld gives the operator remote gimbal control and live video, and sends stick commands to the Pixhawk over S.Bus.",
        },
        {
          title: "Gimbal control through the autopilot",
          text: "A UART link and ArduPilot's SIYI driver let mission commands set gimbal pitch and yaw and fire the shutter at each waypoint (settings in the table below).",
        },
        {
          title: "Straight-on capture geometry",
          text: "For a roof face with slope θ, the gimbal tilts 90° − θ below the horizon. With an 81° horizontal field of view and 3840 pixel stills, GSD = 2d·tan(40.5°)/3840. That's about 2.2 mm per pixel at 5 m and 3.6 mm at 8 m, where a 25 mm hail mark covers roughly 7 pixels.",
        },
        {
          title: "Three separate links",
          text: "The MK32 link carries stick commands, MAVLink telemetry and live video. A 915 MHz SiK radio gives Mission Planner its own MAVLink link. The UART link carries gimbal and camera commands.",
        },
        {
          title: "Power system",
          text: "Two 6S packs in parallel (16,000 mAh at 22.2 V nominal) feed the power distribution board through a PM02D module, which also reports voltage and current to ArduPilot.",
        },
      ],
      diagram: {
        title: "System architecture",
        rows: [
          {
            label: "Pilot link",
            chain: ["MK32 handheld|ground station · live video", "radio", "MK32 air unit|on the airframe", "S.Bus · MAVLink", "Pixhawk 6X|ArduPilot Copter 4.7"],
          },
          {
            label: "Imaging",
            chain: ["Pixhawk 6X|mission waypoints", "UART · SIYI driver", "SIYI A8 mini|4K gimbal camera", "Ethernet", "MK32 air unit|video downlink"],
          },
          {
            label: "Mission and flight",
            chain: ["Mission Planner|laptop", "SiK 915 MHz · MAVLink", "Pixhawk 6X|GPS · IMUs · barometers", "ESC signals", "4× ESC + motors|Tekko32 45 A · MN4014"],
          },
        ],
      },
      testing: [
        {
          title: "Bench checks before mounting",
          text: "We bench tested the gimbal camera with the air unit before installing it, checked the 6S battery range against the gimbal's 11 to 25.2 V input, and confirmed every connection and a common ground before powering up.",
        },
        {
          title: "Safe build habits",
          text: "Propellers off and battery unplugged during wiring. Packs get inspected before use, charged only while someone's watching, and stored in a fire safe bag.",
        },
        {
          title: "Staged flight test plan",
          text: "Each subsystem gets verified before the next one is added, from bench calibration up to a full autonomous mission (plan below). Results will be added as each stage is completed.",
        },
      ],
      issues: [
        {
          issue: "Gimbal brownouts during hard maneuvers",
          fix: "Following the SIYI manual, the gimbal is powered through the air unit instead of the power distribution board, which keeps its supply steady.",
        },
      ],
      results: [
        "The frame is assembled, and the gimbal camera works with the MK32 ground controller: remote gimbal control and live video to the operator.",
        "System architecture, power and flight time estimates, and a five stage test plan are all defined.",
        "Hardware was bought within the EE team's budget of about $3,000.",
      ],
      next: [
        "Finish the camera mount and install the gimbal on the frame",
        "Configure the flight controller and work through the staged flight tests",
        "Fly autonomous waypoint missions and collect data with the CS team",
      ],
      tables: [
        {
          stage: "decisions",
          title: "Estimated flight time",
          columns: ["Configuration", "Takeoff weight", "Hover power", "Flight time (20% reserve)"],
          rows: [
            ["1 × 8000 mAh", "~3.2 kg", "~430 W", "~19 min"],
            ["2 × 8000 mAh", "~4.2 kg", "~640 W", "~25 min"],
          ],
          note: "Estimated by scaling the kit's hover rating with takeoff weight^1.5. These will be replaced with logged flight data.",
        },
        {
          stage: "implementation",
          title: "Gimbal tilt for straight-on capture",
          columns: ["Roof pitch", "Slope θ", "Gimbal tilt below horizon"],
          rows: [
            ["Flat", "0°", "90° (straight down)"],
            ["4/12", "18.4°", "71.6°"],
            ["6/12", "26.6°", "63.4°"],
            ["8/12", "33.7°", "56.3°"],
            ["12/12", "45.0°", "45.0°"],
          ],
        },
        {
          stage: "implementation",
          title: "ArduPilot gimbal settings",
          columns: ["Setting", "Value", "Purpose"],
          rows: [
            ["Serial port protocol", "8 (SIYI), 115200 baud", "UART link from Pixhawk to A8 mini"],
            ["MNT1_TYPE", "8", "SIYI gimbal driver"],
            ["CAM1_TYPE", "4", "Shutter triggered through the mount"],
          ],
        },
        {
          stage: "testing",
          title: "Staged test plan",
          columns: ["Stage", "Test", "Pass criteria"],
          rows: [
            ["1 · Bench (props off)", "Firmware flash; sensor, radio and ESC calibration; motor direction; failsafe triggers", "All prearm checks pass and motors spin the right way"],
            ["2 · Manual hover", "Stabilize and Loiter hover; AutoTune with the camera mounted", "Holds position steadily in light wind"],
            ["3 · Endurance", "Logged hover on two batteries", "Measured flight time compared with the estimate"],
            ["4 · Gimbal bench", "Pitch, yaw and shutter commands from the MK32 and Mission Planner", "Gimbal reaches the commanded angle and the photo saves to the SD card"],
            ["5 · Autonomous mission", "Waypoint mission over an open field, then a test roof", "Finishes the mission, captures every photo, returns to launch"],
          ],
        },
      ],
      stack: {
        Hardware: ["Holybro X650 kit (650 mm carbon frame)", "Pixhawk 6X (STM32H753)", "SIYI A8 mini gimbal camera", "SIYI MK32 handheld + air unit", "M10 GPS · SiK V3 radio", "2× 6S 8000 mAh LiPo · PM02D"],
        Software: ["ArduPilot Copter 4.7", "Mission Planner"],
        "Links and protocols": ["MAVLink", "S.Bus", "UART", "Ethernet (camera)", "915 MHz telemetry"],
        Planned: ["Raspberry Pi companion computer", "Self hosted upload endpoint"],
      },
      links: [],
      gallery: [
        { kind: "diagram", src: "assets/images/projects/state-farm-ai-drone/block-diagram.webp", alt: "Block diagram showing power and control links between flight controller, ESCs, GPS, camera and gimbal", caption: "Team block diagram: power in black, control and data in red" },
        { kind: "hardware", src: "assets/images/projects/state-farm-ai-drone/mk32-camera-feed.webp", alt: "SIYI MK32 handheld ground station showing a live camera feed beside the A8 mini gimbal camera", caption: "A8 mini camera streaming live to the MK32 ground controller" },
      ],
    },

    /* ======================================================================= */
    {
      id: "heater-control-system",
      sortDate: "2025-04",
      emoji: "🌡️",
      shortTitle: "Heater Control System",
      title: "FTDD Heater Control System",
      type: "Course project",
      tagline:
        "A portable 12 V heater controlled by an Arduino, with thermistor sensing and relay switching, designed to scale toward grid integration. I managed the team and we finished first.",
      context: "FTDD team design project",
      timeline: "Jan to Apr 2025",
      status: "Completed",
      team: "4 person team (Group 6)",
      role: "Project Manager",
      cover: {
        src: "assets/images/projects/heater-control-system/pcb-3d-render.webp",
        card: "assets/images/projects/heater-control-system/pcb-3d-render-card.webp",
        alt: "3D render of a green Arduino shield style PCB with header pins and a relay footprint",
        fit: "contain",
      },
      tags: ["Arduino Uno", "NTC thermistor", "Relay control", "ACS712 Hall sensor", "Autodesk Fusion"],
      stats: [
        { value: "20%", label: "better heater response accuracy, measured by temperature error (°C)", highlight: true },
        { value: "1st", label: "team to finish the project, on schedule", highlight: true },
        { value: "1 semester", label: "from block diagram to final build" },
      ],
      contribution: {
        summary:
          "I was the **Project Manager** for a team of four, and I designed the temperature sensing system and the enclosure.",
        items: [
          "Designed the NTC thermistor sensing system with Arduino controlled relay switching and tuned the control algorithm, improving heater response accuracy by 20% (measured by temperature error in °C).",
          "Designed the heater circuit's enclosure in Autodesk Fusion.",
          "Led the team to be the first to finish, on schedule within one semester. I built the Gantt chart and bill of materials to track progress, ran weekly meetings, and gave out tasks based on each person's strengths.",
        ],
      },
      problem: [
        "Design a portable heater that a microcontroller can control accurately, that reports how much current it draws, and that could scale up for integration with an electrical grid.",
      ],
      decisions: [
        {
          title: "Development approach",
          chose: "A staged build: simulation, breadboard, PCB, then enclosure",
          why: "Each stage got its own round of testing and troubleshooting before the next one started, tracked in a Gantt schedule and a BOM with order and delivery dates.",
        },
      ],
      implementation: [
        {
          title: "Sensing and switching",
          text: "An NTC thermistor reads temperature and an Arduino Uno switches the 12 V heating plate through a 5 V relay module. An ACS712 Hall effect sensor watches the current, and buck converters provide clean supply rails.",
        },
        {
          title: "Control algorithm",
          text: "I tuned the control algorithm using temperature error (°C) as the measure of how accurately the heater responds.",
        },
        {
          title: "Custom PCB and enclosure",
          text: "A shield style board laid out in Autodesk Fusion with labeled connections for the Hall sensor (IP+ and IP−), relay contacts (NO, NC, COM), heater supply and buck converter, all housed in an enclosure I designed in Fusion.",
        },
      ],
      diagram: {
        title: "Architecture (from the PCB labels and BOM)",
        rows: [
          {
            label: "Control",
            chain: ["NTC thermistor + ACS712|temperature · current", "analog in", "Arduino Uno|ATmega328P", "GPIO", "Relay module|NO / NC / COM", "switched 12 V", "Heating plate|12 V · 12 W"],
          },
        ],
      },
      testing: [
        {
          title: "Measuring accuracy",
          text: "We measured response accuracy as temperature error (°C). Tuning the control algorithm improved it by 20%.",
        },
        {
          title: "Troubleshooting at every stage",
          text: "The schedule built in test and troubleshooting rounds at the breadboard, PCB and full system stages.",
        },
      ],
      issues: [
        {
          issue: "Keeping four people on schedule",
          fix: "I tracked progress with a Gantt chart and a BOM with order and delivery dates, ran weekly meetings, and matched tasks to each person's strengths. We were the first team to finish, on schedule.",
        },
      ],
      results: [
        "A finished portable heater design that can scale toward grid integration.",
        "Heater response accuracy improved by 20%, measured by temperature error (°C).",
        "First team to complete the project, on schedule within one semester.",
      ],
      stack: {
        Hardware: ["Arduino Uno R3", "NTC thermistor", "5 V relay modules", "ACS712 Hall effect current sensor", "Buck converters", "12 V heating plate"],
        "Design tools": ["Autodesk Fusion (PCB + enclosure CAD)", "Breadboard prototyping"],
        "Project management": ["Gantt chart", "Bill of materials", "Weekly team meetings"],
      },
      links: [],
      gallery: [
        { kind: "schematic", src: "assets/images/projects/heater-control-system/pcb-layout.webp", alt: "Top view of the heater PCB with labeled Arduino headers, Hall sensor, relay and heater connections", caption: "PCB layout with labeled nets" },
      ],
    },

    /* ======================================================================= */
    {
      id: "agile-wireless-transceiver",
      sortDate: "2026-04",
      emoji: "📡",
      shortTitle: "Wireless Transceiver",
      title: "Agile Wireless Communication Transceiver",
      type: "Course project",
      tagline:
        "Two STM32 units with nRF24L01+ PA/LNA radios that send typed messages in real time across 1 km, hopping around the 2.4 GHz band to dodge interference.",
      context: "EE Junior Design · UT Arlington",
      timeline: "Jan to Apr 2026",
      status: "Completed",
      team: "4 engineers (team “Skyline Transit”)",
      role: "Systems Implementation, Project Lead & 3D Enclosure Designer",
      cover: {
        src: "assets/images/projects/agile-wireless-transceiver/final-units.webp",
        card: "assets/images/projects/agile-wireless-transceiver/final-units-card.webp",
        alt: "Red and yellow 3D printed transmitter and receiver enclosures, each with a lit 16×2 LCD showing a received message",
      },
      tags: ["STM32", "nRF24L01+ PA/LNA", "FHSS", "SPI · I²C · UART", "SolidWorks"],
      stats: [
        { value: "1 km", label: "real time data transfer and display range", highlight: true },
        { value: "100 ms", label: "hop window timed by a hardware timer", highlight: true },
        { value: "125", label: "channels scanned at boot (clear channel assessment)" },
        { value: "4×", label: "repeat transmissions per hop for robustness" },
      ],
      contribution: {
        summary:
          "My job was **systems implementation**: taking the radio design over the finish line into complete, working transmitter and receiver units. I was also the **Project Lead** and designed the 3D printed enclosure.",
        items: [
          "Led our team of four, keeping the technical design and system implementation subgroups in sync from parts selection in January to the final demo in April.",
          "Systems implementation: brought the STM32 Nucleo-F446RE boards, nRF24L01+ PA/LNA radios, power regulation and LCDs together into complete units that sent and displayed data in real time across 1 km.",
          "Developed the frequency hopping (FHSS) algorithm with my teammates and picked its hopping channels, which made the link more robust against interference.",
          "Designed the transceiver enclosure in SolidWorks and chose PLA because it causes little interference, which matters for anything with a radio inside.",
        ],
        teamNote:
          "The FHSS algorithm and radio firmware were team efforts, and all four of us took part in design, final production and the demo.",
      },
      problem: [
        "Deepfakes and spoofed messages make it harder to trust what shows up on shared networks and platforms. Our team set out to build a low cost link that sends text straight from one device to another, with no service in the middle, and that's harder to jam or intercept than a radio stuck on one frequency.",
      ],
      objectives: [
        "Type a message on a laptop and see it on a remote 16×2 LCD",
        "Spread the signal across the 2.4 GHz ISM band with frequency hopping spread spectrum (FHSS)",
        "Keep two separate microcontrollers hopping in lockstep",
        "Package both units as powered, self contained devices for under $167",
      ],
      decisions: [
        {
          title: "Microcontroller",
          chose: "STM32 Nucleo-F446RE",
          over: "Arduino Uno, ESP32",
          why: "High performance, room to expand and lots of communication peripherals. The Uno is slow with little memory, and the ESP32 draws more power and has fewer GPIOs.",
          tradeoff: "It costs more and takes longer to learn.",
        },
        {
          title: "Radio module",
          chose: "nRF24L01+ PA/LNA",
          over: "HC-12, ESP32, LoRa",
          why: "Direct SPI register access with no protocol overhead and fast data rates. We cared most about speed, hardware control and clear channel assessment.",
          tradeoff: "The 2.4 GHz band is crowded.",
        },
        {
          title: "Hopping scheme",
          chose: "Slow frequency hopping",
          over: "fast, adaptive and cognitive hopping",
          why: "The easiest to build and debug in one semester, and still fast enough to deliver text reliably.",
          tradeoff: "Less jam resistance than fast hopping, which we noted as future work.",
        },
        {
          title: "Hop timing",
          chose: "Hardware timer interrupts (TIM2)",
          over: "blocking delays in the main loop",
          why: "A hardware timer keeps both boards in step no matter how busy the CPU is. Blocking delays stall the CPU and drift over time.",
          tradeoff: "Interrupts need care, so a hop flag prevents race conditions.",
        },
        {
          title: "Data integrity",
          chose: "Sequence numbers in firmware + 4 sends per hop",
          over: "the radio's hardware auto acknowledge",
          why: "Auto acknowledge doesn't work for one way broadcast hopping, so each packet carries a sequence number and timestamp and gets repeated within the hop window.",
          tradeoff: "The header takes 8 of the 32 bytes (so messages max out at 24 characters), and repeats raise peak current.",
        },
        {
          title: "Enclosure material",
          chose: "PLA",
          why: "It's a low loss material that causes little interference, which is important for a radio sealed inside a box.",
          tradeoff: "Thicker walls made it sturdier but could weaken the signal, so we added an SMA antenna and extra antenna ports.",
        },
      ],
      implementation: [
        {
          title: "Clear channel scan and handshake",
          text: "At boot the transmitter listens across the band with the radio's received power detector (−64 dBm threshold), drops the noisy channels, builds a hopping table, and sends it to the receiver on a fixed meeting channel.",
        },
        {
          title: "Hopping on a hardware timer",
          text: "A TIM2 interrupt fires every 100 ms on both boards. Both counters reset at the handshake, which lines up two independent clocks without any more timing messages.",
        },
        {
          title: "Typing without breaking timing",
          text: "Keystrokes from the laptop terminal are caught by a UART receive interrupt and committed when you press Enter, so typing never throws off the hop timing.",
        },
        {
          title: "Packet format and repeats",
          text: "Each 32 byte packet holds a sequence counter, a timestamp and 24 bytes of text. The transmitter sends it 4 times per hop, and the receiver drops duplicates, measures packet loss and shows the text on the LCD.",
        },
        {
          title: "Power and hardware build",
          text: "A 24 V DC adapter feeds a buck converter that steps down to 12 V, with capacitors to filter surges and noise. We laid out a custom PCB in Autodesk Fusion. The final units were built on perma-proto boards inside PLA enclosures I designed in SolidWorks, with SMA antennas.",
        },
      ],
      diagram: {
        title: "System architecture",
        rows: [
          {
            label: "Transmitter",
            chain: [
              "Laptop · SmarTTY|types a message up to 24 characters",
              "UART",
              "STM32 F446RE|channel scan · packets · TIM2 hops",
              "SPI",
              "nRF24L01+ PA/LNA|sends 4× per hop",
            ],
            bridge: "2.4 GHz ISM · slow FHSS · 100 ms hops",
          },
          {
            label: "Receiver",
            chain: [
              "nRF24L01+ PA/LNA|listens on the current hop",
              "SPI",
              "STM32 F446RE|synced timer · drops duplicates",
              "I²C",
              "16×2 LCD|message · channel · status",
            ],
          },
        ],
      },
      testing: [
        {
          title: "RF check",
          text: "Captured the transmitted signal on a lab spectrum analyzer to confirm the spikes in the 2.4 GHz band.",
        },
        {
          title: "Power stage check",
          text: "Checked the buck converter output with an oscilloscope and multimeter to make sure the microcontroller and radio got a clean, quiet supply.",
        },
        {
          title: "Sync test",
          text: "Set both STM32 timers to the same frequency, then powered the boards up at different times on purpose to make sure they found each other again. After too many missed hops, the receiver goes back to the meeting channel.",
        },
      ],
      issues: [
        {
          issue: "We lost a microcontroller during PCB rework",
          fix: "The Nucleo's mixed length male and female headers didn't seat on our PCB, which caused power and data faults. Desoldering high melting point solder overheated the board and killed the STM32. We replaced it and built the final units on perma-proto boards, and noted that a PCB with shorter traces is still the quieter option.",
        },
        {
          issue: "A crowded 2.4 GHz band",
          fix: "The boot scan removes noisy channels. If fewer than 10 clean ones are left, the system falls back to channels above 2.483 GHz, past Wi-Fi channel 13. Sending each packet 4 times gives it four chances per hop.",
        },
        {
          issue: "Enclosure walls weakening the signal",
          fix: "We added an SMA antenna and extra holes for antenna orientation, and used PLA because it interferes so little.",
        },
        {
          issue: "No time for a spectrum display on the transmitter",
          fix: "The receiver LCD shows the message, the current channel and the channel status instead.",
        },
      ],
      results: [
        "Working transmitter and receiver units in 3D printed enclosures sent and displayed data in real time across 1 km using slow FHSS.",
        "Transmissions were verified on a lab spectrum analyzer, and the power stage was checked with an oscilloscope and multimeter.",
        "Parts came to $97.83 against a $167 budget, and the team was on or slightly ahead of schedule at the interim review.",
      ],
      next: ["Two way messaging between units", "Longer range", "Faster or adaptive hopping for better jam resistance"],
      tables: [
        {
          title: "Microcontroller pin assignments",
          columns: ["Interface", "STM32 pins", "Connected to"],
          rows: [
            ["USART", "PA9, PA10", "Laptop terminal (SmarTTY)"],
            ["SPI", "PC0, PC1, PC3, PB10, PC5", "nRF24L01+ PA/LNA radio (SPI clock up to 8 Mbps)"],
            ["I²C", "PB8, PB9", "16×2 LCD through a PCF8574 I²C expander"],
          ],
          note: "As documented in the final report.",
        },
        {
          title: "32 byte packet format",
          columns: ["Bytes", "Field", "Purpose"],
          rows: [
            ["0 to 3", "Sequence counter (32 bit)", "Spotting duplicates and calculating packet loss"],
            ["4 to 7", "Timestamp (ms since boot)", "Timing diagnostics"],
            ["8 to 31", "Message text (24 characters)", "Shown on the receiver LCD"],
          ],
        },
        {
          title: "Firmware parameters",
          columns: ["Parameter", "Value"],
          rows: [
            ["Hop period (TIM2 interrupt)", "100 ms"],
            ["Receiver listen window per hop", "80 ms (20 ms safety margin)"],
            ["Clear channel threshold (radio RPD)", "−64 dBm"],
            ["Meeting (rendezvous) channel", "CH 90"],
            ["Sends per hop", "4"],
            ["Minimum clean channels before fallback", "10"],
            ["Resync timeout", "50 missed hops"],
          ],
          note: "From the firmware headers and documentation.",
        },
      ],
      stack: {
        Hardware: ["STM32 Nucleo-F446RE (Arm Cortex-M4)", "nRF24L01+ PA/LNA + SMA antenna", "I²C 16×2 LCD", "DROK buck converter", "24 V DC supply"],
        "Firmware and software": ["C · STM32 HAL", "STM32CubeIDE / .ioc pin mapping", "Custom nRF24L01+ driver", "SmarTTY serial terminal"],
        Protocols: ["SPI", "I²C", "UART", "2.4 GHz FHSS", "Clear channel assessment"],
        "Design and test": ["SolidWorks (enclosure)", "Autodesk Fusion (PCB)", "Spectrum analyzer", "Oscilloscope", "Multimeter", "Keysight programmable supply"],
      },
      links: [
        { label: "Final report (PDF)", href: "assets/docs/reports/agile-wireless-transceiver-final-report.pdf", type: "pdf" },
        // { label: "Firmware on GitHub", href: "https://github.com/your-handle/agile-wireless-transceiver", type: "repo" },
      ],
      gallery: [
        { kind: "schematic", src: "assets/images/projects/agile-wireless-transceiver/connection-diagram.webp", alt: "Wiring diagram between the STM32 Nucleo and the nRF24L01+ module", caption: "STM32 to nRF24L01+ connection diagram" },
        { kind: "schematic", src: "assets/images/projects/agile-wireless-transceiver/stm32-pin-mapping.webp", alt: "STM32CubeIDE pinout showing SPI, I2C and USART pin assignments", caption: "Pin mapping in STM32CubeIDE" },
        { kind: "schematic", src: "assets/images/projects/agile-wireless-transceiver/pcb-layout.webp", alt: "PCB layout with Nucleo headers and power traces", caption: "PCB layout (Autodesk Fusion)" },
        { kind: "hardware", src: "assets/images/projects/agile-wireless-transceiver/breadboard-prototype.webp", alt: "Two STM32 Nucleo boards, radios and LCDs wired on breadboards", caption: "Breadboard prototype of both units" },
        { kind: "hardware", src: "assets/images/projects/agile-wireless-transceiver/pcb-assembled.webp", alt: "Fabricated PCB with buck converter and header pins installed", caption: "Fabricated PCB, component side" },
        { kind: "hardware", src: "assets/images/projects/agile-wireless-transceiver/pcb-copper.webp", alt: "Copper side of the fabricated PCB showing traces", caption: "Fabricated PCB, copper side" },
        { kind: "hardware", src: "assets/images/projects/agile-wireless-transceiver/receiver-enclosure.webp", alt: "Red receiver enclosure with LCD and antenna on a lab bench", caption: "Receiver unit running off a wall adapter" },
        { kind: "cad", src: "assets/images/projects/agile-wireless-transceiver/enclosure-cad.webp", alt: "SolidWorks model of the enclosure with LCD window and antenna holes", caption: "Enclosure design in SolidWorks" },
        { kind: "test", src: "assets/images/projects/agile-wireless-transceiver/spectrum-analyzer.webp", alt: "Keysight spectrum analyzer showing a spike in the 2.4 GHz band", caption: "Transmission captured on a spectrum analyzer" },
      ],
    },

    /* ======================================================================= */
    {
      id: "self-balancing-platform",
      sortDate: "2026-05",
      emoji: "⚖️",
      shortTitle: "Self-Balancing Platform",
      title: "Self-Balancing Platform",
      type: "Course project",
      tagline:
        "An STM32 reads tilt from an MPU-9250 IMU and drives a NEMA 17 stepper through a 100 Hz control loop to push the platform back toward level.",
      context: "EE 3314 · Fundamentals of Embedded Control Systems",
      timeline: "Spring 2026",
      status: "Completed",
      team: "3 engineers",
      role: "3D Designer & Firmware Contributor",
      cover: {
        src: "assets/images/projects/self-balancing-platform/platform-on-bench.webp",
        card: "assets/images/projects/self-balancing-platform/platform-on-bench-card.webp",
        alt: "Three level 3D printed self balancing platform wired to an STM32 Nucleo, next to a laptop and bench power supply",
      },
      tags: ["STM32", "C · HAL", "MPU-9250 IMU", "PID control", "Stepper / A4988", "SolidWorks"],
      stats: [
        { value: "100 Hz", label: "control loop rate", highlight: true },
        { value: "98 / 2", label: "gyro vs accelerometer weighting in the filter (%)", highlight: true },
        { value: "1.8°", label: "per motor step (200 steps per revolution)" },
        { value: "15", label: "readings averaged at boot to find level" },
      ],
      contribution: {
        summary:
          "I owned the **3D design** of the platform and **helped write the firmware** on our team of three.",
        items: [
          "Designed the three level structure and the balancing plate in SolidWorks 2024: controller mount at the bottom, driver and motor in the middle, and the IMU on the plate. It was 3D printed in UT Arlington's Nedderman Hall makerspace.",
          "Helped write the STM32 firmware in C with my teammates.",
          "Co-wrote the IEEE format final report covering the design, the firmware architecture and the results.",
        ],
        teamNote: "Wiring, testing and tuning were shared across our team of three.",
      },
      problem: [
        "Build a platform that notices when it's tilted and turns a motor to bring itself back to level, using the sensing, timer, PWM and closed loop control ideas from the course on a real electromechanical system.",
      ],
      objectives: [
        "Read acceleration and angular rate from an IMU over I²C",
        "Combine the readings into a steady tilt estimate",
        "Drive a stepper motor in the right direction and at the right speed to cancel the tilt",
        "House the electronics in a custom 3D printed structure",
      ],
      decisions: [
        {
          title: "Microcontroller",
          chose: "STM32F446RE",
          why: "Configurable timers and GPIO, enough to generate step pulses, run I²C and stream telemetry at the same time.",
        },
        {
          title: "Actuator",
          chose: "NEMA 17 bipolar stepper (12 V, 2 A)",
          why: "1.8° per step, so 200 steps per revolution, which is plenty of resolution for leveling a platform.",
        },
        {
          title: "Motor driver",
          chose: "A4988",
          why: "Its built in translator handles the coil sequencing, so the firmware only has to set STEP and DIR.",
        },
        {
          title: "Tilt estimate",
          chose: "Complementary filter (98% gyro, 2% accelerometer)",
          over: "accelerometer or gyro alone",
          why: "The accelerometer gets noisy from motor vibration and the gyro drifts. Leaning on the gyro keeps it responsive, and a little accelerometer corrects the drift.",
        },
        {
          title: "Speed control",
          chose: "Changing step frequency through TIM2's auto reload register",
          why: "Faster step pulses as the tilt error grows, with a software cap so the motor never gets asked for more than it can do.",
        },
      ],
      implementation: [
        {
          title: "Calibration at startup",
          text: "Sets up I²C (400 kHz), TIM2 and USART2, then averages 15 pitch readings over 150 ms to find the true resting angle and uses that as the target, which cancels out any mounting offset.",
        },
        {
          title: "Sensor fusion",
          text: "Every loop reads the MPU-9250 and updates `pitch = 0.98·(pitch + gyro·dt) + 0.02·accel_angle`.",
        },
        {
          title: "PID control and drive",
          text: "A discrete PID (Kp = 25, Ki = 50, Kd = 50) works on the tilt error at 100 Hz. The sign of the output sets the DIR pin and its size sets the step frequency, with an anti stall limit.",
        },
        {
          title: "Telemetry",
          text: "Filtered pitch and PID output stream over USART2 to a serial terminal for tuning and checking.",
        },
        {
          title: "Mechanical build",
          text: "A three level structure designed in SolidWorks 2024: controller at the bottom, driver and motor in the middle, IMU on the balancing plate. It was printed in UT Arlington's Nedderman Hall makerspace, and a capacitor across the driver supply smooths out voltage spikes.",
        },
      ],
      diagram: {
        title: "Control loop",
        rows: [
          {
            label: "Sense and act",
            chain: ["MPU-9250 IMU|accel + gyro", "I²C · 400 kHz", "STM32 F446RE|filter + PID @ 100 Hz", "STEP / DIR", "A4988 driver|built in translator", "coil current", "NEMA 17 stepper|1.8° per step"],
          },
          {
            label: "Telemetry",
            chain: ["STM32 F446RE|pitch · PID output", "USART2", "Serial terminal|tuning and checking"],
          },
        ],
      },
      testing: [
        {
          title: "Reading the sensor",
          text: "Moved the IMU along its labeled axes and confirmed the readings over I²C on a USART terminal.",
        },
        {
          title: "Direction control",
          text: "Toggled the DIR pin high and low to make sure the motor switches direction on command.",
        },
        {
          title: "Closed loop tilt test",
          text: "Put the IMU on the platform and twisted the mount to check that the motor pushes back against the tilt.",
        },
      ],
      issues: [
        {
          issue: "The motor kept reversing on its own",
          fix: "The A4988's current limit was set too low. Adjusting the driver's trim potentiometer fixed it.",
        },
        {
          issue: "Noisy, drifting sensor data",
          fix: "The complementary filter leans on the gyro for quick response and uses a small share of the accelerometer to correct drift.",
        },
        {
          issue: "The stepper stalled at high speeds",
          fix: "An anti stall limit caps the step frequency at what the motor can physically keep up with.",
        },
      ],
      results: [
        "IMU readings were confirmed over I²C and streamed to a serial terminal.",
        "The platform sensed tilt and drove the motor the right way to counter it.",
        "The motion was jittery, so it didn't settle perfectly level. More loop tuning is the clear next step.",
      ],
      tables: [
        {
          title: "Wiring and interface map",
          columns: ["Signal", "From", "To", "Notes"],
          rows: [
            ["STEP", "STM32 PA0 (TIM2 output)", "A4988 STEP", "Pulse rate sets motor speed"],
            ["DIR", "STM32 PA10", "A4988 DIR", "High is clockwise, low is counterclockwise"],
            ["I²C SCL / SDA", "STM32 D15 / D14", "MPU-9250 SCL / SDA", "400 kHz"],
            ["Logic power", "STM32 5 V / 3.3 V", "A4988 VDD / MPU-9250 VCC", "Common ground"],
            ["Motor power", "External supply", "A4988 VMOT", "Capacitor across the supply"],
            ["ENABLE", "GND", "A4988 ENABLE", "Active low, so the driver is always on"],
            ["SLEEP / RESET", "Tied together", "A4988", "Keeps the driver awake"],
            ["Motor coils", "NEMA 17 A+ / A− / B+ / B−", "A4988 1A / 1B / 2A / 2B", ""],
          ],
          note: "From the connection table in the final report.",
        },
        {
          title: "Control parameters",
          columns: ["Parameter", "Value"],
          rows: [
            ["Loop rate", "100 Hz"],
            ["PID gains", "Kp = 25 · Ki = 50 · Kd = 50"],
            ["Complementary filter", "0.98 gyro / 0.02 accelerometer"],
            ["Startup calibration", "15 samples over 150 ms"],
            ["Anti stall limit", "Minimum TIM2 auto reload value of 800"],
          ],
        },
      ],
      stack: {
        Hardware: ["STM32 Nucleo-F446RE", "MPU-9250 9 axis IMU", "A4988 stepper driver", "NEMA 17 bipolar stepper", "Bench DC supply"],
        "Firmware and software": ["C · STM32 HAL", "STM32CubeIDE", "Serial terminal"],
        "Control and signals": ["Complementary filter", "Discrete PID", "Timer based step generation (TIM2 ARR)"],
        "Design and fabrication": ["SolidWorks 2024", "3D printing", "Breadboard prototyping"],
      },
      links: [{ label: "Demo video", href: "assets/video/self-balancing-platform-demo.mp4", type: "video" }],
      video: {
        src: "assets/video/self-balancing-platform-demo.mp4",
        poster: "", // optional still image shown before playback
        width: 540,  // video's pixel size, so the player keeps the right shape
        height: 960,
        caption: "Demo: the platform reacting to tilt (13 s, no audio)",
      },
      gallery: [
        { kind: "cad", src: "assets/images/projects/self-balancing-platform/platform-cad.webp", alt: "SolidWorks model of a three level platform with a handle and balancing plate", caption: "My three level design in SolidWorks 2024" },
        { kind: "hardware", src: "assets/images/projects/self-balancing-platform/breadboard-wiring.webp", alt: "STM32 Nucleo, IMU and stepper driver wired on a breadboard", caption: "Breadboard wiring of the STM32, IMU and A4988" },
        { kind: "test", src: "assets/images/projects/self-balancing-platform/serial-telemetry.webp", alt: "Serial terminal output listing gyro, accelerometer, error and step values", caption: "Live telemetry used for tuning" },
      ],
    },
  ],

  /* ---------------------------------------------------------------------------
     4. EXPERIENCE: newest first. `type` is one of "Capstone", "Research",
     "Employment" or "Personal project". The filter buttons come from these.
     ------------------------------------------------------------------------ */
  experience: [
    // To add a job, internship or research position, copy a block like this:
    // {
    //   type: "Employment",
    //   role: "Engineering Intern",
    //   org: "Company Name",
    //   location: "City, TX",
    //   dates: "May to Aug 2027",
    //   points: ["What you built or improved", "Tools you used", "Result"],
    //   tags: ["Tool", "Skill"],
    // },
    {
      type: "Capstone",
      role: "Camera Integration Lead",
      org: "Senior design capstone sponsored by State Farm · UT Arlington",
      location: "Arlington, TX",
      dates: "Aug 2026 to now",
      points: [
        "Integrated the gimbal camera with an MK32 ground controller for remote gimbal control and real time video to the operator.",
        "Lead camera integration and autonomous flight development, working with the CS team toward 85%+ model accuracy on a held out test set.",
        "Making image capture consistent across roof materials and weather, and helping build an evaluation framework for future teams.",
      ],
      tags: ["SIYI A8 mini", "MK32", "ArduPilot", "Pixhawk 6X"],
      project: "state-farm-ai-drone",
    },
    {
      type: "Research",
      role: "Undergraduate Researcher, Drone Wireless Mesh Network",
      org: "Summer Research Program · The University of Texas at Arlington",
      location: "Arlington, TX",
      dates: "Jun to Aug 2026",
      points: [
        "Prototyped a three node, multi-hop ESP-NOW relay on ESP32-C6 boards that forwards real time telemetry to a central gateway over MAC addressed peer links. It's the first stage of a decentralized drone mesh network, and I was the only student researcher, advised by a professor.",
        "Connected 6 axis IMUs over I²C and ultrasonic sensors to give real time obstacle alerts for human assisted flight.",
        "Extended omnidirectional RF range by 30% by adding U.FL external antennas, measured against the same setup without them.",
      ],
      tags: ["ESP32-C6", "ESP-NOW", "I²C", "6 axis IMU", "Ultrasonic sensors", "U.FL antennas"],
    },
    {
      type: "Employment",
      role: "Resident Assistant",
      org: "The University of Texas at Arlington",
      location: "Arlington, TX",
      dates: "Jan 2025 to now",
      points: [
        "Keep a community of 32 residents safe and ready for emergencies as their main point of contact for crisis response.",
        "Raised community engagement by 40%, measured by event attendance and in person meetings each semester, by tracking attendance, incident reports and resident surveys systematically.",
      ],
      tags: ["Crisis response", "Data tracking", "Community leadership"],
    },
  ],

  /* ---------------------------------------------------------------------------
     5. SKILLS: four categories, each split into small groups.
     ------------------------------------------------------------------------ */
  skills: [
    {
      category: "Embedded Systems",
      icon: "chip",
      groups: [
        { label: "Microcontrollers", items: ["STM32 Nucleo-F446RE", "ESP32-C6", "Arduino Uno", "Pixhawk 6X · ArduPilot"] },
        { label: "Firmware", items: ["Interrupts and ISRs", "Hardware timers and PWM", "STM32 HAL", "PID control", "Sensor fusion"] },
        { label: "Interfaces", items: ["UART", "SPI", "I²C", "MAVLink", "S.Bus"] },
        { label: "Wireless", items: ["ESP-NOW relay", "Frequency hopping (FHSS)", "PA+LNA RF modules", "U.FL / SMA antennas"] },
      ],
    },
    {
      category: "Hardware Design",
      icon: "board",
      groups: [
        { label: "Design", items: ["PCB design (Fusion, Altium)", "Schematic reading", "Datasheet analysis", "FPGA (Quartus Prime)"] },
        { label: "Integration", items: ["IMU, ultrasonic, NTC, Hall sensors", "Power regulation", "Stepper drivers and relays", "Gimbal camera payloads", "LiPo power budgeting"] },
        { label: "Fabrication", items: ["Soldering", "Perma-proto builds", "3D printed enclosures"] },
      ],
    },
    {
      category: "Programming",
      icon: "code",
      groups: [
        { label: "Languages", items: ["C (embedded)", "Python", "MATLAB", "SQL"] },
        { label: "Workflow", items: ["Git and GitHub", "Linux", "VS Code", "STM32CubeIDE"] },
      ],
    },
    {
      category: "Engineering Tools",
      icon: "scope",
      groups: [
        { label: "CAD and EDA", items: ["SolidWorks", "Autodesk Fusion", "Altium Designer", "Quartus Prime", "Mission Planner", "Microsoft Office"] },
        { label: "Lab instruments", items: ["Oscilloscope", "Function generator", "Multimeter", "Spectrum analyzer", "Programmable DC supply"] },
      ],
    },
  ],
  skillsNote: "Also: team leadership, project management with Gantt charts and BOMs, and IEEE format technical writing.",

  /* ---------------------------------------------------------------------------
     6. ABOUT: a short, human introduction plus education and credentials
     ------------------------------------------------------------------------ */
  about: {
    paragraphs: [
      "I'm a senior Electrical Engineering student and Honors College member at UT Arlington. My favorite moment in any project is when a microcontroller, a radio, a sensor and a motor finally start working together as one system.",
      "That curiosity took me from a frequency hopping radio link on STM32, to a summer research project relaying drone telemetry over ESP-NOW, to my capstone, where I lead camera integration on a drone sponsored by State Farm. I've learned as much from what broke (including a microcontroller I fried during PCB rework) as from what worked.",
      "Outside the lab I'm a Resident Assistant for 32 residents and the recording secretary for UTA's IEEE-HKN chapter. Off the clock you'll usually find me at the gym, watching the Spurs or Real Madrid, or studying with friends.",
    ],
    coursework: [
      "Circuit Analysis",
      "Digital System Design",
      "Embedded Systems",
      "Analog & Digital Signal Processing",
      "Electromagnetism Theory",
    ],
  },

  research: {
    intro: "Questions I keep coming back to:",
    interests: [
      { title: "Embedded systems", text: "Predictable timing on microcontrollers with interrupts and lean drivers.", project: "agile-wireless-transceiver" },
      { title: "Wireless communication", text: "Links that stay reliable in crowded spectrum and between moving nodes.", project: "agile-wireless-transceiver" },
      { title: "Autonomous systems", text: "Sensors and payloads on drones, and autonomy as a way to collect consistent data.", project: "state-farm-ai-drone" },
      { title: "Control and sensing", text: "Turning noisy sensor data into steady feedback control.", project: "self-balancing-platform" },
    ],
  },

  honors: [
    { title: "Dean's List", org: "UT Arlington", date: "Fall 2024 to now" },
    { title: "President's List", org: "UT Arlington", date: "2026" },
    { title: "Honors College", org: "UT Arlington", date: "Since Fall 2024" },
    { title: "Maverick Scholarship", org: "UT Arlington", date: "Since Fall 2023" },
  ],

  leadership: [
    {
      title: "Recording Secretary",
      org: "IEEE-HKN · UTA Chapter",
      dates: "May 2026 to now",
      kind: "Leadership",
      text: "Help organize 3 or more campus events each semester as a main contact for industry professionals (usually around 20 attendees, up to 150), and keep the 8 member board's records with two page summaries of our biweekly two hour meetings.",
    },
    {
      title: "Technical team leadership",
      org: "Design teams · UT Arlington",
      dates: "2025 to now",
      kind: "Leadership",
      roles: [
        { label: "Camera Integration Lead", detail: "State Farm sponsored capstone · 3 EE + 5 or more CS", project: "state-farm-ai-drone" },
        { label: "Project Lead", detail: "Wireless transceiver · team of 4", project: "agile-wireless-transceiver" },
        { label: "Project Manager", detail: "Heater control · first team to finish, on schedule", project: "heater-control-system" },
      ],
    },
    {
      title: "Memberships",
      org: "Professional societies",
      dates: "Current",
      kind: "Organizations",
      text: "National Society of Black Engineers (NSBE) and the IEEE Geoscience and Remote Sensing Society (GRSS).",
    },
    {
      title: "Professional development",
      org: "LinkedIn Learning",
      dates: "2026",
      kind: "Development",
      text: "Courses on communication, conflict resolution and building work relationships (1.5 PMI PDUs), plus technical training in Git and SQL.",
    },
  ],

  // `file` = local PDF copy; `verify` = public verification link (optional).
  // To get a verify link, open the completed course in LinkedIn Learning,
  // choose the certificate's Share option and copy the link it gives you.
  certifications: [
    { title: "Git Essential Training", issuer: "LinkedIn Learning", date: "Aug 2026", duration: "1 h 42 min", group: "Technical", file: "assets/certificates/git-essential-training.pdf", verify: "" },
    { title: "Practical Database Design: Implementing Responsible Data Solutions with SQL Querying", issuer: "LinkedIn Learning", date: "Aug 2026", duration: "2 h 17 min", group: "Technical", file: "assets/certificates/practical-database-design-sql.pdf", verify: "" },
    { title: "SQL Essential Training", issuer: "LinkedIn Learning", date: "May 2026", duration: "4 h 36 min", group: "Technical", file: "assets/certificates/sql-essential-training.pdf", verify: "" },
    { title: "Skills to Build Stronger Work Relationships", issuer: "LinkedIn Learning", date: "Sep 2026", duration: "0.5 PMI PDU", group: "Professional", file: "assets/certificates/stronger-work-relationships.pdf", verify: "" },
    { title: "Conflict Resolution Foundations", issuer: "LinkedIn Learning", date: "Sep 2026", duration: "50 min", group: "Professional", file: "assets/certificates/conflict-resolution-foundations.pdf", verify: "" },
    { title: "Communicating with Confidence", issuer: "LinkedIn Learning", date: "Sep 2026", duration: "1.0 PMI PDU", group: "Professional", file: "assets/certificates/communicating-with-confidence.pdf", verify: "" },
  ],

  /* ---------------------------------------------------------------------------
     7. CONTACT
     ------------------------------------------------------------------------ */
  contact: {
    heading: "Let's talk engineering",
    text: "I'm always happy to talk about roles, research or any of these projects. My résumé is available on request, so send a message and I'll email you a copy.",

    // How the contact form (including “Request résumé”) reaches your inbox.
    // • "formsubmit": free, no account. The FIRST message sends you an
    //   “Activate Form” email from FormSubmit; click it once and every message
    //   after that is delivered to profile.email. FormSubmit then also emails you
    //   a random ID; paste it into formsubmitId to keep your address out of the code.
    // • "web3forms": free, get an access key at web3forms.com and paste it below.
    // • "mailto": no service; opens the visitor's own email app instead.
    form: {
      provider: "formsubmit",
      formsubmitId: "",
      web3formsKey: "",
    },
  },

  /* ---------------------------------------------------------------------------
     Site meta
     ------------------------------------------------------------------------ */
  meta: {
    lastUpdated: "November 2026",
  },
};
