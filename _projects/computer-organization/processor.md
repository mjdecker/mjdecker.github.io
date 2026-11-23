---
title: "Project: Processor"
layout: markdown
---

# Project: Processor

## Objective(s)
* Build a 4-bit processor
* Understand and use: multiplexor(s), decoder(s), register-file(s), 1-bit ALU(s), flip-flop(s), RAM, and basic gate(s)

## Overview
* You will take the digital logic we learned in class to build a simple processor
	* 9-bit registers
	* 4 registers 
	* 9-bit PC
	* 

## Instruction Set
* Format:

|      |     |     |     |
|:----:|:----:|:----:|:----:|
|opcode|  dr  |  lr  |  rr  |
|3-bits|2-bits|2-bits|2-bits|

* add   dr lr rr - opcode: 000
	* $$dr = lr + rr$$
* sub   dr lr rr - opcode: 001
	* $$dr = lr - rr$$
* and   dr lr rr - opcode: 010
	* $$dr = lr & rr$$
* or    dr lr rr - opcode: 011
	* $$dr = lr | rr$$
* jump  dr lr rr - opcode: 100
	* $$PC = dr$$, lr and rr are ignored
* load  dr lr rr - opcode: 101
	* $$dr = *lr$$, rr is ignored
* store dr lr rr - opcode: 110
	* $$*lr = dr$$, rr is ignored
* nop   dr lr rr - opcode: 111
	* dl, lr, and rr are ignored

## Exercise Requirements
*

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
