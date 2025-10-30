---
title: "Architecture"
layout: notes
---

[system-design]:    /images/architecture/system-design.svg
[sub-system-model]: /images/architecture/sub-system-model.png
[pipe-filter]:      /images/pipe-filter.png
[batch-seq]:        /images/batch-seq.png
[batch-seq-ii]:     /images/batch-seq-ii.png
[batch-seq-iii]:    /images/batch-seq-iii.png
[closed-arch]:      /images/closed-arch.png
[open-arch]:        /images/open-arch.png
[repository]:       /images/repository.png
[repository-ide]:   /images/repository-ide.png
[mvc]:              /images/mvc.png
[client-server]:    /images/client-server.png
[peer-2-peer]:      /images/peer-2-peer.png
[process-control]:  /images/process-control.png
[event]:            /images/event.png

# Software Architecture
 > is a set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both [Clements 2010]
 
 * Decomposition and partitioning of the system into different subsystems (or parts) and the relationship between those subsystems
 * Successfull partitioning allow for the subsystems to be worked on separately by different groups of developers in order to co-operatively develop the system
 * Architecture's purpose is to assure that a system's functionality, quality attributes, and other business goals are satisfied

# System/Subsystem Design
![system-design]

# System Decomposition
* *subsystem* provides a set of *services* to the system
	* A set of related operations that share a common purpose
* *subsystem interface*  a set of *services* available to other systems
	* Application Programmer Interface (API) includes the names of operations, parameters/types, and return types
* System design focuses on defining services

# System/Subsystem Model
![sub-system-model]

# Architectural Style
* An *architectural style* defines a family of systems in terms of a pattern of structural organization
    * *components*, e.g., client, server, DB
    * *connectors*, e.g., procedure call, pipe, event broadcast
* Consists of:
	* Vocabulary of *components* and *connectors*
	* Constraints on how they are combined

# Common Architectural Styles
* Dataflow Systems
    * Pipe and Filter
    * Batch Sequential
* Virtual Machines
    * Rule-based Systems
    * Interpreters
* repository
    * Databases
    * Hypertext Systems
    * Blackboards

# Common Architectural Styles (continued)
* Independent Components
    * Peer-to-Peer
    * Client Server
    * Model / View / Controller
    * Event Systems
* Call and Return Systems
    * Main Program and Subroutine
    * Layered Systems
    * Object-Oriented Systems

# Pipe and Filter Architecture
* Subsystems are called *filters* and associations between the filters are called *pipes*
* Filters only know the content and format of data being received and produced, nothing about the other filters in the system
* Filters execute concurrently with synchronization via pipes
* Very reconfigurable
* Transformational systems

# Pipe and Filter Model
![pipe-filter]

# UNIX Examples
```
# Replace TRUE with LITERAL_TRUE in every cpp and hpp file
find . -name "*.cpp" -o -name "*.hpp" | xargs -I% sed -i.back "s/TRUE/LITERAL_TRUE/g" %

# Count number of commits by each other
git log --pretty="%aN" | sort | uniq -c | sed "s/ *//" | cut -d ' ' -f2 -f1,3-10
```

# Batch Sequential Architecture
* A small number of large stand-alone subsystems
* Must be executed in a fixed sequential ordering (batch)
* Typically work on large flat files, transforming the file into a new format or a new ordering so the next subsystem can work on the data
* The shared, specific file tightly couples the subsystems
* No realtime feedback, no concurrency

# Batch Sequential Model
![mvc]

# Batch Sequential Model
![repository-ide]

# Batch Sequential Model
![repository]

# Layered Architecture
* Hierarchical decomposition of a system into subsystems (layers) with each providing a higher level of services provided from lower-level subsystems
* *closed architecture* each layer can only depend on the layer immediately below
* *open architecture* each layer can access any layer below

# Closed Architecture: OSI Network Model
![open-arch]

# Open Architecture:  Motif Library
![closed-arch]

# Repository Architecture
![batch-seq-iii]

* Subsystems are independent and interact by a central repository
* Examples: Payroll or banking system, Modern IDE/Compiler, Blackboard

# Repository:  IDE
![batch-seq-ii]

# Model/View/Controller
* Subsystems
    * *model* subsystems are responsible for maintaining domain knowledge
    * *view* subsystems are for displaying knowledge to the user
    * *controller* subsystems manage the interactions with the user
* Model subsystems do not depend on view or controllers.
* Changes in model state propagate via a subscribe-notify protocol
* Examples: File system, database

# MVC
![batch-seq]

# Client/Server Architecture
* Subsystems:
    * Server provides one or more services to instances of clients
    * Clients ask for services and clients interact with users
* An information system with a central DB is an example
* Web servers (multiple servers)

# Client/Server Model
![client-server]

# Peer-to-Peer Architecture
![peer-2-peer]

# Peer-to-Peer Architecture
* Generalization of client/server, clients can be servers and vice versa
* The control flow of each subsystem is independent of others except for the synchronization of requests.

# Process Control Architecture
![process-control]

# Event-driven Architecture
![event]
