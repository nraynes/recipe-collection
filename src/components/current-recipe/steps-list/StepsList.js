import './StepsList.css';

const StepsList = (props) => {
    return (
        <div id='stepsContainer'>
            <div id='recName'>{props.name}</div>
            {props.steps ? props.steps.map((item) => {
                return (<div id='step'>{item}</div>)
            }) : null}
        </div>
    );
};

export default StepsList;