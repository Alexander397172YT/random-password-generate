var pass = "";
var defPossible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var maxPassLength = 1000000

const gotovoebat = (possible = defPossible, passLength = 8) => {
    if (passLength > maxPassLength) return callback("The value possible cannot be greater than 1000000")

    for (var i = 0; i < passLength; i++)
    pass += possible.charAt(Math.floor(Math.random() * possible.length));
    return pass
}

module.exports = gotovoebat(possible, passLength)