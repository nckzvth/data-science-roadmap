const STORAGE_KEY = "dsRoadmapLmsProgress.v1";

const roadmap = [
  {
    id: "phase-0",
    number: "0",
    title: "Technical Workflow Setup",
    timeline: "1-2 weeks",
    monthBand: "Months 1-2",
    goal: "Learn the tooling that makes your work reproducible, shareable, and credible.",
    icon: "terminal",
    caution:
      "Do not turn setup into a months-long detour. Get enough command line, Git, environments, and project structure to work cleanly, then move into Python and SQL.",
    outcomes: [
      ["p0-o1", "Use Git and GitHub for commits, branches, pull requests, and project history."],
      ["p0-o2", "Navigate the command line, edit files, and run scripts without depending on notebooks only."],
      ["p0-o3", "Create clean project folders with READMEs, Markdown notes, and reproducible environment notes."],
    ],
    deliverables: [
      [
        "p0-d1",
        "Learning trail repository",
        "Create a repo with phase folders from setup through portfolio projects. This becomes your public learning archive.",
      ],
      [
        "p0-d2",
        "Environment checklist",
        "Document your Python version, editor, shell, package manager, and how to reproduce each project.",
      ],
    ],
    resources: [
      {
        id: "r-github-skills",
        name: "GitHub Skills: Introduction to GitHub",
        url: "https://github.com/skills/introduction-to-github",
        type: "Course",
        priority: "Core",
        phase: "phase-0",
        tags: ["git", "workflow"],
        why: "Fast practical intro to repositories, commits, branches, and pull requests.",
        note: "Official GitHub exercise. Verified 2026-06-16.",
      },
      {
        id: "r-missing-semester",
        name: "MIT Missing Semester",
        url: "https://missing.csail.mit.edu/",
        type: "Course",
        priority: "Core",
        phase: "phase-0",
        tags: ["shell", "git", "tools"],
        why: "Best free foundation for shell tools, editors, Git, debugging, and developer workflow.",
        note: "Use the current course site and prioritize shell, Git, debugging, and data wrangling lectures.",
      },
      {
        id: "r-cookiecutter",
        name: "Cookiecutter Data Science",
        url: "https://cookiecutter-data-science.drivendata.org/",
        type: "Reference",
        priority: "Core",
        phase: "phase-0",
        tags: ["project-structure", "reproducibility"],
        why: "A logical, flexible, and reasonably standardized structure for data science projects.",
        note: "Use as a reference, not as a course to complete.",
      },
    ],
  },
  {
    id: "phase-1",
    number: "1",
    title: "Python and CS Foundation",
    timeline: "4-6 weeks",
    monthBand: "Months 1-2",
    goal: "Become comfortable using Python to solve problems, automate work, and prepare data.",
    icon: "braces",
    caution:
      "Go light on competitive programming, deep recursion, and advanced object-oriented programming. You need problem-solving fluency, not a LeetCode identity.",
    outcomes: [
      ["p1-o1", "Write Python functions, loops, conditionals, and data structure transformations without copying blindly."],
      ["p1-o2", "Read and write local CSV files, handle missing values, and debug small scripts."],
      ["p1-o3", "Break a data cleaning task into small, testable steps."],
    ],
    deliverables: [
      [
        "p1-d1",
        "CSV cleaning script",
        "Build a script that reads a CSV, cleans column names, handles missing values, calculates summary statistics, and outputs a cleaned CSV.",
      ],
    ],
    resources: [
      {
        id: "r-mit-6100l",
        name: "MIT 6.100L Introduction to CS and Programming Using Python",
        url: "https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/",
        type: "Course",
        priority: "Core",
        phase: "phase-1",
        tags: ["python", "cs"],
        why: "MIT OCW course for learning Python through computational problem solving.",
        note: "Official page says it uses Python 3 and is aimed at students with little to no programming experience.",
      },
      {
        id: "r-kaggle-python",
        name: "Kaggle Learn: Python",
        url: "https://www.kaggle.com/learn/python",
        type: "Practice",
        priority: "Support",
        phase: "phase-1",
        tags: ["python", "practice"],
        why: "Short syntax refresher and hands-on notebook practice for data science Python.",
        note: "Use it as reinforcement, not as the whole foundation.",
      },
    ],
  },
  {
    id: "phase-2",
    number: "2",
    title: "SQL for Analytics",
    timeline: "4-6 weeks, overlapping Python",
    monthBand: "Months 1-2",
    goal: "Analyze real business data with SQL before pulling everything into Excel or Pandas.",
    icon: "database",
    caution:
      "Learn database modeling and constraints, but keep the center of gravity on analytics SQL: joins, CTEs, dates, windows, cohorts, and business metrics.",
    outcomes: [
      ["p2-o1", "Write joins, CTEs, CASE statements, date logic, aggregates, and window functions."],
      ["p2-o2", "Explain primary keys, foreign keys, normalization, and why table design affects analysis."],
      ["p2-o3", "Produce reusable SQL analysis files for product, revenue, retention, and workforce examples."],
    ],
    deliverables: [
      [
        "p2-d1",
        "SQL analysis pack",
        "Write queries for MAU, cohort retention, revenue by segment, attrition by tenure band, rolling trends, event gaps, and rank changes.",
      ],
    ],
    resources: [
      {
        id: "r-cs50-sql",
        name: "Harvard CS50's Introduction to Databases with SQL",
        url: "https://cs50.harvard.edu/sql",
        type: "Course",
        priority: "Core",
        phase: "phase-2",
        tags: ["sql", "databases"],
        why: "Teaches CRUD, relational modeling, normalization, constraints, joins, and keys.",
        note: "Official CS50 site and Harvard Online page are both valid entry points.",
      },
      {
        id: "r-kaggle-sql",
        name: "Kaggle Learn: Intro to SQL + Advanced SQL",
        url: "https://www.kaggle.com/learn/intro-to-sql",
        type: "Practice",
        priority: "Core",
        phase: "phase-2",
        tags: ["sql", "bigquery", "practice"],
        why: "Short practical labs that reinforce query mechanics in BigQuery.",
        note: "Add Advanced SQL after the intro course for joins, unions, analytic functions, and nested data.",
      },
      {
        id: "r-postgres-windows",
        name: "PostgreSQL Window Functions",
        url: "https://www.postgresql.org/docs/current/tutorial-window.html",
        type: "Reference",
        priority: "Core",
        phase: "phase-2",
        tags: ["sql", "windows"],
        why: "Window functions are essential for cohorts, running totals, retention, tenure bands, and rankings.",
        note: "Use the current PostgreSQL docs as your durable reference.",
      },
    ],
  },
  {
    id: "phase-3",
    number: "3",
    title: "Statistics and Analytical Reasoning",
    timeline: "6-8 weeks",
    monthBand: "Months 3-4",
    goal: "Build the judgment to interpret data responsibly and explain uncertainty.",
    icon: "sigma",
    caution:
      "Do not race to modeling before you can explain what the data can and cannot prove. This phase protects you from shallow analysis.",
    outcomes: [
      ["p3-o1", "Use descriptive statistics, probability, sampling, intervals, and hypothesis tests appropriately."],
      ["p3-o2", "Explain correlation vs causation, model assumptions, overfitting, bias, variance, and cross-validation."],
      ["p3-o3", "Connect regression and classification outputs to practical limitations."],
    ],
    deliverables: [
      [
        "p3-d1",
        "What this data can and cannot prove",
        "Write a short analysis notebook with summary stats, visualizations, one statistical test, one regression model, and a limitations section.",
      ],
    ],
    resources: [
      {
        id: "r-openintro",
        name: "OpenIntro Statistics",
        url: "https://www.openintro.org/book/os/",
        type: "Textbook",
        priority: "Core",
        phase: "phase-3",
        tags: ["statistics", "probability"],
        why: "Free college-level statistics foundation that works well for self-study.",
        note: "Official OpenIntro page. The broader OpenIntro mission is free, transparent education.",
      },
      {
        id: "r-islp",
        name: "Introduction to Statistical Learning with Python",
        url: "https://www.statlearning.com/",
        type: "Textbook",
        priority: "Core",
        phase: "phase-3",
        tags: ["statistics", "machine-learning"],
        why: "Applied statistical learning backbone covering regression, classification, resampling, regularization, trees, SVMs, clustering, and more.",
        note: "Use the Python edition for labs and implementation alignment.",
      },
      {
        id: "r-statquest",
        name: "StatQuest",
        url: "https://statquest.org/",
        type: "Video",
        priority: "Support",
        phase: "phase-3",
        tags: ["statistics", "intuition"],
        why: "Use it when the math needs a plain-English intuition pass.",
        note: "Best as targeted support for topics that feel unclear.",
      },
      {
        id: "r-3b1b-linear-algebra",
        name: "3Blue1Brown: Essence of Linear Algebra",
        url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
        type: "Video",
        priority: "Support",
        phase: "phase-3",
        tags: ["math", "linear-algebra"],
        why: "Builds visual intuition for vectors, matrices, transformations, basis, eigenvectors, and eigenvalues.",
        note: "Use for intuition. Do not pause the roadmap until you master every proof.",
      },
    ],
  },
  {
    id: "phase-4",
    number: "4",
    title: "Applied Data Science with Python",
    timeline: "8-10 weeks",
    monthBand: "Months 3-6",
    goal: "Take messy data through cleaning, EDA, modeling, evaluation, and explanation.",
    icon: "chart-scatter",
    caution:
      "Frame the People Analytics project ethically. The goal is aggregate workforce risk analysis, not automated employment decisions.",
    outcomes: [
      ["p4-o1", "Use Pandas, NumPy, Matplotlib, and scikit-learn for cleaning, EDA, and baseline modeling."],
      ["p4-o2", "Evaluate regression and classification models with train/test splits, cross-validation, and relevant metrics."],
      ["p4-o3", "Write limitations and ethical-use notes for analyses involving people-style data."],
    ],
    deliverables: [
      [
        "p4-d1",
        "Project 1A: People Analytics EDA and Attrition Risk Analysis",
        "Include a data dictionary, cleaning notebook, EDA notebook, baseline model, metrics, limitations, and ethical use statement.",
      ],
    ],
    resources: [
      {
        id: "r-harvardx-ds-python",
        name: "HarvardX Introduction to Data Science with Python",
        url: "https://www.edx.org/learn/data-science/harvard-university-introduction-to-data-science-with-python",
        type: "Course",
        priority: "Core",
        phase: "phase-4",
        tags: ["python", "data-science", "machine-learning"],
        why: "Python-focused data science course with ML model and AI concept foundations.",
        note: "Audit access is free but may limit tests, forums, or certificate features. Keep Kaggle, ISLP, and Google MLCC as reinforcement.",
      },
      {
        id: "r-kaggle-learn",
        name: "Kaggle Learn",
        url: "https://www.kaggle.com/learn",
        type: "Practice",
        priority: "Core",
        phase: "phase-4",
        tags: ["pandas", "visualization", "machine-learning"],
        why: "Fast hands-on practice in Python, Pandas, visualization, and intro machine learning.",
        note: "Use Pandas, Data Visualization, Intro ML, and Intermediate ML selectively.",
      },
      {
        id: "r-google-mlcc",
        name: "Google Machine Learning Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        type: "Course",
        priority: "Core",
        phase: "phase-4",
        tags: ["machine-learning", "responsible-ai"],
        why: "Free practical intro with videos, interactive visualizations, and hands-on exercises.",
        note: "Google's updated course adds LLMs, AutoML, expanded data coverage, and responsible AI topics.",
      },
      {
        id: "r-ibm-hr-kaggle",
        name: "IBM HR Analytics Employee Attrition and Performance",
        url: "https://www.kaggle.com/datasets/pavansubhasht/ibm-hr-analytics-attrition-dataset",
        type: "Dataset",
        priority: "Support",
        phase: "phase-4",
        tags: ["dataset", "people-analytics"],
        why: "Common public practice dataset for attrition and workforce-style analysis.",
        note: "Treat it as public/synthetic-style practice data, not evidence about real employees at your workplace.",
      },
    ],
  },
  {
    id: "phase-5",
    number: "5",
    title: "Visualization and Business Communication",
    timeline: "3-4 weeks, overlapping Phase 4",
    monthBand: "Months 5-6",
    goal: "Turn analysis into dashboards and written insights that stakeholders can use.",
    icon: "layout-dashboard",
    caution:
      "Avoid dashboard clutter. Every view should answer a business question and include limitations where the analysis can be misread.",
    outcomes: [
      ["p5-o1", "Choose clear chart types, write plain-English insights, and avoid misleading visuals."],
      ["p5-o2", "Build dashboard pages with KPI cards, filters, trend lines, drilldowns, and limitations."],
      ["p5-o3", "Translate model outputs into stakeholder-safe language."],
    ],
    deliverables: [
      [
        "p5-d1",
        "Project 1A dashboard",
        "Create pages for workforce overview, attrition trends, risk factor exploration, model results, and ethical limitations.",
      ],
    ],
    resources: [
      {
        id: "r-streamlit",
        name: "Streamlit Docs",
        url: "https://docs.streamlit.io/",
        type: "Docs",
        priority: "Core",
        phase: "phase-5",
        tags: ["dashboard", "python"],
        why: "Open-source Python framework for building interactive data apps quickly.",
        note: "Good default for portfolio demos because it is Python-native.",
      },
      {
        id: "r-powerbi",
        name: "Microsoft Learn: Power BI",
        url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
        type: "Course",
        priority: "Support",
        phase: "phase-5",
        tags: ["dashboard", "business-intelligence"],
        why: "Free official learning paths for a common business analytics tool.",
        note: "Use if you want a business-facing dashboard skill alongside Python apps.",
      },
      {
        id: "r-uk-gov-viz",
        name: "UK Government Data Visualization E-learning",
        url: "https://analysisfunction.civilservice.gov.uk/support/communicating-analysis/introduction-to-data-visualisation-e-learning/",
        type: "Reference",
        priority: "Support",
        phase: "phase-5",
        tags: ["communication", "visualization"],
        why: "Practical guidance on clear, accessible charts for internal and external audiences.",
        note: "Use as a quality checklist for dashboard readability.",
      },
    ],
  },
  {
    id: "phase-6",
    number: "6",
    title: "Data Engineering Foundation",
    timeline: "10-12 weeks",
    monthBand: "Months 7-8",
    goal: "Understand how data gets collected, stored, transformed, scheduled, and made reliable.",
    icon: "workflow",
    caution:
      "Do not obsess over Kubernetes, advanced Terraform, cloud networking, or distributed systems theory in year one. Focus on pipeline fluency and clean analytics tables.",
    outcomes: [
      ["p6-o1", "Build batch pipelines that ingest CSV, JSON, or parquet data and produce analytics-ready tables."],
      ["p6-o2", "Use Docker basics, APIs, warehouses, dbt, data quality checks, and orchestration concepts."],
      ["p6-o3", "Explain the difference between raw, staging, modeled, and dashboard-ready data."],
    ],
    deliverables: [
      [
        "p6-d1",
        "Project 1B: End-to-End Workforce Analytics Pipeline",
        "Include raw public/synthetic HR-style data, ingestion, storage, SQL/dbt transformations, quality checks, dashboard output, and documentation.",
      ],
      [
        "p6-d2",
        "Warehouse-style tables",
        "Model dim_employee, dim_department, dim_manager, fact_employee_month, fact_attrition, fact_engagement, fact_compensation_band, and fact_manager_span.",
      ],
    ],
    resources: [
      {
        id: "r-de-zoomcamp",
        name: "DataTalks.Club Data Engineering Zoomcamp",
        url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
        type: "Course",
        priority: "Core",
        phase: "phase-6",
        tags: ["data-engineering", "pipelines", "dbt", "spark"],
        why: "Free project-based course on building production-style data pipelines.",
        note: "As of 2026-06-16, official pages describe self-paced access anytime and live cohorts around January. Re-check timing if you want certificate eligibility.",
      },
      {
        id: "r-dbt-fundamentals",
        name: "dbt Fundamentals",
        url: "https://learn.getdbt.com/courses/dbt-fundamentals",
        type: "Course",
        priority: "Core",
        phase: "phase-6",
        tags: ["dbt", "analytics-engineering"],
        why: "Official free dbt Learn course for foundational transformation workflow.",
        note: "Use it for models, tests, documentation, and Git-backed analytics engineering habits.",
      },
      {
        id: "r-duckdb",
        name: "DuckDB Python API",
        url: "https://duckdb.org/docs/lts/clients/python/overview.html",
        type: "Docs",
        priority: "Core",
        phase: "phase-6",
        tags: ["duckdb", "sql", "local"],
        why: "Local analytical SQL engine that integrates cleanly with Python and files.",
        note: "The official docs show basic Python use through duckdb.sql.",
      },
      {
        id: "r-bigquery-public",
        name: "BigQuery Public Datasets",
        url: "https://cloud.google.com/bigquery/public-data",
        type: "Dataset",
        priority: "Support",
        phase: "phase-6",
        tags: ["bigquery", "warehouse"],
        why: "Useful for warehouse-style SQL practice with public data.",
        note: "Pricing docs say the first 1 TiB of query data processed per month is free. Monitor query size.",
      },
    ],
  },
  {
    id: "phase-7",
    number: "7",
    title: "Machine Learning Engineering",
    timeline: "8-10 weeks",
    monthBand: "Months 9-10",
    goal: "Move from a notebook model to a packaged, testable, and serveable model.",
    icon: "package-check",
    caution:
      "ML Zoomcamp is a substantial free 4-month course if done fully. Use it selectively if your one-year schedule is tight.",
    outcomes: [
      ["p7-o1", "Train, validate, serialize, and reload models outside a notebook."],
      ["p7-o2", "Serve a model through FastAPI and Docker with example requests."],
      ["p7-o3", "Write a model card and state ethical limitations for workforce-risk use."],
    ],
    deliverables: [
      [
        "p7-d1",
        "Project 1C: Attrition Risk Model Service",
        "Include a training script, saved model artifact, FastAPI endpoint, Dockerfile, example request, model card, ethical limitations, and dashboard/app consumption.",
      ],
    ],
    resources: [
      {
        id: "r-ml-zoomcamp",
        name: "DataTalks.Club Machine Learning Zoomcamp",
        url: "https://github.com/DataTalksClub/machine-learning-zoomcamp",
        type: "Course",
        priority: "Core",
        phase: "phase-7",
        tags: ["machine-learning", "ml-engineering", "fastapi", "docker"],
        why: "Free end-to-end ML engineering course from model training to deployment concepts.",
        note: "Official page lists live cohort September 2026 and self-paced access anytime. Treat it as self-paced unless the cohort timing fits.",
      },
      {
        id: "r-google-mlcc-p7",
        name: "Google Machine Learning Crash Course",
        url: "https://developers.google.com/machine-learning/crash-course",
        type: "Course",
        priority: "Support",
        phase: "phase-7",
        tags: ["machine-learning", "fundamentals"],
        why: "Reinforces model fundamentals so deployment work does not become black-box shipping.",
        note: "Pair with ISLP when a concept needs deeper statistical grounding.",
      },
      {
        id: "r-islp-p7",
        name: "ISLP with Python",
        url: "https://www.statlearning.com/",
        type: "Textbook",
        priority: "Support",
        phase: "phase-7",
        tags: ["modeling", "statistics"],
        why: "Conceptual backbone for regression, classification, tree models, and evaluation.",
        note: "Use chapters selectively as the ML service requires them.",
      },
    ],
  },
  {
    id: "phase-8",
    number: "8",
    title: "MLOps and Production Thinking",
    timeline: "6-8 weeks",
    monthBand: "Months 11-12",
    goal: "Understand experiment tracking, reproducibility, deployment, monitoring, and model lifecycle management.",
    icon: "activity",
    caution:
      "The value here is production judgment: tracking, repeatability, monitoring, documentation, and risk controls. Do not just add tools for the sake of tools.",
    outcomes: [
      ["p8-o1", "Track experiments, version model artifacts, and reproduce training runs."],
      ["p8-o2", "Explain batch vs real-time inference, monitoring, drift, retraining, and CI/CD basics."],
      ["p8-o3", "Create responsible AI controls, a model card, risk assessment, and monitoring plan."],
    ],
    deliverables: [
      [
        "p8-d1",
        "MLOps layer for Project 1",
        "Add experiment tracking, versioned model, evaluation report, monitoring plan, model card, risk assessment, and retraining plan.",
      ],
    ],
    resources: [
      {
        id: "r-mlops-zoomcamp",
        name: "DataTalks.Club MLOps Zoomcamp",
        url: "https://github.com/DataTalksClub/mlops-zoomcamp",
        type: "Course",
        priority: "Core",
        phase: "phase-8",
        tags: ["mlops", "monitoring", "mlflow"],
        why: "Free MLOps course covering training, experimentation, deployment, monitoring, workshops, and a final project.",
        note: "Official page says no live cohort is planned in 2026, but all materials are available self-paced.",
      },
      {
        id: "r-made-with-ml",
        name: "Made With ML",
        url: "https://madewithml.com/courses/mlops/",
        type: "Course",
        priority: "Support",
        phase: "phase-8",
        tags: ["mlops", "software-engineering"],
        why: "Free course focused on combining machine learning with software engineering for production ML applications.",
        note: "Use to strengthen engineering discipline around ML projects.",
      },
      {
        id: "r-nist-ai-rmf",
        name: "NIST AI Risk Management Framework",
        url: "https://www.nist.gov/itl/ai-risk-management-framework",
        type: "Reference",
        priority: "Core",
        phase: "phase-8",
        tags: ["responsible-ai", "risk"],
        why: "Serious vocabulary for managing AI risks to people, organizations, and society.",
        note: "Use for the model card, limitations, and risk assessment language.",
      },
    ],
  },
  {
    id: "phase-9",
    number: "9",
    title: "Deep Learning, NLP, and Modern AI",
    timeline: "Optional, 4-8 weeks after the core",
    monthBand: "After core",
    goal: "Add modern ML range without derailing the main data science and data engineering foundation.",
    icon: "brain-circuit",
    caution:
      "Do not start here. Add this after classical ML, SQL, statistics, and data engineering are credible.",
    outcomes: [
      ["p9-o1", "Understand when deep learning or LLMs are appropriate and when simpler models are enough."],
      ["p9-o2", "Build one small applied project using deep learning, NLP, or LLM tooling only if it fits your second domain."],
      ["p9-o3", "Avoid fragile projects that depend on restricted APIs or unclear data rights."],
    ],
    deliverables: [
      [
        "p9-d1",
        "Transferability project selection",
        "Pick operations, product, gaming, public-sector, or carefully sourced music/NLP. For employability, prioritize operations, product, or gaming before music NLP.",
      ],
    ],
    resources: [
      {
        id: "r-fastai",
        name: "fast.ai Practical Deep Learning for Coders",
        url: "https://course.fast.ai/",
        type: "Course",
        priority: "Optional",
        phase: "phase-9",
        tags: ["deep-learning", "python"],
        why: "Free practical deep learning course for people with some coding experience.",
        note: "Use after the core roadmap, not before.",
      },
      {
        id: "r-hf-llm",
        name: "Hugging Face LLM Course",
        url: "https://huggingface.co/learn/llm-course/en/chapter1/1",
        type: "Course",
        priority: "Optional",
        phase: "phase-9",
        tags: ["llm", "nlp"],
        why: "Free course on LLMs and NLP using Transformers, Datasets, Tokenizers, Accelerate, and the Hugging Face Hub.",
        note: "Good later option if your second project needs NLP or LLM workflows.",
      },
      {
        id: "r-fsdl",
        name: "Full Stack Deep Learning",
        url: "https://github.com/the-full-stack/course-gitbook",
        type: "Course",
        priority: "Optional",
        phase: "phase-9",
        tags: ["deep-learning", "production"],
        why: "Production deep learning perspective: problem formulation, data, labeling, reproducibility, and deployment.",
        note: "Use after you have enough modeling and engineering foundation to benefit from it.",
      },
      {
        id: "r-nyc-taxi",
        name: "NYC TLC Trip Record Data",
        url: "https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page",
        type: "Dataset",
        priority: "Core",
        phase: "phase-9",
        tags: ["dataset", "operations", "forecasting"],
        why: "Strong public dataset for operations forecasting and dashboarding.",
        note: "Official TLC page describes pickup/dropoff times, locations, trip distances, fares, rate types, payment types, and passenger counts.",
      },
      {
        id: "r-spotify-api-warning",
        name: "Spotify Web API Change Notice",
        url: "https://developer.spotify.com/blog/2024-11-27-changes-to-the-web-api",
        type: "Caution",
        priority: "Reference",
        phase: "phase-9",
        tags: ["music", "api-risk"],
        why: "Spotify restricted new Web API use cases from several audio-analysis and recommendation-style endpoints in 2024.",
        note: "Do not build a core portfolio project around restricted audio features unless you have confirmed access.",
      },
    ],
  },
  {
    id: "phase-10",
    number: "10",
    title: "Portfolio Polish and Career Packaging",
    timeline: "Final 4-6 weeks",
    monthBand: "Months 11-12",
    goal: "Turn your work into proof: polished repos, demos, diagrams, README files, and career-facing summaries.",
    icon: "briefcase-business",
    caution:
      "Two serious projects beat ten weak tutorial projects. Keep People Analytics as the anchor domain, then prove transferability in a second domain.",
    outcomes: [
      ["p10-o1", "Polish GitHub READMEs, architecture diagrams, reproducibility instructions, and demo links."],
      ["p10-o2", "Write resume bullets and project summaries that explain outcomes, not just tools."],
      ["p10-o3", "Position yourself as a data scientist / analytics engineer hybrid with data engineering literacy and responsible ML judgment."],
    ],
    deliverables: [
      [
        "p10-d1",
        "Flagship project: Workforce Analytics and Attrition Risk Platform",
        "Show Python, SQL, statistics, data science, data engineering, dbt, dashboarding, ML, MLOps thinking, responsible AI, and business communication.",
      ],
      [
        "p10-d2",
        "Transferability project",
        "Choose operations forecasting, product analytics, gaming telemetry, public-sector analytics, or music/NLP only if data access is clean.",
      ],
      [
        "p10-d3",
        "Career packaging",
        "Write polished README files, architecture diagrams, resume bullets, and LinkedIn/project summaries.",
      ],
    ],
    resources: [
      {
        id: "r-cookiecutter-p10",
        name: "Cookiecutter Data Science",
        url: "https://cookiecutter-data-science.drivendata.org/",
        type: "Reference",
        priority: "Core",
        phase: "phase-10",
        tags: ["project-structure", "portfolio"],
        why: "Clean up repo organization and reproducibility.",
        note: "Use the structure to make each project easy to inspect.",
      },
      {
        id: "r-streamlit-p10",
        name: "Streamlit Docs",
        url: "https://docs.streamlit.io/",
        type: "Docs",
        priority: "Core",
        phase: "phase-10",
        tags: ["demo", "dashboard"],
        why: "Useful for turning project outputs into interactive demos.",
        note: "Host demos separately if needed; keep GitHub repos clear and reproducible.",
      },
      {
        id: "r-powerbi-p10",
        name: "Microsoft Learn: Power BI",
        url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi",
        type: "Course",
        priority: "Support",
        phase: "phase-10",
        tags: ["dashboard", "business-intelligence"],
        why: "Optional business dashboard polish for analytics-facing roles.",
        note: "Use if it strengthens your target role story.",
      },
    ],
  },
];

