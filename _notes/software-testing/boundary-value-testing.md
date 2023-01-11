---
title: "Boundary Value Testing"
layout: notes
---

[basic-one-variable]: /images/software-testing/boundary-value-types/basic-one-variable.png
[basic-two-variable]: /images/software-testing/boundary-value-types/basic-two-variable.png

[robust-one-variable]: /images/software-testing/boundary-value-types/robust-one-variable.png
[robust-two-variable]: /images/software-testing/boundary-value-types/robust-two-variable.png

[worst-case]: /images/software-testing/boundary-value-types/worst-case.png
[robust-worst-case]: /images/software-testing/boundary-value-types/robust-worst-case.png

# Specification Testing Techniques
* Boundary value testing
* Equivalence partitioning
* Output range testing
* Special-value testing
* Decision table based testing
* Can combine multiple types

# Boundary Value Testing
* Dynamic Verification, Black-box testing technique
* Observation: Errors tend to occur near extreme boundaries
* Solution: Test near those boundaries
* Best used in combination with equivalence partitioning (next topic)

# Considerations
* Invalid values - do we test invalid values?
	* AKA robust
* Single fault assumption - can we assume faults are the result of a single variable?
	* AKA worst-case

# Basic/Normal Method
* A variable's range is between min and max
* Set each variables to a typical value (most important test)
* Let one variable take on its boundary values (tests)
	* min
	* min + 1
	* max
	* max - 1
* Repeat for each variable

# Basic One Variable

![basic-one-variable]

# Basic Two Variable

![basic-two-variable]

# Robust 
* Are invalid inputs expected?
* Basic + adds tests just outside the range
	* min - 1
	* max + 1
* Limitations?

# Robust 
* Are invalid inputs expected?
* Basic + adds tests just outside the range
	* min - 1
	* max + 1
* Limitations?
	* What is correct output?
	* Can invalid input be specified?

# Robust One Variable

![robust-one-variable]


# Robust Two Variable

![robust-two-variable]

# Worst-case
* Test boundary of all combinations of variables

![worst-case]


# Robust worst-case
* Test both invalid inputs and all combinations of variables

![robust-worst-case]

# Output Range Testing
* Test derived to make sure output range is covered
* Work back to derive inputs
* Can apply boundary value analysis, etc to output
* Can combine with other types

# Special Value Testing
* Use of domain knowledge, experience with other programs, and knowledge of weak points to drive tests
* AKA ad hoc testing
* Heavily dependent on individual developer's judgement and experience
* Rarely repeatable
* Intuitive
* Highly effective
* Can combine with other types of testing


