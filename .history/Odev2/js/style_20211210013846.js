function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = false
    function test(input){
        let vovels = "aeiou"
        if(vovels.search(input[0]==-1)){
        re =true
    }
    
    }
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar();

    
console.log(re.test("sasdasd"));