const monthlyPlan = [
  {
    id: "m1",
    title: "Months 1-2",
    focus: "Git/GitHub, command line, Python, and SQL basics.",
    outputs: "Setup repo, Python cleaning script, and SQL analysis exercises.",
    materials: ["GitHub Skills", "MIT Missing Semester", "MIT 6.100L", "CS50 SQL", "Kaggle SQL"],
  },
  {
    id: "m2",
    title: "Months 3-4",
    focus: "Statistics, statistical learning, Pandas, EDA, visualization, and intro ML.",
    outputs: "EDA notebook, baseline model, and first People Analytics analysis.",
    materials: ["OpenIntro", "ISLP", "HarvardX", "Kaggle Learn", "Google MLCC"],
  },
  {
    id: "m3",
    title: "Months 5-6",
    focus: "Applied data science, business communication, dashboarding, and responsible interpretation.",
    outputs: "People Analytics dashboard, limitations section, and ethical use statement.",
    materials: ["HarvardX", "Streamlit", "Power BI", "NIST AI RMF"],
  },
  {
    id: "m4",
    title: "Months 7-8",
    focus: "Data engineering, pipelines, warehousing, dbt, orchestration, and data quality.",
    outputs: "End-to-end workforce analytics pipeline with warehouse-style tables and checks.",
    materials: ["DataTalks DE", "dbt", "DuckDB", "BigQuery"],
  },
  {
    id: "m5",
    title: "Months 9-10",
    focus: "ML engineering, model serving, Docker, FastAPI, and deployment concepts.",
    outputs: "Model training script, FastAPI endpoint, Dockerized service, and prediction-consuming app.",
    materials: ["ML Zoomcamp", "Google MLCC", "ISLP"],
  },
  {
    id: "m6",
    title: "Months 11-12",
    focus: "MLOps, monitoring, reproducibility, second project, and portfolio polish.",
    outputs: "Final flagship project, transferability project, polished READMEs, diagrams, and career summaries.",
    materials: ["MLOps Zoomcamp", "Made With ML", "Cookiecutter", "Streamlit or Power BI"],
  },
];

