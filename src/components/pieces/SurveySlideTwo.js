import Logo from './../../assets/img/Littledata-Logo.svg';

function SurveySlideTwo (props) {

    return (
        <form className='survey-form'>
            <div>
                <div className='logo-container'>
                    <img className='logo-littledata' src={Logo} alt='logo-littledata'/>
                </div>
                <div className='slide-header'>
                    <h2>Welcome to Littledata</h2>
                    <div className='progress-bar-container'>
                        <div className='progress-bar-inside-complete'>
                        
                        </div>
                    </div>
                </div>
                <h4 className='label-input'>How did you hear about Littledata?</h4>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="shopify-app" 
                        name="how-did-you-hear" 
                        value="Through Shopify app store" 
                        required/>
                    <label className='label-radio-answers' htmlFor="shopify-app">Through Shopify app store</label>
                </div>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="recommended" 
                        name="how-did-you-hear" 
                        value="Recommended by my agency" required/>
                    <label className='label-radio-answers' htmlFor="recommended">Recommended by my agency</label>
                </div>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="friend-colleague" 
                        name="how-did-you-hear" 
                        value="Through a friend / colleague" 
                        required/>
                    <label className='label-radio-answers' htmlFor="friend-colleague">Through a friend / colleague</label>
                </div>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="littledata-ad" 
                        name="how-did-you-hear" 
                        value="I saw a Littledata ad" 
                        required/>
                    <label className='label-radio-answers' htmlFor="littledata-ad">I saw a Littledata ad</label>
                </div>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="blog-post" 
                        name="how-did-you-hear" 
                        value="I read a blog post / article / book by littledata" 
                        required/>
                    <label className='label-radio-answers' htmlFor="blog-post">I read a blog post / article / book by littledata</label>
                </div>
                <div className='radio-wrapper'>
                    <input
                        onChange={props.handleChange} 
                        type="radio" 
                        id="other" 
                        name="how-did-you-hear" 
                        value="Other" 
                        required/>
                    <label className='label-radio-answers' htmlFor="other">Other</label>
                </div>
            </div>
            <div>
                <h4 className='label-input'>Are you part of an agency or a consulting firm?</h4>
                <div className='yes-no-wrapper'>
                    <div>
                        <input
                            onChange={props.handleChange} 
                            type="radio" 
                            id="part-of-an-agency-yes" 
                            name="part-of-an-agency" 
                            value="Yes" 
                            required/>
                        <label className='label-radio-answers' htmlFor="part-of-an-agency-yes">Yes</label>
                    </div>
                    <div>
                        <input
                            onChange={props.handleChange} 
                            type="radio" 
                            id="part-of-an-agency-no" 
                            name="part-of-an-agency" 
                            value="No" 
                            required/>
                        <label className='label-radio-answers' htmlFor="part-of-an-agency-no">No</label>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className='back-next-button back-button'
                    style = {props.userType === 'recommended' ? {'display':'none'} : {}}
                    type='submit'
                    value='back'
                    onClick={props.handleSecondSubmit}
                >Back
                </button>
                <button
                    className='back-next-button next-button'
                    type='submit'
                    value='next'
                    onClick={props.handleSecondSubmit}
                >Next
                </button>
            </div>
        </form>
    );
};


export default SurveySlideTwo;