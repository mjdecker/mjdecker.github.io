---
title: "Numeral Systems"
layout: notes
---

[Numeral System]: https://en.wikipedia.org/wiki/Numeral_system
[Roman Numerals]: https://en.wikipedia.org/wiki/Roman_numerals
[Arabic Numerals]: https://en.wikipedia.org/wiki/Arabic_numerals

# [Numeral System]
* A writing system for expressing numbers without words, equivalently
* A mathematical notation for representing numbers of a given set in a consistent manner using:
	* Digits: *0, 1, 2, etc.*
	* or Other Symbols: *A, B, C, etc.*
* Examples?

# [Numeral System]
* A writing system for expressing numbers without words, equivalently
* A mathematical notation for representing numbers of a given set in a consistent manner using:
	* Digits: *0, 1, 2, etc.*
	* or Other Symbols: *A, B, C, etc.*
* Examples?
	* [Roman Numerals]
	* [Arabic Numerals]
	* Different *base* values: E.g. 10 (decimal), 16 (hexadecimal)

# Numeral Systems and Computing
* Decimal (*base 10*) is the numeral system used for math and daily life (i.e., by humans)
* Binary (*base 2*) is used by computers
* Octal (*base 8*) and Hexadecimal (*base 16*) are often used in computing because:
	* More compact
	* Direct and simple translation to/from binary
	* I.e, are a shorthand for binary

# Denoting a Base
* Can denote a base in two primary ways: with a subscript or a prefix
* Subscript - base is used as a suscript after the number
	* **Base 2:** *0100<sub>2</sub>* or *0100<sub>two</sub>*
	* **Base 10:** *42<sub>10</sub>* or *42<sub>ten</sub>*
* Prefix - certain bases have special prefixes that indicate their use
	* **Base 2:** prefix is *0b*, e.g., *0b0100*
	* **Base 8:** prefix is *0*, e.g., *052*
	* **Base 16:** prefix is *0x*, e.g., *0x2A*

# Binary, Octal, and Hexadecimal Example
* All of the following represent the same number
* **Decimal:** $$42$$
* **Binary:** $$101010$$
* **Octal:** $$52$$
	* Each digit is 3 binary digits: $$5 = 101$$ and $$2 = 010$$
* **Hexadecimal:** $$2A$$
	* Each digit is 4 binary digits: $$2 = 0010$$ and $$A = 1010$$

# Position Notation
* We use a positional notation when writing ***ANY*** number in a numeral system
* For example, $$1024_{10}$$ can be written as:
	* $$1 * 10^3 + 0 * 10^2 + 2 * 10^1 + 4 * 10^0$$
* For any base ***b***, and a set of digits ($$..., a_i, ..., a_2, a_1, a_0$$

|...  |   i|.  ...|  2|   1|     0|
|---:|---:|---:|---:|---:|---:g|
|...|$$d_i*b^i$$|...|$$d_2*b^2$$|$$d_1*b^1$$|$$d_0*b^0$$|

