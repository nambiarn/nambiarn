import PropTypes from 'prop-types';

export default function Skills({ skills }) {

    return (
        <section className="margin-bottom-sm-md">
            <div className="margin-top-sm-md font-weight-600 text-uppercase">Skills</div>
            <ul className="font-size-sm-2 list">
                {skills.map((detail, index) => {
                        return <li key={index}>{detail}</li>
                }) }
            </ul>
        </section>
    )
}

Skills.propTypes = {
    skills: PropTypes.object,
};