const projects = [
  {
    id: "project-learning-trail",
    name: "Learning Trail Repository",
    phaseIds: ["phase-0"],
    summary: "A public archive of your phase folders, notes, small exercises, READMEs, and reproducibility decisions.",
    skills: ["Git", "Markdown", "project structure", "reproducibility"],
    tasks: ["p0-d1", "p0-d2"],
  },
  {
    id: "project-foundations",
    name: "Foundations Pack",
    phaseIds: ["phase-1", "phase-2", "phase-3"],
    summary: "Python cleaning script, SQL analysis pack, and a statistics notebook focused on what data can and cannot prove.",
    skills: ["Python", "SQL", "statistics", "analysis writing"],
    tasks: ["p1-d1", "p2-d1", "p3-d1"],
  },
  {
    id: "project-1a",
    name: "Project 1A: People Analytics EDA and Attrition Risk Analysis",
    phaseIds: ["phase-4", "phase-5"],
    summary: "Your anchor domain project: clean, explore, model, visualize, and explain workforce-style data with careful ethical framing.",
    skills: ["Pandas", "EDA", "baseline ML", "dashboarding", "business communication"],
    tasks: ["p4-d1", "p5-d1"],
  },
  {
    id: "project-1b",
    name: "Project 1B: End-to-End Workforce Analytics Pipeline",
    phaseIds: ["phase-6"],
    summary: "Upgrade Project 1A into a pipeline with ingestion, transformations, tests, documentation, and dashboard-ready outputs.",
    skills: ["data engineering", "dbt", "DuckDB or BigQuery", "data quality", "analytics engineering"],
    tasks: ["p6-d1", "p6-d2"],
  },
  {
    id: "project-1c",
    name: "Project 1C: Attrition Risk Model Service",
    phaseIds: ["phase-7", "phase-8"],
    summary: "Package a responsible workforce-risk model as a service with tracking, documentation, monitoring plans, and risk controls.",
    skills: ["ML engineering", "FastAPI", "Docker", "MLOps", "responsible AI"],
    tasks: ["p7-d1", "p8-d1"],
  },
  {
    id: "project-transferability",
    name: "Transferability Project",
    phaseIds: ["phase-9", "phase-10"],
    summary: "A second serious project outside HR: operations forecasting, product analytics, gaming telemetry, or public-sector analytics.",
    skills: ["domain transfer", "forecasting or product analytics", "SQL", "dashboards", "portfolio storytelling"],
    tasks: ["p9-d1", "p10-d2"],
  },
  {
    id: "project-portfolio",
    name: "Portfolio and Career Packaging",
    phaseIds: ["phase-10"],
    summary: "Polished READMEs, diagrams, demos, resume bullets, and concise project narratives.",
    skills: ["technical writing", "architecture diagrams", "career positioning"],
    tasks: ["p10-d1", "p10-d3"],
  },
];

