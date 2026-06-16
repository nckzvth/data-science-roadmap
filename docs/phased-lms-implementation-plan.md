# Phased LMS Implementation Plan

This project is moving from a roadmap tracker into a course workspace. The app should eventually contain original instructional lessons directly in the LMS, with external references used as support, source verification, and optional deepening.

The app must not copy full external course or textbook content. Each lesson should be original course material written for this learning path, with links to official/free external resources where they support a specific learning moment.

## Product Standard

Every section must be rebuilt as a complete course slice before moving to the next section. A section is not complete if only the Course tab has been updated.

Each section rebuild must update:

- Course: lesson readings, examples, exercises, checks, labs, assignment gate, evidence tracking.
- Roadmap: section outcome, prerequisites, handoff into and out of the section, competency gates.
- Resources: section-filtered source guide with exact use instructions and skip guidance.
- Projects: project brief, repo/file structure, required artifacts, acceptance criteria, rubric.
- Planner: week or day sequence, workload split, checkpoint gates, move-on criteria.
- Accuracy Notes: source audit, verification date, access/cost/staleness warnings, assumptions.

## Planning References

roadmap.sh should be used as a planning and role-calibration layer, not as the primary lesson source. The in-app LMS remains the source of instructions, lesson sequence, project specs, and gates.

Use these roadmap.sh paths as recurring alignment checks:

- AI and Data Scientist Roadmap: https://roadmap.sh/ai-data-scientist
- Data Analyst Roadmap: https://roadmap.sh/data-analyst
- Data Engineer Roadmap: https://roadmap.sh/data-engineer
- MLOps Roadmap: https://roadmap.sh/mlops

Implementation rule:

- At the start of each section, compare the section scope against the relevant roadmap.sh role map.
- Add only the topics that support the intended project outcome.
- Do not chase every visible roadmap.sh branch at once.
- Use official docs, textbooks, or full course materials for actual lesson support whenever possible.
- Record the roadmap.sh comparison in the section Accuracy Notes or Resources tab.

## Course Content Model

Each implemented section should use this model:

- `id`: stable section id.
- `unitId`: matching course unit.
- `phaseId`: matching roadmap phase.
- `title`: learner-facing section title.
- `status`: implementation status.
- `outcome`: concrete capability gained.
- `gate`: final evidence required before moving on.
- `sourceAudit`: verified references with verification dates and role in the section.
- `lessons`: original in-app lessons.
- `project`: section project spec.
- `planner`: scheduled implementation/study plan.
- `roadmap`: prerequisites, unlocks, competency checks.
- `accuracy`: section-specific source and risk notes.

Each lesson should include:

- learning objective
- original explanation
- key terms
- worked example
- common mistakes
- exact external references to use at that point
- practice task
- self-check questions
- lab output
- done criteria

## Section Order

### Section 0: Technical Workflow Setup

Goal: build the learning workspace and standards every future section depends on.

Tabs to rebuild:

- Course: GitHub workflow, terminal workflow, project/repo standards.
- Roadmap: setup as the entry gate into the rest of the course.
- Resources: GitHub Skills, MIT Missing Semester, Cookiecutter Data Science, plus source notes.
- Projects: learning trail repository, README template, environment checklist, terminal/Git notes.
- Planner: 5 focused setup days plus review gate.
- Accuracy: GitHub Skills, Missing Semester 2026, Cookiecutter Data Science v2 notes.

Definition of done:

- The user can create and explain a repo, branch, commit, pull request, merge, terminal navigation, project folders, and reproducibility notes.
- Required files exist in the project spec.
- The section gate prevents moving on until repo structure and documentation standards exist.

### Section 1: Python Foundations

Goal: write useful Python scripts for data tasks.

Tabs to rebuild:

- Course: Python syntax, functions, data structures, files, CSV handling, debugging.
- Roadmap: Python as the first programming pillar.
- Resources: MIT 6.100L, Kaggle Python, Python docs as reference.
- Projects: command-line CSV cleaning script.
- Planner: weekly Python practice and script build.
- Accuracy: course availability, Python version assumptions, package guidance.

Definition of done:

- `clean_csv.py` runs from the terminal and writes cleaned data plus summary output.

### Section 2: SQL For Analytics

Goal: build analytics SQL skill around grain, joins, dates, windows, cohorts, and metrics.

Tabs to rebuild:

- Course: relational concepts, CTEs, joins, windows, date logic, metric definitions.
- Roadmap: SQL under applied data science and analytics engineering.
- Resources: CS50 SQL, Kaggle SQL, PostgreSQL docs.
- Projects: metric query pack.
- Planner: SQL practice cadence and output gates.
- Accuracy: dialect assumptions and cloud/free-tier cautions.

Definition of done:

- SQL query pack contains auditable questions, grains, assumptions, and sample outputs.

