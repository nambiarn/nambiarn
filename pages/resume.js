import { useState, useEffect } from "react"
import { experience } from "../data/experience";
import { addPipe, getCurrentGigs } from "../services/resumeService";
import profilePic from '../public/images/nn-pp.jpeg';
import Experience from "../components/Experience";
import ProfileIcons from "../components/ProfileIcons";
import { commitDate } from '../generatedGitInfo.json';
import Image from 'next/image';

export default function Resume() {
    const [name] = useState("Nikhil Nambiar");
    const [currentGigs, setCurrentGigs] = useState([]);
    const [lastUpdatedDate] = useState(commitDate)
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaWatcher = window.matchMedia("(max-width: 800px)")
        setIsSmallScreen(mediaWatcher.matches);

        function updateIsSmallScreen(e) {
            setIsSmallScreen(e.matches);
        }
        mediaWatcher.addEventListener('change', updateIsSmallScreen)

        return function cleanup() {
            mediaWatcher.removeEventListener('change', updateIsSmallScreen)
        }
    })

    useEffect(() => {
        setCurrentGigs(getCurrentGigs(experience))
    }, [experience])

    return (
        <main className="outline">
            <p className="flex flex-end italic">Last Updated: {lastUpdatedDate}</p>
            <Image className="border-radius-50 margin-auto" src={profilePic} alt="Profile" width="120" height="120"/>
            <h2 className="flex-center margin-bottom-0">{name}</h2>
            <ProfileIcons/> 
            <h3 className="font-weight-400 letter-spacing flex-center">{
                currentGigs.map(currentGig => !isSmallScreen ?
                    <span key={currentGig.id}> {currentGig.title} at {currentGig.company}
                    {addPipe(currentGigs, currentGig)} </span> :
                    <p className="flex-col" key={currentGig.id}> {currentGig.title} at {currentGig.company}</p>
                    )
                }</h3>
            <h2 className="border-bottom width-md">Experience</h2>
            <section className="flex-space-around">
                {
                    experience.map((gig) => {
                        return <Experience key={gig.id} title={gig.title} company={gig.company}
                        startDate={gig.startDate} endDate={gig.endDate} isCurrent={gig.isCurrent} />
                    })
                }
            </section>
            <section className="">
                <h2 className="border-bottom width-md">Education</h2>
                {
                    experience.map((el) => 
                        <Experience key={el.id} title={el.title} company={el.company}
                        isCurrent={el.isCurrent} />)
                }
            </section>
        </main>
    )
}