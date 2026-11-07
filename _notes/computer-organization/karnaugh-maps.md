---
title: "Karnaugh Maps"
layout: notes
---

[Karnaugh Map]: https://en.wikipedia.org/wiki/Karnaugh_map
[Gray Code]: https://en.wikipedia.org/wiki/Gray_code

# [Karnaugh Map]
* Graphical method for simplifying Boolean equations
* K-Map for short
* Introduced by Maurice Karnaugh, a telecommunications engineer at Bell Labs, in 1953

# K-Map Explanation
* Simplifying Boolean equations involves combining terms
* Take: $$Y = AB + A\overline{B}$$
	* If $$A == 0$$ then $$Y = 0$$
	* If $$A == 1$$ then $$Y = 1$$
	* So, $$Y = AB + A\overline{B} = A$$
* K-Maps put these combinable terms next to each other and thus easier to spot
* First, though

# [Gray Code]
* An ordering of a binary system such that each successive value only changes one bit (binary digit)
* Named after Frank Gray
* AKA Reflected Binary Code (RBC), also known as Reflected Binary (RB)

# A 3-bit Gray Code

|Row #|  A  |  B  |  C  |
|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |
|  1  |  0  |  0  |  1  |
|  2  |  0  |  1  |  1  |
|  3  |  0  |  1  |  0  |
|  4  |  1  |  1  |  0  |
|  5  |  1  |  1  |  1  |
|  6  |  1  |  0  |  1  |
|  7  |  1  |  0  |  0  |


# Adding a Result to the 3-bit Gray Code

|Row #|  A  |  B  |  C  |  Y  |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |  1  |
|  1  |  0  |  0  |  1  |  1  |
|  2  |  0  |  1  |  1  |  0  |
|  3  |  0  |  1  |  0  |  0  |
|  4  |  1  |  1  |  0  |  0  |
|  5  |  1  |  1  |  1  |  0  |
|  6  |  1  |  0  |  1  |  0  |
|  7  |  1  |  0  |  0  |  0  |

# Gray Code to K-Map

|Row #|  A  |  B  |  C  |  Y  |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  0  |  0  |  0  |  1  |
|  1  |  0  |  0  |  1  |  1  |
|  2  |  0  |  1  |  1  |  0  |
|  3  |  0  |  1  |  0  |  0  |
|  4  |  1  |  1  |  0  |  0  |
|  5  |  1  |  1  |  1  |  0  |
|  6  |  1  |  0  |  1  |  0  |
|  7  |  1  |  0  |  0  |  0  |

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  1  |  0  |  0  |  0  |
|  1  |  1  |  0  |  0  |  0  |


# Logic Convention  ![The More You Know]
* Positive logic convention: $$highVoltage = 1$$