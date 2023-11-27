---
title: "Method Naming"
layout: notes
---

# Wise Words
> The most difficult part of programming is coming up with good variable names [Maletic '85]

# Naming Importance
* Critical issue for software engineering
* Software Engineers name things constantly
* Naming impacts the readability and comprehension
* Good names reduce the development cost
* Careful selection of names can convey the high-level meaning of a task to the developer

# Naming as Abstraction
> If you have a good name for a method, you do not need to look at the body [Fowler '99]

# What does this code do? 
<script src="https://gist.github.com/mjdecker/1c7ff9c0fa4977df167c908c57858a1f.js?file=bad.cpp"></script>

# What does this code do?
<script src="https://gist.github.com/mjdecker/1c7ff9c0fa4977df167c908c57858a1f.js?file=better.cpp"></script>

# What does this code do?
<script src="https://gist.github.com/mjdecker/1c7ff9c0fa4977df167c908c57858a1f.js?file=best.cpp"></script>


# Naming Standards
* There are a large number of naming practices
* [On the Naming of Methods: A Survey of Professional Developers](http://www.cs.kent.edu/~jmaletic/papers/ICSE2021.pdf)
* Survey of 1100+ developers
* Result: Wide support for these standards
* Result: Similar across multiple programming languages
* Result: Very slight differences based on experience
* Paper refers to methods, but results also apply to free functions

# List of Standards

| | | |
|---|---|---|
|Naming Style|Grammatical Structure|Verb Phrase|
|Dictionary Terms|Full Words|Idioms and Slang|
|Abbreviations|Acronyms|Prefix/Suffix|
|Length|||

# Naming Style
> The method name should use a standard naming style such as camelCase or underscore_case

* Popular styles: camelCase, Pascal,  under_score, kebab
* Be consistent

# Naming Style - Adherence

|||
|---|---|
|`getFullName()`||
|`getScriptState()`||
|`call_with_default()`||
|`garbage_collection()`||
|`check_static_allocation_size()`||

# Naming Style - Violation

|||
|---|---|
|`getfullName()`||
|`getscriptstate()`||
|`get_fullName()`||

# Grammatical Structure
> The method names with multiple words should be in a grammatically correct sentence structure.

# Grammatical Structure - Adherence

|||
|---|---|
|`registerManagedResource()`|verb phrase|
|`performTestsFromZipFile()`|verb phrase with prepositional phrase|
|`nextArea()`|noun phrase|

# Grammatical Structure - Violation

|||
|---|---|
|`managedResourceRegister()`|NM N V|

# Verb Phrase
> The method name should always contain a verb(s) or verb phrase that refers to the behavior of the method.

* Functions/Methods are actions
* Possibly exception for getter, setter, property, and predicate

# Verb Phrase - Adherence

|||
|---|---|
|`manage_caching_sizes()`||
|`computeProductBlockingSizes()`||
|`get_cached_node()`||

# Verb Phrase - Violation

|||
|---|---|
|`x_cached_node()`|PRE NM N|

# Dictionary Terms
> Developers should use only natural language dictionary words and/or familiar/domain-relevant terms.

* "to" instead of "2"
* Non-dictionary words make an otherwise high-quality identifier hard to understand

# Dictionary Terms - Adherence

|||
|---|---|
|`FindLength()`||

# Dictionary Terms - Violation

|||
|---|---|
|`abcdefg()`||
|`cccc()`||
|`aa2020()`||

# Full Words
> The method name should use full words rather than a single letter to clearly indicate the task of the method.

* Research clearly shows improved comprehension with full-word identifiers instead of single-letter names

# Dictionary Terms - Adherence

|||
|---|---|
|`startConnection()`||

# Dictionary Terms - Violation

|||
|---|---|
|`c()`||

# Idioms and Slang
> The method name should not contain personal expressions, idioms, or unknown slang.

* Special case of Dictionary Terms and Full Word standards
* Using slang and idioms referred to as a cute practice
* Choose clarity over entertainment value

# Idioms and Slang - Adherence

|||
|---|---|
|`get_airspeed_velocity()`||

# Idioms and Slang - Violation

|||
|---|---|
|`fido()`|personal name|
|`cutting_corners()`|idiom|
|`CurveBall()`|slang|

# Abbreviations
> The method name should contain only known or standard (i.e., recognized by others within the company) abbreviated terms. A poor abbreviation is one that has multiple possible expansions, interpretations, or is not typically used within the system domain.

* evil abbreviations - unfamiliar abbreviations that are very hard for programmers to understand

# Abbreviations - Adherence

|||
|---|---|
|`getStr()`|Str == String|
|`pyConnection()`|py == Python|
|`close_db_connection()`|db == database|

# Abbreviations - Violation

|||
|---|---|
|`getProtoNameNode()`|prototype or protocol|

# Acronyms
> The method name should contain only known or standard (i.e., recognized by others in the company) acronyms. A poor acronym is one that has multiple possible expansions, interpretations, or is not typically used within the system domain.

# Acronyms - Adherence

|||
|---|---|
|`GUI_interface()`||
|`get_URL()`||
|`get_FIFO()`||
|`DOM_tree()`||

# Acronyms - Violation

|||
|---|---|
|`get_QWE()`||
|`SendAAAA()`||

# Prefix/Suffix
> The method name should not contain a prefix/suffix that is a term from the system. This standard does not apply to languages such as C that do not have namespaces.

* "Developers quickly learn to ignore the prefix/suffix, and their existence becomes a marker of older code. Names should not contain scope or type information" [Martin'08]
* Hungarian notation is useless in today's development environments [Martin'08]

# Prefix/Suffix - Adherence

|||
|---|---|
|`srcml_unit_parse_memory()`|C API - srcml_unit acts as namespace|


# Prefix/Suffix - Violation

|||
|---|---|
|`gimpItemGetPath()`|gimp is system name|
|`swift_stdlib_u_char()`|swift is system name|
|`m_count()`| Hungarian notation|

# Length
> The maximum number of words in a name ~5

* Balance between conciseness and expressiveness
* Most participants picked 5 +/- 2
* Exception with test method names where 15+

# Length - Adherence

|||
|---|---|
|`get_quest()`|2 words|


# Length - Violation

|||
|---|---|
|`returnfalseifnosetterwasfoundandifreportnosetterfoundisfalse()`||
|15 words||

# Other Identifiers
* E.g., local, class, parameter
* Generally, noun or noun phrase
	* person, element_stack, window_size
* booleans - verb or verb phrase
	* isValid
* Preference for collection variables to be plural