const accuracyNotes = [
  {
    title: "Resource timing is intentionally flexible",
    body:
      "The roadmap is locked as a sequence of skill outcomes and project outputs, not as a rigid calendar. Re-check live cohort timing at the start of each major phase.",
  },
  {
    title: "HarvardX audit caveat",
    body:
      "HarvardX Introduction to Data Science with Python remains useful, but free audit access can limit certificates, some graded work, or forum/test access. Keep ISLP, Kaggle Learn, and Google ML Crash Course as reinforcement.",
  },
  {
    title: "DataTalks.Club cohort caveat",
    body:
      "Data Engineering Zoomcamp, ML Zoomcamp, and MLOps Zoomcamp have free self-paced materials. Certificates and scored homework depend on live cohort availability and deadlines.",
  },
  {
    title: "Music project caution",
    body:
      "Spotify changed Web API access in November 2024 and restricted several recommendation and audio-analysis endpoints for new Web API use cases. Do not anchor the portfolio on restricted audio features.",
  },
  {
    title: "Free cloud still needs cost control",
    body:
      "BigQuery offers a free monthly query-processing tier, but you should still preview query size and use smaller tables while learning.",
  },
  {
    title: "Ethics are part of the deliverable",
    body:
      "The attrition project must be framed as aggregate workforce planning and exploratory risk analysis, not automated decision-making about employees.",
  },
];

