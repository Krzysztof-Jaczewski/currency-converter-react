import "./style.css"


const Fieldset = ({ title, extraContent, body }) => (

    <fieldset className="fieldset">
        <legend>{title}</legend>
        {extraContent}
        {body}
    </fieldset>);
    
export default Fieldset;