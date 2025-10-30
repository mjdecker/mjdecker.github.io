---
title: "Architecture"
layout: notes
---

# Software Architecture
 > is a set of structures needed to reason about the system, which comprise software elements, relations among them, and properties of both [Clements 2010]
 
 * Decomposition and partitioning of the system into different subsystems (or parts) and the relationship between those subsystems
 * Successfull partitioning allow for the subsystems to be worked on separately by different groups of developers in order to co-operatively develop the system
 * Architecture's purpose is to assure that a system's functionality, quality attributes, and other business goals are satisfied


# System/Subsystem Design
![](images/architecture/system-design.svg)


# System Decomposition
* *subsystem* provides a set of *services* to the system
	* A set of related operations that share a common purpose
* *subsystem interface*  a set of *services* available to other systems
	* Application Programmer Interface (API) includes the names of operations, parameters/types, and return types
* System design focuses on defining services


# System/Subsystem Model
![](images/architecture/sub-system-model.png)


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
* Repository
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
![](images/pipe-filter.png)


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
![](images/batch-seq.png)


# Batch Sequential Model
![](images/batch-seq-ii.png)


# Batch Sequential Model
![](images/batch-seq-iii.png)


# Layered Architecture
* Hierarchical decomposition of a system into subsystems (layers) with each providing a higher level of services provided from lower-level subsystems
* *closed architecture* each layer can only depend on the layer immediately below
* *open architecture* each layer can access any layer below


# Closed Architecture: OSI Network Model
![](images/closed-arch.png)


# Open Architecture:  Motif Library
![](images/open-arch.png)


# Repository Architecture
![](images/repository.png)

* Subsystems are independent and interact by a central repository
* Examples: Payroll or banking system, Modern IDE/Compiler, Blackboard


# Repository:  IDE
![](images/Repository-ide.png)


# Model/View/Controller
* Subsystems
    * *model* subsystems are responsible for maintaining domain knowledge
    * *view* subsystems are for displaying knowledge to the user
    * *controller* subsystems manage the interactions with the user
* Model subsystems do not depend on view or controllers.
* Changes in model state propagate via a subscribe-notify protocol
* Examples: File system, database


# MVC
![](images/MVC.png)


# Client/Server Architecture
* Subsystems:
    * Server provides one or more services to instances of clients
    * Clients ask for services and clients interact with users
* An information system with a central DB is an example
* Web servers (multiple servers)


# Client/Server Model
![](images/client-server.png)


# Peer-to-Peer Architecture
![](images/peer-2-peer.png)


# Peer-to-Peer Architecture
* Generalization of client/server, clients can be servers and vice versa
* The control flow of each subsystem is independent of others except for the synchronization of requests.


# Process Control Architecture
![](images/process-control.png)


# Event-driven Architecture
![](images/event.png)
