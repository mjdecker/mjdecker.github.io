---
title: Data flow Testing
layout: notes
---

[commission-data-flow]: /images/software-testing/data-flow/commission-data-flow.png
[commission-def-use]: /images/software-testing/data-flow/commission-def-use.png

# White-box Testing
* Test cases derived from the structure of the program
* Utilizes knowledge (inner workings) of the program to derive tests
* Not helpful for identifying test cases
* Good for evaluating a set of tests

# Types of White-box Testing
* <del>Statement coverage</del>
* <del>Path Testing </del>
* Data flow testing
* Slice Testing

# Data Flow Testing
* Can be viewed as a form of path testing
* Based on place in program where data is defined and used
	* i.e., declared, assigned, referenced
* Test interesting data flows 
* Static and dynamic versions

# Define/Reference Anomalies
* Can be found statically
* Defined but never referenced (used)
* Used but never defined
* Defined multiple times 

# Define/Use Testing
* Use pairs of definition and use of variables to develop tests
* Will use the following terms:
	* P = program
	* G(P) = program graph of P
	* V = set of program variables

# Defining Node
> A defining node of the variable v ∈ V, written as DEF(v, n), iff the value of the variable v is defined at the statement fragment corresponding to node n

# Usage Node
> A usage node of the variable v ∈ V, written as USE(v, n), iff the value of the variable v is used at the statement fragment corresponding to node n

# Predicate & Computation Use
> A usage node USE(v, n) is a predicate use (P-use) iff statement n is a predicate statement, otherwise it is a computation use (C-use)

* Predicate uses always have an outdegree >= 2
* Compuational use always have an outdegree <= 1

# Definition-use Path
> A definition-use path with respect to a variable v (denoted du-path) is a path in the set of all paths in P,  PATHS(P), such that for some v ∈ V, there are define and usage nodes DEF(v, m) and USE(v, n) such that m and n are the initial and final nodes of the path.

# Definition-clear Path
> A definition-clear path with respect to a variable v (denoted dc-path) is a definition-use path in PATHS(P) with initial and final nodes DEF (v, m) and USE (v, n) such that no other node in the path is a defining node of v.

# Sales Commission Program
<script src="https://gist.github.com/mjdecker/afd7b24e8239ebd138a7f5129d40a505.js?file=sales-commission.py"></script>

# Commission Program Graph
 ![commission-data-flow]

# Some Def and Use Nodes

|Variable|Defined at Node|Used at Node|
|---|---|---|
|lockPrice|7|24|
|totalLocks|10, 16|16, 21, 24|
|locks|13, 19|14, 16|
|lockSales|24|27|
|sales|27|28, 29, 33, 34, 37, 38|
|commission|31, 32, 33, 36, 37, 38|32, 33, 37, 41|

# Exercise: Def & Use

|Variable|Defined at Node|Used at Node|
|---|---|---|
|stockPrice| | |
|totalStocks| | |
|locks|13, 19|14, 16|
|stockSales| | |
|sales|27|28, 29, 33, 34, 37, 38|
|commission|31, 32, 33, 36, 37, 38|32, 33, 37, 41|

# Exercise: Def & Use (answers)

|Variable|Defined at Node|Used at Node|
|---|---|---|
|stockPrice|8|25|
|totalStocks|11, 17|17, 22, 25|
|locks|13, 19|14, 16|
|stockSales|25|27|
|sales|27|28, 29, 33, 34, 37, 38|
|commission|31, 32, 33, 36, 37, 38|32, 33, 37, 41|

# Define/Use Paths for Locks
* All are definition-clear
* p<sub>1</sub> = &lt;13, 14&gt;
* p<sub>2</sub> = &lt;13, 14, 15, 16&gt;
* p<sub>3</sub> = &lt;19, 20, 14&gt;
* p<sub>4</sub> = &lt;19, 20, 14, 15, 16&gt;

# Graph of Define/Use Paths for Locks
![commission-def-use]

---

# Define/Use Testing
* Could use du analysis to derive tests (such as one for each du-path)
* However, not easy to actually derive the tests
* Instead, we use them to define test coverage metrics

---

# All-Defs Metric
* T = a set of paths

> T satisfies the All-Defs criterion for the program P iff for every variable v ∈ V, T contains definition-clear paths from every defining node of v to a use of v

---

# All-C-Uses Metric

> T satisfies the All-C-Uses/Some P-Uses criterion for the program P iff for every variable v ∈ V, T contains definition-clear paths from every defining node of v to every computation use of v; if a definition of v has no C-uses, a definition-clear path leads to at least one predicate use.

---

# All-P-Uses Metric
> T satisfies the All-P-Uses/Some C-Uses criterion for the program P iff for every variable v ∈ V, T contains definition-clear paths from every defining node of v to every predicate use of v; if a definition of v has no P-uses, a definition-clear path leads to at least one computation use.

---

# All-Uses Metrics
> T satisfies the All-Uses criterion for the program P iff for every variable v ∈ V, T contains definition-clear paths from every defining node of v to every use of v

---

# All-DU-Paths Metric
> T satisfies the All-du-paths criterion for the program P iff for every variable v ∈ V, T contains every definition-use path (single-loop/cycle free) from every defining node of v to every use of v

---

# References
* Jorgensen, P., Software testing: a craftman’s approach, CRC Press, 2016.


