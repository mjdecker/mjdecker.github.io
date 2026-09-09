---
title: "Two's Complement"
layout: notes
---

[Sign Magnitude]: https://en.wikipedia.org/wiki/Signed_number_representations#Sign–magnitude
[Ones' Complement]: https://en.wikipedia.org/wiki/Ones'_complement
[Two's Complement]: https://en.wikipedia.org/wiki/Two%27s_complement

[Horner's Rule]: https://en.wikipedia.org/wiki/Horner%27s_method
[William George Horner]: https://en.wikipedia.org/wiki/William_George_Horner

# Using Bits to Represent \#s
* An n-bit representation can represent up to $$2^n$$ different numbers
	* $$8-bit = 2^8 = 256$$ different values
	* $$32-bit = 2^32 = 4,294,967,296$$ different values
* Note: $$0$$ requires 1 value, which, for a given n-bit number, leaves $$2^n - 1$$ values
	* $$8-bit = 2^8 - 1 = 255$$ different non-zero values
	* $$32-bit = 2^32 - 1 = 4,294,967,295$$ different non-zero values

# Unsigned \#
* Unsigned - non-negative
* How can we use a n-bit number to represent an unsigned number?

# Unsigned \#
* Unsigned - non-negative
* How can we use an n-bit number to represent an unsigned number?
* Map values directly to the decimal number the n-bit number represents
	* $$0b0000\cdots0000 = 0$$
	* $$0b0000\cdots1010 = 10$$
	* $$0b1111\cdots1111 = 2^n-1 = max\,unsigned\, \#$$

# Signed \#
* Signed - positive, negative, and zero
* How might we represent signed numbers?

# Signed \#
* Signed - positive, negative, and zero
* How might we represent signed numbers?
	* [Sign Magnitude] - use a bit to indicate $$+$$ and $$-$$
	* [Ones' Complement]/[Two's Complement] - define a relationship between the positive and negative number

# [Sign Magnitude] 
* n-th bit is sign-bit
	* 0 - positive
	* 1 - negative

|number      | 7 (sign-bit)|  6|  5|  4|  3|  2|  1|  0|
|--:         |--:          |--:|--:|--:|--:|--:|--:|--:|
|          +0|            0|  0|  0|  0|  0|  0|  0|  0|
|          -0|            1|  0|  0|  0|  0|  0|  0|  0|
|         +42|            0|  0|  1|  0|  1|  0|  1|  0|
|         -42|            1|  0|  1|  0|  1|  0|  1|  0|
|        +127|            0|  1|  1|  1|  1|  0|  1|  1|
|        -127|            1|  1|  1|  1|  1|  0|  1|  1|

