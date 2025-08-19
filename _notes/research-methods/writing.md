---
title: "Technical Writing"
layout: notes
---

# Contents of Technical Paper
* Title, Authors(s)
* Abstract
* Introduction
* Related Work (may be near end)
* Body - approach, experiment, results, discussion, threats to validity
* Conclusion - summary, future work
* Acknowledgements
* References
* Appendix

# Title
* First thing people see
* People will decide to read/not read and relevancy based on title
* A good title accurately and succinctly captures paper's contents

# Abstract
* A stand-alone statement that briefly conveys the essential information of a paper or talk
* Presents
	* Objectives
	* Methods
	* Results
	* Conclusions of research project

# Style of an Abstract
* Concise and clear
* Sentence structure should be very direct and not same as paper
	* Similar to journalist writing a story about your paper
* Self-contained
	* Second point a reader will decide to continue reading your paper and its relevancy
	* Full paper may not be made available

# Example Abstract
> An approach to automate adaptive maintenance changes on large-scale software systems is presented. This approach uses lightweight parsing and lightweight on-the-fly static analysis to support transformations that make corrections to source code in response to adaptive maintenance changes, such as platform changes. srcML, an XML source code representation, is used and transformations can be performed using either XSLT or LINQ. A number of specific adaptive changes are presented, based on recent adaptive maintenance needs from products at ABB Inc. The transformations are described in detail and then demonstrated on a number of examples from the production systems. The results are compared with manual adaptive changes that were done by professional developers. The approach performed better than the manual changes, as it successfully transformed instances missed by the developers while not missing any instances itself. The work demonstrates that this lightweight approach is both efficient and accurate with an overall cost savings in development time and effort.

# How to Write an Abstract
* Highlight the main objective and conclusions
* Highlight results from discussion sections
* Organize so that first sentence describes the new information in paper rather than general topic
* Abstract only contains essential information

# What to Avoid in Abstract
* General motivation
* Equations and math.  Exception: your paper proposes E = mc<sup>2</sup>
* Abstract must **not** contain references.  It is acceptable, but not common, to identify work by author
* Avoid "in this paper", what else could the abstract be about?
	* Possible exception when used to contrast other work

# What to Include in Abstract
* Use terms that identify your work.  Search engines will use this information
	* Name of any protocol or system developed 
	* General area
* Interest the reader - entice them to read your full paper (and maybe cite you later)

# When to Write an Abstract/Title
* ?

# When to Write an Abstract/title
* Abstract and title is generally the last part you write

# Introduction
* Tells the reader what the paper is about and what is in the paper
* A reader will look her first before going on to the details of the paper

# Sample Introduction Outline
* Introduce your problem area
* Motivate the need for a solution
* Describe what you are going to do
* Highlight the research questions and contributions
* Give a road map for the rest of the paper

# Related Work
* Literature review of the previous work related to your topic
* Compares your work to what has previously been done
* Highlights what your paper contributes beyond published work
* Either goes at beginning of paper or near the end
* At beginning, can be used to motivate your approach/research

# Body
* Put your research work here
* Be clear, detailed as necessary (but not overly verbose), and well organized
	* Describe approach
	* Evaluate approach
	* Discussion & Threats to Validity
* Make sure you define uncommon and specific terms early on
	* Make sure you are not overloading terms
* A process: write -> wait -> read -> rewrite
* Get feedback from someone less familiar with the work

# Conclusion
* Recap what was in the paper
* Highlight contributions
* Describe future directions for the work

# Acknowledgements
* Acknowledge people who contributed in some way but were not authors
	* For example, proof read the paper
* Often, see funding agencies acknowledged here

# References
* Use a citation manager, it generates it for you

# Appendix
* Use sparingly
* Often large diagrams or other supporting material

# Types of Papers
* Journal - [Example1](https://www.cs.kent.edu/~jmaletic/cs63902/Papers/Kraft11.pdf) & [Example2](https://onlinelibrary.wiley.com/doi/pdf/10.1002/smr.2226)
* Conference
	* [Full Research Track](https://conf.researchr.org/track/icsme-2023/icsme-2023-papers?) - [Example1](https://www.computer.org/csdl/pds/api/csdl/proceedings/download-article/1sEXofTmB4k/pdf), [Example2](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.187.2678&rep=rep1&type=pdf), & [Example3](https://dig.cs.illinois.edu/papers/codoban-icsme15.pdf)
	* Short Paper Track
	* [Early Research Achievement (ERA)](https://arxiv.org/abs/2103.13614) - [Example](https://emaiannone.github.io/download/papers/c2.pdf)
	* [NIER](https://icsme2021.github.io/cfp/NIERTrack.html) - [Example](https://cs.drew.edu/~mhassan/papers/ICSME18.pdf)
	* [Tool Track](https://icsme2021.github.io/cfp/Tool-Demo-Track.html) - [Example1](https://www.computer.org/csdl/proceedings/scam/2011/0932/00/06065176.pdf), [Example2](https://www.computer.org/csdl/proceedings/icsm/2013/4981/00/4981a516.pdf), & [Example3](https://www.cs.kent.edu/~jmaletic/papers/ICSME16-UML.pdf)
	* [Industry Track](https://icsme2021.github.io/cfp/IndustryTrack.html) - [Example](https://delivery.acm.org/10.1145/3200000/3196354/p370-delozier.pdf?ip=129.1.64.161&id=3196354&acc=ACTIVE%20SERVICE&key=1D8E1CA5B8D7D8DD%2EF38DDEB4673866AA%2E4D4702B0C3E38B35%2E4D4702B0C3E38B35&__acm__=1557334019_4329b5877eb6f8ddb0be338e60ebcd04)
	* Other: [Posters](https://conf.researchr.org/track/icse-2021/icse-2021-Posters), [Artifacts](https://conf.researchr.org/track/icse-2021/icse-2021-Artifact-Evaluation), [Journal First](https://conf.researchr.org/track/icse-2021/icse-2021-Journal-First-Papers?), [Doctoral Symposium](https://icsme2021.github.io/cfp/DoctoralSymposium.html), & [Engineering Track](https://www.ieee-scam.org/2020/#engcall)

# In-Class
* Separate into five groups
* Read a short 2-page [paper](../in-class/paper.pdf)
* Write an abstract for the paper
* We will go over them at the end of class