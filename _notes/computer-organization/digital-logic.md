---
title: "Introduction to Digital Logic"
layout: notes
---

[Logic Gate]: https://en.wikipedia.org/wiki/Logic_gate
[NOT Gate]: https://en.wikipedia.org/wiki/Inverter_(logic_gate)
[logical negation]: https://en.wikipedia.org/wiki/Negation
[AND Gate]: https://en.wikipedia.org/wiki/AND_gate
[logical conjunction]: https://en.wikipedia.org/wiki/Logical_conjunction
[OR Gate]: https://en.wikipedia.org/wiki/OR_gate
[logical disjunction]: https://en.wikipedia.org/wiki/Logical_disjunction

[NOR Gate]: https://en.wikipedia.org/wiki/NOR_gate
[NAND Gate]: https://en.wikipedia.org/wiki/NAND_gate

[Boolean Equation]: https://en.wikipedia.org/wiki/Boolean_algebra
[De Morgan's Laws]: https://en.wikipedia.org/wiki/De_Morgan%27s_laws
[Sum of Products]: https://en.wikipedia.org/wiki/Canonical_normal_form

[The More You Know]: /images/common/The_More_You_Know.png

# [Logic Gate]
* A simple digital circuit that takes one or more binary inputs and produce a binary output
* The building blocks of a computer
* Fundamental Gates
	* NOT (AKA inverter) - [logical negation] - outputs a bit opposite of input
	* AND - [logical conjunction] (∧) - outputs 1 if all input bits are 1
	* OR - [logical disjunction] (∨) - outputs 1 if any input bit is 1

# Logic Convention  ![The More You Know]
* Positive logic convention: $$highVoltage = 1$$
* Negative logic convention:  $$lowVoltage = 1$$

# [NOT Gate]

| p   | NOT p  |
|:---:|:---:|
|  1  |  0  |
|  0  |  1  |

<div>
<iframe src="https://circuitverse.org/users/479923/projects/not-gate-66a046a6-3edf-48d7-b415-e082e9decf7e/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [AND Gate]

| p   |  q  |p AND q|
|:---:|:---:|:---:|
|  1  |  1  |  1  |
|  1  |  0  |  0  |
|  0  |  1  |  0  |
|  0  |  0  |  0  |

<div>
<iframe src="https://circuitverse.org/users/479923/projects/and-gate-a60d5baa-11e6-4f39-af09-a9e361fe0b5f/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:1px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [OR Gate]

| p   |  q  |p OR q|
|:---:|:---:|:----:|
|  1  |  1  |   1  |
|  1  |  0  |   1  |
|  0  |  1  |   1  |
|  0  |  0  |   0  |


<div>
<iframe src="https://circuitverse.org/users/479923/projects/or-gate-2e2c3094-cb19-4063-946b-2f70fc68c48c/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# Types of Digital Circuits
* Combinational - depend only on current input values (e.g., logic gates)
* Sequential - depends on both current and previous values
* Combinational are *memoryless*, while sequential have a *memory*

# Combinational Composition
* Use smaller combinational circuits to build larger ones
	* All are combinational
	* Either input circuits or connect to one output
	* No cycles
* Use Truth Tables or Boolean equations as a combinational circuit specification

# [Boolean Equation]
* NOT A $$= \neg A= \overline{A}$$
* A AND B $$= A ∧ B = AB$$
* A OR B $$= A ∨ B = A + B$$
* Precedence:
	1. NOT
	2. AND 
	3. OR

# Boolean Equation Example
* $$A + BC = \,?$$
* $$\overline{A}B + BC\overline{D} = \,?$$

# Boolean Equation Example
* Note: Variables replaced with lowercase for clarity
* $$A + BC = a\, OR\, (b\, AND\, c)$$
* $$\overline{A}B+ BC\overline{D} = ((NOT\, a)\, AND\, b)\, OR\, (b\, AND\, c\, AND\, (NOT\, d))$$

# [De Morgan's Laws]
* $$\overline{AB} = \overline{A} + \overline{B}$$
* $$\overline{A + B} = \overline{A}\,\overline{B}$$

# [Sum of Products]
* A truth table for a Boolean Equation has $$2^N$$ rows
* Digital logic can be represented as the sum of minterms where the result of the row is $$1$$/TRUE
	* $$minterm = $$ product of row terms 
	* $$Product = AND$$
	* $$Sum = OR$$

# Sum of Products Example

| A   |  B  |Y|minterm|
|:---:|:---:|:---:|:---:|
|  1   |   1   |   0  |$$AB$$|
|  1   |   0  |   0  |$$A\overline{B}$$|
|  0  |   1   |   0  |$$\overline{A}B$$|
|  0  |   0   |   1  |$$\overline{A}\overline{B}$$|

* $$Y = \overline{A + B}$$

# Sum of Products Example Circuit

<div>
<iframe src="https://circuitverse.org/users/479923/projects/sum-of-products-nor/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>


# Alternative Logic Comparison  ![The More You Know]

<div>
<iframe src="https://circuitverse.org/users/479923/projects/sum-of-products-nor/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>

<iframe src="https://circuitverse.org/users/479923/projects/combinational-nor-gate/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [NOR Gate]  ![The More You Know]

<div>
<iframe src="https://circuitverse.org/users/479923/projects/nor-gate-277af15f-b5c2-47b0-a814-047e3e938922/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# [NAND Gate]  ![The More You Know]

<div>
<iframe src="https://circuitverse.org/users/479923/projects/nand-gate-ceaf01ea-af6f-4a00-8362-57fddd5debf8/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# Reduced Set of Basic Gates ![The More You Know]
* You can build any digital logic circuit with just NAND and NOR

# Product of Sums
* Digital logic can be represented as the product of maxterms where the result of the row is $$0$$/FALSE
	* $$maxterm = $$ sum of row terms 
	* $$Product = AND$$
	* $$Sum = OR$$
* Sum of Products is better when $$1$$/TRUE are fewer
* Product of Sums is better when  $$0$$/FALSE are fewer

# Truth Table to Logic Example

| A   |   B  |   C  |   Y  |
|:---:|:---:|:---:|:---:|
|  1   |   1   |   1   |   0  |
|  1   |   1   |   0  |   0  |
|  1   |   0  |   1   |   1  |
|  1   |   0  |   0  |   1  |
|  0  |    1  |   1   |   0  |
|  0   |   1  |   0  |   0  |
|  0   |   0  |   1  |   0  |
|  0   |   0  |   0  |   1  |

# Truth Table to Logic Example

| A   |   B  |   C  |   Y  |
|:---:|:---:|:---:|:---:|
|  1   |   1   |   1   |   0  |
|  1   |   1   |   0  |   0  |
|  1   |   0  |   1   |   1  |
|  1   |   0  |   0  |   1  |
|  0  |    1  |   1   |   0  |
|  0   |   1  |   0  |   0  |
|  0   |   0  |   1  |   0  |
|  0   |   0  |   0  |   1  |

* $$Y = \overline{A}\overline{B}\overline{C} + A\overline{B}\overline{C} + A\overline{B}C$$

# Truth Table to Logic Example Diagram

<div>
<iframe src="https://circuitverse.org/users/479923/projects/another-example/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>