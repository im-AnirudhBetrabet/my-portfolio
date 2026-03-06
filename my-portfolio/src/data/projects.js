const projects = [
        {
            title       : "Regime-Aware Financial Time-Series ML System",
            description : "Developed a regime-aware ML framework for non-stationary time-series classification. Implemented leakage-safe walk-forward validation, engineered trend and volatility regime features, and compared Random Forest, XGBoost, and ensemble models. Evaluated cross-year signal stability and diagnosed distribution shift using a strict 2025 holdout dataset.",
            techStack   : ["XGBoost", "Scikit-learn", "Pandas", "Numpy"],
            githubLink  : "https://github.com/im-AnirudhBetrabet/stock_vitals-ml.git",
            staggerClass: "stagger-1"
        },
        {
            title          : "Diabetes Risk Prediction Model",
            description    : "Developed a machine learning classification model to predict diabetes risk using a healthcare dataset of over 100K records. Implemented Logistic Regression, KNN, and Decision Tree models with SMOTE to handle class imbalance and applied GridSearchCV for hyperparameter tuning, achieving an F1-score of 0.97 on the test set.",
            techStack      : ['Python', 'Scikit-learn', 'Machine Learning', 'Data Preprocessing', 'SMOTE', 'Hyperparameter Tuning'],
            githubLink     : "https://github.com/im-AnirudhBetrabet/Diabetes-Prediction.git",
            staggerClass   : "stagger-2"
        },
        {
            title          : "SQL Data Warehouse & ETL Pipeline",
            description    : "Designed and implemented a SQL-based data warehouse on MS SQL Server, building ETL pipelines to integrate and transform structured data for analysis. Created optimized schema structures and reporting datasets to support analytical queries and dashboards.",
            techStack      : ['Python', 'Scikit-learn', 'Machine Learning', 'Data Preprocessing', 'SMOTE', 'Hyperparameter Tuning'],
            githubLink     : "https://github.com/im-AnirudhBetrabet/sql-datawarehouse-project.git",
            staggerClass   : "stagger-3"
        },
        {
            title          : "Machine Learning Algorithms from Scratch",
            description    : "Implemented core machine learning algorithms including Linear Regression, Logistic Regression from scratch using Python and NumPy. Developed gradient descent optimization and visualized training convergence to demonstrate algorithm behavior and learning dynamics.",
            techStack      : ['Python', 'Machine Learning', 'Numpy'],
            githubLink     : "https://github.com/im-AnirudhBetrabet/MachineLearningAlgorithms.git",
            staggerClass   : "stagger-4"
        }
        
    ];

export default projects;