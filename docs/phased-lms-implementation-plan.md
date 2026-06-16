# Roadmap Course Console Implementation Plan

This project has been reset from a phase tracker into a roadmap-driven course console. The app should behave like a personal LMS with a role-topic map, module queue, course workspace, project studio, resource timing, review gates, and localStorage progress.

The app must not copy full external course or textbook content. Each lesson should be original course material written for this learning path, with links to official/free external resources where they support a specific learning moment.

## Product Standard

The active app architecture is no longer the old tabbed phase tracker. Every module must connect role-roadmap topics to learn/practice/build/review steps, project evidence, required files, source timing, and a move-on gate.

Each module build must include:

- Roadmap map: source roadmap topics that justify the module.
- Course console: original lesson steps with resource links at the point of use.
- Project studio: project spec, required files, acceptance criteria, review procedure, and handoff.
- Resource timing: only the resources needed for the active module plus full source library.
- Review gates: lesson completion, project completion, topic coverage, and move-on criteria.
- Evidence notes: saved locally per module.

## Implementation Progress

- Current app: Roadmap Course Console v1.
- Old section spine: retired as the active visible architecture.
- Active module sequence: rebuilt from the four roadmap.sh source maps listed below.
- Next improvement target: deepen individual module lessons one module at a time without changing the new architecture back into the old tracker.

## Planning References

roadmap.sh should be used as a planning and role-calibration layer, not as the primary lesson source. The in-app LMS remains the source of instructions, lesson sequence, project specs, and gates.

Use these roadmap.sh paths as recurring alignment checks:

- AI and Data Scientist Roadmap: https://roadmap.sh/ai-data-scientist
- Data Analyst Roadmap: https://roadmap.sh/data-analyst
- Data Engineer Roadmap: https://roadmap.sh/data-engineer
- MLOps Roadmap: https://roadmap.sh/mlops

Implementation rule:

- At the start of each module, compare the module scope against the relevant roadmap.sh role map.
- Add only the topics that support the intended project outcome.
- Do not chase every visible roadmap.sh branch at once.
- Use official docs, textbooks, or full course materials for actual lesson support whenever possible.
- Record the roadmap.sh comparison in the Roadmap Map, Resource Timing, or Review Gates views.

## Active Module Spine

The course is now organized as an integrated role path:

1. Workspace, Git, Shell, and Reproducibility.
2. Data Literacy, Analytics Process, and Spreadsheet Baseline.
3. SQL, Relational Thinking, and Metric Definitions.
4. Python Programming for Data Work.
5. Pandas, Wrangling, and Exploratory Data Analysis.
6. Statistics, Experimentation, and Model Reasoning.
7. Visualization, BI, and Stakeholder Communication.
8. Applied Machine Learning Foundations.
9. Data Engineering Lifecycle, Warehouses, and Transformation.
10. Pipelines, Cloud, Containers, and Orchestration.
11. ML Engineering and MLOps Lifecycle.
12. Portfolio, Transfer Projects, and Interview Evidence.

## Course Content Model

Each implemented module should use this model:

- `id`: stable module id.
- `code`: visible module number.
- `title`: learner-facing module title.
- `lane`: role or competency lane.
- `rolePaths`: Data Analyst, AI/Data Scientist, Data Engineer, and/or MLOps alignment.
- `sourceTopics`: roadmap.sh topics that justify the module.
- `purpose`: concrete capability gained.
- `whyNow`: why the module is placed at this point in the course.
- `outcomes`: visible learner outcomes.
- `lessons`: original in-app lessons.
- `project`: module project spec.
- `handoff`: how the module connects to the next module.

Each lesson should include:

- type: Learn, Practice, Build, or Review.
- exact external references to use at that point.
- work steps that produce repo evidence.
- completion checks.
- direct handoff into the next lesson or project gate.

## Superseded Section Order

The notes below describe the previous section plan and are retained only as historical context. They are not the active app architecture.

### Former Section 0: Technical Workflow Setup

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

### Former Section 1: Python Foundations

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

### Former Section 2: SQL For Analytics

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

### Former Section 3: Statistics And Analytical Reasoning

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

### Former Section 4: Applied Data Science Project 1A

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

### Former Section 5: Visualization And Communication

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

### Former Section 6: Data Engineering Foundation

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

### Former Section 7: ML Engineering

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

### Former Section 8: MLOps And Responsible ML

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

### Former Section 9: Transferability Project

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

### Former Section 10: Portfolio Packaging

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

- Work one module at a time.
- Do not proceed to the next module until the Roadmap Map, Course Console, Project Studio, Resource Timing, and Review Gates views are coherent for the current module.
- Use official/free sources whenever possible.
- Prefer durable source references over blog posts.
- Keep the app static and GitHub Pages compatible unless explicitly changed.
- Keep localStorage progress and migration stable.
- Verify browser behavior locally and on GitHub Pages before declaring a module complete.
