const array_diff_very_fast = function(arr1,arr2){
    // const result = []
    // for( let i=0; i < arr1.length; i++){
    //     if( !arr2.includes(arr1[i])){
    //         result.push(arr1[i])
    //     }
    // }
    // return result
    return arr1.filter(function(e){
        return !arr2.includes(e)
    })
}

console.log(array_diff_very_fast([1,2],[1]))
console.log(array_diff_very_fast([1,2,2,2,3],[2]))
console.log(array_diff_very_fast([1,2,2,2,3,5,5,1,2,4,5,1], [2,1,5]))