const app = document.querySelector("#app");
const importFile = document.querySelector("#importFile");

const defaultState = {
  view: "roadmap",
  selectedPhaseId: "phase-0",
  done: {},
  notes: {},
  customLinks: [],
  query: "",
  typeFilter: "All",
  priorityFilter: "All",
};

let state = loadState();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return { ...defaultState, ...saved, done: saved?.done || {}, notes: saved?.notes || {}, customLinks: saved?.customLinks || [] };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function allResources() {
  return roadmap.flatMap((phase) => phase.resources.map((resource) => ({ ...resource, phaseTitle: phase.title, phaseNumber: phase.number })));
}

function phaseById(id) {
  return roadmap.find((phase) => phase.id === id) || roadmap[0];
}

function checkableIdsForPhase(phase) {
  return [
    ...phase.outcomes.map(([id]) => id),
    ...phase.deliverables.map(([id]) => id),
    ...phase.resources.map((resource) => resource.id),
  ];
}

function phaseProgress(phase) {
  const ids = checkableIdsForPhase(phase);
  const done = ids.filter((id) => state.done[id]).length;
  return {
    done,
    total: ids.length,
    pct: ids.length ? Math.round((done / ids.length) * 100) : 0,
  };
}

function overallProgress() {
  const ids = roadmap.flatMap(checkableIdsForPhase);
  const done = ids.filter((id) => state.done[id]).length;
  return {
    done,
    total: ids.length,
    pct: ids.length ? Math.round((done / ids.length) * 100) : 0,
  };
}

