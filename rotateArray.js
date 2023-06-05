nums = [-1,-100,3,99]
//0,1,2,3
k = 2
// add k to each index 
//new indix 

function rotate(nums, k){
    shiftedArray = [];
    for (x = 0; x < nums.length; x++) {
        newIndex = (x + k) % nums.length;
        shiftedArray[newIndex] = nums[x]
    }
    console.log(nums)
    console.log(shiftedArray)
}

rotate(nums, k)