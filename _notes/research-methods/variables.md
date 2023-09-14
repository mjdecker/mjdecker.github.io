---
title: Variables
layout: notes
---

# Variables
* A measurable concept, perception, image, etc.
* Variables take on different values (they vary)
* Can be expressed in various ways:
	* Republican/Democrat
	* Age (years/months)
* Different measurement scales can be used for same variable with different precision

# Variable vs Concept
* A concept is not a variable
* Concept is not measurable
	* E.g., customer satisfaction
* Variable is measurable
	* E.g., Number of downloads
* Indicators of concepts can be used to measure indirectly

# Converting a Concept
* Ask how can concept be measured, what are indicators?
* Concept: Good/poor maintainability of Software Module 
 * Indicators: 1) Line of code (LOC) added, 2) Error rate
 * Variables: 1) # LOC adder per week, 2) # number of bugs discovered per week
* Maintainability (working definition): Good if lines of code added per week is greater than 500 LOC, 2) bugs discovered < 3

# Types of Variables
* Causal Model
* Study design
* Type of Measurement

# Variables: Causal Model
* Independent variable - manipulable variable, brings about change (in dependent variable)
* Dependent variable - change brought upon by (depends) on independent variable
* Extraneous variable - factors affecting changes in dependent variable, not studied
* Intervening (confounding) variable - links independent and dependent variable

# Variables: Study Design
* Active - Can be manipulated, changed, or controlled in experiment
* Attribute - Cannot be manipulated and reflects the characteristics of study population (e.g., age)

# Variables: Type of Measurement
* Categorical - Nominal & Ordinal Scales
	* Constant - one category (i.e., one value)
	* Dichotomous - two categories
	* Polytomous - More than two categories
* Continuous - Interval & Ratio
* Qualitative - like categorical variables
* Quantitative - like continuous variables

# Importance of Type of Measurement

 > The way a variable is measured determines the type of analysis that can be performed, the statistical procedures that can be applied to the data, the way the data can be interpreted and the finding that can be communicated [Kumar 2014]. 

# Nominal
* Classification, membership
* Labeled/named
* Mathematical Operators: = & !=
* Central Tendency: Mode

# Nominal Examples
* Part of Speech - Noun, Verb, Determiner, [Dangling Participle](https://www.youtube.com/watch?v=N4vf8N6GpdM), etc.
* Type of fault (software engineering) - specification, design, code
* Gender - male, female, other
* Others?

# Ordinal
* Rank order classification without degree of difference
* Mathematical Operators: <, >
* Central Tendency: Median

# Ordinal Examples
* Healthy/Sick
* Guilty/Not guilty
* Likert Scales - E.g., Completely Agree, Mostly Agree, Neither Agree of Disagree, Mostly Disagree, Completely Disagree


# Interval
* Rank order with degree of difference but no ratio between them or meaningful zero
* Mathematical Operators: +, -
* Central Tendency: Mean, Deviation
* Ratio of differences can be taken

# Interval Examples
* Celsius Scale (temperature) - Defined between arbitrary points: 0 (freezing point) and 100 (boiling point).
* Date from arbitrary epoch
* Cartesian coordinates
* Others?

# Ratio
* Rank order with degree of difference and meaningful zero
* Mathematical Operators: *, /
* Central Tendency: Geometric Mean, Coefficient of variation
* Meaningful zero allows, for example, saying X times as much

# Ratio Examples
* Kelvins (unique non-arbitrary zero)
* Mass
* Length
* Duration
* Others?

# Type of Measurement Summary
* 	[Summary ](https://en.wikipedia.org/wiki/Level_of_measurement#Comparison)

# Variable Activity
* Break into small groups of 3-4
* Research problem: Study effect identifier style has on code comprehension
* Study: A developer is given a code written using either camelCase or under_scores and asked to answer questions about the code.
* What variables (Causal Model) are involved:
* On what scale can these be measured?

# References
* Based on: Research Methodology: A Step-by-Step Guide for Beginners  4th Ed. by Ranjit Kumar, 2014. ISBN: 978-1446269978