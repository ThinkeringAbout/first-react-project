import './Friends.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {
    return (
        <div className='User__content mes_content'>
            <h2>Друзья</h2>
            <div className="Friends_list">
                {props.userBd.map(item => (
                  <NavLink to={"/id" + item.userId} className='Friends_box'>
                    <img className='Friends_img' src={item.userImgUrl} alt="avatar"></img>
                    <div className="Friends_box_text">
                      <p>{item.userName}</p>
                      <NavLink className="Friends_box_link" to={"/messages/" + item.userId}>Написать</NavLink>
                    </div>
                  </NavLink>
                ))}
                
            </div>
        </div>
    )
}

export default Friends;