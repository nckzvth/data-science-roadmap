const STORAGE_KEY = "dsRoadmapCourseConsole.v2";
const APP_VERSION = "roadmap-console-v1";

const sourceRoadmaps = [
  {
    id: "roadmap-ai-ds",
    name: "AI and Data Scientist",
    url: "https://roadmap.sh/ai-data-scientist",
    verified: "2026-06-16",
    topics: [
      "Mathematics",
      "Statistics",
      "Econometrics",
      "Python",
      "SQL",
      "Exploratory Data Analysis",
      "Machine Learning",
      "Deep Learning",
      "MLOps",
    ],
  },
  {
    id: "roadmap-data-analyst",
    name: "Data Analyst",
    url: "https://roadmap.sh/data-analyst",
    verified: "2026-06-16",
    topics: [
      "Analytics types",
      "Excel",
      "Programming",
      "SQL",
      "Data collection",
      "Cleanup",
      "Exploration",
      "Visualization",
      "Hypothesis testing",
      "Regression",
      "BI tools",
      "Portfolio projects",
    ],
  },
  {
    id: "roadmap-data-engineer",
    name: "Data Engineer",
    url: "https://roadmap.sh/data-engineer",
    verified: "2026-06-16",
    topics: [
      "Programming",
      "SQL",
      "Git",
      "Linux",
      "Networking",
      "Data lifecycle",
      "Databases",
      "Warehousing",
      "Data lakes",
      "Pipelines",
      "Airflow",
      "dbt",
      "Spark",
      "Kafka",
      "Cloud",
      "Docker",
      "CI/CD",
      "Monitoring",
      "IaC",
    ],
  },
  {
    id: "roadmap-mlops",
    name: "MLOps",
    url: "https://roadmap.sh/mlops",
    verified: "2026-06-16",
    topics: [
      "Programming",
      "Version control",
      "Cloud",
      "Containerization",
      "ML fundamentals",
      "Data engineering fundamentals",
      "Pipelines",
      "Experiment tracking",
      "Model registry",
      "Training and serving",
      "Monitoring",
      "Observability",
      "Infrastructure as Code",
    ],
  },
];

const resources = [
  {
    id: "github-skills",
    name: "GitHub Skills: Introduction to GitHub",
    url: "https://github.com/skills/introduction-to-github",
    type: "Course",
    cost: "Free",
    role: "Workflow baseline",
  },
  {
    id: "missing-semester",
    name: "MIT Missing Semester",
    url: "https://missing.csail.mit.edu/",
    type: "Course",
    cost: "Free",
    role: "Shell, Git, editor, debugging, and workflow",
  },
  {
    id: "google-da",
    name: "Google Data Analytics Certificate",
    url: "https://www.coursera.org/professional-certificates/google-data-analytics",
    type: "Course",
    cost: "Audit or financial aid where available",
    role: "Analytics process, spreadsheets, cleaning, visualization, and stakeholder framing",
  },
  {
    id: "excel-practice",
    name: "Microsoft Excel Training",
    url: "https://support.microsoft.com/en-us/excel",
    type: "Reference",
    cost: "Free",
    role: "Spreadsheet functions, pivot tables, and charting support",
  },
  {
    id: "cs50-sql",
    name: "CS50 SQL",
    url: "https://cs50.harvard.edu/sql",
    type: "Course",
    cost: "Free audit",
    role: "Relational foundations and SQL",
  },
  {
    id: "postgres-docs",
    name: "PostgreSQL Documentation",
    url: "https://www.postgresql.org/docs/current/",
    type: "Reference",
    cost: "Free",
    role: "SQL syntax, windows, dates, and query behavior",
  },
  {
    id: "python-docs",
    name: "Python Tutorial",
    url: "https://docs.python.org/3/tutorial/",
    type: "Reference",
    cost: "Free",
    role: "Python syntax and standard-library reference",
  },
  {
    id: "mit-python",
    name: "MIT 6.100L Python",
    url: "https://ocw.mit.edu/courses/6-100l-introduction-to-cs-and-programming-using-python-fall-2022/",
    type: "Course",
    cost: "Free",
    role: "Programming foundation",
  },
  {
    id: "kaggle-python",
    name: "Kaggle Learn: Python",
    url: "https://www.kaggle.com/learn/python",
    type: "Practice",
    cost: "Free",
    role: "Short syntax drills",
  },
  {
    id: "kaggle-pandas",
    name: "Kaggle Learn: Pandas",
    url: "https://www.kaggle.com/learn/pandas",
    type: "Practice",
    cost: "Free",
    role: "Pandas manipulation drills",
  },
  {
    id: "kaggle-viz",
    name: "Kaggle Learn: Data Visualization",
    url: "https://www.kaggle.com/learn/data-visualization",
    type: "Practice",
    cost: "Free",
    role: "Seaborn and exploratory charts",
  },
  {
    id: "openintro",
    name: "OpenIntro Statistics",
    url: "https://www.openintro.org/book/os/",
    type: "Textbook",
    cost: "Free PDF",
    role: "Statistics, probability, sampling, inference",
  },
  {
    id: "islp",
    name: "An Introduction to Statistical Learning with Python",
    url: "https://www.statlearning.com/",
    type: "Textbook",
    cost: "Free PDF",
    role: "Regression, classification, resampling, and ML evaluation",
  },
  {
    id: "statquest",
    name: "StatQuest",
    url: "https://www.youtube.com/@statquest",
    type: "Video",
    cost: "Free",
    role: "Intuitive statistics and ML explanations",
  },
  {
    id: "harvardx-ds",
    name: "HarvardX Data Science",
    url: "https://www.edx.org/professional-certificate/harvardx-data-science",
    type: "Course",
    cost: "Audit where available",
    role: "Applied data science course spine",
  },
  {
    id: "google-mlcc",
    name: "Google Machine Learning Crash Course",
    url: "https://developers.google.com/machine-learning/crash-course",
    type: "Course",
    cost: "Free",
    role: "ML foundations and responsible AI support",
  },
  {
    id: "streamlit-docs",
    name: "Streamlit Documentation",
    url: "https://docs.streamlit.io/",
    type: "Documentation",
    cost: "Free",
    role: "Interactive dashboard implementation",
  },
  {
    id: "uk-gov-viz",
    name: "UK Government Analysis Function: Data Visualisation",
    url: "https://analysisfunction.civilservice.gov.uk/policy-store/data-visualisation-charts/",
    type: "Guidance",
    cost: "Free",
    role: "Chart choice and accessibility guardrails",
  },
  {
    id: "de-zoomcamp",
    name: "DataTalksClub Data Engineering Zoomcamp",
    url: "https://github.com/DataTalksClub/data-engineering-zoomcamp",
    type: "Course",
    cost: "Free",
    role: "Data engineering, orchestration, warehouse, and pipeline practice",
  },
  {
    id: "duckdb",
    name: "DuckDB Documentation",
    url: "https://duckdb.org/docs/",
    type: "Documentation",
    cost: "Free",
    role: "Local analytical database and SQL-on-files",
  },
  {
    id: "dbt",
    name: "dbt Learn",
    url: "https://learn.getdbt.com/",
    type: "Course",
    cost: "Free account",
    role: "Analytics engineering, models, tests, docs",
  },
  {
    id: "ml-zoomcamp",
    name: "DataTalksClub Machine Learning Zoomcamp",
    url: "https://github.com/DataTalksClub/machine-learning-zoomcamp",
    type: "Course",
    cost: "Free",
    role: "Model training, serving, Docker, and deployment practice",
  },
  {
    id: "mlops-zoomcamp",
    name: "DataTalksClub MLOps Zoomcamp",
    url: "https://github.com/DataTalksClub/mlops-zoomcamp",
    type: "Course",
    cost: "Free",
    role: "Experiment tracking, orchestration, deployment, monitoring",
  },
  {
    id: "nist-ai-rmf",
    name: "NIST AI Risk Management Framework",
    url: "https://www.nist.gov/itl/ai-risk-management-framework",
    type: "Framework",
    cost: "Free",
    role: "Responsible AI risk language",
  },
];

