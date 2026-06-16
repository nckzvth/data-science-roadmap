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

const phaseGuides = {
  "phase-0": {
    steps: [
      {
        id: "p0-s1",
        title: "Create the working system before studying content",
        time: "Day 1",
        purpose: "Remove friction: one repo, one editor, one terminal, one place for notes and outputs.",
        resources: ["r-github-skills"],
        actions: [
          "Complete GitHub Skills through the pull request merge.",
          "Create the roadmap repo folders: 00_setup through 07_portfolio_projects.",
          "Add a root README with your goal, weekly study cadence, and progress rules.",
        ],
        output: "A GitHub repo with phase folders and an initial README.",
        doneWhen: "You can create a branch, commit a file, open a PR, merge it, and explain what changed.",
      },
      {
        id: "p0-s2",
        title: "Learn just enough shell and Git to work without getting stuck",
        time: "2-4 days",
        purpose: "Build daily workflow fluency, not command memorization.",
        resources: ["r-missing-semester"],
        actions: [
          "Study Missing Semester lessons on shell, shell tools, editors, Git, and debugging.",
          "Practice navigating folders, listing files, moving files, running Python, and using Git status/diff/log.",
          "Write a short notes file with the commands you actually used.",
        ],
        output: "00_setup/terminal_git_notes.md with examples you ran yourself.",
        doneWhen: "You can create folders, run commands, inspect diffs, and recover from a simple Git mistake.",
      },
      {
        id: "p0-s3",
        title: "Set project structure rules you will reuse all year",
        time: "1-2 days",
        purpose: "Make every later project easier to inspect, reproduce, and explain.",
        resources: ["r-cookiecutter"],
        actions: [
          "Skim Cookiecutter Data Science for folder conventions.",
          "Decide where notebooks, source code, data notes, reports, and environment files will live.",
          "Add a README template you will copy into each project folder.",
        ],
        output: "A reusable project README template and environment checklist.",
        doneWhen: "A new project folder has a clear place for data, notebooks, source code, outputs, and notes.",
      },
    ],
    project: {
      title: "Learning Trail Repository",
      brief: "Build the repo that will hold evidence of your learning. This is not busywork; it becomes the audit trail for your portfolio.",
      process: [
        "Create phase folders and a notes file in each folder.",
        "Commit at least one real artifact per phase, not screenshots of course completion.",
        "Use README files to state what you learned, what you built, and what still confuses you.",
        "Keep raw learning notes separate from polished portfolio writeups.",
      ],
      artifacts: ["Root README", "Phase folders", "Environment checklist", "Reusable project README template"],
      acceptance: [
        ["p0-a1", "The repo can be opened by someone else and they can understand the roadmap structure within two minutes."],
        ["p0-a2", "Every phase folder has a purpose and a place for outputs."],
      ],
    },
  },
  "phase-1": {
    steps: [
      {
        id: "p1-s1",
        title: "Build Python syntax and control-flow fluency",
        time: "Week 1-2",
        purpose: "Get comfortable writing small programs before touching data science libraries.",
        resources: ["r-mit-6100l", "r-kaggle-python"],
        actions: [
          "Use MIT 6.100L for the main lectures and exercises.",
          "Use Kaggle Python only when you need quick syntax practice.",
          "Write small scripts using variables, functions, conditionals, loops, lists, dictionaries, and file paths.",
        ],
        output: "01_python/python_basics_practice.py with several small functions.",
        doneWhen: "You can write a function from a plain-English prompt without searching for every line.",
      },
      {
        id: "p1-s2",
        title: "Practice problem decomposition",
        time: "Week 2-4",
        purpose: "Learn to break a messy task into testable steps instead of writing one fragile notebook cell.",
        resources: ["r-mit-6100l"],
        actions: [
          "Choose 3 MIT exercises that require functions and branching.",
          "For each exercise, write the input, output, assumptions, and edge cases before coding.",
          "Refactor repeated logic into functions.",
        ],
        output: "01_python/decomposition_notes.md plus working scripts.",
        doneWhen: "Your code is split into named functions and you can explain each function's job.",
      },
      {
        id: "p1-s3",
        title: "Build the CSV cleaning script",
        time: "Week 4-6",
        purpose: "Turn Python basics into a realistic data task.",
        resources: ["r-mit-6100l", "r-kaggle-python"],
        actions: [
          "Pick a small non-HR CSV dataset.",
          "Write functions to load data, normalize column names, identify missing values, impute or flag them, and export a cleaned CSV.",
          "Print summary statistics before and after cleaning.",
        ],
        output: "01_python/clean_csv.py, sample input, cleaned output, and README.",
        doneWhen: "Running one command creates the cleaned file and the README explains every cleaning choice.",
      },
    ],
    project: {
      title: "CSV Cleaning Script",
      brief: "A small command-line data cleaning project that proves you can use Python outside a tutorial.",
      process: [
        "Start with a domain-neutral dataset so your first project is not HR-only.",
        "Write a plain README before polishing code: dataset source, problem, cleaning rules, how to run.",
        "Keep cleaning choices explicit. Do not silently delete rows without documenting why.",
        "Add example terminal commands and expected output file names.",
      ],
      artifacts: ["clean_csv.py", "raw sample CSV", "cleaned CSV", "README", "summary statistics output"],
      acceptance: [
        ["p1-a1", "The script runs from the terminal without manual notebook steps."],
        ["p1-a2", "The README explains missing-value handling and column-name cleaning."],
      ],
    },
  },
  "phase-2": {
    steps: [
      {
        id: "p2-s1",
        title: "Learn relational foundations before analytics shortcuts",
        time: "Week 1-2",
        purpose: "Understand tables, keys, relationships, normalization, and constraints so joins make sense.",
        resources: ["r-cs50-sql"],
        actions: [
          "Work through CS50 SQL sections on tables, types, primary keys, foreign keys, and joins.",
          "Draw a simple schema for customers, orders, products, and events.",
          "Write 10 queries that answer concrete questions from that schema.",
        ],
        output: "02_sql/schema_practice.sql and schema_notes.md.",
        doneWhen: "You can explain why a join returns too many rows and how keys prevent that.",
      },
      {
        id: "p2-s2",
        title: "Build analytics query patterns",
        time: "Week 2-4",
        purpose: "Practice the SQL patterns used in real analyst and analytics-engineering work.",
        resources: ["r-kaggle-sql", "r-postgres-windows"],
        actions: [
          "Complete Kaggle Intro to SQL, then the Advanced SQL lessons relevant to joins, unions, and analytic functions.",
          "Use PostgreSQL docs to learn windows: row_number, rank, lag, lead, and rolling aggregates.",
          "Create query templates for cohorts, rolling trends, rankings, and time-between-events.",
        ],
        output: "02_sql/analytics_patterns.sql.",
        doneWhen: "You can modify a template for a new metric without rewriting the whole query.",
      },
      {
        id: "p2-s3",
        title: "Create the SQL analysis pack",
        time: "Week 4-6",
        purpose: "Turn SQL practice into portfolio evidence.",
        resources: ["r-cs50-sql", "r-kaggle-sql", "r-postgres-windows"],
        actions: [
          "Use at least one non-HR dataset.",
          "Write queries for MAU, retention by cohort, revenue by segment, attrition by tenure band, event gaps, rolling trends, and rank changes.",
          "Add comments above each query explaining the business question and grain of the output.",
        ],
        output: "02_sql/sql_analysis_pack/ with one file per analysis theme.",
        doneWhen: "Every query has a business question, expected grain, and a short interpretation note.",
      },
    ],
    project: {
      title: "SQL Analysis Pack",
      brief: "A focused collection of reusable analytics queries showing that you can answer business questions directly in SQL.",
      process: [
        "Choose one event or transaction dataset and one workforce-style dataset later only if useful.",
        "Write queries as readable files, not screenshots from a SQL UI.",
        "For each query, document the input tables, output grain, filters, and limitation.",
        "Prefer CTEs and window functions where they make the logic clearer.",
      ],
      artifacts: ["schema notes", "analysis SQL files", "query output samples", "README with metric definitions"],
      acceptance: [
        ["p2-a1", "The analysis pack includes cohort, rolling, ranking, and segmentation queries."],
        ["p2-a2", "A reader can tell what each query measures without running it first."],
      ],
    },
  },
  "phase-3": {
    steps: [
      {
        id: "p3-s1",
        title: "Ground yourself in descriptive statistics and probability",
        time: "Week 1-3",
        purpose: "Build interpretation skills before modeling skills.",
        resources: ["r-openintro", "r-statquest"],
        actions: [
          "Study OpenIntro chapters on data, probability, distributions, sampling, and intervals.",
          "Use StatQuest for topics that need an intuitive explanation.",
          "Create a notes file with examples of mean vs median, variation, sampling bias, and uncertainty.",
        ],
        output: "03_statistics/statistics_foundations.md.",
        doneWhen: "You can explain why a sample estimate is uncertain and what a confidence interval means.",
      },
      {
        id: "p3-s2",
        title: "Connect inference to regression and classification",
        time: "Week 3-6",
        purpose: "Understand what models estimate, how they fail, and how to evaluate them.",
        resources: ["r-islp", "r-statquest", "r-3b1b-linear-algebra"],
        actions: [
          "Use ISLP for regression, classification, resampling, and model evaluation.",
          "Use 3Blue1Brown for linear algebra intuition when matrices or vectors appear.",
          "Write short explanations of overfitting, bias/variance, train/test split, and cross-validation.",
        ],
        output: "03_statistics/model_reasoning_notes.md.",
        doneWhen: "You can explain why a model with high training accuracy may still be useless.",
      },
      {
        id: "p3-s3",
        title: "Write the limitations-first analysis notebook",
        time: "Week 6-8",
        purpose: "Practice the habit mature analysts use: state what the data can and cannot prove.",
        resources: ["r-openintro", "r-islp"],
        actions: [
          "Pick any small dataset with a clear question.",
          "Include summary statistics, visualizations, one statistical test, and one regression model.",
          "Write a limitations section before writing the conclusion.",
        ],
        output: "03_statistics/what_this_data_can_and_cannot_prove.ipynb.",
        doneWhen: "The notebook separates evidence, assumptions, uncertainty, and conclusions.",
      },
    ],
    project: {
      title: "What This Data Can and Cannot Prove",
      brief: "A short analysis notebook designed to show statistical judgment, not just charts.",
      process: [
        "Start with a question that can be partially answered from the data.",
        "Identify the unit of analysis, sample, missingness, and likely biases.",
        "Run one statistical test only if the assumptions are defensible.",
        "Use one regression model to support explanation, then state its limits.",
      ],
      artifacts: ["notebook", "dataset note", "limitations section", "plain-English conclusion"],
      acceptance: [
        ["p3-a1", "The notebook includes a limitations section with at least three concrete limits."],
        ["p3-a2", "The conclusion does not imply causation unless the design supports it."],
      ],
    },
  },
  "phase-4": {
    steps: [
      {
        id: "p4-s1",
        title: "Build the applied Python data stack",
        time: "Week 1-3",
        purpose: "Move from general Python into the daily data science workflow.",
        resources: ["r-harvardx-ds-python", "r-kaggle-learn"],
        actions: [
          "Use HarvardX as the spine for Python data science concepts.",
          "Use Kaggle Pandas and Data Visualization as hands-on practice labs.",
          "Create a notebook with examples of filtering, grouping, merging, plotting, and missing-data checks.",
        ],
        output: "04_data_science/pandas_visualization_practice.ipynb.",
        doneWhen: "You can go from raw CSV to grouped summary and chart without copying a full tutorial.",
      },
      {
        id: "p4-s2",
        title: "Learn baseline modeling and evaluation",
        time: "Week 3-6",
        purpose: "Train simple models responsibly and judge whether they are useful.",
        resources: ["r-google-mlcc", "r-harvardx-ds-python", "r-islp"],
        actions: [
          "Use Google ML Crash Course for supervised learning and responsible AI basics.",
          "Use ISLP when model evaluation or regularization needs more depth.",
          "Practice train/test split, baseline model, cross-validation, and at least two metrics.",
        ],
        output: "04_data_science/modeling_practice.ipynb.",
        doneWhen: "You can explain why the chosen metric fits the business question.",
      },
      {
        id: "p4-s3",
        title: "Build Project 1A with ethical framing from the start",
        time: "Week 6-10",
        purpose: "Create the People Analytics anchor project without making irresponsible claims.",
        resources: ["r-ibm-hr-kaggle", "r-harvardx-ds-python", "r-google-mlcc"],
        actions: [
          "Use the IBM HR dataset or another public/synthetic HR-style dataset.",
          "Create a data dictionary, cleaning notebook, EDA notebook, baseline model, metrics, and limitations.",
          "Write the ethical-use statement before finalizing the model results.",
        ],
        output: "Project 1A folder with notebooks, README, data dictionary, metrics, and ethics note.",
        doneWhen: "The project is framed as aggregate workforce risk analysis, not prediction for employment decisions.",
      },
    ],
    project: {
      title: "Project 1A: People Analytics EDA and Attrition Risk Analysis",
      brief: "Your anchor project. It should show business context, technical execution, and responsible interpretation.",
      process: [
        "Define the stakeholder question: What aggregate patterns appear related to attrition risk?",
        "Create a data dictionary and identify target leakage before modeling.",
        "Clean and explore the data before building any model.",
        "Build a baseline model, evaluate it, and compare it to a simple non-ML baseline.",
        "Write limitations and ethical-use notes in the README and notebook.",
      ],
      artifacts: ["data dictionary", "cleaning notebook", "EDA notebook", "baseline model", "evaluation table", "limitations", "ethical-use statement"],
      acceptance: [
        ["p4-a1", "The README avoids the phrase or implication that you can predict who will quit."],
        ["p4-a2", "The model section includes baseline comparison, metrics, and limitations."],
      ],
    },
  },
  "phase-5": {
    steps: [
      {
        id: "p5-s1",
        title: "Convert analysis questions into dashboard pages",
        time: "Week 1",
        purpose: "Design the dashboard around user decisions instead of dumping charts.",
        resources: ["r-uk-gov-viz"],
        actions: [
          "List the stakeholder questions for Project 1A.",
          "Map each question to one dashboard page and one primary chart or table.",
          "Use the visualization guidance to remove chart types that could mislead.",
        ],
        output: "05_data_visualization/dashboard_plan.md.",
        doneWhen: "Every dashboard page has a user question, primary metric, and limitation.",
      },
      {
        id: "p5-s2",
        title: "Build a Streamlit dashboard prototype",
        time: "Week 2-3",
        purpose: "Create an interactive project demo that can be reused in the portfolio.",
        resources: ["r-streamlit"],
        actions: [
          "Create pages for workforce overview, attrition trends, risk factors, model results, and limitations.",
          "Add filters only where they answer a real question.",
          "Keep the limitations page visible and plain-spoken.",
        ],
        output: "05_data_visualization/streamlit_app/.",
        doneWhen: "A user can move through the dashboard without reading your notebook.",
      },
      {
        id: "p5-s3",
        title: "Optionally translate the dashboard into a BI-style version",
        time: "Optional",
        purpose: "Show business dashboard literacy if your target roles value Power BI.",
        resources: ["r-powerbi"],
        actions: [
          "Complete the beginner Power BI learning path if business-dashboard roles are a priority.",
          "Recreate the same dashboard story with BI-style pages and filters.",
          "Keep the Streamlit version as the code-first artifact.",
        ],
        output: "Optional Power BI notes or dashboard screenshots.",
        doneWhen: "The BI version tells the same story with fewer distractions, not more visuals.",
      },
    ],
    project: {
      title: "Project 1A Dashboard",
      brief: "A stakeholder-facing dashboard that turns the People Analytics analysis into a clear decision-support artifact.",
      process: [
        "Start with the five required pages: overview, trends, risk factors, model results, limitations.",
        "Write the page title as a stakeholder question.",
        "Use KPI cards only for metrics that should be monitored repeatedly.",
        "Include model caveats near the model results, not hidden in a footnote.",
      ],
      artifacts: ["dashboard plan", "Streamlit app", "screenshots", "dashboard README", "limitations page"],
      acceptance: [
        ["p5-a1", "The dashboard has no chart that lacks a decision or interpretation purpose."],
        ["p5-a2", "The limitations and ethical-use page is accessible from the main navigation."],
      ],
    },
  },
  "phase-6": {
    steps: [
      {
        id: "p6-s1",
        title: "Learn the pipeline shape before tools get complex",
        time: "Week 1-3",
        purpose: "Understand ingestion, storage, transformation, quality checks, and serving layers.",
        resources: ["r-de-zoomcamp", "r-duckdb"],
        actions: [
          "Use Data Engineering Zoomcamp modules for Docker, ingestion, orchestration, warehouse, and analytics engineering.",
          "Use DuckDB locally to avoid cloud friction while learning SQL-on-files.",
          "Sketch raw, staging, marts, and dashboard-output layers for Project 1B.",
        ],
        output: "06_data_engineering/pipeline_architecture.md.",
        doneWhen: "You can explain where raw data ends and modeled analytics tables begin.",
      },
      {
        id: "p6-s2",
        title: "Build transformations with dbt-style discipline",
        time: "Week 4-7",
        purpose: "Make transformations modular, tested, and documented.",
        resources: ["r-dbt-fundamentals", "r-de-zoomcamp"],
        actions: [
          "Complete dbt Fundamentals or the relevant dbt module from DE Zoomcamp.",
          "Design staging models, dimensions, and facts for workforce analytics.",
          "Add tests for uniqueness, non-null keys, accepted values, and relationships.",
        ],
        output: "06_data_engineering/dbt_or_sql_models/ with model docs and tests.",
        doneWhen: "Each modeled table has a documented grain and at least one quality check.",
      },
      {
        id: "p6-s3",
        title: "Upgrade Project 1A into Project 1B",
        time: "Week 8-12",
        purpose: "Turn notebooks into an end-to-end analytics pipeline.",
        resources: ["r-de-zoomcamp", "r-duckdb", "r-bigquery-public"],
        actions: [
          "Write an ingestion script for raw public/synthetic HR-style data.",
          "Store raw and cleaned outputs separately.",
          "Build dim_employee, dim_department, dim_manager, fact_employee_month, fact_attrition, fact_engagement, fact_compensation_band, and fact_manager_span.",
          "Use BigQuery public datasets only for warehouse practice if you want cloud reps; monitor query size.",
        ],
        output: "Project 1B pipeline with repeatable run instructions and dashboard-ready outputs.",
        doneWhen: "One documented command or workflow rebuilds the analytics tables from raw data.",
      },
    ],
    project: {
      title: "Project 1B: End-to-End Workforce Analytics Pipeline",
      brief: "A serious analytics-engineering project that proves you can move from raw data to trustworthy dashboard tables.",
      process: [
        "Document the architecture before implementing tools.",
        "Separate ingestion, transformation, validation, and export steps.",
        "Define table grain before writing SQL.",
        "Add data quality checks and include failure examples if possible.",
        "Connect outputs back to the Project 1A dashboard.",
      ],
      artifacts: ["architecture diagram", "ingestion script", "modeled tables", "tests", "data dictionary", "pipeline README"],
      acceptance: [
        ["p6-a1", "The pipeline can be rerun from raw data without manual notebook editing."],
        ["p6-a2", "Every dimension and fact table has grain, keys, and quality checks documented."],
      ],
    },
  },
  "phase-7": {
    steps: [
      {
        id: "p7-s1",
        title: "Separate training code from notebook exploration",
        time: "Week 1-3",
        purpose: "Move toward repeatable ML engineering rather than one-off notebook work.",
        resources: ["r-ml-zoomcamp", "r-google-mlcc-p7", "r-islp-p7"],
        actions: [
          "Use ML Zoomcamp modules on regression, classification, validation, and model selection.",
          "Turn the Project 1A baseline model into a training script.",
          "Save metrics and the model artifact in predictable locations.",
        ],
        output: "07_portfolio_projects/workforce_model_service/train.py.",
        doneWhen: "Running the script trains the model and writes metrics without opening a notebook.",
      },
      {
        id: "p7-s2",
        title: "Package the model behind an API",
        time: "Week 4-7",
        purpose: "Show that you can serve predictions responsibly and test the interface.",
        resources: ["r-ml-zoomcamp"],
        actions: [
          "Follow ML Zoomcamp's FastAPI and Docker deployment sections selectively.",
          "Build a FastAPI endpoint that accepts aggregate-safe input examples.",
          "Add example request and response JSON.",
          "Containerize the service with a Dockerfile.",
        ],
        output: "FastAPI app, Dockerfile, example request, and service README.",
        doneWhen: "A documented API request returns a prediction and explanation fields.",
      },
      {
        id: "p7-s3",
        title: "Write the model card before presenting results",
        time: "Week 8-10",
        purpose: "Make responsible use constraints explicit.",
        resources: ["r-google-mlcc-p7", "r-islp-p7"],
        actions: [
          "Document training data, target, features, metrics, intended use, out-of-scope use, and risks.",
          "State that the model supports aggregate workforce planning and exploratory analysis only.",
          "Add an example dashboard or app section that consumes predictions with caveats.",
        ],
        output: "model_card.md and prediction-consuming demo.",
        doneWhen: "The service documentation says what the model must not be used for.",
      },
    ],
    project: {
      title: "Project 1C: Attrition Risk Model Service",
      brief: "A packaged model service that demonstrates ML engineering while keeping workforce-risk ethics explicit.",
      process: [
        "Promote only the baseline model if it is easier to explain and maintain.",
        "Use scripts for training and prediction; keep notebooks for exploration only.",
        "Add tests or example requests for valid and invalid inputs.",
        "Document intended use and prohibited use in the README and model card.",
      ],
      artifacts: ["training script", "saved model", "FastAPI endpoint", "Dockerfile", "example API request", "model card"],
      acceptance: [
        ["p7-a1", "The model can be trained and served without manual notebook execution."],
        ["p7-a2", "The model card clearly prohibits automated employment decisions."],
      ],
    },
  },
  "phase-8": {
    steps: [
      {
        id: "p8-s1",
        title: "Add experiment tracking and reproducibility",
        time: "Week 1-3",
        purpose: "Make model changes auditable instead of relying on memory.",
        resources: ["r-mlops-zoomcamp", "r-made-with-ml"],
        actions: [
          "Use MLOps Zoomcamp modules on experiment tracking and model management.",
          "Track parameters, metrics, data version notes, and model artifacts.",
          "Create a repeatable training command with environment instructions.",
        ],
        output: "Experiment tracking setup and reproducibility notes.",
        doneWhen: "You can compare two model runs and explain why one was selected.",
      },
      {
        id: "p8-s2",
        title: "Design deployment and monitoring controls",
        time: "Week 3-6",
        purpose: "Think through lifecycle risk before pretending a model is production-ready.",
        resources: ["r-mlops-zoomcamp", "r-nist-ai-rmf"],
        actions: [
          "Study deployment and monitoring sections from MLOps Zoomcamp.",
          "Use NIST AI RMF language to identify risks, affected stakeholders, and control points.",
          "Write monitoring checks for data drift, prediction distribution changes, missing values, and performance review cadence.",
        ],
        output: "monitoring_plan.md and risk_assessment.md.",
        doneWhen: "The monitoring plan names signals, thresholds or review triggers, and owner actions.",
      },
      {
        id: "p8-s3",
        title: "Package the MLOps layer into Project 1C",
        time: "Week 6-8",
        purpose: "Convert MLOps learning into portfolio evidence.",
        resources: ["r-mlops-zoomcamp", "r-made-with-ml", "r-nist-ai-rmf"],
        actions: [
          "Add experiment results, selected model version, evaluation report, model card, risk assessment, and retraining plan.",
          "Document what is implemented versus what is a design plan.",
          "Keep the scope honest: this is production-thinking evidence, not a claim of enterprise production deployment.",
        ],
        output: "MLOps documentation layer in Project 1C.",
        doneWhen: "A reviewer can see how the model would be monitored, reviewed, and retired or retrained.",
      },
    ],
    project: {
      title: "MLOps Layer for Project 1",
      brief: "A production-thinking layer that makes your model reproducible, documented, monitored, and risk-aware.",
      process: [
        "Start with experiment tracking and versioning, then monitoring, then risk controls.",
        "Tie every monitoring signal to a concrete action.",
        "Use NIST AI RMF to write risks in professional language.",
        "Document self-paced course status honestly; do not imply certificate completion unless earned.",
      ],
      artifacts: ["experiment log", "evaluation report", "monitoring plan", "model card", "risk assessment", "retraining plan"],
      acceptance: [
        ["p8-a1", "The selected model version and evaluation report are linked together."],
        ["p8-a2", "The risk assessment includes people, organizational, and technical risks."],
      ],
    },
  },
  "phase-9": {
    steps: [
      {
        id: "p9-s1",
        title: "Choose the second project domain deliberately",
        time: "Week 1",
        purpose: "Prove transferability without chasing every modern AI topic.",
        resources: ["r-nyc-taxi", "r-spotify-api-warning"],
        actions: [
          "Pick operations, product, gaming, or public-sector analytics unless you have clean music/NLP data access.",
          "If considering music, read the Spotify API change notice and avoid restricted audio-feature dependencies.",
          "Write a one-page project brief with question, dataset, users, and expected outputs.",
        ],
        output: "transferability_project_brief.md.",
        doneWhen: "The project has clean data access and does not depend on a restricted or fragile API.",
      },
      {
        id: "p9-s2",
        title: "Use advanced AI only if it serves the project",
        time: "Optional",
        purpose: "Avoid derailing the core roadmap with deep learning for its own sake.",
        resources: ["r-fastai", "r-hf-llm", "r-fsdl"],
        actions: [
          "Use fast.ai if the project benefits from deep learning.",
          "Use Hugging Face if the project requires NLP or LLM workflows.",
          "Use Full Stack Deep Learning for production-design perspective after a working prototype exists.",
        ],
        output: "Optional advanced-AI prototype notes.",
        doneWhen: "The advanced method solves a real project need better than a simpler method.",
      },
      {
        id: "p9-s3",
        title: "Build the transferability project MVP",
        time: "4-8 weeks",
        purpose: "Show that your skills are not limited to HR data.",
        resources: ["r-nyc-taxi"],
        actions: [
          "For operations, use NYC TLC data to build demand, trip, or revenue trend analysis.",
          "Include SQL, feature engineering, a simple model or forecast, and a dashboard or written report.",
          "Reuse the project structure and README standards from earlier phases.",
        ],
        output: "Second project MVP with data pipeline or analysis, model if useful, and stakeholder-facing output.",
        doneWhen: "The project demonstrates a different domain, different data shape, and clear business interpretation.",
      },
    ],
    project: {
      title: "Transferability Project",
      brief: "A second serious project outside People Analytics. It proves your methods transfer to another domain.",
      process: [
        "Pick one domain and one primary question.",
        "Prioritize clean public data access over novelty.",
        "Reuse your SQL, statistics, dashboarding, and pipeline skills.",
        "Add ML only if it improves the project question.",
      ],
      artifacts: ["project brief", "dataset note", "analysis or pipeline", "dashboard/report", "README"],
      acceptance: [
        ["p9-a1", "The project does not depend on inaccessible or legally unclear data."],
        ["p9-a2", "The README explains why this project proves transferability beyond HR."],
      ],
    },
  },
  "phase-10": {
    steps: [
      {
        id: "p10-s1",
        title: "Polish the flagship project for reviewer usability",
        time: "Week 1-2",
        purpose: "Make the project easy to inspect quickly.",
        resources: ["r-cookiecutter-p10", "r-streamlit-p10"],
        actions: [
          "Use Cookiecutter principles to organize folders and naming.",
          "Write a flagship README with problem, data, architecture, methods, results, limitations, and how to run.",
          "Link to the dashboard/demo and key notebooks or scripts.",
        ],
        output: "Polished flagship project README and structure.",
        doneWhen: "A reviewer can understand the project in five minutes and run it with documented steps.",
      },
      {
        id: "p10-s2",
        title: "Polish the transferability project",
        time: "Week 2-4",
        purpose: "Show domain range without making the portfolio feel scattered.",
        resources: ["r-cookiecutter-p10", "r-streamlit-p10", "r-powerbi-p10"],
        actions: [
          "Write the transferability README using the same structure as the flagship.",
          "Add a dashboard, report, or screenshots that make the outcome visible.",
          "Make clear what skills transfer from the flagship project.",
        ],
        output: "Polished second project with README and demo/report.",
        doneWhen: "The second project has its own business question and does not look like a tutorial clone.",
      },
      {
        id: "p10-s3",
        title: "Write career-facing summaries",
        time: "Week 4-6",
        purpose: "Translate technical work into hiring-facing proof.",
        resources: ["r-cookiecutter-p10"],
        actions: [
          "Write resume bullets for each project using action, tool, output, and business value.",
          "Write a short LinkedIn/project summary for each serious project.",
          "Create a portfolio index README linking to both projects and this learning trail.",
        ],
        output: "Resume bullets, LinkedIn summaries, and portfolio index README.",
        doneWhen: "The portfolio says what you can do, why it matters, and where to inspect the proof.",
      },
    ],
    project: {
      title: "Portfolio Packaging",
      brief: "Turn the year of work into evidence that a reviewer can understand quickly.",
      process: [
        "Polish two serious projects, not ten weak ones.",
        "Use consistent README structure across repos.",
        "Include architecture diagrams where system design matters.",
        "Make limitations and ethical considerations visible, especially for the workforce project.",
      ],
      artifacts: ["flagship README", "transferability README", "portfolio index", "architecture diagrams", "resume bullets", "project summaries"],
      acceptance: [
        ["p10-a1", "The portfolio has two serious projects with clear setup and inspection paths."],
        ["p10-a2", "The career summary positions you beyond HR-only work."],
      ],
    },
  },
};

