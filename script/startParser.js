const codeforces = require('../parser/codeforces')

function main() {
    setInterval(codeforces.main, 1000 * 60 * 60);
}

module.exports = {
    main: main
}