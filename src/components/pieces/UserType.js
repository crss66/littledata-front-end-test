function UserType(props){

    return (

        <div className="user-type-card">
            <img className='avatar-image' src={props.imgSrc} alt={props.name}/>
            <h2>{props.name}</h2>

            <p>{props.description}</p>

            <button

                onClick={props.onClick}

                value = {props.value}
            >

                Enter {props.name}

            </button>

        </div>
    );
}

export default UserType;