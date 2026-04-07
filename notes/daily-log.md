# Day 1 -------------------------------------------------------

## Learned
- Basics of System Design and how modern web applications follow client–server architecture.
- Understood end-to-end login flow:
  `Frontend → API → Authentication Service → Database → Response`.
- Learned that failures can occur at multiple layers, not just backend or database.
- Identified where latency can happen (network, server processing, database queries).
- Introduction to performance testing using **k6** and concept of virtual users.
- Revised API testing fundamentals using Postman.
- Observed real production websites from a QA perspective using browser DevTools.

## Practiced
- Ran first k6 performance test script and observed execution metrics.
- Performed API requests in Postman and analyzed response data and timings.
- Inspected network requests and loading behavior on real-world websites.

## Problem Faced
- Initially analyzed failures from a single-layer perspective instead of system-wide flow.

## One Insight
Applications should be viewed as interconnected systems. Effective QA requires understanding how components interact rather than testing features in isolation.



# Day 2 -------------------------------------------------------

## Learned
- Understood how systems behave under heavy traffic conditions.
- Learned the difference between **latency** (time taken per request) and **throughput** (requests handled per second).
- Explored how bottlenecks can occur at different layers such as API servers, databases, and third-party services during high-traffic events.
- Learned that during large sales or peak traffic, systems may intentionally allow higher latency to maintain stability and throughput (graceful degradation).
- Gained clearer understanding of request flow, DNS resolution, and server processing at a conceptual level.
- Understood the QA perspective shift from functional testing to performance testing.

## Practiced
- Executed k6 load testing scripts using virtual users.
- Simulated ramp-up traffic to observe system behavior under increasing load.
- Observed performance metrics such as request duration and active virtual users.
- Revisited API testing concepts and analyzed response timing behavior.
- Used browser DevTools to observe network requests and performance patterns on real production websites.

## Problem Faced
- Some system design concepts (deep backend flow explanations) felt advanced and difficult to fully grasp initially.

## One Insight
Performance issues are rarely caused by a single component; the slowest dependency in the system becomes the bottleneck, especially under heavy traffic.



# Day 3 — Request Flow, Rendering & System Failures

## ✅ Morning Session

### HTTP Redirects (302 Found)
- Observed YouTube returning **302 Found** response.
- Learned that browser is redirected automatically to another URL.
- Used for authentication, geo-routing, and traffic management.

### Browser Rendering
- Rendering = converting HTML, CSS, and JavaScript into visible UI.
- Steps:
  - DOM creation from HTML
  - CSSOM creation
  - Layout calculation
  - Paint & composite
- Learned that UI slowness can occur even when backend APIs are fast.

### System Failure vs Functionality Failure
Key learning:
Systems fail due to **flow issues**, not individual feature failures.

Examples:
- API works independently.
- Database works independently.
- But request congestion or dependency delays cause system breakdown.

### Request Lifecycle Revision
DNS → TCP Connection → TLS Handshake → Request → Server Processing → Response → Browser Rendering.

---

## ✅ Night Session

### Network Analysis Practice
- Used Chrome DevTools Network tab on real websites.
- Observed:
  - Redirect behavior
  - Request timings
  - Payload sizes
  - Fast failures vs slower successful responses.

### Understanding Request Timing Behavior
- Failed requests often return quickly because server rejects early.
- Successful requests take longer due to processing, data fetching, and rendering.

### System Thinking Development
Started analyzing applications as:
User → Network → CDN → Server → Database → Browser Rendering pipeline.

---

## 🧠 Key Takeaway
A system’s stability depends on how smoothly requests travel through multiple services, not just whether individual components work correctly.



# Day 4 — CDN, Caching & Browser Storage Concepts

## ✅ Morning Session — CDN & Caching

### CDN (Content Delivery Network)
- CDN reduces latency by serving content from servers closer to the user.
- During high traffic events (sales), CDN prevents backend overload by serving cached static content.
- Backend servers then handle only dynamic requests like authentication and payments.

Key Insight:
CDN improves both latency and scalability by reducing requests reaching origin servers.

### Caching Concept
Learned different caching layers:
- Browser Cache
- CDN Edge Cache
- Server-side Cache

Observed that:
- First request is slower (cache miss).
- Later requests become faster (cache hit).

---

## ✅ Night Session — DevTools Practical Observation

### Network Tab Analysis
- Identified resources served from:
  - memory cache
  - disk cache
  - network/server
- Learned how browser reuses cached assets to improve performance.

### Cache vs Cookies
Cache:
- Stores website resources (images, CSS, JS).
- Used for faster loading.
- Not sent to server.

Cookies:
- Store user identity/session information.
- Sent with every request.
- Used for authentication and personalization.

### QA Insight
Improper caching or excessive cookies can create real performance issues and are detectable during testing.

---

## 🧠 Key Takeaway
Modern web performance is achieved not only by stronger servers but by intelligent caching and distributed content delivery systems.



# Day 5 — Concurrency, Queues & System Load Behavior

## ✅ Morning Session — Why Fast APIs Fail Under Load

### Fast API ≠ Stable System
- A fast API can still fail when traffic increases.
- Failures are usually caused by infrastructure limits rather than API logic.

Common bottlenecks identified:
- Server resource exhaustion
- Database connection limits
- Thread pool saturation
- High number of concurrent requests

Key Insight:
System performance depends on how resources are managed under load, not just how fast an API executes.

### Server Behavior Under Heavy Traffic
- Server must manage multiple incoming requests simultaneously.
- Even efficient APIs slow down when supporting services become busy.
- Database queries and resource allocation create delays during peak usage.

---

## ✅ Night Session — Concurrency, Capacity & Queues

### Concurrency vs Parallelism
Concurrency:
- Multiple requests progress together through scheduling.
- Execution feels simultaneous but shares resources.

Parallelism:
- Tasks truly run at the same time using multiple CPU cores.

Understanding:
Concurrency helps systems remain responsive without blocking execution.

### Why Adding Servers Doesn't Always Solve Traffic Problems
- Scaling application servers alone may not help.
- Database or downstream services may become bottlenecks.
- System scalability depends on the slowest component.

### When Concurrent Users Exceed Capacity
Observed system behavior:
- Requests enter queues when capacity is reached.
- Latency increases.
- Responses become slower but the system continues functioning.

### Why Queues Increase Latency but Prevent Failure
- Queues temporarily hold incoming requests.
- They prevent sudden system crashes under heavy traffic.
- Throughput remains stable even when response time increases.

---

## 🧠 Key Takeaway
System failures under load usually happen due to flow and resource management issues rather than functionality problems. Proper concurrency handling and queuing mechanisms keep systems stable during traffic spikes.