const modules = [
  {
    id: "m00",
    code: "00",
    title: "Workspace, Git, Shell, and Reproducibility",
    duration: "3-5 focused sessions",
    lane: "Operating System",
    rolePaths: ["Data Analyst", "AI/Data Scientist", "Data Engineer", "MLOps"],
    sourceTopics: ["Git and GitHub", "Linux Basics", "Version Control Systems", "Programming Fundamentals"],
    purpose:
      "Create the technical base that makes every later artifact reproducible, inspectable, and publishable.",
    whyNow:
      "The course produces repo evidence from the beginning. Git, shell, folders, README standards, and environment notes are not optional extras.",
    outcomes: [
      "Use Git branches, commits, pull requests, and basic recovery commands.",
      "Navigate the shell, inspect files, run scripts, and capture terminal evidence.",
      "Create one repo structure for raw data, processed data, notebooks, scripts, reports, and dashboards.",
    ],
    lessons: [
      lesson("m00-l1", "Learn", "Repository workflow and evidence trail", ["github-skills"], [
        "Create the repository and a first branch.",
        "Commit a README that states the course objective, evidence rule, and weekly cadence.",
        "Open and merge a pull request so you can explain branch, commit, pull request, and merge.",
      ]),
      lesson("m00-l2", "Practice", "Shell workflow for data projects", ["missing-semester"], [
        "Create the course folders from the terminal.",
        "Record commands for navigation, file inspection, moving files, and Git status/diff/log.",
        "Write a recovery note for what you will do before deleting or overwriting files.",
      ]),
      lesson("m00-l3", "Build", "Project standards", ["missing-semester"], [
        "Create a reusable project README template.",
        "Create an environment checklist with Python version, package manager, editor, shell, and Git identity.",
        "Add a short README in each course folder stating what evidence belongs there.",
      ]),
    ],
    project: project("m00-p", "Learning Trail Repository", [
      "README.md",
      "00_setup/environment_checklist.md",
      "00_setup/project_readme_template.md",
      "00_setup/terminal_git_notes.md",
      "01_data_literacy/README.md through 11_portfolio/README.md",
    ], [
      "A reviewer can tell where every later artifact belongs.",
      "No credentials, private files, or local-only absolute paths are committed.",
      "The repo history shows real checkpoints instead of one giant dump.",
    ]),
    handoff: "The next module uses this repo to store spreadsheets, SQL files, data notes, and analysis outputs.",
  },
  {
    id: "m01",
    code: "01",
    title: "Data Literacy, Analytics Process, and Spreadsheet Baseline",
    duration: "1-2 weeks",
    lane: "Data Analyst",
    rolePaths: ["Data Analyst"],
    sourceTopics: [
      "What is Data Analytics",
      "Types of Data Analytics",
      "Key Concepts of Data",
      "Collection",
      "Cleanup",
      "Exploration",
      "Visualisation",
      "Excel",
      "Pivot Tables",
    ],
    purpose:
      "Learn what analysts actually do before writing code: define a question, inspect data, clean obvious issues, summarize it, and communicate a limited answer.",
    whyNow:
      "This was missing. SQL and Python should sit underneath a clear analytics process, not replace it.",
    outcomes: [
      "Classify descriptive, diagnostic, predictive, and prescriptive questions.",
      "Identify grain, fields, missingness, duplicates, outliers, data types, and data quality risks.",
      "Use spreadsheets as a baseline analysis tool, then know when to move into SQL or Python.",
    ],
    lessons: [
      lesson("m01-l1", "Learn", "Analytics questions, grain, and data quality", ["google-da"], [
        "Write five business questions and label the analytics type.",
        "For each question, define the unit of analysis, needed fields, and decision the answer could support.",
        "List data quality checks before calculating anything.",
      ]),
      lesson("m01-l2", "Practice", "Spreadsheet cleanup and pivot-table analysis", ["excel-practice", "google-da"], [
        "Import a small public CSV into a spreadsheet.",
        "Profile column types, blanks, duplicates, inconsistent categories, and obvious outliers.",
        "Create pivot tables for at least three stakeholder questions.",
      ]),
      lesson("m01-l3", "Build", "Analyst memo with evidence", ["uk-gov-viz"], [
        "Create a one-page memo with question, data source, cleaning notes, summary table, chart, and limitation.",
        "Include what the data cannot answer.",
        "Save the spreadsheet and memo in the repo.",
      ]),
    ],
    project: project("m01-p", "Spreadsheet Data Quality and Analyst Memo", [
      "01_data_literacy/data/raw/source.csv",
      "01_data_literacy/workbooks/analysis_baseline.xlsx",
      "01_data_literacy/reports/analyst_memo.md",
      "01_data_literacy/reports/data_quality_log.md",
    ], [
      "Memo states the business question, grain, cleaning decisions, and limitation.",
      "Workbook includes source tab, cleaned tab, pivot table, and chart.",
      "No chart appears without a stated question.",
    ]),
    handoff: "The same question and data-quality log become the input for SQL table design and metric definitions.",
  },
  {
    id: "m02",
    code: "02",
    title: "SQL, Relational Thinking, and Metric Definitions",
    duration: "3-5 weeks",
    lane: "Analytics Core",
    rolePaths: ["Data Analyst", "Data Engineer", "AI/Data Scientist"],
    sourceTopics: [
      "Learn SQL",
      "Databases",
      "Relational Databases",
      "Indexing",
      "Transactions",
      "OLTP vs OLAP",
      "Star vs Snowflake Schema",
    ],
    purpose:
      "Use SQL as the first serious technical layer: tables, keys, joins, filters, aggregates, dates, windows, cohorts, and reusable metric definitions.",
    whyNow:
      "Roadmap.sh places SQL under all relevant roles. SQL should not wait until after Python projects because it teaches data shape and grain.",
    outcomes: [
      "Explain tables, primary keys, foreign keys, grain, joins, and normalization.",
      "Write SQL for aggregations, CASE logic, CTEs, dates, cohorts, and windows.",
      "Document metric denominators, filters, and limitations.",
    ],
    lessons: [
      lesson("m02-l1", "Learn", "Tables, keys, joins, and grain", ["cs50-sql"], [
        "Create a small schema for customers, orders, order items, products, and events.",
        "Write notes explaining one-to-one, one-to-many, and many-to-many relationships.",
        "Create examples of a correct join and a duplicated-row join.",
      ]),
      lesson("m02-l2", "Practice", "Analytics SQL patterns", ["postgres-docs"], [
        "Write CTE, CASE, date truncation, rolling trend, rank, and lag/lead examples.",
        "For each query, add comments for question, grain, filters, and expected output.",
        "Save sample outputs as CSV or Markdown tables.",
      ]),
      lesson("m02-l3", "Build", "Metric query pack", ["cs50-sql", "postgres-docs"], [
        "Write queries for monthly active users, cohort retention, revenue by segment, time between events, and rank change.",
        "Add a metric dictionary to the README.",
        "Explain one metric that can mislead if the denominator changes.",
      ]),
    ],
    project: project("m02-p", "SQL Metric Query Pack", [
      "02_sql/schema/schema.sql",
      "02_sql/queries/01_monthly_active_users.sql",
      "02_sql/queries/02_cohort_retention.sql",
      "02_sql/queries/03_revenue_by_segment.sql",
      "02_sql/queries/04_time_between_events.sql",
      "02_sql/queries/05_rank_change.sql",
      "02_sql/outputs/sample_results/",
      "02_sql/README.md",
    ], [
      "Every SQL file has question, grain, filters, assumptions, and limitation comments.",
      "At least one query uses a window function.",
      "At least one query uses date logic.",
      "README defines every metric in plain English.",
    ]),
    handoff: "Python comes next to automate file work and analysis, not to replace SQL reasoning.",
  },
  {
    id: "m03",
    code: "03",
    title: "Python Programming for Data Work",
    duration: "3-5 weeks",
    lane: "Programming",
    rolePaths: ["Data Analyst", "AI/Data Scientist", "Data Engineer", "MLOps"],
    sourceTopics: ["Python", "Programming Skills", "Data Structures and Algorithms", "Bash"],
    purpose:
      "Learn enough Python to write scripts, functions, file workflows, and small transformations before using larger data libraries.",
    whyNow:
      "Python is still essential, but it now comes after analytics and SQL context so the programming has a purpose.",
    outcomes: [
      "Write functions, conditionals, loops, dictionaries, lists, file readers, and simple tests.",
      "Run a command-line script with explicit input, output, and report paths.",
      "Use Python to automate a real data-quality task.",
    ],
    lessons: [
      lesson("m03-l1", "Learn", "Python values, control flow, and functions", ["mit-python", "python-docs", "kaggle-python"], [
        "Write functions for cleaning headers, detecting missing values, converting numbers, and formatting report lines.",
        "Run examples from the terminal.",
        "Write notes for string, integer, float, list, dictionary, boolean, and None.",
      ]),
      lesson("m03-l2", "Practice", "Files, CSV rows, and data checks", ["python-docs"], [
        "Read a CSV with the standard library.",
        "Count rows, headers, missing values, and numeric conversion failures.",
        "Write a text profile report before cleaning anything.",
      ]),
      lesson("m03-l3", "Build", "Command-line cleaner", ["python-docs"], [
        "Build a script with input, output, and report paths.",
        "Write a cleaned CSV and summary report.",
        "Document the command and assumptions in README.",
      ]),
    ],
    project: project("m03-p", "Command-Line CSV Quality Script", [
      "03_python/scripts/profile_csv.py",
      "03_python/scripts/clean_csv.py",
      "03_python/data/raw/input.csv",
      "03_python/data/processed/cleaned.csv",
      "03_python/outputs/profile_report.txt",
      "03_python/outputs/cleaning_report.txt",
      "03_python/README.md",
    ], [
      "Raw data is never overwritten.",
      "Missingness is reported before rules change the data.",
      "One terminal command regenerates processed data and report.",
    ]),
    handoff: "The script-level mechanics make Pandas easier to understand instead of treating it as magic.",
  },
  {
    id: "m04",
    code: "04",
    title: "Pandas, Wrangling, and Exploratory Data Analysis",
    duration: "3-5 weeks",
    lane: "Applied Analysis",
    rolePaths: ["Data Analyst", "AI/Data Scientist"],
    sourceTopics: [
      "Data Manipulation Libraries",
      "Pandas",
      "Data Cleanup",
      "Handling Missing Data",
      "Finding Outliers",
      "Data Transformation",
      "Exploratory Data Analysis",
      "Matplotlib",
      "Seaborn",
    ],
    purpose:
      "Move from manual scripts into data frames, reproducible notebooks, EDA, transformations, grouping, joins, and first visual analysis.",
    whyNow:
      "This is where Python becomes applied data work. The course should explicitly connect cleaning, transformation, EDA, and evidence.",
    outcomes: [
      "Use Pandas for filtering, grouping, merging, reshaping, type conversion, and missing-data inspection.",
      "Create EDA notebooks with data audit, summary statistics, distributions, relationships, and limitations.",
      "Save reusable outputs instead of screenshot-only work.",
    ],
    lessons: [
      lesson("m04-l1", "Learn", "DataFrame fundamentals and transformation", ["kaggle-pandas"], [
        "Practice selecting, filtering, assigning, grouping, sorting, merging, and exporting.",
        "Write notes for index, column, row, series, dataframe, join key, and groupby.",
        "Recreate one SQL aggregation in Pandas and compare the mental model.",
      ]),
      lesson("m04-l2", "Practice", "EDA notebook structure", ["kaggle-viz", "uk-gov-viz"], [
        "Create a notebook with sections for question, data audit, cleaning, summaries, distributions, relationships, and limits.",
        "Use histograms, bar charts, scatterplots, boxplots, and heatmaps only when they answer a question.",
        "Write one sentence of interpretation and one caveat under each chart.",
      ]),
      lesson("m04-l3", "Build", "Reusable EDA report", ["kaggle-pandas", "kaggle-viz"], [
        "Create a reusable EDA checklist.",
        "Produce cleaned data, figures, and a Markdown findings report.",
        "Record blockers and questions for statistics.",
      ]),
    ],
    project: project("m04-p", "EDA Notebook and Findings Report", [
      "04_pandas_eda/notebooks/01_data_audit.ipynb",
      "04_pandas_eda/notebooks/02_eda.ipynb",
      "04_pandas_eda/data/processed/analysis_ready.csv",
      "04_pandas_eda/figures/",
      "04_pandas_eda/reports/findings.md",
      "04_pandas_eda/README.md",
    ], [
      "Notebook has a clear question and data audit before charts.",
      "Every chart has an interpretation and caveat.",
      "Findings separate observed pattern from explanation.",
    ]),
    handoff: "Statistics adds uncertainty, sampling, tests, and model reasoning to the EDA workflow.",
  },
  {
    id: "m05",
    code: "05",
    title: "Statistics, Experimentation, and Model Reasoning",
    duration: "5-7 weeks",
    lane: "Reasoning",
    rolePaths: ["Data Analyst", "AI/Data Scientist"],
    sourceTopics: [
      "Statistics",
      "Probability and Sampling",
      "Hypothesis Testing",
      "Correlation Analysis",
      "Regression",
      "AB Testing",
      "Econometrics",
      "Time Series",
      "Model Evaluation Techniques",
    ],
    purpose:
      "Learn how to avoid unsupported claims: sampling, uncertainty, distributions, hypothesis tests, regression, experiment design, and evaluation.",
    whyNow:
      "The Data Analyst and AI/Data Scientist roadmaps both stress statistics. It needs to be a full reasoning module, not a quick checkpoint.",
    outcomes: [
      "Explain distributions, center, spread, confidence intervals, p-values, and test assumptions.",
      "Use correlation and regression without implying causation.",
      "Plan an A/B test with metric, unit, sample, minimum detectable effect, and risk notes.",
    ],
    lessons: [
      lesson("m05-l1", "Learn", "Descriptive statistics and uncertainty", ["openintro", "statquest"], [
        "Compute center, spread, missingness, distributions, confidence intervals, and bootstrap examples.",
        "Write notes explaining sample, population, bias, variance, and uncertainty.",
        "Create examples of a misleading average and a misleading chart.",
      ]),
      lesson("m05-l2", "Practice", "Tests, regression, and evaluation", ["openintro", "islp"], [
        "Run one hypothesis test only after stating assumptions.",
        "Fit one regression model and inspect residuals.",
        "Write what the model estimates and what it does not prove.",
      ]),
      lesson("m05-l3", "Build", "Limitations-first analysis", ["openintro", "islp"], [
        "Write the limitations section before the conclusion.",
        "Include at least one test, one regression, and one validation or sensitivity check.",
        "Separate evidence, assumptions, uncertainty, and decision implications.",
      ]),
    ],
    project: project("m05-p", "Limitations-First Statistical Analysis", [
      "05_statistics/notebooks/analysis.ipynb",
      "05_statistics/reports/limitations_first_report.md",
      "05_statistics/reports/ab_test_plan.md",
      "05_statistics/README.md",
    ], [
      "Question is answerable from the available data.",
      "Test assumptions are stated before results.",
      "Conclusion does not claim causality unless the design supports it.",
      "A/B plan states metric, unit, guardrails, and decision rule.",
    ]),
    handoff: "Visualization and BI turn the analysis into stakeholder-facing decision support.",
  },
  {
    id: "m06",
    code: "06",
    title: "Visualization, BI, and Stakeholder Communication",
    duration: "2-4 weeks",
    lane: "Communication",
    rolePaths: ["Data Analyst", "AI/Data Scientist"],
    sourceTopics: [
      "Data Visualisation",
      "Charting",
      "Power BI",
      "Tableau",
      "Bar Charts",
      "Line Chart",
      "Scatter Plot",
      "Histograms",
      "Heatmap",
      "Dashboarding",
    ],
    purpose:
      "Design dashboards and written analysis around stakeholder decisions, not around showing every chart you can make.",
    whyNow:
      "The analyst roadmap treats visualization as core. The app must force question-to-chart-to-caveat discipline.",
    outcomes: [
      "Map stakeholder questions to charts, filters, KPIs, and caveats.",
      "Build a Streamlit dashboard or BI-style equivalent from cleaned data.",
      "Write executive summaries that state action, uncertainty, and limitation.",
    ],
    lessons: [
      lesson("m06-l1", "Learn", "Chart choice and dashboard questions", ["uk-gov-viz"], [
        "Write five stakeholder questions.",
        "Choose the chart or table type for each question and explain why.",
        "Remove any chart that does not answer a decision question.",
      ]),
      lesson("m06-l2", "Practice", "Interactive dashboard structure", ["streamlit-docs"], [
        "Create pages for overview, trend, segment comparison, detail exploration, and limitations.",
        "Add filters only when they change a user decision.",
        "Keep caveats visible near the metric they affect.",
      ]),
      lesson("m06-l3", "Build", "Decision-support report package", ["streamlit-docs", "uk-gov-viz"], [
        "Build the dashboard from analysis-ready data.",
        "Capture screenshots and write a concise stakeholder memo.",
        "Include limitations in the navigation and README.",
      ]),
    ],
    project: project("m06-p", "Dashboard and Stakeholder Brief", [
      "06_visualization/dashboard/app.py",
      "06_visualization/dashboard/pages/",
      "06_visualization/reports/stakeholder_brief.md",
      "06_visualization/screenshots/",
      "06_visualization/README.md",
    ], [
      "Every dashboard page has one stakeholder question.",
      "Filters are limited to decision-relevant controls.",
      "Limitations are visible and not hidden in a footnote.",
    ]),
    handoff: "The dashboard output becomes a consumer of the data engineering pipeline.",
  },
  {
    id: "m07",
    code: "07",
    title: "Applied Machine Learning Foundations",
    duration: "5-7 weeks",
    lane: "Modeling",
    rolePaths: ["AI/Data Scientist", "Data Analyst"],
    sourceTopics: [
      "Machine Learning",
      "Supervised Learning",
      "Unsupervised Learning",
      "Decision Trees",
      "KNN",
      "Logistic Regression",
      "Model Evaluation Techniques",
      "Feature Engineering",
    ],
    purpose:
      "Train simple, useful models with proper baselines, validation, feature handling, metrics, and responsible interpretation.",
    whyNow:
      "ML comes after analysis, statistics, and communication because model output needs context and evaluation discipline.",
    outcomes: [
      "Build baseline classification and regression workflows with train/test split and cross-validation.",
      "Choose metrics that match the stakeholder question.",
      "Write limitations and ethical-use notes before presenting model results.",
    ],
    lessons: [
      lesson("m07-l1", "Learn", "Supervised ML workflow", ["google-mlcc", "islp"], [
        "Train simple baseline models and compare against a non-ML baseline.",
        "Document target, features, leakage risks, split strategy, and metric choice.",
        "Explain overfitting and why training accuracy is not enough.",
      ]),
      lesson("m07-l2", "Practice", "Evaluation and model comparison", ["islp", "statquest"], [
        "Compare logistic regression, tree-based model, and a simple baseline.",
        "Report confusion matrix, precision, recall, ROC-AUC or PR-AUC as appropriate.",
        "Write threshold tradeoffs in plain English.",
      ]),
      lesson("m07-l3", "Build", "Responsible baseline model report", ["google-mlcc", "nist-ai-rmf"], [
        "Create model card draft with intended use, prohibited use, data limitations, and monitoring needs.",
        "Package notebook, metrics table, figures, and README.",
        "State why the model should or should not be used operationally.",
      ]),
    ],
    project: project("m07-p", "Responsible Baseline ML Project", [
      "07_machine_learning/notebooks/01_modeling.ipynb",
      "07_machine_learning/reports/model_card.md",
      "07_machine_learning/reports/evaluation_table.md",
      "07_machine_learning/README.md",
    ], [
      "Baseline comparison is included.",
      "Metric choice is tied to the use case.",
      "Model card states intended use, prohibited use, limitations, and monitoring risks.",
    ]),
    handoff: "The same model is later converted into scripts, artifacts, and a local service.",
  },
  {
    id: "m08",
    code: "08",
    title: "Data Engineering Lifecycle, Warehouses, and Transformation",
    duration: "5-7 weeks",
    lane: "Data Engineering",
    rolePaths: ["Data Engineer", "MLOps", "AI/Data Scientist"],
    sourceTopics: [
      "Data Engineering Lifecycle",
      "Data Generation",
      "Data Storage",
      "Data Ingestion",
      "Data Serving",
      "Database Fundamentals",
      "Data Warehouse",
      "Data Lake",
      "Data Mart",
      "dbt",
      "Data Quality",
    ],
    purpose:
      "Turn notebook and dashboard work into repeatable data products: raw, staging, marts, tests, docs, and dashboard-ready exports.",
    whyNow:
      "The Data Engineer roadmap is a separate pillar. It should not be a late add-on after the data science project.",
    outcomes: [
      "Explain raw, staging, intermediate, marts, facts, dimensions, and table grain.",
      "Use DuckDB locally for SQL-on-files and dbt-style transformation discipline.",
      "Add quality checks, documentation, lineage notes, and rebuild commands.",
    ],
    lessons: [
      lesson("m08-l1", "Learn", "Lifecycle and warehouse modeling", ["de-zoomcamp", "duckdb"], [
        "Sketch source, raw, staging, marts, dashboard, and report outputs.",
        "Define fact and dimension tables with grain, keys, and relationships.",
        "Write quality checks before transformations.",
      ]),
      lesson("m08-l2", "Practice", "Local transformations and tests", ["duckdb", "dbt"], [
        "Use DuckDB to load CSV/parquet inputs.",
        "Create staging models and mart tables.",
        "Add tests for not-null keys, unique keys, accepted values, and relationships.",
      ]),
      lesson("m08-l3", "Build", "Analytics pipeline", ["de-zoomcamp", "dbt"], [
        "Write one command or script that rebuilds raw, staging, marts, and exports.",
        "Generate dashboard-ready outputs.",
        "Document table grain, tests, and known failures.",
      ]),
    ],
    project: project("m08-p", "Analytics Engineering Pipeline", [
      "08_data_engineering/ingestion/",
      "08_data_engineering/models/staging/",
      "08_data_engineering/models/marts/",
      "08_data_engineering/tests/",
      "08_data_engineering/exports/dashboard_ready/",
      "08_data_engineering/docs/table_dictionary.md",
      "08_data_engineering/README.md",
    ], [
      "One documented command rebuilds outputs from raw data.",
      "Every mart table has grain, keys, and quality checks.",
      "Dashboard consumes generated exports, not manual notebook output.",
    ]),
    handoff: "Cloud, orchestration, and streaming concepts extend the local pipeline into production-shaped workflows.",
  },
  {
    id: "m09",
    code: "09",
    title: "Pipelines, Cloud, Containers, and Orchestration",
    duration: "4-6 weeks",
    lane: "Platform",
    rolePaths: ["Data Engineer", "MLOps"],
    sourceTopics: [
      "Cloud Computing",
      "AWS / Azure / GCP",
      "Data Pipelines",
      "Batch",
      "Streaming",
      "Airflow",
      "Spark",
      "Kafka",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Monitoring",
    ],
    purpose:
      "Learn the production shape of pipelines without losing control of scope: Docker, scheduled jobs, orchestration, cloud primitives, batch/streaming, CI, and monitoring.",
    whyNow:
      "The Data Engineer and MLOps roadmaps both emphasize cloud and orchestration. This module gives those topics a practical local-first sequence.",
    outcomes: [
      "Containerize a local pipeline and run it from a documented command.",
      "Create an orchestrated workflow with retries, logs, and idempotent outputs.",
      "Explain batch vs streaming and when not to use streaming.",
    ],
    lessons: [
      lesson("m09-l1", "Learn", "Docker and reproducible runtime", ["de-zoomcamp"], [
        "Containerize the pipeline environment.",
        "Document mounted inputs, outputs, and environment variables.",
        "Prove the output can be regenerated outside the editor.",
      ]),
      lesson("m09-l2", "Practice", "Orchestration and scheduling", ["de-zoomcamp"], [
        "Create a small Airflow or equivalent local DAG.",
        "Add extract, transform, validate, and export tasks.",
        "Add retries, idempotent outputs, and logs.",
      ]),
      lesson("m09-l3", "Build", "Cloud-shaped pipeline design", ["de-zoomcamp"], [
        "Map local components to cloud primitives: object storage, warehouse, scheduler, secrets, and monitoring.",
        "Write a cost-control note before any cloud use.",
        "Add CI that runs lightweight checks.",
      ]),
    ],
    project: project("m09-p", "Containerized Orchestrated Pipeline", [
      "09_platform/Dockerfile",
      "09_platform/docker-compose.yml",
      "09_platform/dags/",
      "09_platform/scripts/",
      "09_platform/docs/cloud_mapping.md",
      "09_platform/docs/cost_guardrails.md",
      "09_platform/README.md",
    ], [
      "Pipeline runs in a container.",
      "Workflow has explicit tasks and logs.",
      "Cloud mapping is documented without requiring paid services.",
      "CI runs a lightweight validation check.",
    ]),
    handoff: "ML engineering uses the platform discipline to package model training and prediction.",
  },
  {
    id: "m10",
    code: "10",
    title: "ML Engineering and MLOps Lifecycle",
    duration: "6-8 weeks",
    lane: "MLOps",
    rolePaths: ["MLOps", "AI/Data Scientist", "Data Engineer"],
    sourceTopics: [
      "MLOps Principles",
      "Experiment Tracking",
      "Model Registry",
      "Model Training and Serving",
      "Data Lineage",
      "Feature Stores",
      "Monitoring and Observability",
      "Infrastructure as Code",
      "CI/CD",
    ],
    purpose:
      "Move from notebook model to versioned artifacts, training scripts, prediction interface, model card, monitoring plan, and operational risk documentation.",
    whyNow:
      "MLOps should be the lifecycle layer that wraps the earlier model and pipeline work, not a list of disconnected tools.",
    outcomes: [
      "Create train and predict scripts that run without notebook state.",
      "Track experiments and register or version model artifacts.",
      "Serve predictions locally and document monitoring, drift, retraining, and rollback plans.",
    ],
    lessons: [
      lesson("m10-l1", "Learn", "Training scripts, artifacts, and experiment logs", ["ml-zoomcamp", "mlops-zoomcamp"], [
        "Move notebook modeling logic into train.py and predict.py.",
        "Save model artifact, metrics, parameters, and data version note.",
        "Track experiments with MLflow or a lightweight local alternative.",
      ]),
      lesson("m10-l2", "Practice", "Serving and CI", ["ml-zoomcamp"], [
        "Create a local prediction API or batch scoring script.",
        "Add input validation and response examples.",
        "Add CI checks for formatting, tests, or smoke predictions.",
      ]),
      lesson("m10-l3", "Build", "Lifecycle documentation", ["mlops-zoomcamp", "nist-ai-rmf"], [
        "Write model card, monitoring plan, drift checklist, retraining trigger, rollback note, and ethical-use statement.",
        "Document what would be monitored in production and what remains local-only.",
        "Create a final demo script that runs the training and prediction path.",
      ]),
    ],
    project: project("m10-p", "Model Service and MLOps Package", [
      "10_mlops/src/train.py",
      "10_mlops/src/predict.py",
      "10_mlops/service/",
      "10_mlops/artifacts/",
      "10_mlops/reports/model_card.md",
      "10_mlops/reports/monitoring_plan.md",
      "10_mlops/reports/risk_register.md",
      "10_mlops/README.md",
    ], [
      "Training and prediction run without notebook state.",
      "Model artifact and metrics are versioned or logged.",
      "API or batch scorer has documented inputs and outputs.",
      "Monitoring and risk notes are explicit about local-demo limits.",
    ]),
    handoff: "The final portfolio module packages the body of work into coherent project stories and review evidence.",
  },
  {
    id: "m11",
    code: "11",
    title: "Portfolio, Transfer Projects, and Interview Evidence",
    duration: "3-5 weeks",
    lane: "Portfolio",
    rolePaths: ["Data Analyst", "AI/Data Scientist", "Data Engineer", "MLOps"],
    sourceTopics: ["Portfolio Projects", "Stay Updated and Network", "Related Roadmaps"],
    purpose:
      "Package the course into role-targeted evidence: analyst memo, SQL pack, EDA, dashboard, ML project, pipeline, MLOps demo, and transfer project.",
    whyNow:
      "The course is not done when code exists. It is done when the evidence is coherent, reviewable, and tied to target roles.",
    outcomes: [
      "Write concise README files with problem, data, method, results, limitations, and reproduction steps.",
      "Create role-specific project stories for analyst, data science, data engineering, and MLOps interviews.",
      "Build one transfer project in a new domain to prove skills are not dataset-specific.",
    ],
    lessons: [
      lesson("m11-l1", "Review", "Portfolio audit", ["roadmap-ai-ds", "roadmap-data-analyst", "roadmap-data-engineer", "roadmap-mlops"], [
        "Audit each project against the source roadmap topics.",
        "Mark weak areas: SQL, statistics, visualization, pipeline, model service, monitoring, or documentation.",
        "Write fixes as issues instead of vague todos.",
      ]),
      lesson("m11-l2", "Build", "Transfer project", ["openintro", "duckdb", "streamlit-docs"], [
        "Choose a new public dataset outside the original domain.",
        "Complete a smaller end-to-end path: question, data audit, SQL/Python cleaning, analysis, chart/report, limitation.",
        "Do not reuse the same narrative or dataset from earlier projects.",
      ]),
      lesson("m11-l3", "Review", "Interview story package", ["nist-ai-rmf"], [
        "Write STAR-format notes for technical decisions, failures, debugging, tradeoffs, and responsible-use boundaries.",
        "Create a one-page project index with links and role relevance.",
        "Archive raw learning notes separately from polished portfolio artifacts.",
      ]),
    ],
    project: project("m11-p", "Role-Ready Portfolio Package", [
      "11_portfolio/project_index.md",
      "11_portfolio/role_alignment_matrix.md",
      "11_portfolio/transfer_project/",
      "11_portfolio/interview_stories.md",
      "11_portfolio/final_gap_audit.md",
    ], [
      "Every project has a clear problem, method, result, limitation, and run instruction.",
      "Role alignment matrix maps evidence to Data Analyst, Data Scientist, Data Engineer, and MLOps.",
      "Transfer project proves the process works in a second domain.",
    ]),
    handoff: "The course becomes a maintained portfolio and learning system, not a pile of links.",
  },
];

