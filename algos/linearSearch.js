const nums = [2,1,6,3,5,9,11,41,90,66,51];

function linearSearch(nums, target){
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}

target = 90;
console.log('Found at position : ', linearSearch(nums, target));