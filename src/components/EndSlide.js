import LittleDataMeditation from '../assets/img/Shopify_meditation.png'

function EndSlide(props){
    return(
        <main>
            <div>
                <h2 className='final-slide-header'>
                    LittleData App
                </h2>
            </div>
            <div>
                <img className='final-slide-img' src={LittleDataMeditation} alt='Meditation'/>
            </div>
            <div>
                <button
                    className='final-slide-button'
                    onClick = {props.onClick}
                >
                    GO BACK TO START
                </button>
            </div>
        </main>
    );
};


export default EndSlide;