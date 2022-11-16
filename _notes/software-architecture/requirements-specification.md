---
title: "Requirements Specification"
layout: notes
---

[re-process]: /images/requirements/requirements-engineering-process.png
[non-functional]: /images/requirements/non-functional-requirements.png
[structure]: https://en.wikipedia.org/wiki/Software_requirements_specification#Structure

# Requirements Engineering (RE)
> Process of discovering a software system's purpose, by identifying stakeholders and their needs, and documenting these in a form that is amenable to analysis, communication, and subsequent implementation [Nuseibeh '00]
* Software is judged as successful if it meets its purpose

# RE Process
![][re-process]

# Functional vs Non-Functional Requirements
* Functional Requirements - Describe the system's functions , its inputs and outputs, exceptions, etc., in detail (i.e., what a system should do)
* Non-functional Requirements - Describe an overall characteristic of the system

# Non-functional Requirement Types
![][non-functional]

# Product vs Organizational vs External
* Product Requirements - Constraints on the behavior of the software, e.g., performance
* Organizational Requirements - Broad system requirements derived from the developer's and customer's organization's policies and procedures, e.g., programming language
* External Requirements - All requirements derived from external factors, e.g., legal requirements

# Software Requirements Specification (SRS)
> An official statement of what the system developers should implement

* Example [structure]

# Capturing Requirements
* User Stories
* Use Cases
* Domain Modeling
* System Sequence Diagrams

# User Story
> An informal natural language description of a software feature

# User Story Example
* **Title**: Search and Replace
* **Description**: A user realizes they incorrectly capitalized a word everywhere on a set of web pages. So they tell the web page editor to search for all occurrences and replace them with the corrected word.
* **Priority**:
* **Estimate**:  

# Use Case
> A list of actions/events that define the interactions between an actor and the system to achieve a goal

# Use Case Example
* **Search and Replace**
* **Preconditions**: A document is loaded and being edited
* Main Success Scenario:
	1. The user indicates that the software is to perform a Search and Replace in the document.
	2. The software responds by requesting the search term and the replacement text.
	3. The user inputs the search term and replacement text and indicates that all occurrences are to be replaced.
	4. The software replaces all occurrences of the search term with the replacement text.

# Use Case Example (continued)
* Extensions:
	* 3a: Replace only first occurence
		1. User indicates that only the first occurrence is to be replaced.
		2. Software finds the first occurrence of the search term in the document being edited and replaces it with the replacement text.
		3. Use case ends with postcondition state being only the first occurrence is replaced
	* 3b: Search only
		1. User indicates that the software is only to search and not replace.
		2. Software highlights the first occurrence of the search term.
		3. Use case ends with post condition state being the first occurrence is highlighted and not replaced.
*  **Postconditions**: All occurrences of the search term have been replaced with the replacement text.

# References
* Bashar Nuseibeh and Steve Easterbrook. "Requirements engineering: a roadmap." in Proceedings of the Conference on the Future of Software Engineering, pp. 35-46. 2000.
* Ian Sommerville. Software Engineering, 10/E. Pearson Education, 2016.
* Ranjit Kumar. "Research Methodology: A Step-by-Step Guide for Beginners", 4th Ed., 2014. ISBN: 978-1446269978
* Alan M. Davis.  "Operational prototyping: A new development approach." IEEE software 9, no. 5 (1992): 70-78.