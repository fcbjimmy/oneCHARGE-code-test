function findMedianSortedArrays(nums1, nums2) {
    var sortedArray = nums1.concat(nums2);
    sortedArray.sort(function (a, b) { return a - b; });
    console.log(sortedArray);
    //[1,2,3,4]
    var middle = sortedArray.length / 2;
    var beforeMiddle = middle - 1;
    //if its even
    if (sortedArray.length % 2 === 0) {
        return (sortedArray[middle] + sortedArray[beforeMiddle]) / 2;
    }
    else {
        //if its odd
        middle = Math.floor(middle);
        return sortedArray[middle];
    }
}
console.log(findMedianSortedArrays([3], [-2, -1]));