function nextAction() {
  const active = phaseById(state.selectedPhaseId);
  const undoneOutcome = active.outcomes.find(([id]) => !state.done[id]);
  if (undoneOutcome) return undoneOutcome[1];
  const undoneResource = active.resources.find((resource) => !state.done[resource.id]);
  if (undoneResource) return `Open ${undoneResource.name}`;
  const undoneDeliverable = active.deliverables.find(([id]) => !state.done[id]);
  if (undoneDeliverable) return undoneDeliverable[1];
  const nextPhase = roadmap.find((phase) => phaseProgress(phase).pct < 100);
  return nextPhase ? `Move to ${nextPhase.title}` : "All tracked items are complete.";
}

function statusForPhase(phase) {
  const progress = phaseProgress(phase);
  if (progress.pct === 100) return ["done", "Complete"];
  if (phase.id === state.selectedPhaseId || progress.done > 0) return ["active", "In progress"];
  return ["waiting", "Not started"];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  const selectedPhase = phaseById(state.selectedPhaseId);
  app.innerHTML = `
    <aside class="sidebar">
      ${renderSidebar()}
    </aside>
    <section class="content">
      ${renderHero()}
      ${renderTabs()}
      ${renderMetrics()}
      ${renderActiveView(selectedPhase)}
    </section>
  `;

  requestAnimationFrame(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

function renderSidebar() {
  return `
    <div class="sidebar-head">
      <div>
        <p class="eyebrow">Roadmap</p>
        <h2>Phases</h2>
      </div>
      <span class="saved-badge">Saved locally</span>
    </div>
    <nav class="phase-nav" aria-label="Roadmap phases">
      ${roadmap.map(renderPhaseNavButton).join("")}
    </nav>
  `;
}

function renderPhaseNavButton(phase) {
  const progress = phaseProgress(phase);
  const activeClass = phase.id === state.selectedPhaseId ? " is-active" : "";
  return `
    <button class="phase-nav-button${activeClass}" type="button" data-action="select-phase" data-phase-id="${phase.id}">
      <span class="phase-index">${phase.number}</span>
      <span class="phase-nav-copy">
        <strong>${escapeHtml(phase.title)}</strong>
        <span>${escapeHtml(phase.timeline)} · ${progress.pct}%</span>
        <span class="mini-progress" aria-hidden="true"><span style="width:${progress.pct}%"></span></span>
      </span>
    </button>
  `;
}

function renderHero() {
  const active = phaseById(state.selectedPhaseId);
  return `
    <section class="workspace-header">
      <div>
        <p class="eyebrow">Dashboard</p>
        <h2>Roadmap Tracker</h2>
      </div>
      <div class="workspace-summary" aria-label="Current roadmap status">
        <span class="pill">Active: Phase ${active.number}</span>
        <span class="pill">${escapeHtml(active.title)}</span>
        <span class="pill">Saved locally</span>
      </div>
    </section>
  `;
}

function renderTabs() {
  const tabs = [
    ["roadmap", "map", "Roadmap"],
    ["resources", "library", "Resources"],
    ["projects", "folder-kanban", "Projects"],
    ["planner", "calendar-days", "12-Month Plan"],
    ["accuracy", "shield-check", "Accuracy Notes"],
  ];

  return `
    <div class="view-tabs" role="tablist" aria-label="Roadmap views">
      ${tabs
        .map(
          ([id, icon, label]) => `
            <button class="tab-button${state.view === id ? " is-active" : ""}" type="button" data-action="set-view" data-view="${id}">
              <i data-lucide="${icon}"></i>
              <span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderMetrics() {
  const overall = overallProgress();
  const phase = phaseById(state.selectedPhaseId);
  const phaseStats = phaseProgress(phase);
  const resourceDone = allResources().filter((resource) => state.done[resource.id]).length;
  const projectDone = projects.filter((project) => project.tasks.every((id) => state.done[id])).length;

  return `
    <section class="metric-grid" aria-label="Progress metrics">
      <article class="metric-card">
        <div class="metric-head"><h3>Overall</h3><span class="stat-icon"><i data-lucide="gauge"></i></span></div>
        <p class="metric-value">${overall.pct}%</p>
        <p>${overall.done} of ${overall.total} tracked items complete</p>
      </article>
      <article class="metric-card">
        <div class="metric-head"><h3>Active Phase</h3><span class="stat-icon"><i data-lucide="crosshair"></i></span></div>
        <p class="metric-value">${phaseStats.pct}%</p>
        <p>${escapeHtml(phase.title)}</p>
      </article>
      <article class="metric-card">
        <div class="metric-head"><h3>Resources</h3><span class="stat-icon"><i data-lucide="book-open-check"></i></span></div>
        <p class="metric-value">${resourceDone}/${allResources().length}</p>
        <p>Opened or completed resources you marked done</p>
      </article>
      <article class="metric-card">
        <div class="metric-head"><h3>Projects</h3><span class="stat-icon"><i data-lucide="folder-check"></i></span></div>
        <p class="metric-value">${projectDone}/${projects.length}</p>
        <p>Deliverable groups completed across the roadmap</p>
      </article>
    </section>
  `;
}

function renderActiveView(selectedPhase) {
  if (state.view === "resources") return renderResourceLibrary();
  if (state.view === "projects") return renderProjects();
  if (state.view === "planner") return renderPlanner();
  if (state.view === "accuracy") return renderAccuracy();
  return renderRoadmapView(selectedPhase);
}

function renderRoadmapView(phase) {
  const progress = phaseProgress(phase);
  const [statusClass, statusLabel] = statusForPhase(phase);

  return `
    <section class="phase-panel">
      <div class="view-title">
        <h2><i data-lucide="map"></i> Current Phase</h2>
        <p>${progress.done} of ${progress.total} tracked items complete</p>
      </div>
      <article class="phase-card">
        <div class="phase-banner">
          <div class="phase-title">
            <i data-lucide="${phase.icon}"></i>
            <div>
              <p class="eyebrow">Phase ${phase.number} · ${escapeHtml(phase.monthBand)}</p>
              <h2>${escapeHtml(phase.title)}</h2>
              <p>${escapeHtml(phase.goal)}</p>
            </div>
          </div>
          <div class="phase-meta">
            <span class="status-pill ${statusClass}">${statusLabel}</span>
            <span class="pill">${escapeHtml(phase.timeline)}</span>
            <span class="pill">${progress.pct}% complete</span>
          </div>
        </div>
        <div class="phase-body">
          <div class="phase-main">
            ${renderChecks("Skill Outcomes", phase.outcomes, "target")}
            ${renderDeliverables(phase)}
            ${renderResourcesForPhase(phase)}
          </div>
          <aside class="phase-side">
            <section class="section-card">
              <div class="section-title">
                <h3>Phase Notes</h3>
                <span class="pill">localStorage</span>
              </div>
              <textarea class="note-box" data-action="save-note" data-phase-id="${phase.id}" placeholder="Notes, blockers, decisions, next steps...">${escapeHtml(
                state.notes[phase.id] || "",
              )}</textarea>
            </section>
            <section class="section-card">
              <div class="section-title">
                <h3>Saved Links</h3>
                <span class="pill">${customLinksForPhase(phase.id).length}</span>
              </div>
              ${renderCustomLinkForm(phase.id)}
              ${renderCustomLinks(phase.id)}
            </section>
            <section class="warning-box">
              <strong>Scope guard</strong>
              ${escapeHtml(phase.caution)}
            </section>
          </aside>
        </div>
      </article>
    </section>
  `;
}

function renderChecks(title, items, icon) {
  return `
    <section class="section-card">
      <div class="section-title">
        <h3>${escapeHtml(title)}</h3>
        <span class="stat-icon"><i data-lucide="${icon}"></i></span>
      </div>
      <div class="check-list">
        ${items
          .map(
            ([id, label]) => `
              <label class="check-row">
                <input type="checkbox" data-action="toggle-done" data-id="${id}" ${state.done[id] ? "checked" : ""} />
                <span>
                  <strong>${escapeHtml(label)}</strong>
                </span>
              </label>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderDeliverables(phase) {
  return `
    <section class="section-card">
      <div class="section-title">
        <h3>Deliverables</h3>
        <span class="stat-icon"><i data-lucide="package-check"></i></span>
      </div>
      <div class="check-list">
        ${phase.deliverables
          .map(
            ([id, title, description]) => `
              <label class="check-row">
                <input type="checkbox" data-action="toggle-done" data-id="${id}" ${state.done[id] ? "checked" : ""} />
                <span>
                  <strong>${escapeHtml(title)}</strong>
                  <span>${escapeHtml(description)}</span>
                </span>
              </label>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderResourcesForPhase(phase) {
  return `
    <section class="section-card">
      <div class="section-title">
        <h3>Materials</h3>
        <span class="stat-icon"><i data-lucide="book-open"></i></span>
      </div>
      <div class="resource-list">
        ${phase.resources.map(renderResourceItem).join("")}
      </div>
    </section>
  `;
}

function renderResourceItem(resource) {
  return `
    <article class="resource-item">
      <div class="resource-copy">
        <h4>${escapeHtml(resource.name)}</h4>
        <p>${escapeHtml(resource.why)}</p>
        <p>${escapeHtml(resource.note)}</p>
        <div class="resource-meta">
          <span class="pill">${escapeHtml(resource.type)}</span>
          <span class="pill">${escapeHtml(resource.priority)}</span>
          ${resource.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
        </div>
      </div>
      <div class="resource-actions">
        <input type="checkbox" aria-label="Mark ${escapeHtml(resource.name)} complete" data-action="toggle-done" data-id="${resource.id}" ${
          state.done[resource.id] ? "checked" : ""
        } />
        <a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(resource.name)}">
          <i data-lucide="external-link"></i>
        </a>
      </div>
    </article>
  `;
}

function customLinksForPhase(phaseId) {
  return state.customLinks.filter((link) => link.phaseId === phaseId);
}

function renderCustomLinkForm(phaseId) {
  return `
    <form class="link-form" data-action="add-link" data-phase-id="${phaseId}">
      <input name="title" type="text" placeholder="Link title" aria-label="Link title" required />
      <input name="url" type="url" placeholder="https://..." aria-label="Link URL" required />
      <button class="small-action" type="submit" aria-label="Add link"><i data-lucide="plus"></i></button>
    </form>
  `;
}

function renderCustomLinks(phaseId) {
  const links = customLinksForPhase(phaseId);
  if (!links.length) return `<div class="empty-state">Add phase-specific links here when you find extras worth keeping.</div>`;
  return `
    <div class="custom-links">
      ${links
        .map(
          (link) => `
            <div class="custom-link-item">
              <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.title)}</a>
              <button class="small-action" type="button" data-action="remove-link" data-link-id="${link.id}" aria-label="Remove link">
                <i data-lucide="trash-2"></i>
              </button>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderResourceLibrary() {
  const resources = filteredResources();
  return `
    <section class="library-panel">
      <div class="view-title">
        <h2><i data-lucide="library"></i> Resource Library</h2>
        <p>${resources.length} matching materials</p>
      </div>
      <div class="toolbar">
        <input type="search" placeholder="Search materials, tags, notes..." value="${escapeHtml(state.query)}" data-action="search" aria-label="Search resources" />
        <select data-action="filter-type" aria-label="Filter by type">
          ${selectOptions(["All", ...uniqueValues(allResources().map((r) => r.type))], state.typeFilter)}
        </select>
        <select data-action="filter-priority" aria-label="Filter by priority">
          ${selectOptions(["All", ...uniqueValues(allResources().map((r) => r.priority))], state.priorityFilter)}
        </select>
      </div>
      ${
        resources.length
          ? `<div class="library-grid">${resources.map(renderResourceCard).join("")}</div>`
          : `<div class="empty-state">No resources match the current filters.</div>`
      }
    </section>
  `;
}

function filteredResources() {
  const query = state.query.trim().toLowerCase();
  return allResources().filter((resource) => {
    const haystack = [
      resource.name,
      resource.type,
      resource.priority,
      resource.phaseTitle,
      resource.why,
      resource.note,
      ...resource.tags,
    ]
      .join(" ")
      .toLowerCase();
    const queryMatch = !query || haystack.includes(query);
    const typeMatch = state.typeFilter === "All" || resource.type === state.typeFilter;
    const priorityMatch = state.priorityFilter === "All" || resource.priority === state.priorityFilter;
    return queryMatch && typeMatch && priorityMatch;
  });
}

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function selectOptions(values, selected) {
  return values.map((value) => `<option value="${escapeHtml(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function renderResourceCard(resource) {
  return `
    <article class="resource-card">
      <div>
        <p class="eyebrow">Phase ${resource.phaseNumber} · ${escapeHtml(resource.phaseTitle)}</p>
        <h3>${escapeHtml(resource.name)}</h3>
      </div>
      <p>${escapeHtml(resource.why)}</p>
      <p>${escapeHtml(resource.note)}</p>
      <div class="resource-meta">
        <span class="pill">${escapeHtml(resource.type)}</span>
        <span class="pill">${escapeHtml(resource.priority)}</span>
        ${resource.tags.map((tag) => `<span class="pill">${escapeHtml(tag)}</span>`).join("")}
      </div>
      <div class="card-foot">
        <label>
          <input type="checkbox" data-action="toggle-done" data-id="${resource.id}" ${state.done[resource.id] ? "checked" : ""} />
          Done
        </label>
        <a class="resource-link" href="${resource.url}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(resource.name)}">
          <i data-lucide="external-link"></i>
        </a>
      </div>
    </article>
  `;
}

function renderProjects() {
  return `
    <section class="projects-panel">
      <div class="view-title">
        <h2><i data-lucide="folder-kanban"></i> Project Outputs</h2>
        <p>Use these to avoid tutorial drift.</p>
      </div>
      <div class="projects-grid">
        ${projects.map(renderProjectCard).join("")}
      </div>
    </section>
  `;
}

function renderProjectCard(project) {
  const completed = project.tasks.filter((id) => state.done[id]).length;
  const pct = project.tasks.length ? Math.round((completed / project.tasks.length) * 100) : 0;
  return `
    <article class="project-card">
      <div class="section-title">
        <h3>${escapeHtml(project.name)}</h3>
        <span class="status-pill ${pct === 100 ? "done" : pct > 0 ? "active" : "waiting"}">${pct}%</span>
      </div>
      <p>${escapeHtml(project.summary)}</p>
      <div class="tag-list">
        ${project.skills.map((skill) => `<span class="pill">${escapeHtml(skill)}</span>`).join("")}
      </div>
      <div class="project-actions">
        ${project.tasks
          .map((id) => {
            const label = deliverableLabel(id);
            return `
              <label class="check-row">
                <input type="checkbox" data-action="toggle-done" data-id="${id}" ${state.done[id] ? "checked" : ""} />
                <span><strong>${escapeHtml(label)}</strong></span>
              </label>
            `;
          })
          .join("")}
      </div>
    </article>
  `;
}

function deliverableLabel(id) {
  for (const phase of roadmap) {
    const deliverable = phase.deliverables.find(([deliverableId]) => deliverableId === id);
    if (deliverable) return deliverable[1];
  }
  return id;
}

function renderPlanner() {
  return `
    <section class="planner-panel">
      <div class="view-title">
        <h2><i data-lucide="calendar-days"></i> 12-Month Plan</h2>
        <p>Sequence the roadmap by outputs, not perfection.</p>
      </div>
      <div class="month-grid">
        ${monthlyPlan.map(renderMonthCard).join("")}
      </div>
    </section>
  `;
}

function renderMonthCard(month) {
  return `
    <article class="month-card">
      <h3>${escapeHtml(month.title)}</h3>
      <p><strong>Focus:</strong> ${escapeHtml(month.focus)}</p>
      <p><strong>Output:</strong> ${escapeHtml(month.outputs)}</p>
      <div class="month-materials">
        ${month.materials.map((material) => `<span class="pill">${escapeHtml(material)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderAccuracy() {
  return `
    <section class="accuracy-panel">
      <div class="view-title">
        <h2><i data-lucide="shield-check"></i> Accuracy Notes</h2>
        <p>Verified against official sources on 2026-06-16 where timing or access could change.</p>
      </div>
      <div class="accuracy-grid">
        ${accuracyNotes.map(renderAccuracyCard).join("")}
      </div>
    </section>
  `;
}

function renderAccuracyCard(note) {
  return `
    <article class="accuracy-card">
      <h3>${escapeHtml(note.title)}</h3>
      <p>${escapeHtml(note.body)}</p>
    </article>
  `;
}

function toast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const node = document.createElement("div");
  node.className = "toast";
  node.textContent = message;
  document.body.append(node);
  setTimeout(() => node.remove(), 2800);
}

function setDone(id, checked) {
  if (checked) state.done[id] = true;
  else delete state.done[id];
  saveState();
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;

  if (action === "select-phase") {
    state.selectedPhaseId = button.dataset.phaseId;
    state.view = "roadmap";
    saveState();
    render();
  }

  if (action === "set-view") {
    state.view = button.dataset.view;
    saveState();
    render();
  }

  if (action === "remove-link") {
    state.customLinks = state.customLinks.filter((link) => link.id !== button.dataset.linkId);
    saveState();
    render();
    toast("Saved link removed.");
  }
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;

  if (button.dataset.action === "export-progress") {
    const payload = JSON.stringify({ exportedAt: new Date().toISOString(), state }, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data-science-roadmap-progress.json";
    link.click();
    URL.revokeObjectURL(url);
    toast("Progress export created.");
  }

  if (button.dataset.action === "reset-progress") {
    const confirmed = window.confirm("Reset all local progress, notes, and saved links for this roadmap?");
    if (!confirmed) return;
    state = structuredClone(defaultState);
    saveState();
    render();
    toast("Progress reset.");
  }
});

app.addEventListener("change", (event) => {
  const control = event.target;
  if (!control.dataset.action) return;

  if (control.dataset.action === "toggle-done") {
    setDone(control.dataset.id, control.checked);
    render();
  }

  if (control.dataset.action === "filter-type") {
    state.typeFilter = control.value;
    saveState();
    render();
  }

  if (control.dataset.action === "filter-priority") {
    state.priorityFilter = control.value;
    saveState();
    render();
  }
});

app.addEventListener("input", (event) => {
  const control = event.target;
  if (!control.dataset.action) return;

  if (control.dataset.action === "save-note") {
    state.notes[control.dataset.phaseId] = control.value;
    saveState();
  }

  if (control.dataset.action === "search") {
    state.query = control.value;
    saveState();
    render();
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-action='add-link']");
  if (!form) return;
  event.preventDefault();
  const formData = new FormData(form);
  const title = String(formData.get("title") || "").trim();
  const url = String(formData.get("url") || "").trim();
  if (!title || !url) return;

  try {
    const parsed = new URL(url);
    state.customLinks.push({
      id: `custom-${Date.now()}`,
      phaseId: form.dataset.phaseId,
      title,
      url: parsed.href,
    });
    saveState();
    render();
    toast("Saved link added.");
  } catch {
    toast("Enter a valid URL.");
  }
});

importFile.addEventListener("change", async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const incoming = parsed.state || parsed;
    state = {
      ...defaultState,
      ...incoming,
      done: incoming.done || {},
      notes: incoming.notes || {},
      customLinks: Array.isArray(incoming.customLinks) ? incoming.customLinks : [],
    };
    saveState();
    render();
    toast("Progress imported.");
  } catch {
    toast("Import failed. Use a JSON export from this app.");
  } finally {
    importFile.value = "";
  }
});

render();
