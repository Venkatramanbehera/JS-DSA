const comp = function(array1, array2){
    if( array1.length !== array2.length && (array1.length <= 0 || array2.length <= 0)){
        return false
    }    
    const result = array1.every(function(ele){
        return array2.includes(ele*ele)
    })
    return result
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 36100, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))

const a = [10,20,30], b = [10,20,30]

console.log(a == b)
