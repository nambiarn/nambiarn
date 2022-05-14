import PropTypes from 'prop-types';
// import './Experience.css'

export default function Education({ education }) {

    return (
        <section>
            <div className="padding-top-sm font-weight-600 text-uppercase">Education</div>
            <div>{
                education.map(el => {
                    return <p key={el.id}>
                        <p className="font-weight-600">{el.degree}</p>
                        <div className="name-font-size-sm">{el.institution} | {el.endYear}</div>
                    </p>
                })
            }
            </div>
        </section>
    )
}

Education.propTypes = {
    education: PropTypes.object,
};
