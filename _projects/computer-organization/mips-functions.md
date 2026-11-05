---
title: "Project: MIPS Functions"
layout: markdown
---

# Project: MIPS Functions

## Objective(s)
* Write MIPS assembly for MARS simulator to implement a function
* Learn how decimal (i.e., floating point numbers) are represented

## Overview
* You will use MIPS for (MARS simulator) to accomplish implement a function, while also learning more about the how decimal numbers are represented

## Background
* [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) defines the various formats to represent floating-point-numbers (e.g., floats and doubles)
* We will investigate these using [floats](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) or the single-precision floating point format
* We will focus on converting the numbers in the IEEE 754 format to a decimal number. The following wiki how shows how to go from a decimal number to IEEE 754: [wikihow](https://www.wikihow.com/Convert-a-Number-from-Decimal-to-IEEE-754-Floating-Point-Representation)
* A single floating point number is a 32-bit number with the following format:

|  31    | 30-23  |        22-0           |
|:------:|:------:|:---------------------:|
|sign-bit|exponent|fraction (aka mantissa)|

* Formula: $$(-1)^{sign\text{-}bit} * 2^{(exponent - 127)} * (1 + \sum_{i=1}^{23}b_{23-i}*2^{-i})$$
* The 32-bits are broken down into the sign-bit, exponent, and the fraction/mantissa. 
* Fraction: $$1 + \sum_{i=1}^{23}b_{23-i}*2^{-i}$$
	* Represents a number in the range of: ($$1 <= mantissa < 2$$)
	* Each set bit adds a power of $$\frac{1}{2}$$ ($$22^{nd}$$-bit is $$\frac{1}{2}$$ and $$21^{st}$$-bit is $$\frac{1}{4}$$)
* Exponent: $$2^{(exponent - 127)}$$
	* Multiplier applied to the fraction
	* Exponent is the unsigned binary representation of a number
	* E.g., $$Exponent = 0b01111111 = 127$$ so $$2^{127 - 127} = 1$$
* Sign-bit: $$(-1)^{sign\text{-}bit}$$
	* 1 if negative, 0 if non-negative
* Example: 
	* sign-bit $$= 1$$
	* Exponent $$= 0b10000000 = 128 = 2^{128 - 127} = 2$$
	* Fraction $$= 110...0 = \frac{1}{2} + \frac{1}{4} = 1.75$$ 
	* Result $$= -1 * 2 * 1.75 = -3.5$$


## Exercise Requirements
* Write MIPS assembly for the MARS simulator to do each of the task below. A file is provided for you for each task with the task also described in the comments of that file. Implement that task only in the file belonging to that task.

1. In the file <code>to_lower.asm</code>, convert all characters at a static location to lowercase. Input will be a null-terminated string in the data section with label STRING.

## Submission Requirements
* Work is submitted to the supplied Git repository. The GitHub Classroom link is: see Canvas
* DON'T commit changes to the <code>.data</code> section.

## Grading Criteria
* You have used [good commit messages](https://cbea.ms/git-commit/)
* You have committed incrementally
* You have committed and pushed the completed exercise
* Followed the class [coding standards](https://mdecker.net/standards/coding-standards.html)
* You have implementd the tasks correctly in MIPS for MARS as described
* You have not commited changes to the <code>.data</code> section
