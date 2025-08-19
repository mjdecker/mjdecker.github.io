---
title: "Basic Statistics"
layout: notes
---

# Basic Statistics
* A means to explaining your data
* Types
	* Descriptive
	* Inferential

# Descriptive Statistics
> Descriptive Statistics are summary statistics that quantitatively describes or summarizes features of a collection of information [Mann 1995]

* Common Statistics:
	* Sample Size
	* Mean, Median, Mode
	* Variance, Standard Deviation
	* Minimum and Maximum

# Inferential Statistics
> Statistical inference is the process of using data analysis to deduce properties of an underlying probability distribution [Upton 2008]

* Used to show that two sample populations (or two treatments) are the same/different population

# Why?
* Because we need to monitor the quality of our beer (stout)
	* [Student's t-test](https://en.wikipedia.org/wiki/Student%27s_t-test#History)

# Considerations
* Parametric vs non-parametric
	* Is it normally distributed (graph is bell-shaped)?
* Paired vs Unpaired
	* Matched pairs of similar units or same measured twice
* 2 vs more samples
* [1 tail vs 2 tail](https://stats.idre.ucla.edu/other/mult-pkg/faq/general/faq-what-are-the-differences-between-one-tailed-and-two-tailed-tests/)

# Parametric Tests
* Student's t-test (or just t-test)
	* Paired or unpaired
	* 2 samples (or one sample)
* ANOVA (Analysis of Variance)
	* Paired or unpaired
	* Generalization of t-test for > 2 samples

# Non-parametric Tests
* Wilcoxon rank-sum test (or Mann–Whitney U)
	* Unpaired
	* 2 sample
* Kruskal–Wallis test 
	* Unpaired
	* &gt; 2 samples
* Wilcoxon signed-rank test
	* Paired
	* 2 sample
* Friedman test
	* Paired
	* &gt; 2 sample

# Stat Decision Chart
![](https://abacus.bates.edu/~ganderso/biology/resources/stats_flow_chart_v2014.pdf)

# Significance
* P-value - numerical result of a test
* Indicates if can reject null-hypothesis [Lawrie 2006]
	* < 0.01 strongly reject
	* < 0.05 reject (typically only used significance level)
	* < 0.10 weakly reject

# [Confusion Matrix](https://en.wikipedia.org/wiki/Confusion_matrix)
* Visualization showing performance of a classification algorithm

||| Actual Class||
|---------|---|---|---|
|||Malware|Non-malware|
|**Predicted**|Malware|TP|FP|
|**Class**|Non-malware|FN|FN|

```
Accuracy = (TP + FN) / (P + N)
Precision = TP / (TP + FP) 
Recall = TP / (TP + FN)
F-measure (Harmonic Mean) = (2 * TP) / (2 * TP + FP + FN)
```

# Stats Software
* [Scipy (Python)](https://www.scipy.org) and [Notes](https://www.scipy-lectures.org)
* [SPSS](https://www.ibm.com/products/spss-statistics)
* [JMP](https://www.jmp.com)
* Microsoft Excel/Numbers

# In-class Demo
* Give me numbers!!!