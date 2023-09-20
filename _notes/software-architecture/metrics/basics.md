---
title: "Software Metrics"
layout: notes
---

# Software Quality
* Definition: How well software satisfies its functional and non-functional requirements
* Metrics used to determine, predict, and improve quality of product and/or process
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
	- Number of errors found per person hour expended

# Examples
* Defect rates
* Error rates
* Measured by:
	- individual
	- module
	- during a development cycle
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

# LOC: Advantage/Disadvantage
* Easy to use
* Easy to compute
* Can compute LOC of existing systems but cost and requirements traceability may be lost 
* Language & programmer dependent 

# LOC Tools
* [sloccount](https://www.dwheeler.com/sloccount/)
* [cloc](https://github.com/AlDanial/cloc)

# Metrics Retrospective
* For any of the given metric, what is an acceptable value?
* Dependent on the application
* Metrics are useful as a trend over time
	* Metric improved/degraded
