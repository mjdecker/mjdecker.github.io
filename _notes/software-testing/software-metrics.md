---
title: "Software Metrics"
layout: notes
---

# Software Quality
* Definition: How well software satisfies its functional and non-functional requirements
* Used to determine, predict, and improve product or process
* Characteristics (ISO 25010):

|                        |                        |
|------------------------|------------------------|
| Functional suitability | Performance efficiency |
| Compatibility          | Usability              |
| Reliability            | Security               |
| Maintainability        | Portability            |

# Software Quality Measurement 
* Quantifying to what extent a system or software possesses desirable characteristics
* Qualitative or quantitative or a mix of both
* Examples for Maintainability Characteristic:
	* Mean time to change
	* Cost to make a change
* As many issues with software quality stem from poor design and coding practices we will take a general look at software measurement

# Software Metrics
* *Measure* - quantitative indication of extent, amount, dimension, capacity, or size of some attribute of a product or process.
	- Number of errors

* *Metric* - quantitative measure of degree to which a system, component or process possesses a given attribute.  “A handle or guess about a given attribute.”
	- Number of errors found per person hours expended

# Examples
* Defect rates
* Error rates
* Measured by:
	- individual
	- module
	- during development
* Errors should be categorized by origin, type, cost

# Metric Classification
* Product
	- Explicit results of software development activities
	- Deliverables, documentation, other by products
* Processes
	- Activities related to production of software
* Resources
	- Inputs into the software development activities
	- Hardware, knowledge, people

# Product vs. Process
* Process Metrics
	- Insights of process paradigm, software engineering tasks, work product, or milestones
	- Lead to long term process improvement

* Product Metrics
	- Assesses the state of the project
	- Track potential risks
	- Uncover problem areas
	- Adjust workflow or tasks
	- Evaluate teams ability to control quality

# Size Oriented Metrics
* Size of the software produced
* Lines Of Code (LOC)  
* 1,000 Lines Of Code (KLOC)
* 1,000,000 Lines Of Code (MLOC) - more recently
* Statement Lines Of Code (SLOC)

# LOC Uses
* Effort measured in person months
* Errors/KLOC
* Defects/KLOC
* Cost/LOC
* Documentation Pages/KLOC
* LOC is programmer & language dependent

# LOC: Advantage/Disadvantage
* Easy to use
* Easy to compute
* Can compute LOC of existing systems but cost and requirements traceability may be lost 
* Language & programmer dependent 

# Function Oriented Metrics
* Function Point Analysis [Albrecht ’79, ’83]
* International Function Point Users Group (IFPUG)
* Derived using empirical relationships based on countable measures of the software system (domain and requirements)

# Computing Function Points
* Number of user inputs
	- Distinct input from user
* Number of user outputs
	- Reports, screens, error messages, etc
* Number of user inquiries
	- On line input that generates some result
* Number of files
	- Logical file (database)
* Number of external interfaces
	- Data files/connections as interface to other systems

# Function Point Calculation
* FP = Total Count * [0.65 + .01 * Sum(F<sub>i</sub>)]
	- Total count is all the counts times a weighting factor that is determined for each organization via empirical data
	- F<sub>i</sub> (i=1 to 14) are complexity adjustment values

# Complexity Adjustment
* Does the system require reliable backup and recovery?
* Are data communications required?
* Are there distributed processing functions?
* Is performance critical?
* Will the system run in an existing heavily utilized operational environment?
* Does the system require on-line data entry?
* Does the online data entry require the input transaction to be built over multiple screens or operations?

# Complexity Adjustment (continued)
* Are the inputs, outputs, files, or inquiries complex?
* Is the internal processing complex?
* Is the code designed to be reusable?
* Are conversions and installations included in the design?
* Is the system designed for multiple installations in different organizations?
* Is the application designed to facilitate change and ease of use by the user?

# FP Metrics
* Errors per FP
* Defects per FP
* Cost per FP
* Pages of documentation per FP
* FP per person month

# FP and Langauges

| Language | LOC/FP |
|----------|-------:|
| Assembly | 320    |
| C        | 128    |
| COBOL    | 106    |
| FORTRAN  | 106    |
| Pascal   | 90     |
| C++      | 64     |
| Ada      | 53     |
| VB       | 32     |
| SQL      | 12     |

# Using FP
* FP and LOC based metrics have been found to be relatively accurate predictors of effort and cost
* Need a baseline of historical information to use them properly
* Language dependent
* Productivity factors: people, problem, process, product, and resources
* FP can not be reverse engineered from existing systems easily

# Complexity Measures/Metrics
* LOC - a function of complexity
* Halstead’s Software Science (entropy measures)
	- n<sub>1<sub> - number of distinct operators
	- n<sub>2</sub> - number of distinct operands
	- N<sub>1</sub> - total number of operators
	- N<sub>2</sub> - total number of operands

# Example Halstead Complexity Measures
<script src="https://gist.github.com/mjdecker/5cf15061a98fe2ca6c24ccce8cd27b56.js?file=halstead.c"></script>

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

* Program effort: E=V / L

	- where, L = V* / V, and 
	- V* is the volume of most compact design implementation
	- This is a good measure of program understandability

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

# Object-oriented Metrics
* Chidamber & Kemerer ’94 
* Metrics specifically designed to address object oriented software
* Class oriented metrics
* Measured directly from source-code

# Weighted Methods per Class

* WMC = Σc<sub>i</sub>

	- c<sub>i</sub> is the complexity (e.g., volume, cyclomatic complexity, etc.) of each method
* Must normalize
* What about inherited methods?  
	- Be consistent

# Metrics Retrospective
* For any of the given metrics, what is an acceptable value?
* Dependent on the application
* Metrics are useful as a trend over time
	* Metric improved/degraded
* Example: A significant increase in Cyclomatic complexity and Code Churn (# added/deleted/modified LOC) is a serious red flag

# Metrics Tools
* [sloccount](https://www.dwheeler.com/sloccount/)
* [cloc](https://github.com/AlDanial/cloc)
* [MosaiCode](http://www.cs.kent.edu/~jmaletic/papers/VISSOFT11.pdf)

