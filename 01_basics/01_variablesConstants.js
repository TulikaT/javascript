const accountId = 1234;
let accountEmail = "fgfyttd@HighlightRegistry.co";
var accountPassword ="23344";
accountCity = "Arrr";
let accountState; //in js if varible is declared nut not intialized then it gets value "undefined"


// accountId = 2; // not allowed

accountEmail = "tt@tt.com";

console.log(accountEmail);

/*
Prefer not to use var
bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);