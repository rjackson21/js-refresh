nums = [4,1,2,1,2];

function singleNumber(nums){

if (nums.length===1) {
    console.log( nums[0]);
}

else { 
    let result = 0;
    
    nums.forEach(element => {
        result = result ^ element
    });
    //if it is the same number, result will equal zero
    console.log(result)
}
}
singleNumber(nums)
