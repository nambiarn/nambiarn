import { addPipe, getCurrentGigs } from "./resumeService"

describe("addPipe", () => {
    test("if add pipe adds a pipe when there are more than 1 gigs", () => {
        [{ currentGigs: [1,2,3], currentGig: 2, expectedResult: " |" },
        { currentGigs: [1,2,3], currentGig: 3, expectedResult: "" },
        { currentGigs: [1], currentGig: 5, expectedResult: "" },
        { currentGigs: [], currentGig: 5, expectedResult: "" },
        { currentGigs: null, currentGig: 5, expectedResult: "" },
        { currentGigs: [1,2], currentGig: null, expectedResult: "" }]
        .forEach( test => {
            expect(addPipe(test.currentGigs, test.currentGig)).toBe(test.expectedResult);
        })
    })

    test("if get current gig filters out current gigs with specified fields", () => {
        [{ experience: [{isCurrent: true, id: 1, title: "Principal", company: "Slalom"}], 
         expectedResult: [{id: 1, title: "Principal", company: "Slalom"}] },

         { experience: [{isCurrent: false, id: 1, title: "Principal", company: "Slalom"}], 
         expectedResult: [] },
        
         { experience: [], 
         expectedResult: [] },

         { experience: null, 
            expectedResult: [] }
        ]
        .forEach( test => {
            expect(getCurrentGigs(test.experience)).toEqual(test.expectedResult);
        })
    })
});