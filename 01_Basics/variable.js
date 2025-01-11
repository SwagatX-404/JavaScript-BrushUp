const accountId = 1567287
let accountEmail = "swagat@google.com"
var accountPassword = "12345"
accountCity = "odisha"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bhubaneswar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])