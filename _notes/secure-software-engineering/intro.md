---
title: "Introduction to Secure Software Engineering"
layout: notes
---

[Software Engineering]: https://en.wikipedia.org/wiki/Software_engineering
[quality]: /images/secure-software-engineering/quality.png
[ISO 25000]: https://iso25000.com/index.php/en/iso-25000-standards/iso-25010
[Security Characteristic]: https://iso25000.com/index.php/en/iso-25000-standards/iso-25010?start=6

# [Software Engineering]
* Software engineering 

> systematic application of engineering approaches to the development of software [Laplante 2001], i.e. a process

> the application of a systematic, disciplined, quantifiable approach to the development, operation, and maintenance of software; that is, the application of engineering to software [IEEE]

# An SE Process
* Requirements - elicitation, analysis, and specification of software requirements
* Design - defining the architecture and overall design of the software
* Code - implementing the software
* Testing - determining that the software is fit for its operational environment

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

# Quality Characteristics
![quality]

# Quality Characteristics Purpose
* I.e.,  Quality Focus

> The quality of a system is the degree to which the system satisfies the stated and implied needs [including quality characteristics] of its various stakeholders, and thus provides value [ISO 25010]

# [Security Characteristic]
* Primary focus of this course
* Must be made part of the Quality Focus

> Degree to which a product or system protects information and data so that persons or other products or systems have the degree of data access appropriate to their types and levels of authorization [ISO 25010]

# [Security Characteristic] - Sub-characteristics
* Confidentiality - Degree to which a product or system ensures that data are accessible only to those authorized to have access.
* Integrity - Degree to which a system, product or component prevents unauthorized access to, or modification of, computer programs or data.
* Non-repudiation - Degree to which actions or events can be proven to have taken place so that the events or actions cannot be repudiated later.
* Accountability - Degree to which the actions of an entity can be traced uniquely to the entity.
* Authenticity - Degree to which the identity of a subject or resource can be proved to be the one claimed.

> Degree to which a product or system protects information and data so that persons or other products or systems have the degree of data access appropriate to their types and levels of authorization [ISO 25010]

# Security & Process
* Involved in every part of SE process
	* Requirements - security is non-functional requirement(s)
	* Design/Analysis - the system must be designed with security in mind
	* Code - secure programming practices must be followed
	* Test - the code must be tested to make sure it meets security requirements
