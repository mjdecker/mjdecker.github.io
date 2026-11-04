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

|  31     |  30-23  |        22-0           |
|:-------:|:-------:|:---------------------:|
| sign-bit| exponent|fraction (aka mantissa)|

* Formula: $$(-1)^{sign\text{-}bit} * 2^{(exponent - 127)} * (1 + \sum_{i=1}^{23}b_{22-i}*2^{-i})$$
* Bits 0-22 represent the fractional part of the representation.
* 
* The right-most bit (31<sup>st</sup> bit) is a sign-bit
* 

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
