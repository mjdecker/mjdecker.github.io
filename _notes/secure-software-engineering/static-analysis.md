---
title: "Static Analysis"
layout: notes
---

[GraphViz Online]: https://dreampuf.github.io/GraphvizOnline/

# Code Analysis
* *static program analysis*
    * Analysis of software source code and other artifacts
* *dynamic program analysis*
    * Analysis of output/trace data from running programs

# Uses for Static Analysis
* Search/Query
* Metrics
* Support Program Understanding/Comprehension, Code Review
* Reverse Engineering
* Program Transformation
* Program Optimization
* Program Correctness

# Use of Graphs
* Form of *software visualization*
* Allows us to see overall view instead of lost in details
* *focus* + *context*

# Major Graphs
* Call Graph
* Control Flow Graph (CFG)
* Data Flow Diagram (DFD)
* Program Dependency Graph (PDG)

# Call Graph
* Nodes:  methods/functions
* Edges:  method/function calls
* [Large call graph graph comparison](https://lxer.com/module/forums/t/32899/)

# Call Graph:  Functions
<script src="https://gist.github.com/mlcollard/3e3911e0ade874f0a1d7b8434e30680f.js?file=callgraph_Functions.cpp"></script>

# Demo: Create Call Graph
[GraphViz Online]

# Call Graph: Methods
<script src="https://gist.github.com/mlcollard/3e3911e0ade874f0a1d7b8434e30680f.js?file=callgraph_Methods.cpp"></script>

# Call Graph: Macros
<script src="https://gist.github.com/mlcollard/3e3911e0ade874f0a1d7b8434e30680f.js?file=callgraph_Macros.cpp"></script>

# Call Graph:  Function Pointers
<script src="https://gist.github.com/mlcollard/3e3911e0ade874f0a1d7b8434e30680f.js?file=callgraph_Pointers.cpp"></script>

# Call Graph:  Arrays of Functions
<script src="https://gist.github.com/mlcollard/3e3911e0ade874f0a1d7b8434e30680f.js?file=callgraph_Arrays.cpp"></script>

# *points-to analysis*
* AKA, *pointer analysis*
* *conservative*
* [Different call-graph generators produce different call graphs](https://dl.acm.org/citation.cfm?id=279314)

# What do we do with a call graph?
* Directly:  Examine them for interesting patterns
* Indirectly:  Generate, then use the information for computation

# Control-Flow Graph
* Nodes:  statements
* Edges:  control flow

# Example: Binary Search
<script src="https://gist.github.com/mjdecker/d6058119ca64882ceddbcb334fc7c8cb.js?file=binary-search.cpp"></script>

# Example  Binary Search (Dot)
<script src="https://gist.github.com/mjdecker/d6058119ca64882ceddbcb334fc7c8cb.js?file=binary-search.dot"></script>





