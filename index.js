const Mustache = require('mustache');
const moment = require('moment');
const fs = require('fs');
const MUSTACHE_MAIN_DIR = './main.mustache';

const birthDate = moment('1999-02-21', 'YYYY-MM-DD');
const currentDate = moment();
const nextBirthDay = moment( (moment().year() + 1) + '-02-21', 'YYYY-MM-DD');

let gusInformation = {
    name: 'Gus~~tavo~~',
    age: moment.duration(currentDate.diff(birthDate)).asYears().toFixed(0),
    birthday: nextBirthDay.fromNow(),
    lastUpdate: currentDate.format('llll')
};

function generateReadMe() {
    fs.readFile(MUSTACHE_MAIN_DIR, (err, data) =>  {
        if (err) throw err;
        const output = Mustache.render(data.toString(), gusInformation);
        fs.writeFileSync('README.md', output);
    });
}

generateReadMe();