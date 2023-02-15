---
title: Path Testing
layout: notes
---

[infeasible]: /images/software-testing/path-testing/infeasible.png
[dd-paths]: /images/software-testing/path-testing/dd-paths.png
[sales-commission]: /images/software-testing/path-testing/sales-commission.png
[sales-commission-dd-path]: /images/software-testing/path-testing/sales-commission-dd-path.png
[loop-types]: /images/software-testing/path-testing/loop-types.png
[basis-path]: /images/software-testing/path-testing/basis-path.png

# Recap Black-box vs White-box
* Black-box testing - test to specification
	* AKA Functional testing
* White-box testing - test to code
	* AKA Structural Testing
	* AKA Clear/Glass-box Testing
* Approaches complement each other

# White-box Testing
* Tests derived:
	* From the structure of the program
	* By utilizing knowledge (inner workings) of the program
* Good for assessing test quality 
* But, not as helpful for identifying the test cases

# White-box Testing (continued)
* Goal is to insure all the code is exercised 
* Usually done at unit-level

# Types of White-box Testing
* Statement coverage
* Path Testing 
* Data flow testing
* Slice Testing

# Path Testing
* Use a graph to derive paths
* Each test executes a path
* Caveats
	* How to test every path with a program containing loops?
	* Some paths may not be possible
	* Executing every path does not guarantee correctness 

# Infeasibility
![infeasible]
*  If loop runs up to 18 times, then 4.77 trillion paths [Schach]

#  Pairing Down
* Choose a set of paths that cover:
	* Every node
	* Every edge
	* Condition of loop is true (loop once)
	* Condition of loop is false (no looping)

#  Name the Paths?
![infeasible]
* Every node/edge and loop condition true/false

# Sample Paths
* First-A-B-C-F-G-Last
* First-A-B-C-D-F-G-Last
* First-A-B-D-F-G-Last  
* First-A-B-E-F-G-Last 
* First-A-B-E-D-F-G-Last
* First-A-B-E-D-F-G-A-B-E-D-F-G-Last

# DD-Paths
* Decision-to-decision paths [Miller 1977]
* Simplifies graphs for testing
* Basis for some test covering metrics

![dd-paths]

# DD-Paths Definition (formal)
* A DD-Path (decision-to-decision) is a path in program graph such that
	* Case 1: Single node: indegree = 0
	* Case 2: Single node: outdegree = 0
	* Case 3: Single node: indegree >= 2 or outdegree >= 2
	* Case 4: Single node: indegree = 1 and outdegree = 1
	* Case 5: Maximal chain of length >= 1
* Case 1-4 ensure all nodes are a DD-Path

# Simplifying Graph via DD-Path
* DD-Path Graph - Directed graph where nodes are DD-Paths of a program graph and edges represent control flow between DD-paths
* Similar to condensation graph

# DD-Paths Definition (for example)
* Merge sequential statements into a DD-Path

# Create the DD-Path Graph
![sales-commission]

# Create the DD-Path Graph (answer)
![sales-commission-dd-path]

# Cyclomatic Complexity
* What is the cyclomatic complexity of each of both graphs?
* What do you notice? 

# Excercise 2 (answer)
* What is the cyclomatic complexity of each of both graphs?
	* Original: 4
	* DD-Path:  4
* What do you notice?
	* They are the same
	* Each merge/removal of a node removes an edge as well
	* So, no change to `E - N + 2`

# Code-based Test Coverage Metrics
* Evaluates a given set of test cases
* May be required by:
	* Contract
	* US Department of Defense
	* Company standards
* Helps find gaps and redundancies arising from black-box tests
* Some forms may lead to false sense of security

# General Metrics
* Coverage of
	* Every node
	* Every edge
	* Every chain
	* Every path

# Miller's Metrics
* C<sub>0</sub>: Every statement (node coverage)
* C<sub>1</sub>: Every DD-Path
* C<sub>1p</sub>: Every predicate outcome
* C<sub>2</sub>: C<sub>1</sub> + loop coverage
* C<sub>d</sub>: C<sub>1</sub> coverage + every pair of dependent DD-Paths

# Miller's Metrics (continued)
* C<sub>MCC</sub>: Multiple Condition Coverage - All ways a decision can occur
* C<sub>ik</sub>: Every program path up to k repetitions of  a loop (usually k = 2)
* C<sub>stat</sub>: Statistically significant fraction of paths
* C<sub>∞</sub>: All possible execution paths

# General and Miller's
* Are there similarities?

