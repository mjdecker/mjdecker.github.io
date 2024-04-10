---
title: "DevOps Introduction"
layout: notes
---

# Notice
* Unless specified, the following notes are from the book Len Bass, Liming Zhu, Ingo M. Weber, [*DevOps: A Software Architect’s Perspective*](https://learning.oreilly.com/library/view/devops-a-software/9780134049885/#toc) ISBN-13: 978-0134049847

* For some images and quotes, you must log into *Safari Books Online*

# Operation Responsibilities I
* Analyze system logs and identify potential issues with computer systems
* Introduce and integrate new technologies into existing datacenter environments
* Perform routine audits of systems and software
* Perform backups
* Apply operating system updates, patches, and configuration changes
* Install and configure new hardware and software
* Add, remove, or update user account information; reset passwords, etc.

# Operation Responsibilities II
* Answer technical queries and assist users
* Ensure security
* Document the configuration of the system
* Troubleshoot reported problems
* Optimize system performance
* Ensure that the network infrastructure is up and running
* Configure, add, and delete file systems
* Maintain knowledge of volume management tools

# Operation Job Descriptions
* Help desk and support staff
* System administrators
* Software operator (description, not job title)
* Will use the term *operator* to refer to system administrators and software operators

# What is DevOps?
* A compound of "development" and "operations"
* Became more important as integration of applications and platforms became more tightly controlled
* Lack of a single platform, e.g., Win32

# DevOps
* Way of thinking
* Job title
* Set of tools
* Automation
* An outgrowth of Agile development

# What has changed?
* Benefits of agile development also useful for operations
* Changes in operating environments are occurring more frequently due to security and cost considerations
* Difficult to predict how software will perform at scale
* Continual delivery

# DevOps: [Wikipedia](https://en.wikipedia.org/wiki/DevOps)

> DevOps (a clipped compound of "development" and "operations") is a software development methodology that combines software development (Dev) with information technology operations (Ops). The goal of DevOps is to shorten the systems development life cycle while delivering features, fixes, and updates frequently in close alignment with business objectives.

> Academics and practitioners have not developed a unique definition for the term "DevOps".

# DevOps: Textbook

* DevOps is an important part of modern development practices
* "on the rise" Gartner Hype Cycle since 2013

> DevOps is a set of practices intended to reduce the time between committing a change to a system and the change being placed into normal production while ensuring high quality[<sub>1</sub>](https://learning.oreilly.com/library/view/devops-a-software/9780134049885/ch01.html)

# DevOps: Relation to Others

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Devops.svg/506px-Devops.svg.png)

# Toolchains

* Coding
* Building
* Testing
* Packaging
* Releasing
* Configuring
* Monitoring

# Book Definition (cont)

> DevOps is a set of practices intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality[<sub>1</sub>](https://learning.oreilly.com/library/view/devops-a-software/9780134049885/ch01.html)

# Implications

* *Quality of deployed change*
* *Quality of delivery mechanism*
* *Important time periods*
* *Goal oriented*
* *Not restricted to just development and testing*

# *Quality of deployed change*
* Quality of deployed change to a system is important
* Typically, this is code and related artifacts (e.g., build files)
* Suitability for use by stakeholders (users, developers, system admins):
* {: .hide }Availability, security, reliability, etc.

# Achieving High Quality of Change
* Automated test cases that are passed before the change goes into production
* Test the change in production with a limited set of users
* Close monitoring of newly deployed code for a period of time
*
* Typically these methods are used in combination

# *Quality of delivery mechanism*
* Not only the change but how users get the change must be of high quality
* {: .hide } Reliable
* {: .hide } Repeatable
* If the delivery mechanism fails, the time required for change increases
* If there are errors in the delivery of the change, the quality of the deployed systems suffers (reduced availability or reliability)

# *Important time periods*
* Developer commits newly developed code
* {: .hide } End of basic development
* {: .hide } Beginning of the path to deployment
* Deployment of code into production
* {: .hide } Distinction made between production code undergoing live testing and close monitoring

# *Goal oriented* 
* Does not specify what practices or tools are used to implement the goals
* DevOps Practice - Practice intended to reduce the time from a developer commit to deployment into production
* Can involve agile methods, tools, etc, but does not have to
* Agile is an influence on the quality and time reduction of DevOps

# *Not restricted to just development and testing*
* Needs to be involved in requirements
* Does not end with production

# DevOps Practices 
* Treat Ops as first-class citizens from the point of view of requirements
* Make Dev more responsible for relevant incident handling
* Enforce the deployment process used by all
* Use continuous deployment
* Develop infrastructure code (e.g., deployment scripts) with the same set of practices as application code

# Treat Ops as first-class citizens from the point of view of requirements 
* Operations possibly include requirements for logging, monitoring, etc.
* E.g., logging messages should make sense to an operator
* Involving operations in requirements development helps to ensure that these requirements are considered

# Make Dev more responsible for relevant incident handling
> Scenario: Error occurs during operation. Instead of isolating in operations, include development

* Try to shorten the time between error observation and repair
* Commonly, Dev has primary responsibility during new deployment, and Ops has responsibility after that

# Enforce the deployment process used by all 
* All deployments must be of high quality with a defined and (hopefully) automated process
* Ad-hoc deployments can cause issues later on
* Normal deployment process should include traceability of components to an artifact

# Use continuous deployment 
* Shorten the time between developer commit and deployment of the code
* Emphasize automated tests to increase code quality

# Develop infrastructure code (e.g., deployment scripts) with the same set of practices as application code 
* We try to develop application code to ensure *high quality*
* However, often, deployment code is not handled with the same practices to ensure quality
* Applying what we have learned about the quality of application code helps control the quality of these specifications

# Figure 1.1 DevOps life-cycle processes

![](https://learning.oreilly.com/api/v2/epubs/urn:orm:book:9780134049885/files/graphics/01fig01.jpg)

# Continuous Deployment Example: IMVU

> IMVU does continuous integration. The developers commit early and often. A commit triggers an execution of a test suite. IMVU has a thousand test files, distributed across 30–40 machines, and the test suite takes about nine minutes to run. Once a commit has passed all of its tests, it is automatically sent to deployment. This takes about six minutes. The code is moved to the hundreds of machines in the cluster, but at first the code is only made live on a small number of machines (canaries). A sampling program examines the results of the canaries and if there has been a statistically significant regression, then the revision is automatically rolled back. Otherwise the remainder of the cluster is made active. IMVU deploys new code 50 times a day, on average.[<sub>1</sub>](https://learning.oreilly.com/library/view/devops-a-software/9780134049885/ch01.html#ch01lev1sec2)

# Why DevOps?
* A response to the problem of slow releases
* The longer a release takes, the less advantage to be gained
* Ideally, want a continuous release, i.e., *continuous delivery* or *continuous deployment*
* Will use the term *continuous deployment*, and often just *deployment*
