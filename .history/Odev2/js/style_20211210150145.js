function getSecondLargest(nums) {
    // Complete the function
    let max = Math.max(...nums)
    nums = nums.sort()
    while(true){
        if(nums[nums.length -1] == max){
            nums.pop()
            
        }else{             
            break;
        }
    }
   
    return nums[nums.length -1];
}

function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}

main()