---
title: "Two's Complement"
layout: notes
---

[Sign Magnitude]: https://en.wikipedia.org/wiki/Signed_number_representations#Sign–magnitude
[Ones' Complement]: https://en.wikipedia.org/wiki/Ones'_complement
[Two's Complement]: https://en.wikipedia.org/wiki/Two%27s_complement

[Horner's Rule]: https://en.wikipedia.org/wiki/Horner%27s_method
[William George Horner]: https://en.wikipedia.org/wiki/William_George_Horner

# Using Bits to Represent Integers
* An n-bit representation can represent up to $$2^n$$ different values
	* $$8\text{-}bit = 2^8 = 256$$ different values
	* $$32\text{-}bit = 2^{32} = 4,294,967,296$$ different values
* $$0$$ requires 1 value, leaving, $$2^n - 1$$ values
	* $$8\text{-}bit = 2^8 - 1 = 255$$ different non-zero values
	* $$32\text{-}bit = 2^{32} - 1 = 4,294,967,295$$ different non-zero values

# Unsigned Integer
* Unsigned - non-negative
* How can we use a given n-bits to represent unsigned integers?

# Unsigned Integer
* Unsigned - non-negative
* How can we use a given n-bits to represent unsigned integers?
* Direct mapping - n-bit binary number is the deciminal number it represents
	* $$0b0000\cdots0000 = 0$$
	* $$0b0000\cdots1010 = 10$$
	* $$0b1111\cdots1111 = 2^n-1 = max\,unsigned\, integer$$

# Signed Integer
* Signed - positive, negative, and zero
* How might we represent signed integers?

# Signed Integer
* Signed - positive, negative, and zero
* How might we represent signed integers?
	* [Sign Magnitude] - use a bit to indicate $$+$$ and $$-$$
	* [Ones' Complement]/[Two's Complement] - define a relationship between corresponding positive and negative integers
* Positive integer is unsigned binary representation of a number
	* Integer must be $$<= 2^{n-1} - 1$$

# [Sign Magnitude]
* n-th bit is sign-bit
	* 0 - positive
	* 1 - negative
* 0 to ($$n-1$$)th bit is magnitude
* Can represent $$2^{n-1}$$ non-negative integers (including $$0$$)
* Can represent $$2^{n-1}$$ negative integers (including $$-0$$)

# [Sign Magnitude] - 8-bit Examples

|     integer| 7 (sign-bit)|  6|  5|  4|  3|  2|  1|  0|
|--:         |--:          |--:|--:|--:|--:|--:|--:|--:|
|    $$   0$$|            0|  0|  0|  0|  0|  0|  0|  0|
|    $$  -0$$|            1|  0|  0|  0|  0|  0|  0|  0|
|    $$ +42$$|            0|  0|  1|  0|  1|  0|  1|  0|
|    $$ -42$$|            1|  0|  1|  0|  1|  0|  1|  0|
|    $$+127$$|            0|  1|  1|  1|  1|  1|  1|  1|
|    $$-127$$|            1|  1|  1|  1|  1|  1|  1|  1|

# Issues with [Sign Magnitude]
* Two ways to represent $$0$$ ($$0$$ and $$-0$$)
* Addition and subtraction require different handling depending on sign-bit
* Comparison (i.e., *<*, *>*) requires inspecting the sign-bit
* Some early binary computers used this
* Used in floating-point numbers (i.e., `float`/`double`)

# [Ones' Complement]
* Corresponding integers are inverses of each other
	* If nth-bit is 1 in positive, nth-bit is 0 in negative
	* If nth-bit is 0 in positive, nth-bit is 1 in negative
* Adding positive and corresponding negative results in *all 1s*
* Equivalently, subtracting an n-bit number from *all 1s* results in the corresponding integer (i.e., its complement)
* Note: nth bit is still a sign-bit
* Can represent $$2^{n-1}$$ non-negative integers (including $$0$$)
* Can represent $$2^{n-1}$$ negative integers (including $$-0$$)

# [Ones' Complement] - 8-bit Example

|     integer| 7 |  6|  5|  4|  3|  2|  1|  0|
|--:         |--:|--:|--:|--:|--:|--:|--:|--:|
|      $$42$$|  0|  0|  1|  0|  1|  0|  1|  0|
|     $$-42$$|  1|  1|  0|  1|  0|  1|  0|  1|
|$$42 + -42$$|  1|  1|  1|  1|  1|  1|  1|  1|

# [Ones' Complement] - 0 and Max Examples

|       integer| 7 |  6|  5|  4|  3|  2|  1|  0|
|--:           |--:|--:|--:|--:|--:|--:|--:|--:|
|         $$0$$|  0|  0|  0|  0|  0|  0|  0|  0|
|        $$-0$$|  1|  1|  1|  1|  1|  1|  1|  1|
|    $$0 + -0$$|  1|  1|  1|  1|  1|  1|  1|  1|

|       integer| 7 |  6|  5|  4|  3|  2|  1|  0|
|--:           |--:|--:|--:|--:|--:|--:|--:|--:|
|       $$127$$|  0|  1|  1|  1|  1|  1|  1|  1|
|      $$-127$$|  1|  0|  0|  0|  0|  0|  0|  0|
|$$127 + -127$$|  1|  1|  1|  1|  1|  1|  1|  1|

# Problems with [Ones' Complement]
* Two ways to represent $$0$$ ($$0$$ and $$-0$$)
* Addition/subtraction requires *end-around-carry*
	* Additional add of carry out of n-th bit

# End-Around-Carry Example

|               integer|carry| 7 |  6|  5|  4|  3|  2|  1|  0|
|--:                   |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|                $$-1$$|     |  1|  1|  1|  1|  1|  1|  1|  0|
|                 $$2$$|     |  0|  0|  0|  0|  0|  0|  1|  0|
|       $$-1 + 2 = 0?$$|    1|  0|  0|  0|  0|  0|  0|  0|  0|
|             Add carry|     |  0|  0|  0|  0|  0|  0|  0|  1|
|$$-1 + 2 + carry = 1$$|     |  0|  0|  0|  0|  0|  0|  0|  1|

# [Two's Complement]
* Most common method for representing signed integers
* Corresponding integers add up to 0 with a carry out of nth-bit
* Note: nth bit is still a sign-bit
* $$2^{n-1} - 1$$ positive integers
* $$0$$
* $$2^{n-1}$$ negative integers

# [Two's Complement] - 8-bit

|     integer|carry| 7 |  6|  5|  4|  3|  2|  1|  0|
|--:         |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|       carry|    1|  1|  1|  1|  1|  1|  1|  0|  0|
|      $$42$$|     |  0|  0|  1|  0|  1|  0|  1|  0|
|     $$-42$$|     |  1|  1|  0|  1|  0|  1|  1|  0|
|$$42 + -42$$|    1|  0|  0|  0|  0|  0|  0|  0|  0|

# [Two's Complement] - Deriving Corresponding Integer
* Corresponding integers are: ones' complement + 1 (ignore overflow)

# [Two's Complement] - Example 42 (8-bit)

|                   integer|carry|  7|  6|  5|  4|  3|  2|  1|  0|
|--:                       |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|                    $$42$$|     |  0|  0|  1|  0|  1|  0|  1|  0|
|          ones' complement|     |  1|  1|  0|  1|  0|  1|  0|  1|
|$$one's\,complement  + 1$$|    0|  1|  1|  0|  1|  0|  1|  1|  0|
|                   $$-42$$|     |  1|  1|  0|  1|  0|  1|  1|  0|

# [Two's Complement] - Example 127 (8-bit)

|                   integer|carry|  7|  6|  5|  4|  3|  2|  1|  0|
|--:                       |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|                   $$127$$|     |  0|  1|  1|  1|  1|  1|  1|  1|
|          ones' complement|     |  1|  0|  0|  0|  0|  0|  0|  0|
|$$one's\,complement  + 1$$|    0|  1|  0|  0|  0|  0|  0|  0|  1|
|                  $$-127$$|     |  1|  0|  0|  0|  0|  0|  0|  1|

# [Two's Complement] - Example 0 (8-bit)
$$0$$ has one representation

|                   integer|carry|  7|  6|  5|  4|  3|  2|  1|  0|
|--:                       |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|                     $$0$$|     |  0|  0|  0|  0|  0|  0|  0|  0|
|          ones' complement|     |  1|  1|  1|  1|  1|  1|  1|  1|
|$$one's\,complement  + 1$$|    1|  0|  0|  0|  0|  0|  0|  0|  0|
|                     $$0$$|     |  0|  0|  0|  0|  0|  0|  0|  0|

# [Two's Complement] - Example -128 (8-bit)
$$-128$$ has no corresponding positive

|                   integer|carry|  7|  6|  5|  4|  3|  2|  1|  0|
|--:                       |--:  |--:|--:|--:|--:|--:|--:|--:|--:|
|                  $$-128$$|     |  1|  0|  0|  0|  0|  0|  0|  0|
|          ones' complement|     |  0|  1|  1|  1|  1|  1|  1|  1|
|$$one's\,complement  + 1$$|    0|  1|  0|  0|  0|  0|  0|  0|  0|
|                  $$-128$$|     |  1|  0|  0|  0|  0|  0|  0|  0|

# [Two's Complement] - Advantages
* One representation of $$0$$
* Can represent an additional negative integer ($$-2^{n-1}$$)
* Addition/subtraction can ignore sign-bit and rely on overflow
* Comparison can be performed via subtraction and if result is positive/negative

# [Two's Complement] - Ending Remark for Curious Individuals
* One additional way to convert a positive integer to corresponding negative
* Flip all bits left of the right-most 1
