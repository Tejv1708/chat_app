// src/components/ChatApp.js
import React, { useState } from 'react';

const Chats = () => {
    const [ text, setText ] = useState( '' );
    const [ messages, setMessages ] = useState( [
        { text: "Hello!", sender: "other" },
        { text: "Hi, how are you?", sender: "me" },
        { text: "I'm good, thanks!", sender: "other" },
        { text: "Great to hear!", sender: "me" }
    ] );

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( text.trim() !== '' ) {
            setMessages( [ ...messages, { text, sender: "me" } ] );
            setText( '' );
        }
    };

    return (
        <div className="flex flex-col w-full h-full p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex-1 overflow-y-auto mb-4">
                { messages.map( ( message, index ) => (
                    <div
                        key={ index }
                        className={ `p-2 my-2 rounded-lg ${ message.sender === "me" ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-gray-700 self-start' }` }
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

export default Chats;
