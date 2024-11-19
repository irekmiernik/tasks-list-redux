import './style.css';

const Section = ({ title, body, twoButtons }) => (
    <section className="section">
        <div className="sectionFlex sectionFlex--header">
            <h2 className="sectionFlex__itemContent h2">{title} </h2>
            {twoButtons}
        </div>
        {body}
    </section>
)
export default Section;