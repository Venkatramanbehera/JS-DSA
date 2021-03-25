function countMatches(items, ruleKey, ruleValue){
    let count = 0;
    for( let i=0; i < items.length; i++){
        if( ruleKey === 'color'){
            if(items[i][1] === ruleValue){
                count++;
            }
        }
        else if( ruleKey === 'type'){
            if(items[i][0] === ruleValue){
                count++;
            }
        }
        else if( ruleKey === 'name'){
            if(items[i][2] === ruleValue){
                count++;
            }
        }
    }
    return count
}

const items = [
                ["phone","blue","pixel"],
                ["computer","silver","lenovo"],
                ["phone","gold","iphone"]
            ]
console.log(countMatches(items,"color","silver"))
console.log(countMatches(items,"type","phone"))
console.log(countMatches(items,"name","pixel"))