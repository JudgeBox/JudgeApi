const axios = require('axios');
const writer = require('../script/writer');

async function main() {
    let data = await axios.get('https://codeforces.com/api/problemset.problems').then((res) => {
        return res.data.result;
    })

    let res = [];

    await data.problems.forEach(ele => {
        res.push({ URL: `https://codeforces.com/contest/${ele.contestId}/problem/${ele.index}`, Id: ele.contestId + ele.index, Name: ele.name });
    });

    writer.addProblem('Codeforces', res);
}

main();

module.exports = {
    main: main
}