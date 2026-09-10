---
title: "Horner's Rule"
layout: notes
---

[Horner's Rule]: https://en.wikipedia.org/wiki/Horner%27s_method
[William George Horner]: https://en.wikipedia.org/wiki/William_George_Horner

# [Horner's Rule]
* Algorithm for polynomial evaluation
* Named after [William George Horner]
* Discovered hundreds of years prior by Chinese and Persian mathmaticians
* Most optimal way to evaluate a polynomial
* Can be used to convert from any base A to any base B

# Horner's Rule: Nested Form
$$a_0 + a_1x + a_2x^2 + a_3x^3 +\cdots + a_nx^n$$\
$$ = a_0 + x{\bigg (}a_1 + x{\Big (}a_2 + x{\big (}a_3 + \cdots + x(a_{n-1} + x\,a_n)\cdots {\big )}{\Big )}{\bigg)}$$

# Horner's Rule: Simplified
* Decimal to Base B: repeated division
* Base A to Decimal: repeated multiplication
* Base A to Base B: repeated multiplication in Base B

# Decimal to Base B
<script src="https://gist.github.com/mjdecker/1032e03c3a94ac607cc1d5cfee7b0002.js?file=to_base.py"></script>

# Decimal to Base 2 Example
Convert $$1987$$ to Base 2

|Step|Number|Operation |Quotient|Remainder|
|--: |----: |---------:|   ---: |    --:  |
|  1 | 1987 | 1987 / 2 |    993 |     1   |
|  2 |  993 |  997 / 2 |    496 |     1   |
|  3 |  496 |  496 / 2 |    248 |     0   |
|  4 |  248 |  248 / 2 |    124 |     0   |
|  5 |  124 |  124 / 2 |     62 |     0   |

# Decimal to Base 2 Example (Continued)

|Step|Number|Operation |Quotient|Remainder|
|--: |----: |---------:|   ---: |   --:   |
|  5 |  124 |  124 / 2 |     62 |    0    |
|  7 |   62 |   62 / 2 |     31 |    0    |
|  8 |   31 |   31 / 2 |     15 |    1    |
|  9 |   15 |   15 / 2 |      7 |    1    |
| 10 |    7 |    7 / 2 |      3 |    1    |
| 11 |    3 |    3 / 2 |      1 |    1    |
| 12 |    1 |    1 / 2 |      0 |    1    |

# Decimal to Base 2 Example Result
* $$1987_{10} = 11111000011_2$$

# Base A To Decimal
<script src="https://gist.github.com/mjdecker/1032e03c3a94ac607cc1d5cfee7b0002.js?file=from_base.py"></script>

# Decimal to Base 2 Example
Convert $$7EA_{16}$$ to Base 10

|Step|Digit|Operation                 |Total|
|--: | --: |   :--                    | --: |
|  1 |   7 |   0 * 16 +  7 =   0 +   7|    7|
|  2 |   E |   7 * 16 + 14 =  112 + 14|  126|
|  3 |   A | 126 * 16 + 10 = 2016 + 10| 2026|

# Base A to Base B
* Repeatedly multiply Base A using Base B arithmetic
* Convert $$357_8$$ to Base 16

|Step|Digit|Operation|Total|
|--:|--:|--:       |--:|
|  1|  3|0 * 8 + 3 | 3 |
|  2|  5|3 * 8 + 5 | 1D|
|  3|  7|1D * 8 + 7| EF|
