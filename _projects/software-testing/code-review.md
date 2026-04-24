---
title: "Project: Code Review"
layout: markdown
---

# Project: Code Review #

## Objective(s)
* To practice performing code reviews
* To gain experience in understanding other developers' code
* To gather and utilize software metrics to make informed analyses/decisions about software

## Overview
* Form a group of 4–5 people
* Find an open-source project from GitHub
* Perform ***3*** code reviews of three different pull-requests (open or closed) from that open-source project

# Task
* Form a group of 4–5 people, and all members accept and join your group's GitHub repo
* Identify an open-source project from GitHub
	* Can be any programming language, as long as you can complete this project's requirements
	* \>= 10KLOC
	* Development process regularly uses issues and pull requests
* Give report on chosen project, include:
	* Summary of project
	* Contribution process/requirements
	* All available coding standards
	* LOC (blank-lines, comments, code, total)
	* \# files, \# classes, & \# functions & methods
	* Halstead's
		* Length
		* Vocabulary
 * Perform ***3*** code reviews of three different pull-requests (open or closed), details follow
* Pull-request requirements:
	* Non-trivial
	* Source-code focused
	* Has a related issue(s)
	* Feature implementation, refactoring, bug fix(s), or adaptive maintenance
	* ***NOT*** groomative (comment/whitespace), build, test, documentation, or a simple repetitive widespread change (e.g., rename)
	* Examples: [srcDiff PR #291](https://github.com/srcDiff/srcDiff/pull/291) & [srcDiff PR #322](https://github.com/srcDiff/srcDiff/pull/322)
* Process for each pull request:
	* Determine Roles:
		* Leader - 1 person conducts review (ensuring done orderly) and handles administrative tasks (e.g., document distribution)
		* Recorder - 1 person takes notes, including anomalies found, decisions/actions arising from the meeting, etc.
		* Team Members - remaining actively participate to identify and describe anomalies
	* Preparing for each code review (done by non leader/recorder):
		* Gather input documents, include:
			* Checklist - feel free to adapt the one used in class
			* Pull-request
			* Related Issue(s)
			* List of files changed, the original files, modified files, and the changes made
			* Metrics:
				* Original LOC and modified LOC (may be for just impacted files)
				* Code Churn
				* Original Cyclomatic Complexity and modified Cyclomatic Complexity
				* \# Impacted files, classes, & functions/methods
				* Any other static analysis (e.g., security tool, code smells) you wish to run (optional)
		* Organize and commit all input documents for each code review to the assignment repository
	* Perform each code review:
		* You may do all reviews in the same session, with all preparation done done ahead of time. However, each review *MUST* be performed and completed by the whole group before moving to the next
	* Summarize and report the results of each code review (everyone's responsibility), include:
		* When/Where/Duration
		* Roles
		* Summary of review process
		* Discoveries
			* Anomalies/Inconsistencies/Errors/Violations/Deficiencies
			* Alternative implementations & places of improvement
			* Code requiring additional explanations
			* Reviewer recommendations
			* Action: approve, request feedback/rework/etc., deny

# Grading Criteria
* You will be graded on:
	* Participation is mandatory. A peer review questionnaire may be given and used to adjust your grade
	* Project and Pull Requests meet requirements
	* Organization of repository
	* Organization and content of project report, see *Give report on chosen project*
	* Organization and content of input documents, see *Preparing for each code review*
	* Organization and content of report, see *Summarize and report the results of each code review*
	* Using and filling out the checklist
	* Appropriate usage of Markdown
