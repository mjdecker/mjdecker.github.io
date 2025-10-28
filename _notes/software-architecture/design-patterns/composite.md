---
title: "Design Pattern - Composite"
layout: notes
---

[structural]: https://mdecker.net/notes/software-architecture/design-patterns/intro.html#/21

[objecttree]: /images/design-patterns/composite/object-tree.svg
[structure]: /images/design-patterns/composite/structure.svg
[motivation]: /images/design-patterns/composite/motivation.svg

# Directory
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree-Files.txt"></script>

# Attempt #1: Design
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree-Files.txt"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses.hpp"></script>

# Attempt #1: Usage
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses.hpp"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree.hpp"></script>

# Attempt #1: UML
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses.hpp"></script>

![](https://yuml.me/collard/composite-directory-file-separate.svg)

# Directory
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree-Dir.txt"></script>

# Attempt #2: Design
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree-Dir.txt"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses2.hpp"></script>

# Attempt #2: Usage
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses2.hpp"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree2.hpp"></script>

# Attempt #2: UML
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses2.hpp"></script>

![](https://yuml.me/collard/composite-directory-tree-nested.svg)

# Problems
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTreeClasses2.hpp"></script>

* Have to store files and directories separately and keep them ordered separately
* Client code has to treat files and directories objects differently
* Complex code for the client to handle recursive structure

# Composite
> Compose objects into tree structures to represent part-whole hierarchies

> Composite lets clients treat individual objects and compositions of objects uniformly

* [Structural Pattern][structural]

# Composite: Motivation
![motivation]

# Object Tree
![objecttree]

# Composite: Applicability
* Use the Composite pattern when you:
* Want to represent part-whole hierarchies of objects
* Want clients to be able to ignore the difference between compositions of objects and individual objects, as clients treat all objects in the composite structure uniformly

# Composite: Structure
![structure]

# Composite: Participants
* Component (e.g., Graphic)
    * Declares the interface for objects in the composition
    * Implements the default behavior for the interface common to all classes as appropriate
    * Declares an interface for accessing and managing its child components
    * Optionally defines an interface for accessing a component’s parent
* Client
    * Manipulates objects in the composition through the Component interface

# Composite: Object Participants
* Leaf (e.g., Rectangle, Line, Text, etc.)
    * Represents leaf object (leaves have no children) in the composition
    * Defines behavior for primitive objects in the composition
* Composite (e.g., Picture)
    * Defines behavior for components having children
    * Stores child components
    * Implements child-related operations in the Component interface

# Composite: Collaborations
* Clients use the Component class interface to interact with objects in the composite structure:
* If the recipient is a Leaf, then the request is handled directly
* If the recipient is a Composite, it usually forwards requests to its child components, possibly performing additional operations before and after forwarding.

# Composite: Consequences 
* A class hierarchy of primitive and composite objects which permits recursive structures
* Clients are simple as they handle primitive and composite objects the same
* Can add new kinds of components, both Composite or Leaf, that work automatically with existing client code
* However, being able to add any Component type can make the design overly general

# Composite #1: Design

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree3Classes.hpp"></script>

# Composite #1: Usage
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDirTree3.hpp"></script>

# Composite UML
![](https://yuml.me/collard/composite-directory-tree-composit.svg)

# Composite #2: Design
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDir4ClassesComponent.hpp"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDir4ClassesFile.hpp"></script>

<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDir4ClassesDirectory.hpp"></script>

# Composite #2: Usage
<script src="https://gist.github.com/mjdecker/3442ae114f986183a4a47036b8d235f4.js?file=CompositeDir4.cpp"></script>

# Implementation Issues
* Storing parent references
* Sharing components
* Size and contents of Composite interface, e.g., traversing children
* Child management
* Should Component implement a list of Components?
* Child ordering
* Caching to improve performance
* Who should delete components?
* What's the best data structure for storing components?

# Related Patterns
* *Composite* 
    * Used to implement MacroComposites
* *Memento* 
    * Stores the state the Composite requires for an undo
* *Prototype* 
    * Composite objects are used in Prototypes
