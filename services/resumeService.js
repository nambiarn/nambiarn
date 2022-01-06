export const addPipe = (currentGigs, currentGig) => {
    if(!currentGigs || !currentGig) return ""
    let currentGigsLength = currentGigs.length;
    
    return currentGigsLength > 1 
    && currentGig !== currentGigs[currentGigsLength - 1] ? " |" : ""
}

export const getCurrentGigs = experience => experience ? experience
.filter(gig => gig.isCurrent)
.map(gig => ({id: gig.id, title: gig.title, company: gig.company})) : [];

