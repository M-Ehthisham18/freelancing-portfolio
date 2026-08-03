# Graphify Workflow Integration Guide

This document describes how to use and maintain Graphify as the primary codebase knowledge system for the StudioDev Portfolio project.

---

## 1. Installation & Integration

### Prerequisites
- Python 3.12+
- `pip` (package installer for Python)

### Step-by-Step Setup
1. **Install the package:**
   ```bash
   python -m pip install graphifyy
   ```
2. **Register Graphify for Antigravity (Project-scoped):**
   Run the following commands to install rules and workflows for Antigravity:
   ```bash
   python -m graphify antigravity install
   ```
   This generates `.agent/rules/graphify.md` and `.agent/workflows/graphify.md`. To keep these customizations recognized by Antigravity in this repository, they are also configured under the workspace customizations directory `.agents/`:
   * `.agents/skills/graphify/SKILL.md` (copied from global installer)
   * `.agents/AGENTS.md` (active rules directing Antigravity to always query Graphify first)

---

## 2. Updating & Regenerating the Graph

Whenever files are added, removed, or modified significantly, developers must regenerate the graph.

### Incremental Rebuild (Fast/Standard)
Re-parses only the changed files (using MD5 file hashes):
```bash
python -m graphify update .
```

### Full Rebuild
If you've refactored or deleted a large amount of code, force a full rebuild:
```bash
python -m graphify update . --force
```

---

## 3. Querying the Graph

To query the knowledge graph without performing repository-wide scans:

### Search / Traversal
Use standard Breadth-First Search (BFS) to find concepts and nearest neighbors:
```bash
python -m graphify query "What are the core components?"
```

### Path Trace
To trace the relationship path between two components:
```bash
python -m graphify path "Button" "Hero"
```

### Symbol Explanation
To get a plain-language summary of a module and its direct connections:
```bash
python -m graphify explain "Services"
```

---

## 4. Troubleshooting

* **Executable blocked by policy:** If running `graphify` directly fails with an Application Control policy block, prefix the command with python: `python -m graphify <args>`.
* **Empty Graph error:** If the update command complains that the graph is empty, verify that there are valid source code files (`.ts`, `.tsx`, `.js`, `.py`) in the target path and that they are not ignored.
