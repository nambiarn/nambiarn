import PropTypes from 'prop-types';
import { getMonthAndYearFromDate, dateDiff } from '../services/utilService';
// import './Experience.css'

export default function Experience({title, company, isCurrent, startDate, endDate }) {

    return (
        <section className="main-section__exp">
            <h3>{title}</h3>
            <p>{company}</p>
            <p>{getMonthAndYearFromDate(startDate)} - {endDate ? getMonthAndYearFromDate(endDate) : "Present"}</p>
            <p>{dateDiff(startDate, endDate)}</p>
            <p>{isCurrent}</p>
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
