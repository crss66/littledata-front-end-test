import LogoGoogle from './../../assets/img/GA-logo.svg';
import LogoSegment from './../../assets/img/Segment-logo.svg';
import Logo from './../../assets/img/Littledata-Logo.svg';

function SurveySlideThree (props) {
    return (
        <div className='survey-form'>
            <div className='logo-container'>
                    <img className='logo-littledata' src={Logo} alt='logo-littledata'/>
                </div>
                <div className='slide-header'>
                    <h2>Choose Destination</h2>
                </div>
            <div>
                <p className='subheader-third-slide'>
                Please select the destination that you’d like to connect your store with
                </p>
            </div>
            <div className='buttons-container-google-segment'>
                <button
                    className='button-google-segment'
                    onClick = {props.handleThirdSubmit}
                    value = 'Google Analytics'
                >
                    <img className='logo-google-segment' src={LogoGoogle} alt='Google Analytics'/>
                    <p>Google Analytics</p>
                </button>
                <button
                    className='button-google-segment'
                    onClick = {props.handleThirdSubmit}
                    value = 'Segment'
                >
                    <img className='logo-google-segment' src={LogoSegment} alt='Segment'/>
                    <p>Segment</p>
                </button>
            </div>
        </div>
    );
};

export default SurveySlideThree;