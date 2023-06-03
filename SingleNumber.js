nums = [2,2,1];

function singleNumber(nums){
    if (nums.length===1) {
        console.log( nums[0]);
    }
    else { 
        result = nums[0];   
        for (var i = 1; i < nums.length; i++){
            result = result ^ nums[i];
        }
        console.log(result);
    }
}

singleNumber(nums)
