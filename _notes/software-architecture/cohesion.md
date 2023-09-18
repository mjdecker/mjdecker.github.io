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

<img src="coincidental-cohesion.svg"/>

* Performs multiple, completely unrelated actions

* Often based on factors outside of the design: personnel, company organization, history, avoidance of small modules

* No reusability, very difficult to maintain or enhance

# Logical Cohesion

<img style="margin-bottom:0pt" src="logical-cohesion.svg"/>

* Performs a series of related actions, one of which is selected by the calling module

* Parts have a *logical association*, but not the primary logical association

* Primary logical association is based on the highest level of abstraction

# Logical Cohesion (cont)

<img style="margin-bottom:0pt" src="logical-cohesion.svg"/>

* Often includes both high and low-level actions (in terms of abstraction) in the same class
* Often includes unused parameters for certain uses
* Difficult to understand interface. Many unrelated actions
* In OO we put methods near the abstract concept that they work on

# Temporal Cohesion

<img style="margin-bottom:0pt;padding-bottom:0pt" src="temporal-cohesion.svg"/>

* Perform a series of actions that are related by time occurrence, e.g., startup or shutdown

* Degrades to Logical Cohesion if time of action changes

* Addition of subsystems may require additions to multiple modules

* In OO we build time occurrence actions into the class, and  externally control lifetime

# Procedural Cohesion

![](procedural-cohesion.svg)

* Action based on the ordering of steps, related by usage in ordering

* Changes to the ordering of steps or purpose of steps requires changing the element abstraction

* Situations where this particular sequence applies are often limited

* Each element, including methods/operations, should have one cohesive action

# Communicational Cohesion

<div markdown="1" style="display: flex; flex-direction: row; align-items: center; outline: none; justify-content: space-around">
![](communicational-cohesion-1.svg)
![](communicational-cohesion-2.svg)
</div>


* Actions are on the same data

* Actions are related but still not completely separated

* Element cannot be reused

* May be the highest cohesion possible/desirable

# Sequential Cohesion

```
std::unique_ptr<Shape> shapeFactory(std::istream& input) {

    // create new shape
    std::unique_ptr<Shape> shape(new Shape());

    // input shape data
    // ...

    // format shape data
    // ...

    // validate shape data
    // ...

    return shape;
}
```

* Actions are placed together because they have to be performed on the same data in a specific order (like an assembly line)

* Requires a crisp abstraction that is used as the name of the method

# Functional Cohesion

![](functional-cohesion.svg)

* Element (methods) that performs a single action or achieves a single  goal

* Maintenance involves entire element

* High reuse because the element is completely independent (in its actions) of other elements

* Easily replaced

* Superior

# Informational Cohesion

<div markdown="1" style="display: flex; flex-direction: row; align-items: center; outline: none; justify-content: space-around">
![](informational-cohesion-weather.svg)
![](informational-cohesion-financial.svg)
</div>

* Performs a number of actions

* Each action has its own entry point and independent code

* All actions are performed on a shared data structure

* Object-oriented

* Superior
