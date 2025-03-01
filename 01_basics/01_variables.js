const accountId = 13579
let accountEmail = "one@gmail.com"

/*
Prefer not to use var
Reason: Problem with block scope and funtion scope
*/
var accountPassword = "12345"
accountCity = "Gurgaon"

//accountId = 5
accountEmail = "aj@aj.com"
accountPassword = "123312"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])