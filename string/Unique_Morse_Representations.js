function uniqueMorseRepresentations(words){
    const morse = { 
        a:".-",b:"-...",c:"-.-.",d:"-..",e:".",
        f:"..-.",g:"--.",h:"....",i:"..",j:".---",
        k:"-.-",l:".-..",m:"--",n:"-.",o:"---",
        p:".--.",q:"--.-",r:".-.",s:"...",t:"-",
        u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."
    }
    const arr = []
    for(let j = 0; j < words.length; j++){
        let str = ''
        for(let i=0; i<words[j].length; i++){
            str += morse[words[j][i]]
        }
        words[j] = str
        if(!arr.includes(str)){
            arr.push(str)
        }
        // console.log(words)
    }
    // console.log(arr)
    return arr.length
}
let words = ["gin", "zen", "gig", "msg"]
console.log(uniqueMorseRepresentations(words))