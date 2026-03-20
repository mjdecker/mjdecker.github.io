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
* Will approximate the following using a combination of built-in srcML utilities and UNIX command line tools
	* Cyclomatic Complexity
	* Halstead

# Cyclomatic Complexity
* Will simplify by counting all the following: if-statements, while-statements, for-statements, and case-statements
* We will use XPath to count each (continue for explanation)

# [XPath]
* [XPath] or XML Path Language is a language for querying (and as part of something later) to transform XML documents
* An XPath is specifies a path within an XML document with a syntax similar to a UNIX file path 
* Basics
	* Each step in the path is an XML element
	* `/` separates a parent/child
	* `//` means any descendant
* A query in XPath is an XPath and what is returned is what elements in the document that match that XPath

# Example XPath
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=basic.xsl"></script>

1. Match the root element `parent`
2. Match all elements named `child`, which are a child of `root`
3. Match all `descendant` elements which are descendents of `child`, which it itself is a child of `parent`

# srcML XPath
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=xpath.xsl"></script>

* Find all if-statements within a function
* `unit` is the root of srcML document (i.e., a computational unit)
* `src:` is needed as in XPath because srcML elements belong to a namespace  (just accept it, it makes life easier)

# Finding all if-statements
<script src="https://gist.github.com/mjdecker/718bbd573ba09674115120abe0f8ee94.js?file=xpath.xsl"></script>

* This command will find all if-statements
* Try wrapping the XPath with count: `"count(xpath-goes-here)"`
* Adapt this for: `src:for`, `src:while`, and `src:case`
* Calculate Cyclomatic Complexity for the provided XML file and report on Canvas
* Compare to running on `cyclomatic.sh` (`bash cyclomatic.sh xml-filename`

# Completion Requirements
* You have used [good commit messages](https://cbea.ms/git-commit/)
* You have committed incrementally
* You have committed and pushed the completed and correct file `my_name_is.cpp` to GitHub