function lesson(id, type, title, resourceIds, steps) {
  return {
    id,
    type,
    title,
    resourceIds,
    steps,
    checks: [
      "Write the objective in one sentence before using a resource.",
      "Produce a file, query, notebook, report, or diagram before marking the lesson done.",
      "Write a limitation, edge case, or follow-up question in the module notes.",
    ],
  };
}

function project(id, title, files, acceptance) {
  return {
    id,
    title,
    files,
    acceptance,
    review: [
      "Delete generated outputs and regenerate them from documented commands where possible.",
      "Read the README as if you are a reviewer with no context.",
      "Check that raw data, generated output, and human interpretation are separated.",
    ],
  };
}

const app = document.querySelector("#app");
const importFile = document.querySelector("#importFile");

const defaultState = {
  appVersion: APP_VERSION,
  selectedModuleId: "m01",
  selectedView: "course",
  done: {},
  notes: {},
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...defaultState };
    const parsed = JSON.parse(raw);
    return {
      ...defaultState,
      ...parsed,
      appVersion: APP_VERSION,
      done: parsed.done || {},
      notes: parsed.notes || {},
      selectedModuleId: moduleById(parsed.selectedModuleId)?.id || defaultState.selectedModuleId,
      selectedView: parsed.selectedView || defaultState.selectedView,
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function moduleById(id) {
  return modules.find((module) => module.id === id) || modules[0];
}

function resourceById(id) {
  return resources.find((resource) => resource.id === id) || sourceRoadmaps.find((source) => source.id === id);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function moduleTaskIds(module) {
  return [...module.lessons.map((lesson) => lesson.id), module.project.id];
}

function moduleProgress(module) {
  const ids = moduleTaskIds(module);
  const done = ids.filter((id) => state.done[id]).length;
  return {
    done,
    total: ids.length,
    pct: ids.length ? Math.round((done / ids.length) * 100) : 0,
  };
}

function courseProgress() {
  const ids = modules.flatMap(moduleTaskIds);
  const done = ids.filter((id) => state.done[id]).length;
  return {
    done,
    total: ids.length,
    pct: ids.length ? Math.round((done / ids.length) * 100) : 0,
  };
}

function render() {
  const activeModule = moduleById(state.selectedModuleId);
  app.innerHTML = `
    <aside class="module-rail">
      ${renderModuleRail(activeModule)}
    </aside>
    <section class="console-shell">
      ${renderConsoleHeader(activeModule)}
      ${renderViews()}
      ${renderActiveView(activeModule)}
    </section>
  `;
  requestAnimationFrame(() => {
    if (window.lucide) window.lucide.createIcons();
  });
}

function renderModuleRail(activeModule) {
  return `
    <div class="rail-head">
      <div>
        <p class="eyebrow">Roadmap Course</p>
        <h2>Modules</h2>
      </div>
      <span>${courseProgress().pct}%</span>
    </div>
    <nav class="module-list" aria-label="Course modules">
      ${modules.map((module) => renderModuleButton(module, activeModule)).join("")}
    </nav>
  `;
}

function renderModuleButton(module, activeModule) {
  const progress = moduleProgress(module);
  const activeClass = module.id === activeModule.id ? " is-active" : "";
  return `
    <button class="module-button${activeClass}" type="button" data-action="select-module" data-id="${module.id}">
      <span class="module-code">${escapeHtml(module.code)}</span>
      <span>
        <strong>${escapeHtml(module.title)}</strong>
        <small>${escapeHtml(module.lane)} · ${progress.done}/${progress.total}</small>
        <span class="bar"><span style="width:${progress.pct}%"></span></span>
      </span>
    </button>
  `;
}

function renderConsoleHeader(module) {
  const progress = moduleProgress(module);
  return `
    <header class="console-header">
      <div>
        <p class="eyebrow">${escapeHtml(module.lane)} · Module ${escapeHtml(module.code)}</p>
        <h2>${escapeHtml(module.title)}</h2>
        <p>${escapeHtml(module.purpose)}</p>
      </div>
      <div class="header-metrics" aria-label="Progress metrics">
        <div><strong>${progress.pct}%</strong><span>Module</span></div>
        <div><strong>${courseProgress().pct}%</strong><span>Course</span></div>
        <div><strong>${escapeHtml(module.duration)}</strong><span>Workload</span></div>
      </div>
    </header>
  `;
}

function renderViews() {
  const views = [
    ["map", "map", "Roadmap Map"],
    ["course", "book-open-check", "Course Console"],
    ["projects", "folder-kanban", "Project Studio"],
    ["resources", "library", "Resource Timing"],
    ["review", "shield-check", "Review Gates"],
  ];
  return `
    <nav class="view-switcher" aria-label="Course views">
      ${views
        .map(
          ([id, icon, label]) => `
            <button class="${state.selectedView === id ? "is-active" : ""}" type="button" data-action="set-view" data-id="${id}">
              <i data-lucide="${icon}"></i><span>${label}</span>
            </button>
          `,
        )
        .join("")}
    </nav>
  `;
}

function renderActiveView(module) {
  if (state.selectedView === "map") return renderMapView(module);
  if (state.selectedView === "projects") return renderProjectsView(module);
  if (state.selectedView === "resources") return renderResourcesView(module);
  if (state.selectedView === "review") return renderReviewView(module);
  return renderCourseView(module);
}

function renderMapView(activeModule) {
  return `
    <section class="map-layout">
      <div class="section-head">
        <div>
          <p class="eyebrow">Integrated Roadmap</p>
          <h2>Course Architecture</h2>
        </div>
        <p>The course spine is built from the Data Analyst, AI/Data Scientist, Data Engineer, and MLOps roadmap topic inventories.</p>
      </div>
      <div class="roadmap-source-grid">
        ${sourceRoadmaps.map(renderRoadmapSource).join("")}
      </div>
      <div class="path-board">
        ${modules
          .map(
            (module) => `
              <button class="path-node${module.id === activeModule.id ? " is-active" : ""}" type="button" data-action="select-module" data-id="${module.id}">
                <span>${escapeHtml(module.code)}</span>
                <strong>${escapeHtml(module.title)}</strong>
                <small>${escapeHtml(module.sourceTopics.slice(0, 4).join(" / "))}</small>
              </button>
            `,
          )
          .join("")}
      </div>
      <section class="crosswalk-panel">
        <div>
          <h3>Why This Is A Different Course</h3>
          <p>The previous course was organized around a narrow sequence of setup, Python, SQL, statistics, and projects. This course starts with analyst work and data quality, makes SQL a core early pillar, then uses Python, Pandas, statistics, visualization, ML, data engineering, platform, and MLOps as separate competencies with project evidence at each gate.</p>
        </div>
        <div class="topic-cloud">
          ${[
            "Analytics process",
            "Excel baseline",
            "SQL grain",
            "Pandas wrangling",
            "EDA",
            "Statistics",
            "A/B testing",
            "BI/dashboarding",
            "Machine learning",
            "Warehousing",
            "dbt",
            "Airflow",
            "Docker",
            "Cloud",
            "Monitoring",
            "MLOps",
          ]
            .map((topic) => `<span>${escapeHtml(topic)}</span>`)
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function renderRoadmapSource(source) {
  return `
    <article class="source-panel">
      <div class="source-top">
        <h3>${escapeHtml(source.name)}</h3>
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(source.name)}">
          <i data-lucide="external-link"></i>
        </a>
      </div>
      <p>Verified ${escapeHtml(source.verified)}</p>
      <div class="topic-list">
        ${source.topics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderCourseView(module) {
  return `
    <section class="course-grid">
      <article class="module-brief">
        <div>
          <p class="eyebrow">Why Now</p>
          <h3>${escapeHtml(module.title)}</h3>
        </div>
        <p>${escapeHtml(module.whyNow)}</p>
        <div class="outcome-list">
          ${module.outcomes.map((outcome) => `<span>${escapeHtml(outcome)}</span>`).join("")}
        </div>
      </article>
      <section class="lesson-stack">
        ${module.lessons.map((lessonItem, index) => renderLesson(module, lessonItem, index)).join("")}
      </section>
      ${renderModuleNotes(module)}
    </section>
  `;
}

function renderLesson(module, lessonItem, index) {
  const next = module.lessons[index + 1] || null;
  return `
    <article class="lesson-row" id="${lessonItem.id}">
      <div class="lesson-marker">
        <span>${index + 1}</span>
        <input type="checkbox" aria-label="Mark ${escapeHtml(lessonItem.title)} complete" data-action="toggle-done" data-id="${lessonItem.id}" ${state.done[lessonItem.id] ? "checked" : ""} />
      </div>
      <div class="lesson-body">
        <div class="lesson-head">
          <div>
            <p class="eyebrow">${escapeHtml(lessonItem.type)}</p>
            <h3>${escapeHtml(lessonItem.title)}</h3>
          </div>
          <div class="resource-pills">
            ${lessonItem.resourceIds.map((id) => renderResourceLink(id)).join("")}
          </div>
        </div>
        <div class="task-columns">
          <div>
            <strong>Work Steps</strong>
            ${renderOrderedList(lessonItem.steps)}
          </div>
          <div>
            <strong>Completion Checks</strong>
            ${renderBulletList(lessonItem.checks)}
          </div>
        </div>
        <footer class="lesson-next">
          <span>Then</span>
          ${
            next
              ? `<a href="#${escapeHtml(next.id)}">${escapeHtml(next.type)}: ${escapeHtml(next.title)}</a>`
              : `<button type="button" data-action="set-view" data-id="projects">Build project gate: ${escapeHtml(module.project.title)}</button>`
          }
        </footer>
      </div>
    </article>
  `;
}

function renderResourceLink(id) {
  const resource = resourceById(id);
  if (!resource) return "";
  return `<a href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">${escapeHtml(resource.name || resource.id)}</a>`;
}

function renderOrderedList(items) {
  return `<ol>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>`;
}

function renderBulletList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderModuleNotes(module) {
  return `
    <section class="notes-panel">
      <div>
        <p class="eyebrow">Evidence Notes</p>
        <h3>${escapeHtml(module.title)}</h3>
      </div>
      <textarea data-action="save-note" data-id="${module.id}" placeholder="Write blockers, decisions, links to repo artifacts, and review notes for this module.">${escapeHtml(state.notes[module.id] || "")}</textarea>
    </section>
  `;
}

function renderProjectsView(activeModule) {
  return `
    <section class="project-studio">
      <div class="section-head">
        <div>
          <p class="eyebrow">Project Studio</p>
          <h2>Specs, Files, Gates</h2>
        </div>
        <p>Every module ends in inspectable evidence. The active project is expanded first.</p>
      </div>
      ${[activeModule, ...modules.filter((module) => module.id !== activeModule.id)]
        .map((module) => renderProjectSpec(module, module.id === activeModule.id))
        .join("")}
    </section>
  `;
}

function renderProjectSpec(module, isActive) {
  const projectSpec = module.project;
  return `
    <article class="project-spec${isActive ? " is-active" : ""}">
      <div class="project-head">
        <div>
          <p class="eyebrow">Module ${escapeHtml(module.code)} · ${escapeHtml(module.lane)}</p>
          <h3>${escapeHtml(projectSpec.title)}</h3>
        </div>
        <label class="gate-check">
          <input type="checkbox" data-action="toggle-done" data-id="${projectSpec.id}" ${state.done[projectSpec.id] ? "checked" : ""} />
          Gate complete
        </label>
      </div>
      <p>${escapeHtml(module.purpose)}</p>
      <div class="spec-grid">
        <section>
          <h4>Required Files</h4>
          <div class="file-list">
            ${projectSpec.files.map((file) => `<code>${escapeHtml(file)}</code>`).join("")}
          </div>
        </section>
        <section>
          <h4>Acceptance Criteria</h4>
          ${renderBulletList(projectSpec.acceptance)}
        </section>
        <section>
          <h4>Review Procedure</h4>
          ${renderBulletList(projectSpec.review)}
        </section>
        <section>
          <h4>Handoff</h4>
          <p>${escapeHtml(module.handoff)}</p>
        </section>
      </div>
    </article>
  `;
}

function renderResourcesView(activeModule) {
  const activeResourceIds = new Set(activeModule.lessons.flatMap((lessonItem) => lessonItem.resourceIds));
  return `
    <section class="resource-view">
      <div class="section-head">
        <div>
          <p class="eyebrow">Resource Timing</p>
          <h2>Use Resources At The Step They Support</h2>
        </div>
        <p>Resources are not a link dump. Each one appears in the module step where it is needed.</p>
      </div>
      <div class="active-resource-strip">
        ${[...activeResourceIds].map((id) => renderActiveResource(id)).join("")}
      </div>
      <div class="resource-table">
        ${resources.map((resource) => renderResourceCard(resource, activeResourceIds.has(resource.id))).join("")}
      </div>
      <section class="roadmap-source-grid compact">
        ${sourceRoadmaps.map(renderRoadmapSource).join("")}
      </section>
    </section>
  `;
}

function renderActiveResource(id) {
  const resource = resourceById(id);
  if (!resource) return "";
  return `
    <a class="active-resource" href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(resource.name)}</strong>
      <span>${escapeHtml(resource.role || resource.type)}</span>
    </a>
  `;
}

function renderResourceCard(resource, isActive) {
  return `
    <article class="resource-card${isActive ? " is-active" : ""}">
      <div>
        <p class="eyebrow">${escapeHtml(resource.type)} · ${escapeHtml(resource.cost)}</p>
        <h3>${escapeHtml(resource.name)}</h3>
      </div>
      <p>${escapeHtml(resource.role)}</p>
      <a href="${escapeHtml(resource.url)}" target="_blank" rel="noreferrer">Open resource</a>
    </article>
  `;
}

function renderReviewView(activeModule) {
  const progress = moduleProgress(activeModule);
  return `
    <section class="review-view">
      <div class="section-head">
        <div>
          <p class="eyebrow">Review Gates</p>
          <h2>${escapeHtml(activeModule.title)}</h2>
        </div>
        <p>${progress.done} of ${progress.total} module gates complete.</p>
      </div>
      <div class="review-grid">
        <article>
          <h3>Module Completion</h3>
          <div class="checklist">
            ${activeModule.lessons
              .map(
                (lessonItem) => `
                  <label>
                    <input type="checkbox" data-action="toggle-done" data-id="${lessonItem.id}" ${state.done[lessonItem.id] ? "checked" : ""} />
                    <span>${escapeHtml(lessonItem.type)}: ${escapeHtml(lessonItem.title)}</span>
                  </label>
                `,
              )
              .join("")}
            <label>
              <input type="checkbox" data-action="toggle-done" data-id="${activeModule.project.id}" ${state.done[activeModule.project.id] ? "checked" : ""} />
              <span>Project gate: ${escapeHtml(activeModule.project.title)}</span>
            </label>
          </div>
        </article>
        <article>
          <h3>Roadmap Topic Coverage</h3>
          <div class="topic-list large">
            ${activeModule.sourceTopics.map((topic) => `<span>${escapeHtml(topic)}</span>`).join("")}
          </div>
        </article>
        <article>
          <h3>Move-On Gate</h3>
          ${renderBulletList(activeModule.project.acceptance)}
        </article>
        <article>
          <h3>Next Module</h3>
          ${renderNextModule(activeModule)}
        </article>
      </div>
    </section>
  `;
}

function renderNextModule(module) {
  const index = modules.findIndex((item) => item.id === module.id);
  const next = modules[index + 1];
  if (!next) return `<p>Portfolio package is the final course gate.</p>`;
  return `
    <p>${escapeHtml(module.handoff)}</p>
    <button class="text-button" type="button" data-action="select-module" data-id="${next.id}">Open ${escapeHtml(next.code)}: ${escapeHtml(next.title)}</button>
  `;
}

function setDone(id, checked) {
  state.done[id] = checked;
  saveState();
  render();
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "select-module") {
    state.selectedModuleId = target.dataset.id;
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (action === "set-view") {
    state.selectedView = target.dataset.id;
    saveState();
    render();
    return;
  }

  if (action === "export-progress") {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data-science-roadmap-progress.json";
    link.click();
    URL.revokeObjectURL(url);
    return;
  }

  if (action === "reset-progress") {
    if (!window.confirm("Reset saved course progress and notes?")) return;
    state = { ...defaultState, done: {}, notes: {} };
    saveState();
    render();
  }
});

document.addEventListener("change", (event) => {
  const target = event.target;
  if (target.matches('input[data-action="toggle-done"]')) {
    setDone(target.dataset.id, target.checked);
  }
});

document.addEventListener("input", (event) => {
  const target = event.target;
  if (target.matches('textarea[data-action="save-note"]')) {
    state.notes[target.dataset.id] = target.value;
    saveState();
  }
});

importFile.addEventListener("change", async (event) => {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    state = {
      ...defaultState,
      ...imported,
      appVersion: APP_VERSION,
      done: imported.done || {},
      notes: imported.notes || {},
      selectedModuleId: moduleById(imported.selectedModuleId)?.id || defaultState.selectedModuleId,
      selectedView: imported.selectedView || defaultState.selectedView,
    };
    saveState();
    render();
  } catch {
    window.alert("Could not import progress JSON.");
  } finally {
    event.target.value = "";
  }
});

render();
