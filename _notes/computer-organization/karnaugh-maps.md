---
title: "Karnaugh Maps"
layout: notes
---

[Karnaugh Map]: https://en.wikipedia.org/wiki/Karnaugh_map
[Gray Code]: https://en.wikipedia.org/wiki/Gray_code

# Laws of Boolean Algebra
|                  Law        |   Equation|Equivalency|
|         :------------------:|   :------:|:---------:|
|         Associativity of AND|    A(BC)  |   (AB)C   |
|          Associativity of OR|A + (B + C)|(A + B) + C|
|         Commutativity of AND|    AB     |     BA    |
|         Commutativity of OR |   A + B   |   B + A   |
|Distributivity of AND over OR|  A(B + C) | AB + AC   |
|             Identify for AND|    1A     |     A     |
|              Identify for OR|   0 + A   |     A     |
|          Annihilator for AND|    0A     |     0     |

# Laws of Boolean Algebra - Non Math
|                  Law        |   Equation|   Equivalency|
|         :------------------:|   :------:|   :---------:|
|           Annihilator for OR|    1 + A  |       1      |
|           Idempotence of AND|    AA     |       A      |
|           Idempotence of OR |   A + A   |       A      |
|               Absorption AND|  A(A + B) |       A      |
|               Absorption OR |  A + (AB) |       A      |
|Distributivity of OR over AND|  A + (BC) |(A + B)(A + C)|

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

# K-Map Property

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  1  |  0  |  0  |  0  |
|  1  |  1  |  0  |  0  |  0  |

* Each cell up/down or left/right differs by one bit
* This property also applies when you wrap it around (last column -> first column)

# K-Map & Minterms

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |  1  |  0  |  0  |  0  |
|  1  |  1  |  0  |  0  |  0  |

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |$$\mathbf{\overline{A}\,\overline{B}\,\overline{C}}$$|$$\overline{A}B\overline{C}$$|$$AB\overline{C}$$|$$A\overline{B}\,\overline{C}$$|
|  1  |$$\mathbf{\overline{A}\,\overline{B}C}$$|$$\overline{A}BC$$|$$ABC$$|$$A\overline{B}C$$|

# Do They Combine?

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |$$\mathbf{\overline{A}\,\overline{B}\,\overline{C}}$$|$$\overline{A}B\overline{C}$$|$$AB\overline{C}$$|$$A\overline{B}\,\overline{C}$$|
|  1  |$$\mathbf{\overline{A}\,\overline{B}C}$$|$$\overline{A}BC$$|$$ABC$$|$$A\overline{B}C$$|


# Do They Combine? Yes

| C\AB|  00 |  01 |  11 |  10 |
|:---:|:---:|:---:|:---:|:---:|
|  0  |$$\mathbf{\overline{A}\,\overline{B}\,\overline{C}}$$|$$\overline{A}B\overline{C}$$|$$AB\overline{C}$$|$$A\overline{B}\,\overline{C}$$|
|  1  |$$\mathbf{\overline{A}\,\overline{B}C}$$|$$\overline{A}BC$$|$$ABC$$|$$A\overline{B}C$$|

* First column is true in all cases, C does not matter if it is 0 or 1
* $$Y = \overline{A}\,\overline{B}C + \overline{A}\,\overline{B}\,\overline{C} = \overline{A}\,\overline{B}(C + \overline{C}) = \overline{A}\,\overline{B}$$


# Logic Convention  ![The More You Know]
* Positive logic convention: $$highVoltage = 1$$