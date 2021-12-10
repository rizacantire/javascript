function regexVar() {

    let re = false
    this.test = function (input){
        console.log(input)
    
    }
    /*
     * Do not remove the return statement
     */
    return re;
}

const re = regexVar()
re.test("asd")
