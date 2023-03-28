---
title: "Software Quality"
layout: notes
---

[IEEE Std 730-2014]: http://ieeexplore.ieee.org/document/6835311/
[quality]: /images/secure-software-engineering/quality.png
[Quality Characteristics]: https://iso25000.com/index.php/en/iso-25000-standards/iso-25010

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

# [Quality Characteristics]
![quality]

# [Quality Characteristics] Purpose
* I.e.,  Quality Focus

> The quality of a system is the degree to which the system satisfies the stated and implied needs [including quality characteristics] of its various stakeholders, and thus provides value [ISO 25010]

# Testing & Quality Assurance
* Software Quality Assurance (SQA) [IEEE Std 730-2014]
	* Activities that define and assess the adequacy of software processes for producing software products of suitable quality for their intended purposes
* Encompasses and Includes
	* *Verification* & *Validation*
	* Audits & Reviews

# Verification vs. Validation
* **Verification:** The software should conform to its specification 
	* Are we building the product right?
* **Validation:** The software should do what the user really requires
	* Are we building the right product?

# Dynamic vs. Static Verification
* Dynamic - Exercising and observing product behavior
	* Software Testing
* Static - Concerned with analysis of static representation to discover problems
	* Code Analysis
	* Pair programming, inspections, and walk-throughs
	* Highly effective tool for defect detection

# V & V Planning
* Careful planning is required to get the most out of testing and inspection processes
* Planning should start early in the development process
* Test planning is about defining standards for the testing process rather than describing product tests
* The plan should identify the balance between static verification and testing