const phaseSpecs = {
  "phase-0": {
    focus: [
      "Git mental model: working tree, staging area, commits, branches, remotes, pull requests.",
      "Terminal basics: pwd, ls, cd, mkdir, touch, cp, mv, rm with caution, cat, less, head, tail, find or rg.",
      "Environment basics: Python version, virtual environments, package installs, requirements files.",
      "Markdown documentation: README structure, headings, code blocks, links, screenshots, and run instructions.",
      "Reproducible project layout: separating raw data, notebooks, scripts, reports, and docs.",
    ],
    avoid: [
      "Custom dotfile rabbit holes.",
      "Advanced Git workflows before you can commit, branch, merge, and inspect diffs.",
      "Overengineering the repo before you have real project artifacts.",
    ],
    resourceUse: [
      "Use GitHub Skills first because it gives immediate reps with commits, branches, and PRs.",
      "Use Missing Semester for shell, editor, Git, debugging, and workflow topics only; skip lectures that are not immediately useful.",
      "Use Cookiecutter as a reference for project shape, not a tutorial to complete.",
    ],
    repoStructure: [
      "data-science-engineering-roadmap/",
      "  README.md",
      "  00_setup/",
      "    terminal_git_notes.md",
      "    environment_checklist.md",
      "    project_readme_template.md",
      "  01_python/",
      "  02_sql/",
      "  03_statistics/",
      "  04_data_science/",
      "  05_visualization/",
      "  06_data_engineering/",
      "  07_ml_engineering/",
      "  08_mlops/",
      "  09_transferability_project/",
      "  10_portfolio/",
    ],
    spec: {
      objective: "Create the durable workspace and documentation system for the full year.",
      inputs: ["GitHub account", "local terminal", "Python 3", "VS Code or Cursor", "roadmap app"],
      requirements: [
        "Root README states target role, roadmap sequence, weekly cadence, and project-output rule.",
        "Each phase folder has a README or notes file before the phase starts.",
        "Environment checklist records Python version, editor, package manager, and how to activate a virtual environment.",
        "Project README template includes problem, data, methods, how to run, results, limitations, and next steps.",
      ],
      qualityBar: [
        "A reviewer can understand the repo purpose without reading the roadmap app.",
        "You can reproduce the same folder setup on a new machine.",
        "No real work data, credentials, private files, or local-only absolute paths are committed.",
      ],
    },
  },
  "phase-1": {
    focus: [
      "Python syntax: variables, functions, conditionals, loops, lists, dictionaries, tuples, strings.",
      "File I/O: reading and writing CSV/text files, relative paths, basic encoding awareness.",
      "Decomposition: turning a task into small functions with clear inputs and outputs.",
      "Debugging: reading tracebacks, printing intermediate values, isolating failing logic.",
      "Basic data cleaning without Pandas first: column names, missing values, type conversion, summary stats.",
    ],
    avoid: [
      "Heavy algorithms, recursion, and competitive programming as prerequisites for data work.",
      "Object-oriented design beyond understanding simple classes if MIT introduces them.",
      "Jumping to Pandas before you can explain basic Python control flow.",
    ],
    resourceUse: [
      "Use MIT 6.100L as the conceptual spine for computational thinking.",
      "Use Kaggle Python as quick syntax reinforcement when MIT feels too abstract.",
      "Use your own CSV script as the transfer task: every concept should improve that script.",
    ],
    repoStructure: [
      "01_python/",
      "  README.md",
      "  notes/",
      "    python_basics.md",
      "    debugging_notes.md",
      "  scripts/",
      "    clean_csv.py",
      "  data/",
      "    raw/",
      "    processed/",
      "  outputs/",
      "    summary_statistics.txt",
    ],
    spec: {
      objective: "Build a command-line CSV cleaning script that proves basic Python fluency.",
      inputs: ["One small domain-neutral CSV", "simple cleaning rules documented in README"],
      requirements: [
        "Accept an input file path and output file path or document fixed paths clearly.",
        "Normalize column names to predictable snake_case.",
        "Report missing values by column before cleaning.",
        "Apply explicit missing-value handling rules: keep, flag, impute, or drop with explanation.",
        "Write a cleaned CSV and a summary statistics output.",
        "Keep core logic in functions, not one long procedural block.",
      ],
      qualityBar: [
        "Script runs from terminal without notebook state.",
        "README includes dataset source, cleaning assumptions, run command, and expected outputs.",
        "Cleaning choices are documented and defensible.",
      ],
    },
  },
  "phase-2": {
    focus: [
      "Relational model: tables, rows, columns, primary keys, foreign keys, constraints, normalization.",
      "Analytics SQL: SELECT, WHERE, GROUP BY, HAVING, joins, CTEs, subqueries, CASE, date logic.",
      "Window functions: row_number, rank, dense_rank, lag, lead, running totals, rolling averages.",
      "Metric grain: user-day, customer-month, employee-month, event-level, account-level.",
      "Cohorts and retention: cohort definition, activity windows, numerator/denominator discipline.",
    ],
    avoid: [
      "Database administration depth before analytics fluency.",
      "Query cleverness that makes logic unreadable.",
      "Using Pandas for analysis that should be expressed directly in SQL.",
    ],
    resourceUse: [
      "Use CS50 SQL for modeling, constraints, keys, and database fundamentals.",
      "Use Kaggle SQL for fast hands-on query practice.",
      "Use PostgreSQL window docs when a metric requires row-relative calculations.",
    ],
    repoStructure: [
      "02_sql/",
      "  README.md",
      "  schema/",
      "    example_schema.sql",
      "    schema_notes.md",
      "  queries/",
      "    01_monthly_active_users.sql",
      "    02_cohort_retention.sql",
      "    03_revenue_by_segment.sql",
      "    04_attrition_by_tenure_band.sql",
      "    05_time_between_events.sql",
      "    06_rolling_trend.sql",
      "    07_rank_change_over_time.sql",
      "  outputs/",
      "    sample_results/",
    ],
    spec: {
      objective: "Create a reusable analytics SQL pack that demonstrates business metric reasoning.",
      inputs: ["At least one non-HR public dataset", "Optional HR-style dataset later for attrition practice"],
      requirements: [
        "Every query starts with a comment naming the business question.",
        "Every query states output grain and key assumptions.",
        "Include at least one join-heavy query, one cohort query, one window-function query, and one date logic query.",
        "Include sample output or screenshots only as supporting evidence; SQL files remain the source artifact.",
        "Use CTEs to separate raw filtering, aggregation, and final presentation.",
      ],
      qualityBar: [
        "A reviewer can read each query and understand what metric it produces.",
        "No query hides denominator choices.",
        "Cohort and retention logic is explicit enough to audit.",
      ],
    },
  },
  "phase-3": {
    focus: [
      "Descriptive stats: center, spread, outliers, missingness, distributions.",
      "Probability and sampling: randomness, sampling bias, uncertainty, common distributions.",
      "Inference: confidence intervals, hypothesis tests, p-values, practical vs statistical significance.",
      "Regression reasoning: assumptions, residuals, confounding, interpretation, prediction vs explanation.",
      "Model validation: train/test split, cross-validation, bias/variance, overfitting.",
    ],
    avoid: [
      "Proof-heavy math that delays applied statistical judgment.",
      "Running tests because a library makes them easy.",
      "Writing conclusions stronger than the dataset design supports.",
    ],
    resourceUse: [
      "Use OpenIntro for the statistics foundation and exercises.",
      "Use ISLP for regression, classification, resampling, and evaluation.",
      "Use StatQuest and 3Blue1Brown when intuition breaks down.",
    ],
    repoStructure: [
      "03_statistics/",
      "  README.md",
      "  notes/",
      "    inference_notes.md",
      "    model_evaluation_notes.md",
      "  notebooks/",
      "    what_this_data_can_and_cannot_prove.ipynb",
      "  reports/",
      "    limitations_summary.md",
    ],
    spec: {
      objective: "Produce a limitations-first analysis that proves statistical maturity.",
      inputs: ["One dataset with a meaningful but bounded question"],
      requirements: [
        "State the unit of analysis and sample before charts.",
        "Include missingness and distribution checks.",
        "Use one statistical test with assumptions stated.",
        "Use one regression model with interpretation and diagnostics appropriate for the scope.",
        "Separate evidence, assumptions, limitations, and conclusions.",
      ],
      qualityBar: [
        "The conclusion does not imply causation without design support.",
        "Limitations are concrete, not generic disclaimers.",
        "The notebook explains uncertainty in plain English.",
      ],
    },
  },
  "phase-4": {
    focus: [
      "Pandas and NumPy: selection, grouping, merging, reshaping, missing data, feature creation.",
      "Visualization for EDA: distributions, relationships, segmentation, time trends, leakage checks.",
      "Supervised learning: baseline models, train/test split, cross-validation, regularization.",
      "Evaluation: classification metrics, confusion matrix, ROC/PR tradeoffs, calibration awareness.",
      "Responsible People Analytics: aggregate patterns, ethical use, leakage, fairness concerns, prohibited uses.",
    ],
    avoid: [
      "Optimizing model performance before understanding the data.",
      "Claiming individual attrition prediction as a decision tool.",
      "Using every feature without thinking about leakage or ethics.",
    ],
    resourceUse: [
      "Use HarvardX for the applied data science flow, but do not depend on audit-only graded access.",
      "Use Kaggle Learn for targeted Pandas, visualization, and ML practice.",
      "Use Google ML Crash Course for evaluation and responsible AI framing.",
      "Use ISLP when you need deeper statistical reasoning behind models.",
    ],
    repoStructure: [
      "04_data_science/project_1a_people_analytics/",
      "  README.md",
      "  data/",
      "    raw/",
      "    interim/",
      "    processed/",
      "  notebooks/",
      "    01_data_dictionary_and_audit.ipynb",
      "    02_cleaning.ipynb",
      "    03_eda.ipynb",
      "    04_baseline_model.ipynb",
      "  reports/",
      "    limitations.md",
      "    ethical_use_statement.md",
      "    evaluation_summary.md",
      "  src/",
      "    features.py",
      "    evaluate.py",
    ],
    spec: {
      objective: "Build Project 1A: People Analytics EDA and Attrition Risk Analysis.",
      inputs: ["IBM HR Analytics dataset or another public/synthetic HR-style dataset"],
      requirements: [
        "Create a data dictionary with field meaning, type, missingness, and whether the field could leak target information.",
        "Perform cleaning in a separate notebook or script before EDA.",
        "EDA must cover workforce composition, attrition distribution, tenure, compensation band, department/job role, manager or engagement proxies if available.",
        "Build a simple baseline before any complex model.",
        "Evaluate with metrics that fit class imbalance and business use: confusion matrix, precision/recall, ROC-AUC or PR-AUC as appropriate.",
        "Include an ethical-use statement that forbids automated employment decisions.",
      ],
      qualityBar: [
        "The project reads as aggregate workforce planning, not employee surveillance.",
        "Model limitations are shown next to model results.",
        "A nontechnical reader can understand what the model can and cannot support.",
      ],
    },
  },
  "phase-5": {
    focus: [
      "Dashboard information architecture: pages, questions, filters, hierarchy, navigation.",
      "Chart choice: bars, lines, distributions, scatterplots, tables, and when not to chart.",
      "KPI design: metric definition, time window, comparison period, and caveats.",
      "Stakeholder writing: insight, evidence, implication, limitation.",
      "Accessibility: readable labels, color restraint, clear legends, no misleading axes.",
    ],
    avoid: [
      "Decorative dashboards that do not support decisions.",
      "Too many filters, too many charts, or hidden limitations.",
      "Putting model results in front of users without caveats.",
    ],
    resourceUse: [
      "Use UK Government visualization guidance before building to shape the dashboard plan.",
      "Use Streamlit docs while implementing the dashboard.",
      "Use Power BI only if target roles value business BI; do not let it replace the code-first demo.",
    ],
    repoStructure: [
      "05_visualization/project_1a_dashboard/",
      "  README.md",
      "  dashboard_plan.md",
      "  app.py",
      "  pages/",
      "    1_Workforce_Overview.py",
      "    2_Attrition_Trends.py",
      "    3_Risk_Factors.py",
      "    4_Model_Results.py",
      "    5_Limitations_and_Ethics.py",
      "  assets/",
      "  screenshots/",
    ],
    spec: {
      objective: "Create a stakeholder-facing dashboard for Project 1A.",
      inputs: ["Processed Project 1A data", "evaluation summary", "limitations and ethics notes"],
      requirements: [
        "Minimum pages: workforce overview, attrition trends, risk factor exploration, model results, limitations and ethical use.",
        "Each page has a stakeholder question at the top.",
        "Filters are limited to fields that change interpretation meaningfully.",
        "KPI cards include definitions and date/window assumptions.",
        "Model results page includes threshold caveats and prohibited uses.",
      ],
      qualityBar: [
        "A stakeholder can understand the main insight without opening notebooks.",
        "No chart exists only because it looks interesting.",
        "Limitations are visible in the dashboard, not only in the repo.",
      ],
    },
  },
  "phase-6": {
    focus: [
      "Data pipeline architecture: raw, staging, intermediate, marts, exports.",
      "Ingestion: CSV/JSON/parquet, APIs, schema drift, idempotency, logging.",
      "Warehousing: fact/dimension modeling, grain, surrogate keys, relationships.",
      "dbt/analytics engineering: models, sources, tests, docs, lineage.",
      "Data quality: uniqueness, not-null, accepted values, referential integrity, freshness.",
      "Orchestration concepts: scheduling, retries, dependencies, backfills.",
    ],
    avoid: [
      "Kubernetes, advanced Terraform, and cloud networking as year-one blockers.",
      "Streaming complexity unless your project genuinely requires it.",
      "Pipelines that cannot be rerun from raw data.",
    ],
    resourceUse: [
      "Use Data Engineering Zoomcamp as the main practical spine; treat it self-paced unless cohort timing fits.",
      "Use dbt Fundamentals specifically for transformations, tests, and docs.",
      "Use DuckDB locally for low-friction analytical SQL.",
      "Use BigQuery public datasets for warehouse practice only with cost awareness.",
    ],
    repoStructure: [
      "06_data_engineering/project_1b_workforce_pipeline/",
      "  README.md",
      "  docker-compose.yml",
      "  data/",
      "    raw/",
      "    processed/",
      "  src/",
      "    ingest.py",
      "    validate.py",
      "  warehouse/",
      "    staging/",
      "    marts/",
      "  dbt/",
      "    models/",
      "      staging/",
      "      marts/",
      "    tests/",
      "    docs/",
      "  reports/",
      "    architecture.md",
      "    data_quality_report.md",
    ],
    spec: {
      objective: "Upgrade Project 1A into Project 1B: an end-to-end workforce analytics pipeline.",
      inputs: ["Raw public/synthetic HR-style data", "optional generated monthly snapshots"],
      requirements: [
        "Ingestion script loads raw data and writes immutable raw or bronze output.",
        "Transformations create documented staging models and analytics marts.",
        "Required tables: dim_employee, dim_department, dim_manager, fact_employee_month, fact_attrition, fact_engagement, fact_compensation_band, fact_manager_span.",
        "Every fact table states grain and keys.",
        "Data quality checks cover uniqueness, not-null keys, accepted values, and relationships.",
        "A dashboard-ready export is produced for Phase 5/Project 1A dashboard integration.",
      ],
      qualityBar: [
        "One documented command or workflow rebuilds outputs from raw data.",
        "The pipeline separates raw, transformed, and presentation layers.",
        "Quality checks fail loudly and are documented.",
      ],
    },
  },
  "phase-7": {
    focus: [
      "ML engineering structure: training scripts, prediction functions, artifacts, configs, and tests.",
      "Model packaging: serialization, dependency management, input schema, output schema.",
      "FastAPI basics: request models, response models, validation, docs endpoint.",
      "Docker basics: Dockerfile, image build, environment variables, predictable runtime.",
      "Responsible model serving: examples, prohibited uses, explainability fields, limitations.",
    ],
    avoid: [
      "Serving a model before it has a clear intended use.",
      "Complex deployment platforms before local Docker works.",
      "Chasing accuracy improvements that make the model harder to explain.",
    ],
    resourceUse: [
      "Use ML Zoomcamp selectively for validation, deployment, FastAPI, Docker, and service structure.",
      "Use Google ML Crash Course and ISLP to keep model interpretation honest.",
      "Return to Project 1A metrics before deciding what model is worth packaging.",
    ],
    repoStructure: [
      "07_ml_engineering/project_1c_model_service/",
      "  README.md",
      "  Dockerfile",
      "  requirements.txt",
      "  src/",
      "    train.py",
      "    predict.py",
      "    schemas.py",
      "    app.py",
      "  models/",
      "    model.pkl",
      "  tests/",
      "    test_predict.py",
      "  examples/",
      "    request.json",
      "    response.json",
      "  docs/",
      "    model_card.md",
      "    ethical_limitations.md",
    ],
    spec: {
      objective: "Package the attrition-risk baseline as a responsible model service.",
      inputs: ["Clean Project 1B analytics table or Project 1A processed dataset"],
      requirements: [
        "Training script saves model artifact, metrics, feature list, and timestamp.",
        "Prediction function accepts a documented input schema.",
        "FastAPI endpoint returns prediction, score/probability if appropriate, and limitation text or explanation metadata.",
        "Dockerfile builds and runs the API locally.",
        "Examples include valid request, invalid request, and expected response.",
        "Model card covers intended use, out-of-scope use, data, metrics, limitations, and ethical risks.",
      ],
      qualityBar: [
        "No notebook execution is required to serve the model.",
        "The service can be tested with a documented curl command.",
        "The documentation explicitly forbids automated employment decisions.",
      ],
    },
  },
  "phase-8": {
    focus: [
      "Experiment tracking: parameters, metrics, artifacts, run comparison, selected model version.",
      "Reproducibility: environment, data version notes, random seeds, training command.",
      "Monitoring: data drift, prediction distribution, missingness, schema changes, performance review.",
      "Model governance: model card, risk assessment, retraining criteria, retirement criteria.",
      "Responsible AI controls: stakeholder harms, misuse, human review, documentation.",
    ],
    avoid: [
      "Pretending a local project is enterprise production.",
      "Adding MLOps tools without explaining the control they provide.",
      "Monitoring dashboards that do not trigger decisions.",
    ],
    resourceUse: [
      "Use MLOps Zoomcamp self-paced for experiment tracking, deployment, and monitoring concepts.",
      "Use Made With ML for production ML engineering discipline.",
      "Use NIST AI RMF to write risk controls in professional language.",
    ],
    repoStructure: [
      "08_mlops/project_1c_mlops_layer/",
      "  README.md",
      "  experiments/",
      "    experiment_log.md",
      "    selected_model.md",
      "  reports/",
      "    evaluation_report.md",
      "    monitoring_plan.md",
      "    risk_assessment.md",
      "    retraining_plan.md",
      "  docs/",
      "    model_card.md",
      "    governance_notes.md",
    ],
    spec: {
      objective: "Add production-thinking documentation and tracking around Project 1C.",
      inputs: ["Model service from Phase 7", "evaluation results", "risk notes"],
      requirements: [
        "Track at least three model runs with parameters and metrics.",
        "Select one model version and document why it was chosen.",
        "Write an evaluation report that includes metric tradeoffs and limitations.",
        "Write a monitoring plan with signals, review cadence, triggers, and actions.",
        "Write a risk assessment using NIST AI RMF-style language.",
        "Write a retraining plan and model retirement criteria.",
      ],
      qualityBar: [
        "Each monitoring signal maps to an action.",
        "The risk assessment includes people, organizational, and technical risks.",
        "The README distinguishes implemented controls from proposed production controls.",
      ],
    },
  },
  "phase-9": {
    focus: [
      "Transferability: applying the same analysis/pipeline/modeling process to a non-HR domain.",
      "Dataset selection: public, cleanly licensed, reliable, accessible, and large enough to be interesting.",
      "Operations/product/gaming/public-sector metrics: demand, retention, funnels, sessions, cohorts, forecasting.",
      "Advanced AI only when justified: deep learning, NLP, or LLMs should serve the project question.",
      "Data access risk: API restrictions, terms of use, rate limits, and reproducibility.",
    ],
    avoid: [
      "Choosing a project because it sounds trendy rather than because the data supports it.",
      "Building around restricted Spotify audio features without confirmed access.",
      "Adding LLMs or deep learning when SQL/statistics would answer the question better.",
    ],
    resourceUse: [
      "Use NYC TLC data as the safest operations project default.",
      "Use fast.ai only if deep learning is directly useful.",
      "Use Hugging Face only for a clean NLP/LLM use case.",
      "Use Full Stack Deep Learning later for production design patterns.",
    ],
    repoStructure: [
      "09_transferability_project/",
      "  README.md",
      "  project_brief.md",
      "  data/",
      "    raw/",
      "    processed/",
      "  notebooks/",
      "    01_data_audit.ipynb",
      "    02_analysis.ipynb",
      "    03_model_or_forecast.ipynb",
      "  src/",
      "  dashboard_or_report/",
      "  reports/",
      "    dataset_note.md",
      "    limitations.md",
    ],
    spec: {
      objective: "Build a second serious project outside People Analytics.",
      inputs: ["Recommended default: NYC TLC trip data", "Alternative: clean public product/gaming/public-sector dataset"],
      requirements: [
        "Write a project brief before analysis: domain, user, question, dataset, expected output.",
        "Include SQL or SQL-like transformations.",
        "Include at least one statistical or modeling component only if it serves the question.",
        "Produce a dashboard, written report, or app that communicates the answer.",
        "Explain how this project proves transferability from the flagship project.",
      ],
      qualityBar: [
        "The project has a different data shape or domain than People Analytics.",
        "Data access is reproducible and legally clean.",
        "The README makes the business question and outcome obvious.",
      ],
    },
  },
  "phase-10": {
    focus: [
      "Portfolio usability: README clarity, setup instructions, diagrams, screenshots, demos.",
      "Technical storytelling: problem, data, method, result, limitation, business value.",
      "Architecture communication: pipeline diagrams, table lineage, model-service diagrams.",
      "Career packaging: resume bullets, LinkedIn summaries, project index.",
      "Selective polish: two serious projects, not a cluttered list of unfinished exercises.",
    ],
    avoid: [
      "Portfolio pages that are just tool lists.",
      "Overstating production readiness, model reliability, or domain expertise.",
      "Hiding limitations because you think they weaken the project.",
    ],
    resourceUse: [
      "Use Cookiecutter to clean structure and naming.",
      "Use Streamlit docs for demo polish where useful.",
      "Use Power BI only if it strengthens the target role story.",
    ],
    repoStructure: [
      "10_portfolio/",
      "  README.md",
      "  flagship_project_summary.md",
      "  transferability_project_summary.md",
      "  resume_bullets.md",
      "  linkedin_summaries.md",
      "  diagrams/",
      "    workforce_platform_architecture.png",
      "    model_service_flow.png",
      "    transferability_project_architecture.png",
    ],
    spec: {
      objective: "Package the work into reviewer-ready evidence.",
      inputs: ["Flagship project", "transferability project", "roadmap learning trail"],
      requirements: [
        "Portfolio index links to both serious projects and explains why each exists.",
        "Each project README includes problem, data, architecture, methods, results, limitations, and how to run.",
        "Each project has at least one visual artifact: dashboard screenshot, architecture diagram, or report preview.",
        "Resume bullets use action, technical method, output, and business value.",
        "LinkedIn/project summaries are concise and do not overclaim.",
      ],
      qualityBar: [
        "A reviewer can inspect the best work without hunting through folders.",
        "The story positions you beyond HR-only work.",
        "Limitations and ethics read as professional judgment, not weakness.",
      ],
    },
  },
};

