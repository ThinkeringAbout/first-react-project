import './User-content.css'

function User_content (props) {
    return (
        <div className="User__content">
          <div className="User__pic">
            <img className="User__profile__pic" src={props.image} alt="kotya"></img>
          </div>
          <div className="User__info">
            <div className="User__container">
              <p className="User__label">Name:</p>
              <p className="User__name">{props.name}</p>
            </div>
            <div className="User__container">
              <p className="User__label">City:</p>
              <p className="User__city">{props.city}</p>
            </div>
            <div className="User__container">
              <p className="User__label">Date of birth:</p>
              <p className="User__date">{props.date}</p>
            </div>
            <div className="User__container info__container">
              <p className="User__label">About:</p>
              <p className="User__about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
          </div>
      </div>
    )
}

export default User_content;