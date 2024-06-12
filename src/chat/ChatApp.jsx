// src/components/ChatApp.js
import React, { useEffect, useState } from 'react';
import socket from '../socket';

const ChatApp = () => {
    const [ text, setText ] = useState( '' );
    const [ messages, setMessages ] = useState( [] );

    useEffect( () => {
        socket.on( 'chat message', ( message ) => {
            setMessages( [ ...messages, { text: message } ] );
        } );
        return () => {
            socket.off( 'chat message' );
        };
    }, [ messages ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( text.trim() !== '' ) {
            socket.emit( 'chat message', text );
            setText( '' );
        }
    };

    return (
        <div className="flex flex-col w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex-1 overflow-y-auto mb-4">
                { messages.map( ( message, index ) => (
                    <div
                        key={ index }
                        className={ `text-white p-2 my-2 rounded-lg message ${ index % 2 === 0 ? 'bg-blue-500' : 'bg-gray-700'
                            }` }
                    >
                        { message.text }
                    </div>
                ) ) }
            </div>
            <form onSubmit={ handleSubmit } className="flex">
                <input
                    type="text"
                    value={ text }
                    onChange={ ( e ) => setText( e.target.value ) }
                    className="flex-1 border border-gray-300 rounded-full px-4 py-2 outline-none"
                    placeholder="Type your message..."
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ml-2"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ChatApp;
