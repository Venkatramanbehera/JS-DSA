function arrayStringsAreEqual(word1,word2){
    let wordStr1 = word1.join(""), wordStr2 = word2.join("") 
    // console.log(wordStr1)
    // console.log(wordStr1)
    if( wordStr1 === wordStr2){
        return true
    }
    return false
}
// const word1 = ["ab", "c"], word2 = ["a", "bc"] 
// const word1 = ["a", "cb"], word2 = ["ab", "c"] 
const word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
console.log(arrayStringsAreEqual(word1,word2))