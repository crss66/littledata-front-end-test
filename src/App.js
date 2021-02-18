import React from 'react';
import FirstSlide from './components/FirstSlide.js';
import SurveySlide from './components/SurveySlide.js';
import EndSlide from './components/EndSlide';
import './assets/css/App.css';

class App extends React.Component {
  
  constructor(props) {

    super(props);
    
    this.state = {
      userType: null,
      showApp: false 
    };

    this.handleUserType = this.handleUserType.bind(this);
    this.handleShowApp  = this.handleShowApp.bind(this);
    this.handleEndSlide = this.handleEndSlide.bind(this);
  }

  handleShowApp(showApp){
    if(showApp  === true){
      this.setState({
        showApp: true
      });
    };
  };

  handleUserType(e) {
    this.setState({
      userType: e.target.value
    });

  };

  handleEndSlide() {
    this.setState({
      showApp: false,
      userType: null
    })
  }
  render() {
    if(this.state.userType === null) {
      return (

        <FirstSlide 
          onClick = {this.handleUserType}
        />

      );
    } else if(this.state.showApp === true || this.state.userType === 'regular') {
      return (

        <EndSlide 
          onClick={this.handleEndSlide}
        />

      );
      

    } else if(this.state.userType !== null) {
      return (

        <SurveySlide 
          userType = {this.state.userType}
          handleShowApp = {this.handleShowApp}
        />

      );
    };
  };
};

export default App;
