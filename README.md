# Data Science Roadmap LMS

Static personal LMS for tracking a one-year data science, analytics engineering, data engineering, ML engineering, and MLOps roadmap.

## What It Does

- Tracks phase outcomes, resources, and deliverables in `localStorage`
- Keeps roadmap materials in one searchable resource library
- Adds per-phase notes and custom saved links
- Exports/imports progress as JSON
- Runs as a static site, so it can be hosted on GitHub Pages without a local dev server

## Roadmap Positioning

The roadmap is built around this sequence:

1. Technical workflow setup
2. Python and CS foundation
3. SQL for analytics
4. Statistics and analytical reasoning
5. Applied data science with Python
6. Visualization and business communication
7. Data engineering foundation
8. Machine learning engineering
9. MLOps and production thinking
10. Optional deep learning, NLP, and modern AI
11. Portfolio polish and career packaging

The app treats People Analytics as the anchor project, then adds a non-HR transferability project so the portfolio does not become too narrow.

## Accuracy Notes

Resource availability and cohort timing can change. The roadmap includes notes verified against official sources on 2026-06-16 for the major time-sensitive items:

- HarvardX data science audit access may have free-audit limitations.
- DataTalks.Club courses are usable self-paced, while live cohorts and certificates depend on current course timing.
- MLOps Zoomcamp does not plan a live cohort in 2026 according to its official repository.
- ML Zoomcamp lists a September 2026 live cohort and self-paced access anytime.
- Spotify Web API restrictions make audio-feature projects risky unless access is confirmed.
- BigQuery has a free monthly query-processing tier, but query size still needs monitoring.

## Local Use

Open `index.html` directly in a browser, or serve the folder with any static file server.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

This project is static. To host it:

1. Push the repository to GitHub.
2. Enable GitHub Pages from the repository settings.
3. Use the main branch and root folder as the Pages source.

