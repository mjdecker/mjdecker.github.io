---
title: Metrics
layout: notes
---

[ SonarQube]:https://www.sonarsource.com/products/sonarqube
[DORA]: https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment
[Jellyfish]: https://jellyfish.co/platform/devops-metrics
[LinearB]: https://linearb.io/platform/dora-metrics
[srcMetrics]: https://github.com/srcML/srcMetrics
[XPath]: https://en.wikipedia.org/wiki/XPath
[XSLT]: https://en.wikipedia.org/wiki/XSLT
[Halstead]: https://mdecker.net/notes/software-testing/software-metrics.html#/19

# Objectives
* To compute/approximate metrics such as Halstead and Cyclomatic
* Use SE and command line tools to calculate said metrics
* Learn about analyzing and transforming source code
* Be introduced to XML technologies such as XPath and XSLT

# Metrics Tools
* [SonarQube] - Static analysis tool which can compute metrics
* [DORA] tools - E.g., [Jellyfish], [LinearB]
* [srcMetrics] - Metrics gathering tool based on srcML Infrastructure
* Many more ...

# Computing Metrics
* Will approximate the following using built-in srcML and UNIX tools
	* Cyclomatic Complexity
	* Halstead

# Cyclomatic Complexity
* Will simplify by counting all the following: if-statements, while-statements, for-statements, and case-statements
* We will use XPath to count each (continue for explanation)

# [XPath]
* [XPath] or XML Path Language is a language for querying (and as part of something later) to transform XML documents
* An XPath specifies a path within an XML document with a syntax similar to a UNIX file path 
* Basics:
	* Each step in the path is an XML element
	* `/` separates a parent/child
	* `//` means any descendant
* A query in XPgath returned the elements in the document that match it

# Example XPath
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=basic.xsl"></script>

* Match the root element `parent`
* Match all elements named `child`, which are a child of `root`
* Match all `descendant` elements which are descendents of `child`, which it itself is a child of `parent`

# srcML XPath
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=xpath.xsl"></script>

* Find all if-statements within a function
* `unit` is the root of srcML document (i.e., a computational unit)
* `src:` is needed as in XPath because srcML elements belong to a namespace  (just accept it, it makes life easier)

# Computing Cyclomatic Complexity
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=if.xsl"></script>

* This command will find all if-statements
* Try wrapping the XPath with count: `"count(xpath-goes-here)"`
* Adapt this for: `src:for`, `src:while`, and `src:case`
* Calculate Cyclomatic Complexity for the provided XML file and report on Canvas
* Compare to running on `cyclomatic.sh` (`bash cyclomatic.sh xml-filename`)

# Halstead
* We will use srcML and some UNIX tools to get and count the tokens in a source file/project
* Simplifications:
	* All keywords/symbols are operators
	* All user-defined identifiers, literals, etc. are operands

# XSLT
* [XSLT] - Extensible Stylesheet Language Transformations
* Used to transform XML files, specified as XML

# Removing Comments and CPP code
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=remove.xsl"></script>

# Getting the Tokens
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=tokens.xsl"></script>

# sed
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=sed.sh"></script>

* `sed` is a stream editor
* We will use this to replace tokens with others
* The command on left replaces all `&lt;` with `&`
	*  `s` - means substitute
	* `//` - are separators for specifying the different parts of the substitution
	* `g` (optional) - perform substitution multiple times (default is at most once)

# Other Unix Commands
* `grep` regular expression matching
* `sort` - sort each line
* `uniq`  - give only unique responses entries (must be sorted)
* `uniq -c` -  same as above but also count the number of each
* `wc -l`  - count the number of lines

# Compute Halstead
* Run the provided *halstead.sh*: `halstead source output-file`
	* Name the output file *tokens.txt*
* Use `uniq`, `wc`, etc., as needed to compute [Halstead]'s Length, Vocabulary, Estimated length, and Purity Ratio
	* Commit and push the output-file (i.e., *tokens.txt*) to GitHub
	* Answer Halstead metrics in Canvas 

# Some Tips
* Since in alphabetical order, front tokens are all operators except strings
	* Use `grep "'.*'"` to filter out string literals, then look at line the operators end at
* `word_operators.sh` is provided to filter out word token operators

# Completion Requirements
* You have used [good commit messages](https://cbea.ms/git-commit/)
* You have committed incrementally
* You have committed and pushed the output file and answered the Cyclomatic Complexity and Halstead metrics on Canvas
