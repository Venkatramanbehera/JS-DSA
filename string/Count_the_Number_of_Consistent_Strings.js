function countConsistentStrings(allowed, words){
    let count = 0;
    for( let word of words){
        let check = true;
        for( let i=0; i<word.length; i++){
            if(!allowed.includes(word[i])){
                check = false
            }
        }
        if(check){
            count++
        }
    }
    return count
};

const allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
console.log(countConsistentStrings(allowed,words))

const allowed1 = "abc", words1 = ["a","b","c","ab","ac","bc","abc"]
console.log(countConsistentStrings(allowed1,words1))