# General and Miller's
* Are there similarities?
*  C<sub>∞</sub> = Every path
* C<sub>0</sub> = node coverage
* C<sub>1</sub> = chain coverage also means C<sub>1p</sub>
* C<sub>2</sub> = C<sub>1</sub> + loop (edge coverage)

# Huang's Theorem
* Paraphrased: Everything interesting happens in two traversals of a loop: the normal traversal and the exit traversal
* How does this relate to coverage metrics?

# Huang's Theorem
* Paraphrased: Everything interesting happens in two traversals of a loop: the normal traversal and the exit traversal
* How does this relate to coverage metrics?
	* Every edge (of loop)

# Concatenated, Nested, & Knotted Loops
* From left to right: Concatenated, Nested, & Knotted

![loop-types]

# Concatenated Loop Example
<script src="https://gist.github.com/mjdecker/418c966d501baa41420a27415fe7f286.js?file=concatenated-loop.cpp"></script>

# Nested Loop Example
<script src="https://gist.github.com/mjdecker/418c966d501baa41420a27415fe7f286.js?file=nested-loop.cpp"></script>

# Knotted Loop Example
<script src="https://gist.github.com/mjdecker/418c966d501baa41420a27415fe7f286.js?file=knotted-loop.cpp"></script>

# Loop Testing
* At least 2 are required (Huang's theorem), in reality, use judgment to see if more are required
* Concatenated loops - Use Huang's theorem/judgment
* Nested loops - test the innermost first, condense into a single node, and repeat testing until reach the outermost loop
* Knotted loops - rewrite the code...

# Testing Procedure
* Start with tests generated from the appropriate black-box test method
* Inspect coverage
	* If appropriate, done
	* Otherwise, add more tests

# Test Coverage Tools
* Instrument the code to add code to collect statistics on what executed
* Run a set of test cases and obtain the test coverage
* Instrumented code is not quite the same as running on the original code
	* Safety-critical applications require tests on actual non-instrumented code
	* Usually addressed by mandated testing standards

# Basis Path Testing
* Proposed by McCabe in 1982
* Math basis
	* Vector space has set of independent vectors called basis vectors
	* All elements in vector space are a linear combination of basis vectors
*  Euclidian 3-D space has the following basis vectors
	* (1, 0, 0)
	* (0, 1, 0)
	* (0, 0, 1)
* Testing implication: treat the program as a vector space and derive a set of basis vectors (paths)

# Basis Path Testing (continued)
* Require a set of base paths that spans the program and all other paths can be derived from
* Cyclomatic complexity is number of linearly independent paths
* V(G) = P + 1
* As all paths are a combination of the basis paths, test the basis paths

# Generating Basis Paths
* Pick a "baseline" path that corresponds to normal execution (should have as many decisions as possible) 
*  Retrace baseline, flip a decision (take another alternative), and continue as much of the baseline as possible 
* Repeat this until all decisions have been flipped
* If not enough decisions in the baseline path, find a second baseline and repeat steps 2 and 3

# Cyclomatic Example
* Compute the cyclomatic complexity and a set of basis paths

![basis-path]

# Cyclomatic Example (answers)
* Initial(p<sub>1</sub>):  A, B, C, G
* Flip C(p<sub>2</sub>): A, B, C, B, C, G
* Flip B(p<sub>3</sub>): A, B, E, F, G
* Flip A(p<sub>4</sub>): A, D, E, F, G
* Flip D(p<sub>5</sub>): A, D, F, G
* A, B, C, B, E, F, G = p<sub>2</sub> + p<sub>3</sub> - p<sub>1</sub>
* A, B, C, B, C, B, C, G = 2p<sub>2</sub> - p<sub>1</sub>

# + & - of Basis Paths
* +
	* Easy to derive
	* Address both gaps and redundancies.
* -
	* What is the significance of a path as a linear combination of basis paths? 
	* What do the coefficients mean? What does a minus sign mean? 
	* In the path 2p<sub>2</sub> - p<sub>1</sub> should a tester run path p<sub>2</sub> twice, and then not do path p<sub>1</sub> the next time?
	* Is there any guarantee that basis paths are feasible?
	* Is there any guarantee that basis paths will exercise interesting dependencies?

# Ending Remarks
* Complement to black-box testing, identifying gaps and redundancies in black-box tests
* Required for certain systems
* Does not help identify tests
* Does not guarantee absence of faults

# References
* http://www.cs.kent.edu/~jmaletic
* Jorgensen, P., Software testing: a craftman’s approach, CRC Press, 2016.


