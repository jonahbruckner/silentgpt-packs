---
id: q_pydata_0201_d13
draft_id: q_pydata_0201_d13
topic: python-data
title: How can I systematically speed up pandas-based data processing scripts, and how do I decide whether a pipeline is CPU-bound, I/O-bound or memory-bound before optimizing
slug: how-can-i-systematically-speed-up-pandas-based-data-processing-scripts-and-how-do-i-decide-whether-a-pipeline-is-cpu-bound-i/o-bound-or-memory-bound-before-optimizing
level: intermediate
---

# How can I systematically speed up pandas-based data processing scripts, and how do I decide whether a pipeline is CPU-bound, I/O-bound or memory-bound before optimizing

# Optimizing Pandas-Based Data Processing Scripts: A Step-by-Step Approach

When working with large datasets and pandas, it's common to encounter performance bottlenecks that slow down your data processing scripts. To tackle these issues effectively, you need to understand the underlying concepts and apply a systematic approach to identify and optimize the bottlenecks.

## Understanding Performance Bottlenecks in Pandas-Based Scripts

There are three primary types of performance bottlenecks:

1. **CPU-bound**: When the bottleneck is due to excessive computation on the CPU (Central Processing Unit), such as performing complex mathematical operations or data transformations.
2. **I/O-bound**: When the bottleneck is caused by slow input/output operations, such as reading or writing large files, network requests, or database queries.
3. **Memory-bound**: When the bottleneck occurs due to insufficient memory resources, resulting in excessive swapping or disk I/O.

## Identifying Performance Bottlenecks with Profiling

To identify performance bottlenecks, you can use profiling tools like `line_profiler` or `memory_profiler`. Let's see an example of using `line_profiler` to profile a simple pandas script:

```python
import pandas as pd
from line_profiler import LineProfiler

# Create a sample DataFrame
df = pd.DataFrame({'A': [1] * 1000000, 'B': [2] * 1000000})

def slow_function(df):
    # Simulate CPU-bound operation
    return df['A'] ** 2 + df['B']

profiler = LineProfiler()
profiler.add_function(slow_function)
profiler.add_function(pd.DataFrame.__init__)
profiler.run('slow_function(df)')

profiler.print_stats()
```

This will output a detailed profile showing which lines of code are consuming the most CPU time. In this example, the `** 2` operation is the culprit.

## Step-by-Step Approach to Optimizing Pandas-Based Scripts

1. **Analyze the data**: Understand the distribution and size of your data. Large datasets often require specialized storage solutions or processing techniques.
2. **Profile the script**: Use profiling tools like `line_profiler` or `memory_profiler` to identify performance bottlenecks.
3. **Optimize CPU-bound operations**:
	* Use vectorized operations whenever possible.
	* Leverage numba's just-in-time (JIT) compilation for performance-critical code.
	* Consider using more efficient libraries like Dask for parallelization.
4. **Optimize I/O-bound operations**:
	* Use chunking or buffering techniques to read data in smaller chunks.
	* Optimize database queries by indexing, caching, and minimizing the number of queries.
5. **Optimize memory-bound operations**:
	* Reduce data duplication by using views or references instead of copies.
	* Leverage libraries like Dask for parallelization and efficient memory usage.

## FastAPI Code Example: Optimizing CPU-Bound Operations

Here's an example of optimizing a FastAPI endpoint that performs CPU-bound operations on large datasets:

```python
from fastapi import FastAPI, Depends
import pandas as pd
from numba import njit

app = FastAPI()

@njit
def cpu_bound_operation(df):
    return df['A'] ** 2 + df['B']

@app.get("/cpu-bound/")
async def read_cpu_bound_data(df: pd.DataFrame):
    result = cpu_bound_operation(df)
    return {"result": result}
```

In this example, we use Numba's `@njit` decorator to compile the CPU-bound operation for Just-In-Time (JIT) compilation.

## Summary & Checklist

To systematically speed up pandas-based data processing scripts:

1. Analyze your data and identify potential bottlenecks.
2. Profile your script using tools like `line_profiler` or `memory_profiler`.
3. Optimize CPU-bound operations by leveraging vectorized operations, numba's JIT compilation, or more efficient libraries like Dask.
4. Optimize I/O-bound operations by chunking data, optimizing database queries, and caching results.
5. Optimize memory-bound operations by reducing data duplication and using parallelization techniques.

By following this step-by-step approach, you'll be able to identify and optimize performance bottlenecks in your pandas-based scripts, resulting in faster processing times and improved overall performance.
