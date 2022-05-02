#!/usr/bin/env node
const child_process = require('child_process');
const fs = require('fs');
const path = require('path');

const getOrdinal = n => {
  let ord = ["st", "nd", "rd"]
  let exceptions = [11, 12, 13]
  let nth = 
  ord[(n % 10) - 1] == undefined || exceptions.includes(n % 100) ? "th" : ord[(n % 10) - 1]
  return n + nth
}


const getMonthAndYearFromDate = date => {
    let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
    console.log("apply day, month and year: ", this)
    return `${getOrdinal(day)} ${month} ${year}`
}

let logResult = child_process.execSync("git log --format=%D%n%h%n%H%n%cI%n%B -n 1 HEAD")
                .toString().trim().split(/\r?\n/);
let commitDate = logResult[3];

const getCommitDate = () => { 
    const obj = { commitDate: getMonthAndYearFromDate(new Date(commitDate)) };
    const filePath = path.resolve('generatedGitInfo.json');
    const fileContents = JSON.stringify(obj, null, 1);
    fs.writeFileSync(filePath, fileContents);
  console.log(`Wrote the following contents to ${filePath}\n${fileContents}`);
}

module.exports = getCommitDate();