roadmap.forEach((phase) => {
  Object.assign(phase, phaseGuides[phase.id], phaseSpecs[phase.id]);
});

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
  selectedProjectId: "project-1a",
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

function projectById(id) {
  return projects.find((project) => project.id === id) || projects[0];
}

function phasesForProject(project) {
  return project.phaseIds.map(phaseById);
}

function checkableIdsForPhase(phase) {
  return [
    ...(phase.steps || []).map((step) => step.id),
    ...phase.outcomes.map(([id]) => id),
    ...phase.deliverables.map(([id]) => id),
    ...(phase.project?.acceptance || []).map(([id]) => id),
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
  const undoneStep = (active.steps || []).find((step) => !state.done[step.id]);
  if (undoneStep) return undoneStep.title;
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
            ${renderPhaseHandoff(phase)}
            ${renderPhaseBriefing(phase)}
            ${renderLearningPath(phase)}
            ${renderProjectGuide(phase)}
            ${renderChecks("Competency Checks", phase.outcomes, "target")}
          </div>
          <aside class="phase-side">
            <section class="section-card">
              <div class="section-title">
                <h3>Use These Now</h3>
                <span class="pill">${phase.resources.length}</span>
              </div>
              ${renderCompactResourceList(phase)}
            </section>
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

function renderPhaseBriefing(phase) {
  return `
    <section class="section-card phase-briefing">
      <div class="section-title">
        <h3>What To Focus On</h3>
        <span class="pill">Study targets</span>
      </div>
      <div class="briefing-grid">
        <div>
          <strong>Core Topics</strong>
          ${renderBulletList(phase.focus || [])}
        </div>
        <div>
          <strong>Use The Resources This Way</strong>
          ${renderBulletList(phase.resourceUse || [])}
        </div>
        <div>
          <strong>Do Not Overfocus On</strong>
          ${renderBulletList(phase.avoid || [])}
        </div>
      </div>
    </section>
  `;
}

function renderPhaseHandoff(phase) {
  const index = roadmap.findIndex((item) => item.id === phase.id);
  const previous = index > 0 ? roadmap[index - 1] : null;
  const next = index < roadmap.length - 1 ? roadmap[index + 1] : null;

  return `
    <section class="flow-card">
      <div class="flow-node ${previous ? "" : "is-muted"}">
        <span class="flow-label">Previous</span>
        ${
          previous
            ? `<button type="button" data-action="select-phase" data-phase-id="${previous.id}">Phase ${previous.number}: ${escapeHtml(previous.title)}</button>
               <p>${escapeHtml(phaseBridge(previous, phase))}</p>`
            : `<strong>Start here</strong><p>Set up the workflow before learning content.</p>`
        }
      </div>
      <div class="flow-arrow" aria-hidden="true"><i data-lucide="arrow-right"></i></div>
      <div class="flow-node is-current">
        <span class="flow-label">Current</span>
        <strong>Phase ${phase.number}: ${escapeHtml(phase.title)}</strong>
        <p>Work the steps in order: learn, practice, build, then review against the acceptance criteria.</p>
      </div>
      <div class="flow-arrow" aria-hidden="true"><i data-lucide="arrow-right"></i></div>
      <div class="flow-node ${next ? "" : "is-muted"}">
        <span class="flow-label">Next</span>
        ${
          next
            ? `<button type="button" data-action="select-phase" data-phase-id="${next.id}">Phase ${next.number}: ${escapeHtml(next.title)}</button>
               <p>${escapeHtml(phaseBridge(phase, next))}</p>`
            : `<strong>Portfolio complete</strong><p>Use the finished projects for applications, interviews, and iteration.</p>`
        }
      </div>
    </section>
  `;
}

function phaseBridge(fromPhase, toPhase) {
  const bridges = {
    "phase-0->phase-1": "Your repo, terminal, and environment become the workspace for Python practice.",
    "phase-1->phase-2": "Python gives you scripting discipline; SQL adds database-native analysis.",
    "phase-2->phase-3": "SQL outputs become datasets you can interpret statistically instead of only summarizing.",
    "phase-3->phase-4": "Statistical judgment keeps the first data science project from becoming shallow modeling.",
    "phase-4->phase-5": "The People Analytics analysis becomes a stakeholder-facing dashboard.",
    "phase-5->phase-6": "Dashboard outputs define the analytics tables the pipeline must produce.",
    "phase-6->phase-7": "Clean, tested analytics tables become the inputs for a packaged model service.",
    "phase-7->phase-8": "A served model needs tracking, monitoring, documentation, and lifecycle controls.",
    "phase-8->phase-9": "The flagship system frees you to prove transferability in a second domain.",
    "phase-9->phase-10": "Both serious projects become portfolio evidence and career-facing summaries.",
  };
  return bridges[`${fromPhase.id}->${toPhase.id}`] || `${fromPhase.title} feeds directly into ${toPhase.title}.`;
}

function renderLearningPath(phase) {
  return `
    <section class="section-card learning-path">
      <div class="section-title">
        <h3>Learning Blocks</h3>
        <span class="pill">Use resources in context</span>
      </div>
      <div class="step-chain">
        ${(phase.steps || []).map((step, index) => renderLearningStep(step, index, phase.steps.length)).join("")}
      </div>
    </section>
  `;
}

function renderLearningStep(step, index, total) {
  const stage = stageForStep(index, total);
  return `
    <article class="step-card">
      <div class="step-marker">
        <span>${index + 1}</span>
        ${index < total - 1 ? `<i data-lucide="arrow-down"></i>` : ""}
      </div>
      <div class="step-content">
        <div class="step-head">
          <div>
            <p class="eyebrow">${stage} · ${escapeHtml(step.time)}</p>
            <h4>${escapeHtml(step.title)}</h4>
          </div>
          <label class="step-toggle">
            <input type="checkbox" data-action="toggle-done" data-id="${step.id}" ${state.done[step.id] ? "checked" : ""} />
            Done
          </label>
        </div>
        <p class="step-purpose">${escapeHtml(step.purpose)}</p>
        <div class="step-resources">
          <strong>Use now</strong>
          <div>${step.resources.map(renderInlineResourceLink).join("")}</div>
        </div>
        <div class="instruction-grid">
          <div>
            <strong>Do</strong>
            <ol>${step.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ol>
          </div>
          <div>
            <strong>Produce</strong>
            <p>${escapeHtml(step.output)}</p>
            <strong>Move on when</strong>
            <p>${escapeHtml(step.doneWhen)}</p>
          </div>
        </div>
      </div>
    </article>
  `;
}

function stageForStep(index, total) {
  if (index === 0) return "Learn";
  if (index === total - 1) return "Build / Review";
  return "Practice";
}

function renderInlineResourceLink(resourceId) {
  const resource = getResource(resourceId);
  if (!resource) return "";
  return `
    <a class="step-resource-link" href="${resource.url}" target="_blank" rel="noreferrer">
      <span>${escapeHtml(resource.name)}</span>
      <i data-lucide="external-link"></i>
    </a>
  `;
}

function getResource(resourceId) {
  return allResources().find((resource) => resource.id === resourceId);
}

function renderProjectGuide(phase) {
  const project = phase.project;
  if (!project) return "";
  return `
    <section class="section-card project-guide">
      <div class="section-title">
        <h3>Project Playbook</h3>
        <span class="pill">Build evidence</span>
      </div>
      <h4>${escapeHtml(project.title)}</h4>
      <p>${escapeHtml(project.brief)}</p>
      ${renderProjectSpec(phase)}
      <div class="instruction-grid">
        <div>
          <strong>Process</strong>
          <ol>${project.process.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
        </div>
        <div>
          <strong>Artifacts</strong>
          <ul>${project.artifacts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="acceptance-list">
        <strong>Acceptance Criteria</strong>
        ${project.acceptance
          .map(
            ([id, label]) => `
              <label class="check-row">
                <input type="checkbox" data-action="toggle-done" data-id="${id}" ${state.done[id] ? "checked" : ""} />
                <span><strong>${escapeHtml(label)}</strong></span>
              </label>
            `,
          )
          .join("")}
      </div>
      ${renderDeliverableChecklist(phase)}
    </section>
  `;
}

function renderProjectSpec(phase) {
  const spec = phase.spec;
  if (!spec) return "";
  return `
    <section class="project-spec">
      <div class="section-title">
        <h3>Project Specification</h3>
        <span class="pill">Phase ${phase.number}</span>
      </div>
      <div class="spec-grid">
        <div class="spec-main">
          <div class="spec-block">
            <strong>Objective</strong>
            <p>${escapeHtml(spec.objective)}</p>
          </div>
          <div class="spec-block">
            <strong>Inputs</strong>
            ${renderBulletList(spec.inputs || [])}
          </div>
          <div class="spec-block">
            <strong>Requirements</strong>
            ${renderBulletList(spec.requirements || [])}
          </div>
          <div class="spec-block">
            <strong>Quality Bar</strong>
            ${renderBulletList(spec.qualityBar || [])}
          </div>
        </div>
        <div class="repo-structure">
          <strong>Recommended Repo Structure</strong>
          <pre><code>${escapeHtml((phase.repoStructure || []).join("\n"))}</code></pre>
        </div>
      </div>
    </section>
  `;
}

function renderBulletList(items) {
  if (!items.length) return `<p class="muted-copy">No additional guidance for this phase.</p>`;
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
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

function renderDeliverableChecklist(phase) {
  return `
    <div class="deliverable-checklist">
      <strong>Phase Deliverables</strong>
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
    </div>
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

function renderCompactResourceList(phase) {
  return `
    <div class="compact-resource-list">
      ${phase.resources
        .map(
          (resource) => `
            <a href="${resource.url}" target="_blank" rel="noreferrer">
              <span>
                <strong>${escapeHtml(resource.name)}</strong>
                <small>${escapeHtml(resource.type)} · ${escapeHtml(resource.priority)}</small>
              </span>
              <i data-lucide="external-link"></i>
            </a>
          `,
        )
        .join("")}
    </div>
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
  const selectedProject = projectById(state.selectedProjectId);
  return `
    <section class="projects-panel">
      <div class="view-title">
        <h2><i data-lucide="folder-kanban"></i> Project Workspace</h2>
        <p>Select a project to load its specs, phases, resources, and acceptance criteria.</p>
      </div>
      <div class="project-workspace">
        <aside class="project-selector" aria-label="Projects">
          ${projects.map(renderProjectSelector).join("")}
        </aside>
        <div class="project-detail">
          ${renderProjectDetail(selectedProject)}
        </div>
      </div>
    </section>
  `;
}

function renderProjectSelector(project) {
  const completed = project.tasks.filter((id) => state.done[id]).length;
  const pct = project.tasks.length ? Math.round((completed / project.tasks.length) * 100) : 0;
  const activeClass = project.id === state.selectedProjectId ? " is-active" : "";
  return `
    <button class="project-select-button${activeClass}" type="button" data-action="select-project" data-project-id="${project.id}">
      <span>
        <strong>${escapeHtml(project.name)}</strong>
        <small>${escapeHtml(project.phaseIds.map((phaseId) => `Phase ${phaseById(phaseId).number}`).join(" + "))}</small>
      </span>
      <span class="project-select-meta">
        <span class="status-pill ${pct === 100 ? "done" : pct > 0 ? "active" : "waiting"}">${pct}%</span>
      </span>
    </button>
  `;
}

function renderProjectDetail(project) {
  const relatedPhases = phasesForProject(project);
  const completed = project.tasks.filter((id) => state.done[id]).length;
  const pct = project.tasks.length ? Math.round((completed / project.tasks.length) * 100) : 0;

  return `
    <article class="project-card project-detail-card">
      <div class="project-detail-head">
        <div>
          <p class="eyebrow">${escapeHtml(relatedPhases.map((phase) => `Phase ${phase.number}`).join(" + "))}</p>
          <h3>${escapeHtml(project.name)}</h3>
        </div>
        <span class="status-pill ${pct === 100 ? "done" : pct > 0 ? "active" : "waiting"}">${pct}% complete</span>
      </div>
      <p>${escapeHtml(project.summary)}</p>
      <div class="tag-list">
        ${project.skills.map((skill) => `<span class="pill">${escapeHtml(skill)}</span>`).join("")}
      </div>
      ${renderProjectPhaseLinks(relatedPhases)}
      ${renderProjectSpecsForPhases(relatedPhases)}
      ${renderProjectResources(relatedPhases)}
      ${renderProjectLearningBlocks(relatedPhases)}
      <div class="project-actions">
        <strong>Deliverable Tracking</strong>
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

function renderProjectPhaseLinks(phases) {
  return `
    <div class="project-phase-links">
      <strong>Roadmap Context</strong>
      <div>
        ${phases
          .map(
            (phase) => `
              <button type="button" data-action="select-phase" data-phase-id="${phase.id}">
                Phase ${phase.number}: ${escapeHtml(phase.title)}
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderProjectSpecsForPhases(phases) {
  return `
    <div class="project-spec-stack">
      ${phases.map((phase) => renderProjectSpec(phase)).join("")}
    </div>
  `;
}

function renderProjectResources(phases) {
  const resources = phases.flatMap((phase) => phase.resources.map((resource) => ({ ...resource, phase })));
  return `
    <section class="section-card project-resource-panel">
      <div class="section-title">
        <h3>Resources Used For This Project</h3>
        <span class="pill">${resources.length}</span>
      </div>
      <div class="project-resource-grid">
        ${resources
          .map(
            ({ phase, ...resource }) => `
              <a href="${resource.url}" target="_blank" rel="noreferrer">
                <span>
                  <strong>${escapeHtml(resource.name)}</strong>
                  <small>Phase ${phase.number} · ${escapeHtml(resource.type)} · ${escapeHtml(resource.priority)}</small>
                </span>
                <i data-lucide="external-link"></i>
              </a>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderProjectLearningBlocks(phases) {
  return `
    <section class="section-card project-learning-panel">
      <div class="section-title">
        <h3>Learning Blocks That Feed This Project</h3>
        <span class="pill">${phases.reduce((count, phase) => count + (phase.steps?.length || 0), 0)}</span>
      </div>
      <div class="project-learning-list">
        ${phases
          .map(
            (phase) => `
              <div>
                <strong>Phase ${phase.number}: ${escapeHtml(phase.title)}</strong>
                <ol>
                  ${(phase.steps || [])
                    .map(
                      (step) => `
                        <li>
                          <span>${escapeHtml(step.title)}</span>
                          <small>${escapeHtml(step.output)}</small>
                        </li>
                      `,
                    )
                    .join("")}
                </ol>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
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

  if (action === "select-project") {
    state.selectedProjectId = button.dataset.projectId;
    state.view = "projects";
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
