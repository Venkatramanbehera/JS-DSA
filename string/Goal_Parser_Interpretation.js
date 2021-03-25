function interpret(command){
    let str = ""
    for(let i=0; i<command.length; i++){
        if( command[i] === 'G'){
            str += 'G'
        }else if( command[i] === '(' && command[i+1] === ')'){
            str += 'o'
        }
        else if( command[i] === '(' && command[i+1] === 'a' && command[i+2] === 'l' && command[i+3] === ')'){
            str += 'al'
        }
    }
    return str
}

console.log(interpret("G()(al)"))
console.log(interpret("G()()()()(al)"))
console.log(interpret("(al)G(al)()()G"))