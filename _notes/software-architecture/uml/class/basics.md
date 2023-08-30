---
title: "Basics of Class Diagrams"
layout: notes
---

# Expressing Design
* Could use text
* Could use code
* UML Class Diagram shows overview of important classes in a system, and (more importantly) the relationship between them

# UML Class
* Name
* Properties: Attributes & Associations
* Operations (methods)

# UML Class Examples
![](http://yuml.me/diagram/class/[Project])
![](http://yuml.me/diagram/class/[Project|%20|%20])
![](http://yuml.me/diagram/class/[Project|-%20name%20:%20Name|])
![](http://yuml.me/diagram/class/[Project|%20|+%20view%28%29])
![](http://yuml.me/diagram/class/[Project|-%20name%20:%20Name|+%20view%28%29])


# Visibility
* `+` public
* `-` private
* `#` protected
* `~` package

# Attributes
> visibility name:type multiplicity = default {property-string}

* `+ name`
* `- name`
* `# name`
* `- name : Name`
* `- name : Name = "Project"`
* `- name : Name[3]`
* `- name : Name = "Project" { readonly }`

# Multiplicity
* `1` Single value
* `*` Any number of values
* `0..1` No more than a single value
* `2..4` Two to four values
* Default multiplicity: 1

# Multiplicity Terms
* Optional `*`
* Mandatory `1..*`
* Single-valued `0..1`
* Multivalued `0..2` or `0..*`

# Operations
> visibility name(parameter-list) : return-type {property-string}

* `+ draw()`
* `- draw()`
* `# draw()`
* `+ draw()`
* `+ draw() : boolean`
* `+ draw() : boolean {command}`

# Parameters
> direction name:type = default<br/>
> *Directions: `in` (default), `out`, `inout`*

* `+ draw(: Shape)`
* `+ draw(s: Shape)`
* `+ draw(in shape : Shape)`
* `+ draw(out picture : Picture)`
* `+ draw(inout picture : Picture)`

# Alternate Diagrams
![](http://yuml.me/diagram/class/[Student%7C-%20name%20:%20Name%7C+Student%28name%20:%20Name%29;+getName%28%29%20:%20Name;+setName%28name%20:%20Name%29])
![](http://yuml.me/diagram/class/[Student%7C+%20name%20:%20Name%7C])

# Guideline
![](http://yuml.me/diagram/class/[Student%7C-%20name%20:%20Name%7C+Student%28name%20:%20Name%29;+getName%28%29%20:%20Name;+setName%28name%20:%20Name%29])
![](http://yuml.me/diagram/class/[Student%7C+%20name%20:%20Name%7C])

* Attributes show the state of the objects
* Attribute types may not map directly into types in the implementation language
* Show only the attributes and operations (methods) important for the given purpose
* Public attributes typically map to *get()*/*set()* in the implementation language

#  Guideline (continued)

![](http://yuml.me/diagram/class/[Student%7C+%20name%20:%20Name%7C])

* In a high-level view, avoid *get()*/*set()* operations (methods) for attributes
* In a high-level view, avoid constructors
