---
id: q_pydata_0203_d15
draft_id: q_pydata_0203_d15
topic: python-data
title: How do I design a clean ETL script structure in Python that separates extract, transform and load steps, keeps data cleaning isolated, and stays testable over time
slug: how-do-i-design-a-clean-etl-script-structure-in-python-that-separates-extract-transform-and-load-steps-keeps-data-cleaning-isolated-and-stays-testable-over-time
level: intermediate
---

# How do I design a clean ETL script structure in Python that separates extract, transform and load steps, keeps data cleaning isolated, and stays testable over time

Designing Clean ETL Scripts in Python: A Step-by-Step Guide
===========================================================

Table of Contents
-----------------

1. [Underlying Concepts](#underlying-concepts)
2. [Separating Extract, Transform, and Load Steps](#separating-extract-transform-and-load-steps)
3. [Keeping Data Cleaning Isolated](#keeping-data-cleaning-isolated)
4. [Staying Testable Over Time](#staying-testable-over-time)
5. [Example Use Case with FastAPI](#example-use-case-with-fastapi)
6. [Summary & Checklist](#summary-checklist)

Underlying Concepts
-------------------

Before diving into the design of a clean ETL script, it's essential to understand the underlying concepts:

*   **Extract**: The process of retrieving data from a source.
*   **Transform**: The process of converting the extracted data into a desired format.
*   **Load**: The process of loading the transformed data into a target system.

Separating Extract, Transform, and Load Steps
--------------------------------------------

To design a clean ETL script, it's crucial to separate the extract, transform, and load steps. This approach has several benefits:

*   Improved maintainability: By separating each step, you can easily modify or replace individual components without affecting the entire process.
*   Enhanced testability: With separate modules for each step, you can write targeted tests for specific parts of the ETL pipeline.

Here's a high-level overview of how to structure your code:

```markdown
# etl_script
    # extract.py
        def extract_data():
            # retrieve data from source
            pass

    # transform.py
        def clean_and_transform(data):
            # perform data cleaning and transformation
            pass

    # load.py
        def load_data(transformed_data):
            # load transformed data into target system
            pass

    # main.py (entry point)
        from .extract import extract_data
        from .transform import clean_and_transform
        from .load import load_data

        if __name__ == "__main__":
            extracted_data = extract_data()
            transformed_data = clean_and_transform(extracted_data)
            load_data(transformed_data)
```

Keeping Data Cleaning Isolated
------------------------------

Data cleaning is a critical part of the ETL process. To keep it isolated, consider the following approach:

*   Create a separate module for data cleaning (e.g., `data_cleaning.py`).
*   In this module, define functions for specific cleaning tasks (e.g., handling missing values, removing duplicates).

```python
# data_cleaning.py
def handle_missing_values(data):
    # implement logic to handle missing values
    pass

def remove_duplicates(data):
    # implement logic to remove duplicates
    pass
```

Staying Testable Over Time
---------------------------

To ensure your ETL script remains testable over time, follow these guidelines:

*   Write unit tests for individual components (e.g., `extract.py`, `transform.py`, `load.py`).
*   Use mocking libraries (e.g., `unittest.mock`) to isolate dependencies.
*   Regularly review and refactor code to maintain a clean architecture.

Example Use Case with FastAPI
-----------------------------

Let's create a simple ETL script using FastAPI for data extraction, transformation, and loading. We'll assume we're retrieving customer data from a database.

```python
# main.py (FastAPI app)
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Customer(BaseModel):
    name: str
    email: str

@app.get("/extract")
def extract_data():
    # retrieve data from database using SQLAlchemy or ORM of your choice
    pass

@app.post("/transform")
def transform_data(data: List[Customer]):
    # perform data cleaning and transformation
    pass

@app.put("/load")
def load_data(transformed_data):
    # load transformed data into target system (e.g., database)
    pass
```

Summary & Checklist
-------------------

To design a clean ETL script in Python:

1.  **Separate extract, transform, and load steps**: Use separate modules for each step to improve maintainability and testability.
2.  **Keep data cleaning isolated**: Create a dedicated module for data cleaning tasks and define specific functions for each task.
3.  **Stay testable over time**: Write unit tests for individual components, use mocking libraries, and regularly review/refactor code.
4.  **Consider using FastAPI or other frameworks**: Leverage existing tools to simplify the ETL process and ensure scalability.

By following these guidelines, you'll create a robust, maintainable, and testable ETL script that scales with your project's needs.
