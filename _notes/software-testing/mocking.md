---
title: "Mocking"
layout: notes
---

# Mock Objects
> Simulated objects that mimic the behavior of real objects in controlled ways [Wikipedia]

* Aide for unit testing when real object is impractical or impossible to use in unit test
* Similar to how crash-test dummies are used in place of people

# Example Usages
* Object supplies non-deterministic results
	* Current time/temperature, non-seeded random number
* Hard/unlikely to reproduce
	* Network error
* Too slow to use real object
	* Initializing a complete database
* Does not yet exist or behavior may change
* Real object would have to be modified to enable testing

# Live Examples
* Mock Objects
* Turtle - Mocking Framework

# Example 1 Recap - Motivation
* Various factors can make it impossible, infeasible, or undesirable to test using a real class object
* In example, our Session class monitors time elapsed and thus uses a real clock internally
* Testing Session with a real clock means waiting unreasonable amounts of time

# Example 2 Recap - Mocking
* Our Session class is reliant on a real clock, which makes testing unreasonable
* We will use mocking to mimic this real clock behavior
* We make an abstract class to represent a Clock and have session use this
	* Move the real clock behavior to a subclass TimeClock
	* Make another subclass for a mock version called ConfigurableClock 
* Test using mock class
* Identicial Session code run if real clock or mock clock

---
# Example 3 Recap - Turtle
* Mocking frameworks/libraries exist to ease mocking and provide more functionality
* Turtle is a mocking framework for Boost.Test
* Use `MOCK_BASE_CLASS(name, abstract-class)` and `MOCK_METHOD(method-name, # parameters)` to auto-generate the class for mocking
* Test as normal using Boost.Test, but use `MOCK_EXPECT` to specify expectations on how the methods are called and what they will return
* `mock::sequence` and the in expectation are used to enforce a particular call sequence

# References
* https://en.wikipedia.org/wiki/Mock_object
* https://clean-cpp.org/mock-objects/