const accountId=12345
let emailId="shubh@gmail.com"
var password="123456"
accountCity="Mirzapur"
let accountState;
//accountId=2 // not allowed

console.log(accountId)
/*
preper not to use var
beacuse of issue in block scope and functional scope
*/
emailId="swatMy@gmail.com"
password="1212121"
accountCity="varanasi"

 console.table([accountId,emailId,password,accountCity,accountState]);