# NonConstantAP( n: number, d: number[] ): number
The difference or ratio between consecutive terms is not constant. Instead, it appears to be a sequence where each term depends on the sum of the previous term and the corresponding value in another list (the provided numbers).

To address this, you need to generalize the sequence based on how it is constructed. Here's an analysis:

Observations:
Starting Value:

The first term (a₁) is 2.
Subsequent Terms:

Each term is derived by adding the corresponding value from the list of numbers to the previous term.
For example:

  * 𝑎1 = 2
  * a2 = a1 + 5 = 2+5 = 7
  * a3 = a2 + 3 = 7+3 = 10
  * 
and so on.

# General Formula:

For a sequence like this, you can define the formula for the 𝑛 n-th term as:

![AP_Formula](https://github.com/godwinjs/AlgorithmLib/blob/main/assets/non_constant_ap_formula.png)

## Where:

  * 𝑎 a is the first term (in this case, 22),
  * 𝑑𝑖 is the 𝑖 i-th value from the given list of numbers ([5,3,1,11,7,6,4]),
  * 𝑛 n is the term number.
