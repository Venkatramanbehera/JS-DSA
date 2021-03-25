function balancedStringSplit(s){
    let count = 0, consL = 0, consR = 0
    // const sArr = s //.split("")
    // console.log(sArr)
    for( let i=0; i<s.length; i++){
        if( s[i] === 'L') consL++;
        if( s[i] === 'R') consR++;
        if( consL !== 0 && consL === consR){
            consL = 0
            consR = 0
            count++
        }
    }
    return count
}

console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("RLLLLRRRLR"))
console.log(balancedStringSplit("LLLLRRRR"))
console.log(balancedStringSplit("RLRRRLLRLL"))