# Sprint Resource Planner

Single-file web app for planning team capacity during **Scrum Sprint Planning 1**.

📦 **[Download latest release](https://github.com/messiahfst/SprintRessources/releases/latest)** &nbsp;|&nbsp; 🚀 **[Open on GitHub Pages](https://messiahfst.github.io/SprintRessources/)**

![Sprint Resource Planner](Sprint-Resource-Planner.png)

---

## Get Started

1. Download `index.html` from the **[latest release](https://github.com/messiahfst/SprintRessources/releases/latest)**
2. Open it in any modern browser — done

No installation, no npm, no server required.

---

## Features

- **Sprint settings** — name, weeks × days/week, hours/day, focus factor (global or per person)
- **User Story Budget %** — splits capacity into planned scope vs. fastlane/buffer
- **Public holidays** — manual entry, deducted proportionally per person
- **Team members** — Employment %, Allocation %, Absence days, individual Focus %
- **Disciplines** per person (e.g. Backend 60% / QA 40%) — capacity breakdown by discipline in results
- **Results table** — Available(d), Cap(d/h), Story Cap(d/h) without buffer, per person
- **Visual budget split bar** — User Stories vs. Fastlane/Buffer
- **Export** — Copy as Markdown or Plain Text
- **DE / EN** language switcher · **Dark mode** · **localStorage** persistence

---

## Capacity Formula

```
Available (d) = (SprintDays − Holidays − Absence) × Employment% × Allocation%
Capacity  (d) = Available × Focus%
Story     (d) = Capacity × UserStoryBudget%
Buffer    (d) = Capacity × (1 − UserStoryBudget%)
```

---

## GitHub Pages (self-hosting)

1. Fork this repo
2. **Settings → Pages** → Source: `main` branch, root `/`
3. Live at `https://<your-username>.github.io/SprintRessources/`

---

## Changelog

### [v1.0.0](https://github.com/messiahfst/SprintRessources/releases/tag/v1.0.0) — 2026-03-25
Initial public release — all features listed above.

---

## License

MIT © [studer.rocks](https://studer.rocks)
