import { getMonthAndYearFromDate, dateDiff, reverseString } from "./utilService";

describe("util service tests", () => {
    test("if formatted date works", () => {
        [{ date: new Date(2021, 3, 26) , showDay: false, expectedResult: "Apr 2021"},
        { date: new Date(2021, 4, 21) , showDay: false, expectedResult: "May 2021"},
        { date: new Date(2021, 11, 1) , expectedResult: "Dec 2021"},
        { date: new Date(2021, 11, 1) , showDay: true, expectedResult: "1 Dec 2021"}]
        .forEach( test => {
            expect(getMonthAndYearFromDate(test.date, test.showDay)).toEqual(test.expectedResult);
        })
    })

    test("if date diff works", () => {
        [{ startDate: '2020-08-29' , endDate: '2021-09-30', expectedResult: "1 Year 1 Month "},
        { startDate: '2016-05-29' , endDate: '2021-09-30', expectedResult: "5 Years 4 Months "},
        { startDate: '2021-05-29' , endDate: '2021-06-30', expectedResult: "1 Month "}]
        .forEach( test => {
            expect(dateDiff(test.startDate, test.endDate)).toEqual(test.expectedResult);
        })
    })

    test("if reverse string works as expected", () => {
        [{ str: "google", result: "elgoog" },
         { str: null, result: ""}, 
         { str: "" , result: "" }]
        .forEach( test => {
            expect(reverseString(test.str)).toEqual(test.result);
        })
    })
})