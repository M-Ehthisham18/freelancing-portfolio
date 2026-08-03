# Antigravity Workspace Rules for Graphify

## Graphify Rules
This project uses Graphify as its primary project knowledge system. Both human developers and AI assistants (Antigravity) must follow these workflows to understand the codebase.

- **Primary Source of Truth**: Always consult `graphify-out/graph.json` and `graphify-out/GRAPH_REPORT.md` before performing repository-wide searches or file reads.
- **Workflow for Questions**:
  1. Receive user question/task.
  2. Query the graph using `python -m graphify query "<question>"` to find relevant nodes and relationships.
  3. Locate the related components, pages, or modules.
  4. Read only the specific files identified in the query results.
  5. Formulate the response/answer.
  6. Avoid any repository-wide file scans or `grep` searches unless Graphify cannot answer the question or lacks context.
- **Keep Current**: After modifying any code files, run `python -m graphify update .` (or `npm run graphify`) to ensure the graph remains synchronized.
