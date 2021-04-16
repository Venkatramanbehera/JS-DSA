function freqAlphabets(s){
    let str = ''
    
    for(let i=0; i<s.length; i++){
        if(s.charAt(i+2) === '#'){
            const char = s.substring(i,i+2)
            // console.log(char)
            str += String.fromCharCode(parseInt(char)+96)
            // console.log(str)
            i = i+2
        }else{
            const char = s.charAt(i)
            str += String.fromCharCode(parseInt(char)+96)
        }
    }
    //  console.log(str)
    return str 
}

console.log(freqAlphabets('10#11#12'))
console.log(freqAlphabets('1326#'))
console.log(freqAlphabets('25#'))
console.log(freqAlphabets('12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#'))