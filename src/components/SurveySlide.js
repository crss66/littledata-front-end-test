import React from 'react';
import BoxPattern from './pieces/BoxPattern';
import SurveySlideOne from './pieces/SurveySildeOne';
import SurveySlideTwo from './pieces/SurveySlideTwo';
import SurveySlideThree from './pieces/SurveySildeThree';

class SurveySlide extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            surveyCompleted: false,
            userType: this.props.userType,
            shopify: null,
            inputData : {},
            backupInputData: {}
            
        };

        this.handleChange       = this.handleChange.bind(this);
        this.handleFirstSubmit  = this.handleFirstSubmit.bind(this);
        this.handleSecondSubmit  = this.handleSecondSubmit.bind(this);
        this.handleThirdSubmit  = this.handleThirdSubmit.bind(this);


    };
    
    handleChange(e) {


        let name = e.target.name;
        let value = e.target.value;
        let existingData = this.state.inputData;

        if(name === 'notificationsCheckbox'){
            existingData[`${name}`] = e.target.checked;
        } else {
            existingData[`${name}`] = value;
        }

        

        this.setState({
            inputData : existingData
        });
    };


    handleFirstSubmit(e) {

        if(Object.keys(this.state.inputData).length === 0 && typeof this.state.inputData === 'object') {
            console.log('nu');
            return false;
        } 

        e.preventDefault();
       
        let regex = /myshopify\.com$/;
        let storeURL = this.state.inputData.storeURL;
        let existingData = this.state.inputData;

        if(regex.test(storeURL)){

            this.setState({
                shopify: true
            });
        } else {
            this.setState({
                shopify: false
            });
        }

        this.setState({
            backupInputData : existingData,           
        });
        
    };

    handleSecondSubmit(e) {
        e.preventDefault();

        if(e.target.value === 'next') {
            
            this.setState({
                surveyCompleted: true
            });
            
            if(this.state.shopify === false || this.state.userType === 'recommended') {
                this.props.handleShowApp(true);
            };
        };
     
        if(e.target.value === 'back') {

            let backupInputData = this.state.backupInputData;

            this.setState({
                inputData : backupInputData,
                shopify: null
            });

        };

        
        console.log(this.state.inputData);
    }

    handleThirdSubmit(e) {
        console.log(e.target.value);

        this.props.handleShowApp(true);

        e.preventDefault();
    }

    render() {
        if (this.state.userType === 'new' && 
            this.state.surveyCompleted === true && 
            this.state.shopify === true) {
 
            return (
                <main className='survey-container'>
                    <BoxPattern />   
                    <SurveySlideThree
                        handleThirdSubmit = {this.handleThirdSubmit}
                    />
                </main>
            );
        } else if (this.state.userType === 'new' && this.state.shopify !== null && this.state.surveyCompleted === false ||
                   this.state.userType === 'recommended'){

            return(
                <main className='survey-container'>
                    <BoxPattern />   
                    <SurveySlideTwo 
                        handleChange       = {this.handleChange}
                        handleSecondSubmit = {this.handleSecondSubmit}
                        userType           = {this.state.userType}
                    />
                </main>
            );

        }else if(this.state.userType === 'new' && this.state.shopify === null && this.state.surveyCompleted === false) {

            return (
                <main className='survey-container'>
                    <BoxPattern />   
                    <SurveySlideOne 
                        handleChange      = {this.handleChange}
                        handleFirstSubmit = {this.handleFirstSubmit}
                        storeName                 = {this.state.inputData.storeName             ? this.state.inputData.storeName             : ''}
                        storeURL                  = {this.state.inputData.storeURL              ? this.state.inputData.storeURL              : ''}
                        email                     = {this.state.inputData.email                 ? this.state.inputData.email                 : ''}
                        notificationsCheckbox     = {this.state.inputData.notificationsCheckbox ? this.state.inputData.notificationsCheckbox : ''}
                    />
                </main>
            );
        }  
    };
};


export default SurveySlide;