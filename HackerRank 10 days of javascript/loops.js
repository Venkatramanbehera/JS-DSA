function vowelsAndConsonants(s){
    const arrc = [], arrv = []
    for( const char of s){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            arrv.push(char)
        }else{
            arrc.push(char)
        }
    }
    arrv.forEach((ele) =>{
        console.log(ele)
    })
    arrc.forEach((ele)=>{
        console.log(ele)
    })
}

console.log(vowelsAndConsonants('javascript'))