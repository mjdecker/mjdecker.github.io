---
title: Graphs
layout: notes
---

# Why Graphs
* Programs can be represented as graphs
* This representation is used in white-box testing

# Program Graphs
> The program graph of a program written in an imperative programming language is a directed graph in which nodes are either entire statements or statement fragments. There is an edge from node i to node j if and only if node j can be executed immediately after node i

* Sequence 
	* Edge from one fragment to next
* Conditional 
	* At condition: branches (multiple edges) to separate paths 
	* End of conditional: Paths merge back to single node

# Graphs of Conditionals
![](http://www.cs.bgsu.edu/mdecke/classes/software_testing/notes/conditionals.png)

# Binary Search

```
int search(int key, int elemArray[]) {
    int bottom = 0;
    int top = elemArray.length - 1;

    while(bottom <= top) {

        int mid = (top + bottom) / 2;
        if(elemArray [mid] == key)       {
            return mid;
        } else if(elemArray [mid] < key)
            bottom = mid + 1;
        } else
            top = mid - 1;
        }
    }
    return -1;
}
```

# 
![](graphs/graphs.010.png)

# Cyclomatic Complexity
> Cyclomatic complexity of a graph G is given by V(G) = E - N + P, where<br/>
> * E = number of edges in G<br/>
> * N = number of nodes in G<br/>
> * P = number of components in G<br/>

* AKA McCabe Complexity [1976] or Cyclomatic Number

# Cyclomatic Complexity (continued)
* For a single program, method, etc.  P is always 2
	* V(G) = E - N + 2
* Cyclomatic complexity has implications for testing and as a measure of program complexity
	* Larger the number, the more testing

# Cyclomatic Complexity Made Easy
* A measure of the independent paths from the system
* A program with no conditional statements has a cyclomatic complexity of 1
* A program with 1 binary condition has a cyclomatic of 2
* A program with 2 binary conditions has a cyclomatic of 3
* ...
* V(G) = P + 1
	* P is the number of predicate nodes (binary conditions)
* V(binary search) = 4 


