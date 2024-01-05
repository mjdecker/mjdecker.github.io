---
title: "Advanced Software Evolution"
layout: notes
---

[waterfall-model]: http://upload.wikimedia.org/wikipedia/commons/0/06/Waterfall_model_%281%29.svg
[sprial-model]: http://upload.wikimedia.org/wikipedia/commons/e/ec/Spiral_model_%28Boehm%2C_1988%29.svg

# Prerequisites
* Software engineering background
* Strong programming background

# Course Layout
* First week - review basic software engineering concepts
* Afterwards, cover different core topics of software engineering (1-2 week each)
* Topics will be covered via in-depth reading, presentation, and discussion of seminal (half) and recent (half) publications
* All students will be responsible for thoroughly read papers before class and participate in discussion (see syllabus for details)
* One student will present each paper, presenter is considered expert on paper

# Presentations
* Goal of presentations are to invoke good discussion on the topics
* Assume everyone has already read papers
* Cover in detail parts that invoke discussion
	* E.g., Experiment and results

# Rough Presentation Outline
* Title Slide
* Author/Venue
* Research Question(s)
* Motivation
* Background and Approach
* ***Study/Experiment/Results/Discussion***
	* Spent the most time on this
* Contributions/Conclusions/Future Work
* Ending Remarks (if any)
* References

# Course Topics
* Software Process Models
* Software Evolution & Maintenance
* Software Architecture
* Software Testing
* Software Measurements & Metrics
* Requirements Engineering and Traceability
* Empirical Software Engineering
* Software Visualization
* Static and Dynamic Analysis

# Software Engineering Basics

