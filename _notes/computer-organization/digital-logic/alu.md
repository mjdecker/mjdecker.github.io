---
title: "Arithmetic Logic Unit"
layout: notes
---

[ALU]: https://en.wikipedia.org/wiki/Arithmetic_logic_unit


# [ALU]
* A n-bit ALU is formed from connecting n 1-bit ALUs
* Logical operations map directly to their digital logic equivalents
* We use the Truth Tables/Boolean equations to design the digital logic to represent other operations
* We will show this via Add with Carry

# Add with Carry
* 1-bit addition depends on three inputs, the two bits that are added and if there is carry into that operation

# Add with Carry -  Truth Table

|Left-bit|Right-bit|Carry|Sum|Out|
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |  0  |
|  0  |  0  |  1  |  1  |  0  |
|  0  |  1  |  1  |  0  |  1  |
|  0  |  1  |  0  |  1  |  0  |
|  1  |  1  |  0  |  0  |  1  |
|  1  |  1  |  1  |  1  |  1  | 
|  1  |  0  |  1  |  0  |  1  | 
|  1  |  0  |  0  |  1  |  0  | 

* $$S = \overline{L}\,\overline{R}C + \overline{L}R\overline{C} + LRC + L\overline{R}\,\overline{C}$$
* $$O = \overline{L}RC + LR\overline{C} + LRC + L\overline{R}C$$

# Add with Carry - Sum K Map

|C\L|R| 00  | 01  | 11  | 10  |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  1  |  0  |  1  |
|  1  |  1  |  0  |  1  |  0  |

* $$S = \overline{L}\,\overline{R}C + \overline{L}R\overline{C} + LRC + L\overline{R}\,\overline{C}$$

# Simplifying the Sum Equation
* K Map didn't help
* Looking at top row, it is: L XOR R
* An XOR also has the effect of flipping bits. Second row is flip/mirror of top
	* So, $$S =$$ L XOR R XOR C

# Add with Carry - Carry-Out K Map

|O\L|R| 00  | 01  | 11  | 10  |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  1  |  0  |
|  1  |  0  |  1  |  1  |  1  |

* $$O = LR + RC + LC$$
 
# Add with Carry - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/add-with-carry-4601e2b5-93db-4e20-a7a9-51fcc18a6edf/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# Ripple Carry
* Link 1-bit add logic together such that carry from previous 1-bit feeds into next (i.e., *ripples*)
* Carry-in in first-bit and Carry-out in last-bit
	* For example: chaining adders, subtraction

# Ripple Carry - Digital Logic

<div>
<iframe src="https://circuitverse.org/users/479923/projects/ripple-carry-adder-a2040106-2ded-46d1-9281-e0448ad4f431/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# A Simplistic ALU
* A multiplexer can be used for each 1-bit to select between operations
* This forms a 1-bit ALU
* Link n 1-bit ALUs to make a n-bit ALU

# A Simplistic ALU - Digital Logic
<div>
<iframe src="https://circuitverse.org/users/479923/projects/alu-1591e9fe-4f02-417c-9f62-26283ad442d0/simulator/embed?theme=color-blind&display_title=false&clock_time=false&fullscreen=true&zoom_in_out=false" style="border-width:2px; border-style: solid; border-color:;" name="myiframe" id="projectPreview" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" height="500" width="500" allowFullScreen></iframe>
</div>

# Control Unit
* A control unit (CU) is used to select the correct ALU operation
* Other non-ALU ops are also selected via a multiplexer
* A Decoder is used to convert instructions into control signals needed for multiplexe
