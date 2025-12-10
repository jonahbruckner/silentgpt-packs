export interface BlogPost {
  title: string;
  slug: string;
  publishDate: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How to diagnose 500 errors in FastAPI",
    slug: "diagnose-500-errors-fastapi",
    publishDate: "2024-12-05",
    excerpt: "A systematic approach to debugging internal server errors in FastAPI applications, from stack traces to request validation.",
    content: `
      <p>500 errors in FastAPI are frustrating because they often hide the real problem. Unlike 4xx errors that tell you exactly what went wrong, a 500 error just says "something broke." Let's fix that.</p>
      
      <h2>Step 1: Enable detailed exception handlers</h2>
      <p>The first thing you need is proper exception handling. FastAPI's default error responses are minimal in production. Add a custom exception handler that logs the full traceback:</p>
      <pre><code>@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"Unhandled exception: {exc}", exc_info=True)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"}
    )</code></pre>
      
      <h2>Step 2: Check your dependency injection chain</h2>
      <p>Most 500 errors I see come from dependencies that fail silently or raise unexpected exceptions. If you have a <code>get_db</code> dependency, make sure it handles connection failures gracefully. Same goes for authentication dependencies.</p>
      
      <h2>Step 3: Validate your Pydantic models</h2>
      <p>Sometimes the issue is in response serialization, not the request. If your endpoint returns data that doesn't match your response model, FastAPI will throw a 500. Use <code>response_model_exclude_unset=True</code> to help debug these issues.</p>
      
      <h2>Step 4: Look at async/await patterns</h2>
      <p>Mixing sync and async code incorrectly is a common source of 500 errors. If you're calling a sync function in an async endpoint without using <code>run_in_executor</code>, you might be blocking the event loop and causing timeouts or race conditions.</p>
      
      <h2>Step 5: Add structured logging</h2>
      <p>Finally, add request IDs and structured logging so you can trace a single request through your entire application. This makes debugging production issues much faster.</p>
      
      <p>The key is to build a debugging workflow that you can repeat. Every 500 error is an opportunity to make your application more observable.</p>
    `,
  },
  {
    title: "Optimizing pandas code without rewriting everything",
    slug: "optimizing-pandas-without-rewriting",
    publishDate: "2024-12-03",
    excerpt: "Quick wins for speeding up slow pandas code: dtypes, vectorization, and avoiding common performance traps.",
    content: `
      <p>You've inherited a pandas codebase that takes 20 minutes to process a file that should take seconds. The temptation is to rewrite everything in Polars or throw more RAM at it. But often, a few targeted changes can get you 10x improvements.</p>
      
      <h2>Fix your dtypes first</h2>
      <p>The single biggest quick win is usually dtype optimization. A DataFrame with object columns for numeric data uses 5-10x more memory than it needs to. Run <code>df.dtypes</code> and look for:</p>
      <ul>
        <li>Object columns that should be numeric or categorical</li>
        <li>int64 columns that could be int32 or int16</li>
        <li>float64 columns that could be float32</li>
      </ul>
      <p>Use <code>pd.to_numeric()</code> with <code>downcast='integer'</code> or <code>downcast='float'</code> for automatic optimization.</p>
      
      <h2>Eliminate row-by-row operations</h2>
      <p>Any time you see <code>iterrows()</code>, <code>apply(axis=1)</code>, or a for loop over DataFrame rows, you have a performance problem. These are 100-1000x slower than vectorized operations.</p>
      <p>Instead of:</p>
      <pre><code>for idx, row in df.iterrows():
    df.loc[idx, 'new_col'] = row['a'] + row['b']</code></pre>
      <p>Write:</p>
      <pre><code>df['new_col'] = df['a'] + df['b']</code></pre>
      
      <h2>Use query() for filtering</h2>
      <p>The <code>query()</code> method is often faster than boolean indexing for complex conditions, and it's more readable:</p>
      <pre><code>df.query('age > 30 and status == "active"')</code></pre>
      
      <h2>Profile before optimizing</h2>
      <p>Use <code>%%timeit</code> in Jupyter or the <code>line_profiler</code> package to find the actual bottlenecks. Often the slow code isn't where you expect it to be.</p>
      
      <p>Start with these changes before considering a full rewrite. You'll often find that simple fixes get you 80% of the performance improvement you need.</p>
    `,
  },
  {
    title: "The FastAPI logging setup I use in every project",
    slug: "fastapi-logging-setup",
    publishDate: "2024-11-28",
    excerpt: "A production-ready logging configuration for FastAPI with structured JSON output, request tracing, and proper log levels.",
    content: `
      <p>Every FastAPI project needs proper logging from day one. Here's the setup I copy into every new project, refined over dozens of production deployments.</p>
      
      <h2>The core configuration</h2>
      <p>First, create a <code>logging_config.py</code> file with a structured JSON formatter. This makes logs parseable by tools like Datadog, CloudWatch, or your ELK stack:</p>
      <pre><code>import logging
import json
from datetime import datetime

class JSONFormatter(logging.Formatter):
    def format(self, record):
        log_obj = {
            "timestamp": datetime.utcnow().isoformat(),
            "level": record.levelname,
            "message": record.getMessage(),
            "module": record.module,
        }
        if hasattr(record, 'request_id'):
            log_obj['request_id'] = record.request_id
        return json.dumps(log_obj)</code></pre>
      
      <h2>Add request ID middleware</h2>
      <p>Every request should get a unique ID that flows through all your logs. This makes debugging production issues 10x easier:</p>
      <pre><code>@app.middleware("http")
async def add_request_id(request: Request, call_next):
    request_id = request.headers.get("X-Request-ID", str(uuid4()))
    request.state.request_id = request_id
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response</code></pre>
      
      <h2>Configure log levels properly</h2>
      <p>Use environment variables to control log levels. In development, you want DEBUG. In production, INFO or WARNING. Never hardcode log levels:</p>
      <pre><code>LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
logging.getLogger().setLevel(LOG_LEVEL)</code></pre>
      
      <h2>Silence noisy libraries</h2>
      <p>Some libraries are extremely chatty. Explicitly silence them:</p>
      <pre><code>logging.getLogger("uvicorn.access").setLevel(logging.WARNING)
logging.getLogger("sqlalchemy.engine").setLevel(logging.WARNING)</code></pre>
      
      <p>This setup takes 15 minutes to implement and saves hours of debugging time over the life of your project.</p>
    `,
  },
  {
    title: "How to process huge CSVs with chunking",
    slug: "process-huge-csvs-chunking",
    publishDate: "2024-11-22",
    excerpt: "Process multi-gigabyte CSV files that don't fit in memory using pandas chunking, with patterns for aggregation and transformation.",
    content: `
      <p>You have a 10GB CSV file and 8GB of RAM. The naive <code>pd.read_csv()</code> fails with a memory error. Here's how to handle it properly.</p>
      
      <h2>Basic chunking pattern</h2>
      <p>The <code>chunksize</code> parameter turns <code>read_csv</code> into an iterator:</p>
      <pre><code>chunks = pd.read_csv('huge_file.csv', chunksize=100000)
for chunk in chunks:
    process(chunk)</code></pre>
      <p>Choose your chunk size based on available memory. Start with 100,000 rows and adjust based on your data width.</p>
      
      <h2>Aggregation across chunks</h2>
      <p>For operations like sum, mean, or count, you need to aggregate incrementally:</p>
      <pre><code>total_sum = 0
total_count = 0

for chunk in pd.read_csv('data.csv', chunksize=100000):
    total_sum += chunk['value'].sum()
    total_count += len(chunk)

mean = total_sum / total_count</code></pre>
      
      <h2>Filtering and writing</h2>
      <p>Often you just need to filter a large file down to a smaller subset:</p>
      <pre><code>first_chunk = True
for chunk in pd.read_csv('huge.csv', chunksize=100000):
    filtered = chunk[chunk['status'] == 'active']
    filtered.to_csv('filtered.csv', 
                    mode='a', 
                    header=first_chunk,
                    index=False)
    first_chunk = False</code></pre>
      
      <h2>Optimize dtypes during read</h2>
      <p>Specify dtypes upfront to reduce memory usage per chunk:</p>
      <pre><code>dtypes = {
    'id': 'int32',
    'category': 'category',
    'value': 'float32'
}
chunks = pd.read_csv('data.csv', dtype=dtypes, chunksize=100000)</code></pre>
      
      <h2>Consider alternatives for complex operations</h2>
      <p>If you need to do groupby or join operations across chunks, consider using Dask, which provides a pandas-like API but handles the chunking automatically. But for simple filter/transform/aggregate workflows, manual chunking with pandas is often sufficient and simpler to debug.</p>
    `,
  },
  {
    title: "Async vs sync pitfalls in FastAPI (and how to avoid them)",
    slug: "async-sync-pitfalls-fastapi",
    publishDate: "2024-11-15",
    excerpt: "Understanding when to use async def vs def in FastAPI, and common mistakes that kill your API's performance.",
    content: `
      <p>FastAPI supports both sync and async endpoints, but mixing them incorrectly can destroy your performance. Here's what you need to know.</p>
      
      <h2>The basic rule</h2>
      <p>Use <code>async def</code> when you're doing I/O operations with async libraries. Use regular <code>def</code> when you're doing CPU-bound work or using sync libraries.</p>
      <pre><code># Good: async endpoint with async database
@app.get("/users")
async def get_users(db: AsyncSession = Depends(get_db)):
    return await db.execute(select(User))

# Good: sync endpoint with sync library
@app.get("/compute")
def compute_heavy():
    return heavy_cpu_operation()</code></pre>
      
      <h2>The biggest mistake: sync calls in async functions</h2>
      <p>This is the #1 performance killer I see:</p>
      <pre><code># BAD: blocks the event loop!
@app.get("/data")
async def get_data():
    result = requests.get("https://api.example.com")  # SYNC call!
    return result.json()</code></pre>
      <p>When you make a sync call inside an async function, you block the entire event loop. All other requests wait. Use <code>httpx</code> with async instead:</p>
      <pre><code># Good
@app.get("/data")
async def get_data():
    async with httpx.AsyncClient() as client:
        result = await client.get("https://api.example.com")
    return result.json()</code></pre>
      
      <h2>When sync endpoints are actually fine</h2>
      <p>FastAPI runs sync endpoints in a thread pool, so they don't block async endpoints. If your entire codebase is sync (using SQLAlchemy sync sessions, requests library, etc.), you can use regular <code>def</code> endpoints and FastAPI handles it correctly.</p>
      
      <h2>The run_in_executor pattern</h2>
      <p>If you must call sync code from an async function, use the executor:</p>
      <pre><code>import asyncio
from functools import partial

@app.get("/mixed")
async def mixed_endpoint():
    loop = asyncio.get_event_loop()
    result = await loop.run_in_executor(
        None, 
        partial(sync_function, arg1, arg2)
    )
    return result</code></pre>
      
      <p>The key is consistency: pick async or sync for your stack and stick with it. Mixing creates complexity and performance traps.</p>
    `,
  },
];
