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

# Symbols in Hexadecimal
* We need 16 symbols to uniquely represent each digit
* What do we do for 10-15?

# Symbols in Hexadecimal
* We need 16 symbols to uniquely represent each digit
* What do we do for 10-15?
	* Use letters (case-insensitive)

|  A  |   B  |  C   |   D   |  E  |  F   |
| --- | --- | --- | --- | --- | --- |
| 10  |  11 |  12  |  13 |  14 |  15  |   


# Denoting a Base
* Can denote a base in two primary ways: with a subscript or a prefix
* Subscript - base is used as a subscript after the number
	* **Base 2:** *0100<sub>2</sub>* or *0100<sub>two</sub>*
	* **Base 10:** *42<sub>10</sub>* or *42<sub>ten</sub>*
* Prefix - certain bases have special prefixes that indicate their use
	* **Base 2:** prefix is *0b*, e.g., *0b0100*
	* **Base 8:** prefix is *0*, e.g., *052*
	* **Base 16:** prefix is *0x*, e.g., *0x2A*
* Default is decimal

# Leading 0s
* binary/octal/hex number are often used to represent something with a fixed size and/or where each position has a purpose
* For example, an RGBA color is $$0xRRGGBBAA$$
* Leading $$0$$s are used when necessary to make sure each component R, G, B, and A are clear
* **Blue:** $$0x0000FFFF$$

# Binary, Octal, and Hexadecimal Example
* All of the following represent the same number
* **Decimal:** $$42$$
* **Binary:** $$101010$$
* **Octal:** $$52$$
	* *$$8 = 2^3$$*
	* Each digit is 3 binary digits: $$5 = 101$$ and $$2 = 010$$
* **Hexadecimal:** $$2A$$
	* *$$16 = 2^4$$*
	* Each digit is 4 binary digits: $$2 = 0010$$ and $$A = 1010$$

# Introducing Positional Notation
* We use a positional notation when writing ***ANY*** number in a numeral system
* For example, $$1024_{10}$$ can be written as:
	* *Descending:* $$1 * 10^3 + 0 * 10^2 + 2 * 10^1 + 4 * 10^0$$
	* *Ascending:*  $$4 * 10^0 + 2 * 10^1 + 0 * 10^2 + 1 * 10^3$$

# Positional Notation
For any base ***b***, and a set of digits ($$..., d_i, ..., d_2, d_1, d_0)$$

|   ...  |   i    |  ...    |  2    |   1   |   0   |
| ---: | ---: | ---: | ---: | ---: | ---: |
|...|$$d_i*b^i$$|...|$$d_2*b^2$$|$$d_1*b^1$$|$$d_0*b^0$$|

# Positional Notation Examples
$$0b1101110 = 110$$

|   6   |   5   |  4    |   3   |  2    |   1   |   0   |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| $$1 * 2^6$$|$$1 * 2^5$$|$$0 * 2^4$$|$$1 * 2^3$$|$$1 * 2^2$$|$$1 * 2^1$$|$$0 * 2^0$$|
|64|32|0|8|4|2|0|

#  More Positional Notation Examples
* $$0b10011001$$
* $$0644$$
* $$0x4F2C1D$$

#  More Positional Notation Examples
* $$0b10011001$$ - its a palindrome
* $$0644$$ - Unix file permisions (user rw, group & other, r)
* $$0x4F2C1D$$ - BGSU brown

# Meaning Behind the Binary
* A binary system uses two digits: $$0$$ and $$1$$
	* $$0$$ means no voltage, false, off, etc.
	* $$1$$ means high voltage, true, on, etc.
* In computer science, each digit is a *bit*
* A binary sequence of $$0$$s and $$1$$s is a bit pattern
* $$8\,bit = 2\,hex\,digits = 1\,byte$$
* $$4\,bit = 1\,hex\,digit =  1\,nybble$$

# Powers of 2
* Together, let's name of the powers of two from 1 to 20

# Answers as Given by Python
<script src="https://gist.github.com/mjdecker/91f7f8337b71e80e57987da45f64e088.js"></script>

# Some Memorable powers of 2
* *$$2^8 = 256$$*
* *$$2^{10} = 1024 \approx 10^3$$*
* *$$2^{16} = 65536$$*
* *$$2^{20} = 1048576 \approx 10^6$$*
* *$$2^{30} = 1073741824 \approx 10^9$$*
* *$$2^{31} - 1 = 2147483647$$*

 

