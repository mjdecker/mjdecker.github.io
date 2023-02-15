---
title: Graphs
layout: notes
---

# Why Graph Theory
* Programs can be represented as graphs
* This will help us understand white-box testing

# Graph
> A graph G = (V,E) is composed of a finite (nonempty) set V of nodes and a set E of unordered pair of nodes (edges)

* Drawn with nodes as circles and edges as lines

# Graph Example

![](graphs/graphs.004.png)

# Seven Bridges of Königsberg
* 1735: Graphs developed by Leonhard Euler as way to solve Bridges of Königsberg puzzle
* Problem: Take a walk round city, traversing each bridge exactly once

![](https://upload.wikimedia.org/wikipedia/commons/5/5d/Konigsberg_bridges.png)

# Seven Bridges of Königsberg (continued)

![](https://upload.wikimedia.org/wikipedia/commons/9/91/7_bridges.svg)

# Seven Bridges of Königsberg (continued again)

![](https://upload.wikimedia.org/wikipedia/commons/9/96/Königsberg_graph.svg)

# Seven Bridges of Königsberg Solution
* Each visit to a vertex (except start and end) takes two bridges: 1 to arrive, 1 to leave
* So except start and end: each must have even number of bridges
* All 4 nodes have odd number of edges
* Impossible

# Trees and Graphs
* What is a tree?
* What is the difference between a tree and a Graph?

# 
![](graphs/graphs.001.png)

# 
![](graphs/graphs.002.png)

# 
![](graphs/graphs.003.png)

# 
![](graphs/graphs.004.png)

# Example Graphs
* FileSystems
* Social media friend lists
* Navigation (Roads/Cities)
* Others?

# Running Example
* V = { n1, n2, n3, n4, n5, n6, n7 }
* E = { (n1, n2), (n1, n4), (n3, n4), (n2, n5), (n4, n6) }

#
![](graphs/graphs.005.png)

# Degree of a Node
> A degree of a node deg(n) is the number of edges that have an endpoint on that node

* Popularity of a node

# Node Degrees in Running Example
* Calculate the degrees for the running example

# Node Degrees in Running Example
* Calculate the degrees for the running example

```
deg(n1) = 2
deg(n2) = 2
deg(n3) = 1
deg(n4) = 3
deg(n5) = 1
deg(n6) = 1
deg(n7) = 0
```

# Program Representations of Graphs
* Adjacency Matrix
* Adjacency List

# Adjacency Matrix
> An adjacency matrix of a graph G = (V, E) with M nodes is an M x M matrix where the element in a row i, column j is 1 iff an edge exists between node i and node j, otherwise, the element is 0

#
![](graphs/graphs.005.png)

# Adjacency Matrix Example
| |n1|n2|n3|n4|n5|n6|n7|
|---|---|---|---|---|---|---|
|**n1**|0|1|0|1|0|0|0|
|**n2**|1|0|0|0|1|0|0|
|**n3**|0|0|0|1|0|0|0|
|**n4**|1|0|1|0|0|1|0|
|**n5**|0|1|0|0|0|0|0|
|**n6**|0|0|0|1|0|0|0|
|**n7**|0|0|0|0|0|0|0|

* What pattern/property do you see about the matrix?

# Adjacency Matrix Example
| |n1|n2|n3|n4|n5|n6|n7|
|---|---|---|---|---|---|---|
|**n1**|0|1|0|1|0|0|0|
|**n2**|1|0|0|0|1|0|0|
|**n3**|0|0|0|1|0|0|0|
|**n4**|1|0|1|0|0|1|0|
|**n5**|0|1|0|0|0|0|0|
|**n6**|0|0|0|1|0|0|0|
|**n7**|0|0|0|0|0|0|0|

* What pattern/property do you see about the matrix?
	* Column sum and Row sum is degree

# Adjacency Matrix Useage
* Useful for:
	* Reachability
	* Points affected by fault
	* Connectedness of a program
* Takes n<sup>2</sup> memory

# Adjacency List
> An adjacency list of a graph G = (V, E) with M nodes is an array where each node i in the array is a list of the nodes connected to i

* Memory linear (# of edges)

# Adjacency List Example

```
n1 = {n2, n4}
n2 = {n1, n5}
n3 = {n4}
n4 = {n1, n3, n6}
n5 = {n2}
n6 = {n4}
n7 = {}
```

# Paths in a Graph
> A path is a sequence of edges such that, for any adjacent pair of edges e<sub>i</sub>, e<sub>j</sub> in the sequence, the edges share a common endpoint (node)

* Can also be expressed as a sequence of nodes

# Example Paths
![](graphs/graphs.005.png)

* n1 to n5 (n1->n2->n5)
* n5 to n6 (n5->n2->n1->n4->n6)

# Connectivity
* Two nodes are connected iff they have a common path
* Is connectedness a equivalence relation?
	* Reflexive (by default a node is connected to itself)
	* Symmetric (a -> b, then b -> a)
	* Transitive (a -> b and a -> c, then a -> c)

# Components of a Graph
> A component of a graph is a maximal set of connected nodes

* How does this relate to connectedness?
* What are the components of the example graph?

#
![](graphs/graphs.005.png)

# Components in Example
* Two components
	* n<sub>1</sub>, n<sub>2</sub>, n<sub>3</sub>, n<sub>4</sub>, n<sub>5</sub>, and n<sub>6</sub>
	* n<sub>7</sub>

# Condensation Graph
> A condensation graph of a graph G = (V, E) is formed by replacing each component of G with a condensing node

* What is the condensation graph for our example?
* What do you notice about this graph (what must be true)?
* What value does this have for testing?

# 
![](graphs/graphs.006.png)

# Condensation Graph (answers)
> A condensation graph of a graph G = (V, E) is formed by replacing each component of G with a condensing node

* What is the condensation graph for our example?
* What do you notice about this graph (what must be true)?
	* No edges
* What value does this have for testing?
	* Simplifies testing, compontents can be tested in isolation

# Directed Graphs
> A directed graph (or digraph) D = (V, E) consists of a finite set of nodes V, and a set of edges 3, where each edge e<sub>k</sub> = &lt;n<sub>i</sub>, n<sub>j</sub>&gt; is an ordered pair of nodes n<sub>i</sub>,n<sub>j</sub> ϵ V

* Difference between undirected graph is edges have directionality (not symmetric)
* For &lt;a, b&gt;, a is start point, b is endpoint

# Directed Graph Example

* V = { n1, n2, n3, n4, n5, n6, n7 }
* E = { &lt;n1, n2&gt;, &lt;n1, n4&gt;, &lt;n3, n4&gt;, &lt;n2, n5&gt;, &lt;n4, n6&gt; }

# 
![](graphs/graphs.007.png)

# Indegree & Outdegree
> Indegree of a node, indeg(n), in a directed graph is number of distinct edges that have that node as an endpoint

> Outdegree of node, outdeg(n), in a directed graph is the number of distinct edges that have the node as a start point

* Compute indegree and outdegree for example

# Indegree & Outdegree (answer)

```
indeg(n1) = 0    outdeg(n1) = 2
indeg(n2) = 1    outdeg(n2) = 1
indeg(n3) = 0    outdeg(n3) = 1
indeg(n4) = 2    outdeg(n4) = 1
indeg(n5) = 1    outdeg(n5) = 0
indeg(n6) = 1    outdeg(n6) = 0
indeg(n7) = 0    outdeg(n7) = 0
```

# Node Types
* indeg(n<sub>i</sub>) = 0, i is a source node
* outdeg(n<sub>i</sub>) = 0, i is a sink node
* indeg(n<sub>i</sub>) != 0 && indeg(n<sub>i</sub>) != 0, i is a transfer node
* What are the source, sink, and transfer nodes in example?

# Node Types (Answers)

* Source: n1, n3, n7
* Sink: n5, n6, n7
* Transfer: n2 &amp; n4

# Adjacency Matrix (Directed)
> The adjacency matrix of a directed graph D = (V, E) with M nodes is an M x M matrix, where the element in a row i, column j is 1 iff there is and edge from i to j, otherwise the element is 0

* Generally not symmetric
* Undirected edge can be thought of as two directed edges (one going both directions)


#
![](graphs/graphs.007.png)

# Adjacency Matrix Directed Example
| |n1|n2|n3|n4|n5|n6|n7|
|---|---|---|---|---|---|---|
|**n1**|0|1|0|1|0|0|0|
|**n2**|0|0|0|0|1|0|0|
|**n3**|0|0|0|1|0|0|0|
|**n4**|0|0|0|0|0|1|0|
|**n5**|0|0|0|0|0|0|0|
|**n6**|0|0|0|0|0|0|0|
|**n7**|0|0|0|0|0|0|0|

# Adjacency Matrix (Directed, continued)
* What can we tell about indeg(n) and outdeg(n) from adjacency matrix?

# Adjacency Matrix (Directed, continued)
* What can we tell about indeg(n) and outdeg(n) from adjacency matrix?
	* Rows are outdeg
	* Columns are indeg

# Path (directed)
> A path in a directed graph is a sequence of edges such that,for any adjacent pair of edges e<sub>i</sub>, e<sub>j</sub>, in the sequence, the terminal node of the first edge is the initial node of the second edge

* Special Paths
	* Cycle is a path where some node is both the initial and final node in path
	* Chain is a sequence where interior has indeg(n) = 1 && outdeg(n) = 1 (initial indeg(n) >= 1 and terminal  outdeg(n) >= 1)
	* Semipath - is a sequence of edges such that at least one node is either the initial node or terminal node of two adjacent edges in sequence

# Path (directed, continued)
* In example, what are some?
	* Paths
	* Semipaths
	* Cycles

#
![](graphs/graphs.007.png)

# Path (directed, continued)
* In example, list some
	* Paths =  n1 & n6
	* Semipaths = n1 & n3, n5 & n6
	* Cycles = None

# n-Connectedness
* Node n<sub>i</sub> and n<sub>j</sub> are:
	* 0-connected iff no path (or semipath) exists
 	* 1-connected iff a semipath (but not a path) exists
  	* 2-connected iff a path exists
  	* 3-connected iff a path exists exists from n<sub>i</sub> to n<sub>j</sub> and n<sub>j</sub> to n<sub>i</sub>
* Add edge: n6->n3

# 
![](graphs/graphs.008.png)

# Strong component
> A strong component of a directed raph is a maximal set of 3-connected nodes

* A form of condensation graph
* Good view of testing programs with loops
* What are strong components of our graph?

# Strong component
> A strong component of a directed raph is a maximal set of 3-connected nodes

* What are strong components of our graph?
	* {n3, n4,n6} & {n7}

# Condensation Graph (directed)
> Given a directed graph D = (V, E), its condensation graph is formed by replacing strongly connected nodes by their corresponding strong components 


* Directed Acyclic Graph (DAG)
* Supports excellent view of testing with loops

# 
![](graphs/graphs.009.png)
