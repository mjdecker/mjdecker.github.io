---
title: "Advanced Software Engineering"
layout: notes
---

# Lehman's Laws of SE
* Originally (1974) based on observations of a few, commercially-developed systems
* 3 to 8 laws
* Are these really "laws"?
* Limited data, however, important start

# Types of Systems
* *S-type* - Specified formally, no changes needed
* *P-type* - Requires iterative process to find
* *E-type* - Must evolve over time

* The laws apply to *E-type*
* Hypothesis: Everything is *E-type*

# Law I: Continuing Change
> A program that is used must be continually adapted else it becomes progressively less satisfactory

* Mismatches are between the *software* and its *operational environment*
* Changes in the *operational environment* invalidate assumptions made in the *software*
* Need for continuing adaptation and evolution is intrinsic to *software* in an *operational environment*
* Development, installation, and operation of software changes both the *software* and the *operational environment*
* Evolution is achieved in a feedback-driven maintenance process
* If evolution is not allowed to occur, degree of satisfaction declines

# Law II: Increasing Complexity
> As a program is evolved its complexity increases unless work is done to maintain or reduce it

* Instance of [Second Law of Thermodynamics](http://en.wikipedia.org/wiki/Second_law_of_thermodynamics) (entropy)
* As the *software* adapts to changing *operational environment*, the *software* gets more complex
* Interactions between parts of the software increase in an unstructured way leading to an increase in entropy
* Increased complexity &#x2192; more resources required to make changes
* Reducing complexity &#x2192; less resources to make changes
* Must balance *change* and *complexity*

# Law III: Self Regulation
> The program evolution process is self regulating with close to normal distribution of measures of product and process attributes

* Development team is part of a larger organization, so the interests and goals of the larger organization include more than this *software*
* Feedback (allocation of resources, pay, pats on back) from all levels of the larger organization work to keep *software* projects inline
* Over time, all *iterations* will start to have the same characteristics (bugs, complexity, etc), and all *software* projects will start to have the same characteristics
* If *software* products have good characteristics, this is a good thing, if not, then this is bad

# Law IV: Conservation of Organisational Stability
> The average effective global activity rate on an evolving system is invariant over the product life time

* Rate of development (features, tasks, etc.) doesn't change much over the long-term life of the *software*
* Counter-intuitive as people (especially managers) believe that managers make decisions that effect activity
* Managers do control what is to be done, and the resources to do it
* However, managers are constrained by union rules, lack of skills in available personnel, etc.
* Also constrained by *software* characteristics, e.g., complexity
* Providing additional resources may reduce overall effectiveness, i.e., [The Mythical Man-Month](http://en.wikipedia.org/wiki/The_Mythical_Man-Month) [Brooks]

# Law V: Conservation of Familiarity
> During the active life of an evolving program, the content of successive releases is statistically invariant

* Good progress is made when everyone is familiar with the *goals*
* The more changes/additions to software, more difficult it is for everybody to be familiar with all the goals
* Larger the change, less likely everybody is familiar (comfortable, understands)
* Trigger points at which this occurs, e.g., 3

# Law VI: Continuing Growth
> Functional content of a program must be continually increased to maintain user satisfaction over its lifetime

* Appears same as Law I: Continuing Change, but isn't
* Scenario: Requirements are stated, but due to resources (budget, time, etc), not all requirements are implemented
* Eventually, unimplemented requirements requested by users

# Law VII: Declining Quality
> ... programs will be perceived as of declining quality unless rigorously maintained and adapted to a changing operational environment

* Scenario:
	* Software performs satisfactorily for a long period of time 
	* Suddenly, unexpected, previously unobserved behavior occurs
* Gap between *software* and the *operational environment*
* *Operational environment* is always changing, not certain how the *software* will respond
* This uncertainty about software increases with time unless actions are taken during maintenance
* Familiarity breeds contempt, user satisfaction will change over time

# Law VIII: Feedback System
> Programming Processes constitute Multi-loop, Multi-level Feedback systems and must be treated as such to be successfully modified or improved

* All other parts of this set of laws include feedback
* *multi-loop* iterations
* *multi-level* development team, testing, management, critics, users
