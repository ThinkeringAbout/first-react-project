import './Dialogue.css';
import userBd from '../userBd';
import React from 'react';
import randomQuote from '../userAnswers';




const Dialogue = (props) => {

    let newPostElement = React.createRef();

    function click() {
        if (newPostElement.current.value) {
            userBd[props.person.userId - 1].userMessage.push({
                userSender: "me", messageText: newPostElement.current.value
            });
            newPostElement.current.value ="";
            props.render();
            userBd[props.person.userId - 1].userMessage.push({
                userSender: props.person.userName, messageText: randomQuote()
            })
        }
    }

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            click();
        }
    }

    return (
        <div className='User__content dialogue_content'>
            <h2 className="Messages_title">Диалог c {props.person.userName}</h2>
            <div className="Dialogue_box">
                <div className="Dialogue_messages_box">
                {props.person.userMessage.map(item => (
                    <div className="Single_message">
                    <div className="Sender">
                        <p>{item.userSender}:</p>
                    </div>
                    <div className="Single_message_text">
                        <p>{item.messageText}</p>
                    </div>
                </div>
                ))}
                </div>
                <div className="Dialogue_input">
                    <input ref={newPostElement} className="message_input_text" type="text" placeholder='Сообщение' onKeyPress={handleKeyPress}></input>
                    <button className="send_button" type="submit" onClick={click}>S</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogue;