//Question 3.
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.

//Merge both arrays
//Sort the arrays
//Get the middle index
//Get the middle index - 1 for the case length is even
//If condition to return middle number if length is even or odd
//Return the median

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sortedArray: number[] = nums1.concat(nums2);
  sortedArray.sort((a, b) => a - b);
  let middle: number = sortedArray.length / 2;
  let beforeMiddle: number = middle - 1;
  //if its even
  if (sortedArray.length % 2 === 0) {
    return (sortedArray[middle] + sortedArray[beforeMiddle]) / 2;
  } else {
    //if its odd
    middle = Math.floor(middle);
    return sortedArray[middle];
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]));
