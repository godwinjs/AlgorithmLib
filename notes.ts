console.log("------------------TIME & SPACE COMPLEXITY--------------------")
// Constant Time O(1): no matter the size of the input it would still have the same runtime.
// Linear Time O(n): Runtime increases as the input grows, the runtime is directly proportional to the input.
// Quadratic Time O(n^2): The runtime required to complete a function is directly proportional to
//   the square of the input data set.
// Logrithmic Time O(Log n): the runtime of a function is directly proportional to the logarithm of the input size
//  
// Factorial Time Complexity
// Exponential Time Complexity

// O of log n solution for finding the power of a number
function Power(base: number, exp: number ): nnumber {
    // for X^0 return 1
    if(exp === 0) {
        return 1
    }

    /*
        if the exponent is even you can recursively call the function once to 
        find a result for (half the exponent of the base) base^exp/2. 
        and when you multiply the result by itself you get the real Power.
    */
    if(exp % 2 === 0) {
        halfPower = Power(base, exp/2)
        return halfPower * halfPower
    }else {
        halfPower = Power(base, (exp-1)/2) // minus base ^ 1 to make it even
        return halfPower * halfPower * base // multiply the result with base ^ 1 you subtracted before.
    }
}
console.log( Power(2,2) )

// -----SPACE COMPLEXITY----

/*
Relationship between space and time complexity:
    In most cases space ccomplexity of a function and it's Time complexity will be the same.
        sometimes a function will take more memory than runtime

    Variable, Data structures([]{}) and Function call takes up space.

    Space complexity is the sum of the space requirement of all the variable, data structure and function calls

*/

// O(n^2) Quadratic solution
function MaxSubArrr(arr: number[], k: number): number {
    let maxSum = -Infinity;

    
    for(let i = 0; i <= arr.length - k; i++) {
        // loop goes max i = 4 and 4 <= 8-3; 
        // loop goes again to meet the condition i = 5 and 5 = 8 - 3
        let currentSum = 0;

        for(let j = i; j < i + k; j++){
            // loop goes j = 0, 0 < 0 + 3, 0++ -> j = 2; 2 < 1 + 3; 2++..
            // ... j = 5 (the met condition above); 5 < 5 + 3 (arr.length); 5++;
            // diff: parent loop used <= to enter the max of 5(arr.length - k), and..
            // child loop idx j stayed at the max of 7 (arr[7] = 4), if <= is used here,..
            // the loop idx j would equal 8 and arr[8] will give undefined
            currentSum += arr[j]
        }

        maxSum = Math.max(currentSum, maxSum)
    }
    
    return maxSum
}
const array = [2,5,3,1,11,7,6,4], n = 3;

console.log('O(n^2) Quadratic solution: ', MaxSubArrr(array, n) )

// My Solution O(n) Linear Solution
function MaxSubArrrSlide(arr: number[], k: number): number {
    let maxSum = arr[0];
    //no need for -Infinity set the maxSum to the first item in the array
    //and loop to get the first sum of k subArrays

    let i = 1;
    while(i < k){
        maxSum += arr[i]
        i++
    }

    let currentSum = maxSum;

    //start the loop from the next item in arr using it as the anchor
    // -------- anchor = arr[j] = 5 (the 2nd item in the arr)
    for(let j = 1; j <= arr.length - k; j++){
        // subtract the prev item ( the item before the current anchor arr[j])..
        //..from the current sum and add the 
        currentSum = (currentSum - arr[j-1]) + arr[j + 2]
        console.log(currentSum)

        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}
// SOLUTION 2 O(n) Linear Solution
function MaxSubArrrSlide2(arr: number[], k: number): number {
    let maxSum = arr.slice(0, k).reduce((sum, next) => sum + next ,0);

    let currentSum = maxSum;

    // start the loop from the last item in the sub array using it as the anchor
    // i - k = 0 -> arr[0] ----- anchor = arr[3] = 1 (the 4th item in the arr)
    for(let i = k; i < arr.length; i++){
        // subtract the element that left and add the one that entered the window
        currentSum = (currentSum - arr[i - k]) + arr[i]

        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

console.log('O(n) Linear Solution: ', MaxSubArrrSlide2(array, n) )
