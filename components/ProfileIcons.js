import util from '../constants/util';
import { useState } from "react";
import { getUrl } from "../services/utilService";
import gitIcon from '../public/images/git-icon.png';
import twitterIcon from '../public/images/twitter-icon.svg';
import linkedinIcon from '../public/images/linkedin-icon.svg';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
// import styles from '../styles/ProfileIcons.css';

export default function ProfileIcons() {
    const [currentUserName] = useState("nambiarn")
    const [currentTwitterName] = useState("_nikhilnambiar")
    const [currentLinkedInName] = useState("nambiarnikhil")
    const [currentCity] = useState("St. Louis, MO")
    const { github, twitter, linkedin, maps, email } = util;

    return (
        <section>
            <section>
                <h3>
                    <a className="text-dec-none font-weight-400 font-size-sm" target="_blank"
                        rel="noreferrer" href={getUrl(maps, currentCity)}>
                        <LocationMarkerIcon className="icon-h-w text-blue-500 marker" />{currentCity}</a>
                </h3>
            </section>
            <section className="flex flex-align-center">
                <a className="" href={getUrl(github, currentUserName)}
                    target="_blank" rel="noreferrer">
                    <Image className="scale border-radius-50 border-black-2p margin-right-xsm" src={gitIcon}
                        alt="Github link" width="20" height="20" />
                </a>
                <a className="scale font-weight-400 flex-align-center" href={getUrl(twitter, currentTwitterName)}
                    target="_blank" rel="noreferrer">
                    <Image className="margin-right-xsm" src={twitterIcon}
                        alt="Twitter link" width="30" height="30" />
                </a>
                <a className="scale font-weight-400 flex-align-center" href={getUrl(linkedin, currentLinkedInName)}
                    target="_blank" rel="noreferrer">
                    <Image className="margin-right-xsm" src={linkedinIcon}
                        alt="Linkedin link" width="30" height="30" />
                </a>
                <a className="scale font-weight-400 flex-align-center" href={`mailto:${email}`}
                    target="_blank" rel="noreferrer">
                    <MailIcon alt="Mail icon" className="icon-h-w text-blue-500"/>
                </a>
            </section>
        </section>
    )
}

