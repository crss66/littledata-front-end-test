import UserType from './pieces/UserType.js';
import JohnImg from '../assets/img/John.png';
import ClaireImg from '../assets/img/Claire.png';
import PaulImg from '../assets/img/Paul.png';
// import './assets/css/App.css';

function FirstSlide(props) {
    return (
      <div className="first-slide">

        <header className="first-slide-header">
          <h2>Littledata Welcome Flow Test</h2>
        </header>

        <main className='user-box'>
          <UserType
            imgSrc={JohnImg} 
            name = 'John'
            description = 'John is a new customer for littledata. We want him to go through the full survey so that we can properly setup his account. '
            value = 'new'
            onClick = {props.onClick}
          />
          <UserType
            imgSrc={ClaireImg}  
            name = 'Claire'
            description = 'Claire was invited by John to her account. We only want her to answer a few quick questions and that’s it. '
            value = 'recommended'
            onClick = {props.onClick}
            />
          <UserType
            imgSrc={PaulImg}  
            name = 'Paul'
            description = 'Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the FirstSlide. '
            value = 'regular'
            onClick = {props.onClick}
            />
        </main>
      </div>
    );
  };
  
  export default FirstSlide;
  