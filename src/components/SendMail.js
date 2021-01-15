import React from 'react';
import './SendMail.css';

import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';

import {useForm} from "react-hook-form";

import {closeSendMessage} from '../features/mailSlice';
import { useDispatch } from 'react-redux';

import db from '../firebase';
import firebase from 'firebase';

function SendMail() {

    const dispatch = useDispatch();

    const {register, handleSubmit, watch, errors} = useForm();

    const onSubmit = (formData) => {
        // console.log(formData);

        db
        .collection("emails")
        .add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeSendMessage());
    };


    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon 
                    className="sendMail__close" 
                    onClick={() => dispatch(closeSendMessage())}     
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name='to'
                    type="email"
                    placeholder="To"
                    ref={register({required: true})} 
                />

                {errors.to && <p className="sendMail__error">Recipient is required !</p>}

                <input 
                    name='subject'
                    type="text"
                    placeholder="Subject"
                    ref={register({required: true})} 
                />

                {errors.subject && <p className="sendMail__error">Subject is required !</p>}

                <div className="sendMail__message" >
                    <input
                        name='message' 
                        type="text"
                        placeholder="Message"
                        ref={register({required: true})}
                    />

                    {errors.message && <p className="sendMail__error">Message cannot be empty !</p>}
                </div>

                <div className="sendMail__options">
                    <Button 
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
