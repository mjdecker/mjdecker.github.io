---
title: "Use Cases"
layout: notes
---

[Create Use Case Diagram]: https://yuml.me
[Fowler Style]: https://en.wikipedia.org/wiki/Use_case#Fowler_style
[Cockburn Style]: https://en.wikipedia.org/wiki/Use_case#Cockburn_style

# Requirements
* Describes what the system is supposed to do
	* Functional vs Non-functional requirements
* Often is given in English (i.e., not in a formal language)
* If a system does not meet the actual requirements, then it has failed
* *[Requirements Engineering](https://en.wikipedia.org/wiki/Requirements_engineering)*, *[Requirements Elicitation](https://en.wikipedia.org/wiki/Requirements_elicitation)*

# Use Case Diagram
* Description of a system's behavior as it responds to a request that originates from outside of that system
* Describes a set of sequences
* Each sequence represents the interactions of things outside the system (actors) with the system itself (and key abstractions)
* Use cases represent the functional requirements of the system (non-functional requirements are specified elsewhere)

# Use Case
<div markdown="1" class="nosize">
![](https://yuml.me/diagram/boring/usecase/%28Verb%20Object%29)
</div>
* Each use case has a descriptive name
* Describes *what* not *how*
* Use case names must be unique within a given package
* Examples: Withdraw Money, Process Loan

# Actor
<div markdown="1" class="nosize">
![](https://yuml.me/diagram/boring/usecase/[Actor])
</div>
* Actors have a name
* An actor is a set of roles that users of use cases play when interacting with the system
* They are external entities, e.g., people, other systems
* Examples: Customer, Loan officer

# What is a Use Case?
* Use case captures some user-visible functionality
* Granularity of functionality depends on the level of detail in your model
* Each use case achieves a discrete goal for the user
* Use Cases are generated through requirements elicitation

# Point of Sale Terminal
<div markdown="1" class="nosize">
![](https://yuml.me/diagram/boring/usecase/[Cashier]-%28Login%29,[Cashier]-%28Buy%20Item%29,[Cashier]-%28Refund%20Purchase%29,[Customer]-%28Buy%20Item%29,[Customer]-%28Refund%20Purchase%29)
</div>

# Extend and Include
![](https://yuml.me/diagram/boring/usecase/[User]-%28Display%20Highest%20and%20Lowest%29,[User]-%28Change%20Time%20or%20Date%29,[Clock]-%28Change%20Time%20or%20Date%29,%28Display%20Highest%20and%20Lowest%29%3e%28Select%20an%20Option%29,%28Change%20Time%20or%20Date%29%3e%28Select%20an%20Option%29,%28Change%20Time%20or%20Date%29%3c%28Fix%20Invalid%20Date%29)

# Generalization
<div markdown="1" class="smallestimg">
![](https://yuml.me/diagram/boring/usecase/[Customer]-%28Perform%20Card%20Transaction%29,[Customer]-%28Process%20Customer%20Bills%29,[Customer]-%28Reconcile%20Transaction%29,[Customer]-%28Manage%20Customer%20Account%29,[Individual%20Customer]^[Customer],[Corporate%20Customer]^[Customer],[Retail%20Institution]-%28Perform%20Card%20Transaction%29,[Retail%20Institution]-%28Process%20Customer%20Bills%29,[Financial%20Institution]-%28Process%20Customer%20Bills%29,[Financial%20Institution]-%28Reconcile%20Transaction%29,[Financial%20Institution]-%28Manage%20Customer%20Account%29)
</div>

# Use Case Diagram
[Create Use Case Diagram]


# Goals vs. Interaction
* Goals - something the user wants to achieve
    -   Format a document
    -   Ensure consistent formatting of two documents
* Interaction - things the user does to achieve the goal
    -   Define a style
    -   Change a style
    -   Copy a style from one doc to the next

# Developing Use Cases
* Understand what the system must do - capture the goals
* Understand how the user must interact to achieve the goals - capture user interactions
* Identify sequences of user interactions
* Start with goals and refine into interactions

# Use Case Contents
* [Fowler Style]
* [Cockburn Style]
	* Casual
	* Fully-dressed

# Fowler Style
* *Title*
* *Main Success Scenario*
* *Extensions*

# Casual Use Case
* *Title* (goal)
* *Primary Actor*
* *Scope*
* *Level*
* (Story): paragraph or two of text in the body of the use case

# Fully-Dressed Use Case
* *Title*
* *Primary Actor*
* *Goal in Context*
* *Scope*
* *Level*
* *Stakeholders and Interests*
* *Precondition*
* *Minimal Guarantees*
* *Success Guarantees*
* *Trigger*
* *Main Success Scenario*
* *Extensions*
* *Technology & Data Variations List*
* *Related Information*

# User Stories vs. Use Cases
* User stories are about *needs*, use cases are about *behavior* in the
    software to meet those needs
* User stories are easy for *users* to read, use cases describe the
    *complete interaction*
* *One* user story may map to *several* use cases

# User Story

* **Title**: Search and Replace
* **Description**: A user realizes they incorrectly capitalized a word everywhere on a set of web pages. So they tell the web page editor to search for all occurrences and replace them with the corrected word.
* **Priority**:
* **Estimate**:  

# Use Case: Search and Replace

* **Title:**  Search and Replace
* **Preconditions**: A document is loaded and being edited
* Main Success Scenario:
	1. The user indicates that the software is to perform a Search and Replace in the document.
	2. The software responds by requesting the search term and the replacement text.
	3. The user inputs the search term and replacement text and indicates that all occurrences are to be replaced.
	4. The software replaces all occurrences of the search term with the replacement text.

# Use Case: Search and Replace (cont)
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

# Use Case: Setting Time and Date

* **Title:** Setting Time and Date
* Main Success Scenario:
	1.  User presses Select key
	2. System displays selecting
	3. User presses any one of the keys Time or Date. Any other key is ignored except Select
	4. System flashes the corresponding label
	5. Users presses Up or Down to change date or time.
	6. User presses Run to save time or date

* User may press Select to abandon the operation

# Use Case:  Fix Invalid Date

* **Title:** Fix Invalid Date
* Extends Setting Time and Date
* 6a. User entered an invalid date or time
	1. System does not change time or date
	2. System displays invalid date or time
	3. Control passes back to step to 3

* This could be an extension to Time and Date instead
* Fowler recommends not using extends