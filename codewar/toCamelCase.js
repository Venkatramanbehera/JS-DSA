const toCamelCase = function(str){
    let result = ''
    for(let i=0; i<str.length; i++){
        if(str[i] === '-' || str[i] === '_'){
            let s = str[i+1].toUpperCase()
            result += s
            i++
        }else{
            result += str[i]
        }
    }
    return result
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))