# Software Engineering
* [Software Engineering](http://en.wikipedia.org/wiki/Software_engineering)
* [Software Crisis](https://en.wikipedia.org/wiki/Software_crisis)

# Software Engineering as a Layered Technology
<div>
<table style="width: 80%; border: 1px solid black"><tr><th style=" background-color: white; text-align: center">Quality Focus</th></tr></table>
<table style="width: 60%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Process</th></tr></table>
<table style="width: 40%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Methods</th></tr></table>
<table style="width: 20%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Tools</th></tr></table>
</div>

# Quality Focus
* Foundation of software engineering
* Software should meet expectations
* What level/kinds of quality do you require?
	* Customer: efficiency, reliability, etc.
	* Developer: maintainability, reusability, etc.
	* Users: usability, efficiency, etc.
* Microsoft Word vs. Autonomous Car

<table style="width: 80%; border: 1px solid black"><tr><th style=" background-color: white; text-align: center">Quality Focus</th></tr></table>
<table style="width: 60%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Process</th></tr></table>
<table style="width: 40%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Methods</th></tr></table>
<table style="width: 20%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Tools</th></tr></table>

# Process
* Framework for how you develop/deliver software on time and on budget
* Defines tasks and order performed
* How one achieves the quality focus

<table style="width: 80%; border: 1px solid black"><tr><th style=" background-color: white; text-align: center">Quality Focus</th></tr></table>
<table style="width: 60%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Process</th></tr></table>
<table style="width: 40%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Methods</th></tr></table>
<table style="width: 20%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Tools</th></tr></table>

# Methods
* Methods
	* Methods of developing software including technical knowledge and resources required for development
	* Techniques for performing tasks of the process
	* E.g, methods for communication, analysis, modeling, program construction, testing, and support

<table style="width: 80%; border: 1px solid black"><tr><th style=" background-color: white; text-align: center">Quality Focus</th></tr></table>
<table style="width: 60%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Process</th></tr></table>
<table style="width: 40%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Methods</th></tr></table>
<table style="width: 20%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Tools</th></tr></table>

# Tools
* The semi-automated and automated tools that is framework for project
* What is used to carry out/support methods
* E.g., OS, Selenium for testing, choosing an IDE

<table style="width: 80%; border: 1px solid black"><tr><th style=" background-color: white; text-align: center">Quality Focus</th></tr></table>
<table style="width: 60%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Process</th></tr></table>
<table style="width: 40%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Methods</th></tr></table>
<table style="width: 20%; border: 1px solid black"><tr><th style="background-color: white; text-align: center">Tools</th></tr></table>

# Software Process Models

# Process Models
* Process Model - Abstraction of the software development process
* Waterfall Model
* Prototype/Spiral Model
* Component-based
* Agile

# Waterfall Model
![waterfall-model]

# Waterfall Model (continued)
* Paradigm from around the time of the NATA conference to deal with the "Software Crisis"
* Each phase is completed and verified before another phase is started
* Requirements are gathered first, design is made to support requirements, and the design is used throughout the development process
* Once delivered, any further problems are considered maintenance
* Predominant model taught in SE for many years
* Predominant process model for other engineering disciplines
* Handles maintenance very differently then initial development

# [Prototype/Spiral Model]
![spiral-model]

# Prototype/Spiral Model (continued)
* Initial implementation produces prototype, which is refined through many iterations
* Allows for chances for validation/verification of requirements
* Could include maintenance as extended development

# Component-based
* Reuse of existing components, e.g., glue products together
* Glue code may be hard to use
* May not completely meet requirements
* No control over changes to components

# Agile
* Iterative development - series of mini-waterfall
* Continuous feedback to iteratively refine and deliver system
* [Agile Manifesto](https://en.wikipedia.org/wiki/Agile_software_development#The_Agile_Manifesto)
* Examples: SCRUM and XP

# Software Evolution and Maintenance

# Maintenance
* Changes to an existing system
* Overwhelming part of the cost of the system over its lifetime (80%). However, typically not built into cost structure
* Misleading term. Maintenance of software is not the same as maintenance in other fields
* Most SE books, education, processes, tools, etc. treat maintenance as a side topic!!!
* Most of what software developers do can be seen as being maintenance activities

# Categories of Maintenance
* [Swanson, ISO/IEC 14764]
* Corrective: Fix bugs/problems
* Adaptive: Change to fit new environment
* Perfective: Improve performance or maintainability
* Preventive: Detect and correct latent problems before they become actual problems

# Waterfall
* [Rajlich'06]
* Common-sense approach: Complete requirements elicitation -> Complete design -> Implement
* Follows other engineering disciplines
* Good points for validation and verification
* Problem: Often doesn't work, e.g., Standish Group, 1995 Report 31.1% cancellation, 52.7% "challenged" (large cost and time overruns), only 16.2% successful.
* Conclusion: Waterfall approach does not solve even the majority of development problems

# Requirements Volatility
* [Rajlich'06]
* Requirements are not completely known in advance
* Requirements are often found during development (design/implementation) (e.g., 30% of requirements for Microsoft projects) (Why?)
* Volatile requirements are temporary -> design is temporary, and cannot guide the entire development process

# Software Evolution
* Iterative, flexible approach development
* Go through <cite>entire</cite> process for one iteration, deliver product, then start an additional iteration
* Focus on supporting maintenance (generally of large software), not development for processes, tools, etc.
* Do not distinguish between development and maintenance
* Software Evolution = Software Development + Software Maintenance
* Open-Source, Agile Methodologies, eXtreme Programming, follow this approach

# Software Architecture

# System Decomposition
* A system is decomposed into multiple subsystems
* Subsystem provides services to system

<img src="http://yuml.me/diagram/plain/class/[system]-.->[subsystem1],%20[system]-.->[subsystem2]"/>

# Subsystem
* A set of related operations that share a common purpose
* Set of services available to other systems form the subsystem interface
* Application Programmer Interface (API) includes name of operations, parameters/types, and return types
* System design focuses on defining services

# Software Architecture
* [Shaw & Garlan ’96]
* Use of standard patterns and styles of design is pervasive in many engineering disciplines

# Architectural Style
* An architectural style defines a family of systems in terms of a pattern of structural organization
	* Components (e.g., client, server, DB)
	* Connectors (e.g., procedure call, pipe, event
broadcast)
* Vocabulary of components and connectors
* Constraints on how they are combined

# Common Architectural Styles
* Dataflow system - e.g., batch sequential & pipe and filter
* Virtual machines - e.g., rule-based & interpreters
* Repository - e.g., databases
* Independent components - e.g., model/view/control, peer-to-peer
* Call and return - e.g., layered systems

# Software Testing

# Verification and Validation
* **Verification**: The software should conform to its specification (Are we building the product right?)
* **Validation:** The software should do what the user really requires (Are we building the right product?)

# V & V Goals
 * Verification and validation should establish confidence that the software is fit for its purpose
* This does NOT mean completely free of defects
* Rather, it must be good enough for its intended use and the type of use will determine the degree of confidence that is needed

# Life-cycle
* Requirements, Design, Code, Testing
* V & V is applied to all stages of life-cycle
* Easier (less expensive) to fix faults early on

#  V & V Principles
*  The discovery of defects in a system
*  The assessment of whether or not the system is usable in an operational situation.

# Static vs Dynamic Verification
* Dynamic - Exercising and observing product behavior
	* unit testing, integration testing, etc.
* Static - Concerned with analysis of static representation to discover problems
	* Pair programming, inspections, and walk-throughs

# Software Testing Goals
* Goal of testing: Cause failures to
uncover faults and errors

# Software Measurement and Metrics

# Measurement vs. Metrics
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

# Requirements Engineering and Traceability

# [Requirements Engineering](https://en.wikipedia.org/wiki/Requirements_engineering)
* Definition, documentation and maintenance of requirements
* First phase of waterfall

# [Traceability](https://en.wikipedia.org/wiki/Requirements_traceability)
* Linking requirements to artifacts in other phases of software development (e.g., implementation)

# Empirical Software Engineering

# What is Empirical Software Engineering?
* Crosses software engineering topics
* Use of empirical studies to accumulate knowledge
* Use experiments, case studies, surveys, and any available data

# Software Visualization
 > Software visualization is a broad research area encompassing concepts, methods, tools, and techniques that assist in a range of software engineering and software development activities. Covered aspects include the development and evaluation of approaches for visually analyzing software and software systems, including their structure, execution behavior, and evolution. [\[VISSOFT\]](http://vissoft18.etsii.urjc.es)

# Static and Dynamic Analysis

# Code Analysis

* *static program analysis*
    * Analysis of software source code and other artifacts

* *dynamic program analysis*
    * Analysis of output/trace data from running programs

# Analysis
* Static and dynamic analysis used separately or together
* Used to solve many different software engineering problems
* E.g. transformation, refactoring, traceability, correctness, feature location