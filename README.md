# Sprint Resource Planner

A single-file web app for planning team capacity during **Scrum Sprint Planning 1**.  
No backend, no build step — open `index.html` directly or deploy via GitHub Pages.

🚀 **[Live Demo](https://messiahfst.github.io/SprintRessources/)** &nbsp;|&nbsp; 📦 **[Download latest release](https://github.com/messiahfst/SprintRessources/releases/latest)**

---

## Download & Run

**Quickest way — download the single file:**

1. Go to **[Releases](https://github.com/messiahfst/SprintRessources/releases/latest)**
2. Download `index.html` from the release assets
3. Open it in any modern browser — done

No installation, no npm, no server required.

**Or clone the repo:**
```bash
git clone https://github.com/messiahfst/SprintRessources.git
# then open index.html in your browser
```

---

## Features

### Sprint Settings
- Sprint name, duration in weeks, working days per week (auto-calculates sprint days)
- Hours per working day
- **Focus Factor** — global or individual per person
- **User Story Budget %** — split total capacity into *planned user-story tickets* vs. *fastlane / spontaneous buffer*
- Manual public holidays (days deducted proportionally per person)

### Team Members
- Add any number of team members
- Per person: **Employment %** (contract level, e.g. 80% = 4 days/week), **Project Allocation %**, **Absence days**, **Focus %** (individual mode)
- **Disciplines** per person (e.g. Backend, Frontend, QA, DevOps …) with percentage split — capacity is broken down by discipline automatically

### Results
- Summary cards: Sprint Days · Total Capacity · User Story Budget · Buffer
- Detailed table per person:
  - Available days · Capacity (d/h) · **Story capacity (d/h)** without buffer
- Team discipline breakdown (capacity by discipline, after scope deduction)
- Visual **Budget Split bar** (User Stories vs. Fastlane/Buffer)
- Click any result cell to copy its value

### Export
- **Copy as Markdown** — full table + budget split + discipline breakdown
- **Copy as Plain Text** — aligned plain-text table for tickets / wikis

### UX
- 🌐 Language switcher — **English** and **Deutsch**
- 🌙 Dark mode toggle
- Full **localStorage** persistence (all settings survive page reload)

---

## Capacity Formula

```
Available (d) = (SprintDays − Holidays − Absence) × Employment% × Allocation%
Capacity  (d) = Available × Focus%
Story     (d) = Capacity × UserStoryBudget%
Buffer    (d) = Capacity × (1 − UserStoryBudget%)
```

Discipline capacity is distributed proportionally from each person's story capacity.

---

## Usage

### Option A — GitHub Pages
1. Fork or clone this repository
2. Go to **Settings → Pages** → Source: `main` branch, root `/`
3. Your planner is live at `https://<your-username>.github.io/<repo-name>/`

### Option B — Local
Simply open `index.html` in any modern browser. No server needed.

---

## Tech Stack

| | |
|---|---|
| UI | HTML + CSS custom properties (light/dark themes) |
| Styles | [Tailwind CSS CDN](https://tailwindcss.com) (utility classes only) |
| Logic | Vanilla JavaScript (no framework) |
| Persistence | `localStorage` |
| Dependencies | None — single self-contained file |

---

## Project Structure

```
index.html   ← the entire application (HTML + CSS + JS)
README.md
```

---

## Changelog

### [v1.0.0](https://github.com/messiahfst/SprintRessources/releases/tag/v1.0.0) — 2026-03-25

Initial public release.

**Sprint Settings**
- Sprint name, weeks × days/week auto-calculation
- Hours per day, Focus Factor (global or individual per person)
- User Story Budget % — splits capacity into planned scope vs. fastlane/buffer
- Manual public holidays with proportional deduction

**Team**
- Employment % and Project Allocation % per person
- Absence days, individual focus factor
- Disciplines per person (e.g. Backend 60% / Frontend 40%) with %-split

**Results**
- Summary cards: Sprint Days, Total Capacity, User Story Budget, Buffer
- Per-person table: Available(d), Cap(d/h), Story Cap(d/h) without buffer
- Discipline capacity breakdown (after scope deduction)
- Visual budget split bar (User Stories vs. Fastlane/Buffer)
- Click-to-copy on any result cell

**Export**
- Copy as Markdown (table + budget split + discipline breakdown)
- Copy as Plain Text

**UX**
- Dark mode toggle
- DE / EN language switcher (flag icon dropdown)
- Full localStorage persistence

---

## Contributing

Pull requests welcome. Please keep the single-file architecture — no build tools, no npm, no bundler.

---

## License

MIT © [studer.rocks](https://studer.rocks)


### Sprint Settings
- Sprint name, duration in weeks, working days per week (auto-calculates sprint days)
- Hours per working day
- **Focus Factor** — global or individual per person
- **User Story Budget %** — split total capacity into *planned user-story tickets* vs. *fastlane / spontaneous buffer*
- Manual public holidays (days deducted proportionally per person)

### Team Members
- Add any number of team members
- Per person: **Employment %** (contract level, e.g. 80% = 4 days/week), **Project Allocation %**, **Absence days**, **Focus %** (individual mode)
- **Disciplines** per person (e.g. Backend, Frontend, QA, DevOps …) with percentage split — capacity is broken down by discipline automatically

### Results
- Summary cards: Sprint Days · Total Capacity · User Story Budget · Buffer
- Detailed table per person:
  - Available days · Capacity (d/h) · **Story capacity (d/h)** without buffer
- Team discipline breakdown (capacity by discipline, after scope deduction)
- Visual **Budget Split bar** (User Stories vs. Fastlane/Buffer)
- Click any result cell to copy its value

### Export
- **Copy as Markdown** — full table + budget split + discipline breakdown
- **Copy as Plain Text** — aligned plain-text table for tickets / wikis

### UX
- 🌐 Language switcher — **English** and **Deutsch**
- 🌙 Dark mode toggle
- Full **localStorage** persistence (all settings survive page reload)

---

## Capacity Formula

```
Available (d) = (SprintDays − Holidays − Absence) × Employment% × Allocation%
Capacity  (d) = Available × Focus%
Story     (d) = Capacity × UserStoryBudget%
Buffer    (d) = Capacity × (1 − UserStoryBudget%)
```

Discipline capacity is distributed proportionally from each person's story capacity.

---

## Usage

### Option A — GitHub Pages
1. Fork or clone this repository
2. Go to **Settings → Pages** → Source: `main` branch, root `/`
3. Your planner is live at `https://<your-username>.github.io/<repo-name>/`

### Option B — Local
Simply open `index.html` in any modern browser. No server needed.

---

## Tech Stack

| | |
|---|---|
| UI | HTML + CSS custom properties (light/dark themes) |
| Styles | [Tailwind CSS CDN](https://tailwindcss.com) (utility classes only) |
| Logic | Vanilla JavaScript (no framework) |
| Persistence | `localStorage` |
| Dependencies | None — single self-contained file |

---

## Project Structure

```
index.html   ← the entire application (HTML + CSS + JS)
README.md
```

---

## Contributing

Pull requests welcome. Please keep the single-file architecture — no build tools, no npm, no bundler.

---

## License

MIT © [studer.rocks](https://studer.rocks)
