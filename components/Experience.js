import PropTypes from 'prop-types';
import { getMonthAndYearFromDate, dateDiff } from '../services/utilService';
// import './Experience.css'

export default function Experience({key, title, content, company, isCurrent, startDate, endDate }) {

    return (
        <section className="main-section__exp">
            <h4 className="margin-0">{title}</h4>
            <p className="margin-0">{company}</p>
            <span className="name-font-size-sm">{getMonthAndYearFromDate(startDate)} - {endDate ? getMonthAndYearFromDate(endDate) : "Present"}</span>
            <span className="margin-left-sm name-font-size-sm">{dateDiff(startDate, endDate)} </span>
            <p>{isCurrent}</p>
            <ul className="font-size-sm-2">
                { content && content.map(detail => {
                        return <li key={key}>{detail}</li>
                }) }
            </ul>
        </section>
    )
}

Experience.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    isCurrent: PropTypes.bool,
    startDate: PropTypes.date,
    endDate: PropTypes.date
};
