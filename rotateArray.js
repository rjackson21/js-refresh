nums = [-1,-100,3,99]
k = 2

function rotate(nums, k){
    for (x=1; x<=k; x++) {
    nums.unshift(nums[nums.length-1])
    nums.pop()
    }
    console.log(nums)
}

rotate(nums, k)