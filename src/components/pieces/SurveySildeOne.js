import Logo from './../../assets/img/Littledata-Logo.svg';

function SurveySlideOne (props) {
    
    return (
        <form className="survey-form">
            <div className="survey-form-inside">
                <div className='logo-container'>
                    <img className='logo-littledata' src={Logo} alt='logo-littledata'/>
                </div>
                <div className='slide-header'>
                    <h2>Welcome to Littledata</h2>
                    <div className='progress-bar-container'>
                        <div className='progress-bar-inside'>
                        
                        </div>
                    </div>
                </div>
            
                <div>
                    <h4 className='label-input'>Store name</h4>
                    <input
                        className='input-text'
                        value={props.storeName} 
                        onChange = {props.handleChange}
                        name = 'storeName'
                        type = 'text' 
                        placeholder = 'Your Store Name'
                        required
                        />
                </div>
                <div>
                    <h4 className='label-input'>Store URL</h4>
                    <input
                        className='input-text'
                        value={props.storeURL}
                        onChange = {props.handleChange}
                        name = 'storeURL' 
                        type = 'text' 
                        placeholder = 'yourstore.myshopify.com'
                        required
                        />
                </div>
                <div className='box-email-notifications'>
                    <h4 className='label-input'>Email Notifications</h4>
                    <input
                        className='input-text'
                        value={props.email} 
                        onChange = {props.handleChange}
                        name = 'email'
                        type = 'email' 
                        placeholder = 'jane@yourstore.com'
                        required
                        />
                    <div>
                        <input
                            value={props.notificationsCheckbox}
                            id='notifications-checkbox' 
                            onChange = {props.handleChange}
                            name = 'notificationsCheckbox'
                            type = 'checkbox' />
                        <label htmlFor='notifications-checkbox'>Send me all the important app notifications on this email</label>
                    </div>
                </div>
                <div>
                    <button
                        className='back-next-button next-button'
                        onClick = {props.handleFirstSubmit}
                        type = 'submit'
                    >
                        Next
                    </button>
                </div>
            </div>
        </form>
    );

}

export default SurveySlideOne;