import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsReduxForm from './DialogsForm';


const Dialogs = (props) => {
    const addNewMessage = (values) => {
        props.addMessage(values.message);
    } 

    let dialogsElements = props.dialogsPage.dialogs.map(el => {
        return <DialogItem key={el.id} name={el.name} id={el.id} />
    })

    let messagesElements = props.dialogsPage.messages.map(el => {
        return <Message key={el.id} message={el.message} />
    })

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div>{messagesElements}</div>
                    <DialogsReduxForm onSubmit={addNewMessage} />
                </div>
            </div>
            
        </div>
    )
}

export default Dialogs;