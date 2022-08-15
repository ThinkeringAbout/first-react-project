import './Messages.css';
import { NavLink } from 'react-router-dom';
import userBd from '../userBd';


const MessageItem = (props) => {
    return (
        <NavLink className='Message_box' to={'/messages/' + props.id}>
            <div className="Message_user">
                <p>{props.username}</p>
            </div>
            <div className="Message_message">
                <p>{props.usersend}: {props.userMessage}</p>
            </div>
        </NavLink>
    )
}

function Messages() {
    return (
        <div className='User__content mes_content'>
            <h2 className="Messages_title">Диалоги</h2>
            <div className="Messages_content">
            {userBd.map(item => (
                  <MessageItem 
                    username={item.userName}
                    usersend={item.userMessage[item.userMessage.length - 1].userSender}
                    userMessage={item.userMessage[item.userMessage.length - 1].messageText}
                    id={item.userId}
                  />
                ))}
            </div>
        </div>
    )
}

export default Messages;