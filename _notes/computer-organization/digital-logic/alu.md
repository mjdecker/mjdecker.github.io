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

|Left-bit|Right-bit|Carry|Result|
|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |
|  0  |  0  |  1  |  1  |
|  0  |  1  |  1  |  0  |
|  0  |  1  |  0  |  1  |
|  1  |  1  |  0  |  0  |
|  1  |  1  |  1  |  1  |
|  1  |  0  |  1  |  0  |
|  1  |  0  |  0  |  1  |

* $$Y = \overline{L}\overline{R}C + \overline{L}R\overline{C} + LRC + L\overline{R}\overline{C}$$

# Add with Carry - K Map

|C\L|R| 00  | 01  | 11  | 10  |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  1  |  0  |  1  |
|  1  |  1  |  0  |  1  |  0  |

* $$Y = \overline{L}\overline{R}C + \overline{L}R\overline{C} + LRC + L\overline{R}\overline{C}$$
 
