function getSecondLargest(nums) {
    // Complete the function
    const max = Math.max(...nums)
    console.log(max)
    nums.sort((a,b)=>{
        return b-a;
    })
    console.log(nums)

    while(true){
        if(nums[nums.length -1] == max){
            nums.pop()
            console.log(nums)
            
        }else{         
            console.log(nums)
            break;
        }
    }
   
    return nums[nums.length -1];
}


    const nums =[1,6,34,12,2,2,12,34]
    
    console.log(getSecondLargest(nums));
