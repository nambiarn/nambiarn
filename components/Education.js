import PropTypes from 'prop-types';
// import './Experience.css'

export default function Education({ education }) {

    return (
        <section>
            <div className="margin-top-sm font-weight-600 text-uppercase">Education</div>
            <span>{
                education.map(el => {
                    return <p key={el.id}>
                        <p className="font-weight-600">{el.degree}</p>
                        <p className="name-font-size-sm font-weight-400">{el.institution} | {el.endYear}</p>
                    </p>
                })
            }
            </span>
        </section>
    )
}

Education.propTypes = {
    education: PropTypes.object,
};
