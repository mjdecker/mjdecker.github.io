---
title: "Software Complexity"
layout: notes
---

# Complexity Measures/Metrics
* LOC - a function of complexity
* Halstead Complexity Measures
* McCabe’s Complexity Measures
* McClure's Complexity Metric

# Halstead’s Software Science (entropy measures)
* Computer program in software science is considered a series of operator/operator tokens
	- n<sub>1<sub> - number of distinct operators
	- n<sub>2</sub> - number of distinct operands
	- N<sub>1</sub> - total number of operators
	- N<sub>2</sub> - total number of operands
* All software Sicence measures built off of these

# Example Halstead Complexity Measures
		if (k < 2) {
  			if (k > 3)
    			x = x * k;
		}

* Distinct operators: if ( ) { } > < = * ;
* Distinct operands: k 2 3 x

* n<sub>1</sub> = 10 <br/>
   n<sub>2</sub> = 4<br/>
   N<sub>1</sub> = 13<br/>
   N<sub>2</sub> = 7

* Different sources compute differently

# Halstead Metrics


* Length (Size):  N = N<sub>1</sub> + N<sub>2</sub>
* Vocabulary:  n = n<sub>1</sub> + n<sub>2</sub>
* Estimated length: N̂ = n<sub>1</sub> log<sub>2</sub> n<sub>1</sub> + n<sub>2</sub> log<sub>2</sub> n<sub>2</sub>

	- Close estimate of length for well structured programs

* Purity ratio: PR =  N̂ / N

# Program Complexity

* Volume: V = N log<sub>2</sub> n

	- Number of bits to provide a unique designator for each of the n items in the program vocabulary.

* Program effort: E = V / L

	- where, L = V<sup>*</sup> / V, and 
	- V<sup>*</sup> is the volume of most compact design implementation
	- This is a good measure of program understandability
	- L can be estimated with: (2 / n<sub>1</sub>) (n<sub>2</sub> / N<sub>2</sub>)

# McCabe’s Complexity Measures
* McCabe’s metrics are based on a control flow representation of the program.
* A program graph is used to depict control flow.
* Nodes represent processing tasks (one or more code statements)
* Edges represent control flow between nodes

# Cyclomatic Complexity
* Set of independent paths through the graph (basis set)

* V(G) = E – N + 2
	- E is the number of flow graph edges
	- N is the number of nodes

* V(G) = P + 1
	- P is the number of predicate nodes

# Cyclomatic Complexity Meaning
* V(G) is the number of (enclosed) regions/areas of the planar graph
* Number of regions increases with the number of decision paths and loops.
* A quantitative measure of testing difficulty and an indication of ultimate reliability
* Experimental data shows value of V(G) should be no more then 10.  Testing is very difficulty above this value.

# McClure's Complexity Metric

* Complexity = C + V

	- C is the number of comparisons in a module
	- V is the number of control variables referenced in the module
* Similar to McCabe’s but with regard to control variables.