### Section 3: Statistics And Analytical Reasoning

Goal: explain what data can and cannot prove.

Tabs to rebuild:

- Course: descriptive statistics, sampling, uncertainty, tests, regression, evaluation.
- Roadmap: statistical reasoning as the guardrail for applied modeling.
- Resources: OpenIntro, ISLP, StatQuest, linear algebra support.
- Projects: limitations-first analysis notebook.
- Planner: study, practice, and notebook schedule.
- Accuracy: source edition notes and scope boundaries.

Definition of done:

- A notebook separates evidence, assumptions, uncertainty, limitations, and conclusion.

### Section 4: Applied Data Science Project 1A

Goal: build the first serious analysis project.

Tabs to rebuild:

- Course: data audit, Pandas workflow, EDA, baseline modeling, evaluation, responsible framing.
- Roadmap: first applied project.
- Resources: HarvardX, Kaggle Learn, Google MLCC, ISLP.
- Projects: People Analytics EDA, baseline model, limitations.
- Planner: project milestones.
- Accuracy: dataset and employment-model risk notes.

Definition of done:

- Project 1A has data dictionary, cleaning, EDA, model evaluation, limitations, and ethical use statement.

### Section 5: Visualization And Communication

Goal: turn analysis into a stakeholder-facing product.

Tabs to rebuild:

- Course: dashboard structure, chart choice, stakeholder questions, caveats, navigation.
- Roadmap: analysis to communication.
- Resources: Streamlit docs, visualization guidance.
- Projects: dashboard for Project 1A.
- Planner: dashboard build and review.
- Accuracy: tool/deployment assumptions.

Definition of done:

- Dashboard communicates insight, caveat, and responsible action without hiding limitations.

### Section 6: Data Engineering Foundation

Goal: turn analysis into a reproducible pipeline.

Tabs to rebuild:

- Course: raw/staging/marts, DuckDB/local warehouse, ingestion, validation, quality checks.
- Roadmap: analytics engineering and data engineering pillar.
- Resources: DataTalks DE Zoomcamp, DuckDB, dbt.
- Projects: workforce analytics pipeline.
- Planner: pipeline milestones.
- Accuracy: free/cloud cost and cohort timing notes.

Definition of done:

- One documented workflow rebuilds raw, staging, marts, checks, and dashboard-ready outputs.

### Section 7: ML Engineering

Goal: move from notebook model to reusable model code and a service.

Tabs to rebuild:

- Course: train/predict scripts, artifacts, API basics, FastAPI, Docker.
- Roadmap: model packaging.
- Resources: ML Zoomcamp, Google MLCC, FastAPI/Docker docs where needed.
- Projects: responsible model service.
- Planner: script, service, and docs milestones.
- Accuracy: deployment claims and local demo boundaries.

Definition of done:

- Training and prediction run without a notebook, and the API returns documented responses.

### Section 8: MLOps And Responsible ML

Goal: document model lifecycle thinking and responsible operation boundaries.

Tabs to rebuild:

- Course: experiment logs, model cards, monitoring, retraining, risk assessment.
- Roadmap: production-thinking layer.
- Resources: MLOps Zoomcamp, Made With ML, NIST AI RMF.
- Projects: MLOps documentation layer.
- Planner: lifecycle documentation schedule.
- Accuracy: cohort timing and standards notes.

Definition of done:

- Monitoring, risk, retraining, and intended/prohibited use are explicit.

### Section 9: Transferability Project

Goal: prove skills transfer outside People Analytics.

Tabs to rebuild:

- Course: domain selection, public data evaluation, project brief, analysis plan.
- Roadmap: transferability beyond the flagship project.
- Resources: NYC TLC data and optional advanced resources only if needed.
- Projects: non-HR project, likely NYC Taxi demand/operations by default.
- Planner: project milestones.
- Accuracy: dataset access and API fragility warnings.

Definition of done:

- Second serious project uses clean public data and demonstrates a different domain/data shape.

### Section 10: Portfolio Packaging

Goal: make the work inspectable and career-facing.

Tabs to rebuild:

- Course: portfolio README, project summaries, resume bullets, screenshots, review checklist.
- Roadmap: final packaging.
- Resources: structure and demo polish references.
- Projects: portfolio index and project cleanup.
- Planner: final polish schedule.
- Accuracy: claims, overstatement, and credential language.

Definition of done:

- A reviewer can find, run, and understand the two strongest projects without hunting.

## Implementation Rules

- Work one section at a time.
- Do not proceed to the next section until every tab has been rebuilt for the current section.
- Use official/free sources whenever possible.
- Prefer durable source references over blog posts.
- Keep the app static and GitHub Pages compatible unless explicitly changed.
- Keep localStorage progress and migration stable.
- Verify browser behavior locally and on GitHub Pages before declaring a section complete.
