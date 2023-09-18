---
title: "Cohesion"
layout: notes
---

# Cohesion

* Degree of connectivity among the elements of a single module
* Object-oriented design - a single class/method

* Internal measure on an individual class/module/method

# Why is Cohesion Important?
* A cohesive class is easier to comprehend because it has a single purpose

* Increase reuse since the class can be used in multiple ways in many different projects, or in the same project

* Reduce (maintenance) costs for fixes and enhancements

* Simplify testing

* Allow for replacement

# Cohesion Goal

* Maximize internal interaction (intramural) among subelements (*cohesion*)

* For class:

	* Methods share data members (fields) with other methods
	* Data members are used in combination

* The more advanced the features of a class, the more this occurs

# Cohesion & Declarations I
<script src="https://gist.github.com/mjdecker/fda010c502bac648ed15679b91c0c92b.js?file=data_type_cohesion.cpp"></script>

# Cohesion & Declarations II
<script src="https://gist.github.com/mjdecker/fda010c502bac648ed15679b91c0c92b.js?file=data_type_cohesion_single_line.cpp"></script>

# Cohesion & Declarations III
<script src="https://gist.github.com/mjdecker/fda010c502bac648ed15679b91c0c92b.js?file=concept_cohesion.cpp"></script>

# Cohesion & Declarations IV
<script src="https://gist.github.com/mjdecker/fda010c502bac648ed15679b91c0c92b.js?file=struct.cpp"></script>

# Types of Cohesion

* *Informational* (best)

* *Functional* (best)

* *Sequential* (better)

* *Communicational* (better)

* *Procedural*

* *Temporal*

* *Logical*

* *Coincidental* (worst)

# Applicability
* Examples use classes. However, applies at all levels:

	* system

	* subsystem/directory

	* class/file

	* method/function

	* section of code

# Coincidental Cohesion
![](https://yuml.me/diagram/class/[JohnDoe| -startDay:int; -linePathSep:String; | +win2lin%28:String%29; +numDays%28:String%29; +outputReport%28:FinanceData%29;])

* Performs multiple, completely unrelated actions
* Often based on factors outside of the design: personnel, company organization, history, avoidance of small modules
* No reusability, very difficult to maintain or enhance

# Logical Cohesion
![](https://yuml.me/diagram/class/[Output|  | +outputReport%28:Financials%29; +outputWeather%28:Weather%29; +output%28choice:int, :Weather, :Financials%29])

* Performs a series of related actions, one of which is selected by the calling module
* Parts have a *logical association*, but not the primary logical association
* Primary logical association is based on the highest level of abstraction

# Logical Cohesion (cont)
![](https://yuml.me/diagram/class/[Output|  | +outputReport%28:Financials%29; +outputWeather%28:Weather%29; +output%28choice:int, :Weather, :Financials%29])

* Often includes both high and low-level actions (in terms of abstraction) in the same class
* Often includes unused parameters for certain uses
* Difficult to understand interface. Many unrelated actions
* In OO we put methods near the abstract concept that they work on

# Temporal Cohesion
![](https://yuml.me/diagram/class/[Init| | +initReport%28:Financials%29; +initWeather%28:Weather%29;])

* Perform a series of actions that are related by time occurrence, e.g., startup or shutdown
* Degrades to Logical Cohesion if time of action changes
* Addition of subsystems may require additions to multiple modules
* In OO we build time occurrence actions into the class, and externally control lifetime

# Procedural Cohesion
![](https://yuml.me/diagram/class/[Data| | +readPartAndUpdateDirectory%28%29;])

* Action based on the ordering of steps, related by usage in ordering
* Changes to the ordering of steps or purpose of steps requires changing the element abstraction
* Situations where this particular sequence applies are often limited
* Each element, including methods/operations, should have one cohesive action

# Communicational Cohesion
![](https://yuml.me/diagram/class/[Data| | +updateAndAudit%28%29;],[Trajectory| | +newTrajectoryAndPrint%28%29;])

* Actions are on the same data
* Actions are related but still not completely separated
* Element cannot be reused
* May be the highest cohesion possible/desirable

# Sequential Cohesion
<script src="https://gist.github.com/mjdecker/fda010c502bac648ed15679b91c0c92b.js?file=sequential_cohesion.cpp"></script>

* Actions are placed together because they have to be performed on the same data in a specific order (like an assembly line)
* Requires a crisp abstraction that is used as the name of the method

# Functional Cohesion
![](https://yuml.me/diagram/class/[Data| -values:int［*］; | +format%28%29; +validate%28%29; ])

* Element (methods) that performs a single action or achieves a single  goal
* Maintenance involves entire element
* High reuse because the element is completely independent (in its actions) of other elements
* Easily replaced
* Superior

# Informational Cohesion
![](https://yuml.me/diagram/class/[Weather| -temperature:int; | +init%28%29; +output%28%29; ],[Financials| -stockPrice:double; | +init%28%29; +output%28%29; ])

* Performs a number of actions
* Each action has its own entry point and independent code
* All actions are performed on a shared data structure
* Object-oriented
* Superior
