function defangIpaddr(address){
    // ------procedure 1--------
    // let str = ''
    // for(let i = 0; i < address.length; i++){
    //     if( address[i] === '.'){
    //         str += '[.]'
    //     }else{
    //         str += address[i]
    //     }
    // }
    // return str

    // --------procedure 2 -------
    return address.split('.').join('[.]')
}

console.log(defangIpaddr('1.1.1.1')) // '1[.]1[.]1[.]1'
console.log(defangIpaddr('255.100.50.0')) // '1[.]1[.]1[.]1'