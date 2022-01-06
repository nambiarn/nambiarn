export const getMonthAndYearFromDate = (date, showDay = false) => {
    if(typeof(date) === "string") date = new Date(date);
    let day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);

    return showDay ? `${day} ${month} ${year}` : `${month} ${year}`
}

const getFormattedDate = date => date ? new Date(new Date(date).toISOString().substr(0, 10)) 
                                      : new Date(new Date().toISOString().substr(0, 10));

const swapValues = (value1, value2) => {
    let swap = value1;
    value1 = value2;
    return [value1, swap];
}

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

const createMonthListForYear = date => {
    let list = [];
    
    for(let i = 0; i < 12; i++ ) {
        if(i % 2 === 0 && i < 7) {
            list.push(31)
    } else if(i % 2 !==0 && i < 7 ) {
            list.push(30)
    } else if(i % 2 === 0 && i > 7) {
            list.push(30)
    } else {
            list.push(31)
}}

    list[1] = isLeapYear(date.getFullYear()) ? 29 : 28;

    return list;
}

const getDuration = (value, str, onlyYear = false) => { 
    if(!value) return ""
        return value === 1 ? `${value} ${str} ` : onlyYear ? `${value + 1} ${str}s` : `${value} ${str}s ` 
};

export const dateDiff = (startingDate, endingDate, onlyYear = false) => {
    let [startDate, endDate] = [getFormattedDate(startingDate), getFormattedDate(endingDate)] ;

    if (startDate > endDate) {
        let values = swapValues(startDate, endDate);
        startDate = values[0];
        endDate = values[1];
    }
    let monthListForYear = createMonthListForYear(startDate);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    let dayDiff = endDate.getDate() - startDate.getDate();
    if (dayDiff < 0) {
        if (months > 0) {
            months--;
        } else {
            years--;
            months = 11;
        }
        dayDiff += monthListForYear[startDate.getMonth()];
    }

    return onlyYear ? `${getDuration(years, 'Year', onlyYear)}` : 
    `${getDuration(years, 'Year')}${getDuration(months,'Month')}`;
}

export const getUrl = (url, dynamicKey) => encodeURI(`${url}${dynamicKey}`);

export const reverseString = str => str ? str.split("").reverse().join("") : "";

export const getOrdinal = n => {
    let ord = ["st", "nd", "rd"]
    let exceptions = [11, 12, 13]
    let nth = 
    ord[(n % 10) - 1] == undefined || exceptions.includes(n % 100) ? "th" : ord[(n % 10) - 1]
    return n + nth
}