---
title: "Code Review"
layout: notes
---

[Software Reviews]: https://ieeexplore.ieee.org/document/4601584/
[Audit]: https://en.wikipedia.org/wiki/Software_audit_review

# [Software Reviews]
* Pair Programming
* Walk-through
* Inspection
* [Audit]

# Pair Programming
* Agile software development technique
* Core element to Extreme Programming (XP)
* All production code is written by two programmers sitting at one machine
* All code is reviewed as it is written (continuous inspection)
* Both have deep understanding of code and thus can uncover additional bugs
* May lead to mutual misunderstanding of requirements

# Software Walk-through
* Generally informal
* Designer or programmer leads developers (and other members) through the software product
* Participants ask questions and make comments

# Walk-through: Goals
* In regards to software product:
	* Improve product
	* Consider alternate implementations
	* Find possible anomalies
	* Find violations of standards/specifications
	* Evaluate usability/accessibility
	* Other deficiencies/problems
* May be used to train/educate

# Walk-through: Roles
* Walk-through leader - conducts walk-through (ensuring done orderly) and handles administrative tasks (e.g., document distribution)
* Recorder - takes notes including anomalies found, decisions/actions arising form meeting, etc.
* Author - presents the software
* Team Member - actively participate to identify and describe anomalies

# Walk-though: Input
* Objectives for walk-through
* Software product
* Standards in effect for product
* May include:
	* Anomaly categories
	* Checklists 
	* Additional information (e.g., specifications and regulation) used to evaluate the product

# Software Inspections
* Formal
* Examination of software product to detect and identify software anomalies including errors and deviations from standards and specifications
* Goals (in regards to software product):
	* Verify satisfied specifications
	* Verify exhibits specified quality attributes
	* Verifies complies with regulations, standards, etc.
	* Identifies and documents deviations of above

# Inspections: Other Possible Goals
* Collects software engineering data such as effort data 
* Uses data to improve inspection process and supporting documentation 	- E.g., checklists
* Requests/grants waivers for violations of standards
* Uses data (as appropriate) to make management decisions
	* E.g., More testing vs. more inspections

# Inspection: Roles
* Inspection leader - plans and organizes tasks pertaining to inspection, ensures conducted orderly, meets objectives, data is collected, and issues output of inspection
* Recorder - documents/records anomalies, actions items, decisions, waivers, recommendations, and inspection data.
* Reader - leads team through software product
* Author - contributes to inspection and performs rework required
* Inspector (all participants) - identifies and describes anomalies

# Inspection : Inputs
* Objectives
* Software product
* Inspection procedure
* Reporting form
* Anomalies or issues list
* Source documents that are inputs to developed product such as specifications

# Inspection : Optional Inputs
* Checklist
* Quality criteria
* Previously inspected product
* Additional information (e.g., regulations) used to evaluate the product
* Hardware and other product specifications
* Performance data
* Anomaly categories

# Inspection: Process
* Overview - of the document is made
* Preparation - participants understand the product in detail
* Examination - a complete walk through is made, covering every branch of the product.  Fault finding is done
* Rework - faults are fixed
* Follow - up check fixed faults
* Possible reinspect: If more than say 5% of product is reworked then a complete inspection is done again

# Inspections: Management concerns
* Management must accept that inspection will increase costs early in the software process
* Management must not use inspections for staff appraisal

# Inspections and Testing
* Inspections and testing are complementary and not opposing verification techniques
* Both should be used during the V & V process
* Inspections can check conformance with a specification but not conformance with the customer’s real requirements
* Inspections cannot check non-functional characteristics such as performance, usability, etc.
