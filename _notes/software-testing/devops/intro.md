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

# Notice
* Unless specified, the following notes are from the book Len Bass, Liming Zhu, Ingo M. Weber, [*DevOps: A Software Architect’s Perspective*](https://learning.oreilly.com/library/view/devops-a-software/9780134049885/#toc) ISBN-13: 978-0134049847
* For some images and quotes, you must log into *Safari Books Online*

# Release Process
* Release of a system or an updated version to the customers
* One of the most sensitive steps in software development, whether internal or external
* Releasing a new version -> possible of incompatibilities or failures -> customer unhappiness
* Release plans must be carefully created and are often done manually

# Release Planning Step 1
> Define and agree on release and deployment plans with customers/stakeholders

* Features to be included in the new release
* Ensure that operations (including help desk and support) are aware of schedules
* Ensure that resource requirements are met
* Ensure that additional training is available

# Release Planning Step 2
> Ensure that each release package consists of a set of related assets and service components that are compatible with each other

* Programs, libraries, etc. have dependencies
* Changes may introduce incompatibilities
* Managing dependencies is a significant part of what DevOps does

# Release Planning Step 3
> Ensure that the integrity of a release package and its constituent components is maintained throughout the transition activities and recorded accurately in the configuration management system.

* Ensure that the old versions of a component are not (accidentally) included in the release
* Records are kept of the components of the deployment (important for tracking down errors)

# Release Planning Step 4
> Ensure that all release and deployment packages can be tracked, installed, tested, verified, and uninstalled or rolled back if appropriate

* *rolled back* - return to old version (uninstall new version, re-install old version)
* Reasons include code errors, inadequate resources, expired licenses

# Release
* *manual*
* {: .hide } labor-intensive, time-consuming, error-prone
* *automated*
* {: .hide } little labor involved, minimum time to run, not prone to errors of procedure
* {: .hide } can be labor-intensive to develop
* {: .hide } iterate to improve

# Upgrade Failures
* [On August 1, 2012, Knight Capital had an upgrade failure that ended up costing (US) $440 million](https://dealbook.nytimes.com/2012/08/02/knight-capital-says-trading-mishap-cost-it-440-million/)
* [On August 20, 2013, Goldman Sachs had an upgrade failure that, potentially, could cost millions of dollars](https://www.reuters.com/article/us-nasdaq-trades/goldman-sachs-technical-error-causes-erroneous-u-s-option-trades-idUSBRE97J0R920130820)

# XebiaLabs Survey
* 2013 survey 130 responses
* 7.5% "not reliable"
* 57.5% "needs improvement"
* Challenges:
* {: .hide } 49% "too much inconsistency across environments and applications"
* {: .hide } 32.5% "too many errors"
* {: .hide } 29.2% of deployments relied on custom scripting
* {: .hide } 35.8% deployments were partially manual

# CA Technologies Survey
* 2013 survey, 1,300 respondents, companies over $100 million in revenue
* Benefits from the adoption of DevOps
* {: .hide } 53% increased frequency of deployment
* {: .hide } 41% anticipating increased frequency
* {: .hide } 42% improved quality of deployed applications
* {: .hide } 49% anticipate improved quality

# Reasons for Poor Coordination
* Developers complete all coding and testing
* The developed system needs to move into the operating environment:
* {: .hide } Only appropriate access is permitted
* {: .hide } Compatible with all other systems
* {: .hide } Sufficient resources
* {: .hide } Up-to-date data
* {: .hide } Generated data is in a format usable by other systems
* {: .hide } Help desk and support are trained
* {: .hide } Operations personnel are trained for troubleshooting
* {: .hide } Timing with personnel resources

# Operation Responsibilities I (redux)
* Analyze system logs and identify potential issues with computer systems
* Introduce and integrate new technologies into existing datacenter environments
* Perform routine audits of systems and software
* Perform backups
* Apply operating system updates, patches, and configuration changes
* Install and configure new hardware and software
* Add, remove, or update user account information; reset passwords, etc.

# Operation Responsibilities II (redux)
* Answer technical queries and assist users
* Ensure security
* Document the configuration of the system
* Troubleshoot reported problems
* Optimize system performance
* Ensure that the network infrastructure is up and running
* Configure, add, and delete file systems
* Maintain knowledge of volume management tools

# Operation Personnel
* Each item requires a deep level of understanding to perform well
* Problem: "Finding and keeping qualified personnel”
* The DevOps approach is to reduce the need for dedicated operations personnel:
* {: .hide } Automate many tasks formerly done by operations
* {: .hide } Have developers assume a portion of the remainder
* Implications? In terms of background?