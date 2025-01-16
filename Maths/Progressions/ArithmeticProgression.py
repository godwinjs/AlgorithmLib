def NonConstantAPTerm(n, differences):
  a = differences.pop(0)  # First term
    if n == 1:
        return a  # First term is given directly
    sum_differences = sum(differences[:n-1])  # Sum up to (n-1) terms from the list
    return a + sum_differences
  
differences = [2, 5, 3, 1, 11, 7, 6, 4]
n = 8  # Term to calculate

result = NonConstantAPTerm(n, differences)
print(f"The {n}th term is {result}")

def NonConstantAllAPTerm(differences):
  a = differences.pop(0)  # First term
    terms = [a]  # Start with the first term
    for d in differences:
        terms.append(terms[-1] + d)  # Add the difference to the previous term
    return terms

all_terms = calculate_all_terms(a, differences)
print(f"All terms: {all_terms}")
