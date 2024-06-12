import { useState } from 'react';
import ChatApp from '../../chat/ChatApp.jsx';
import Sidebar from '../../chat/Sidebar.jsx';
import Chats from './Chats.jsx';



function UserChat() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-hidden">
                    <Chats />
                </div>
            </div>
        </div>
    );
}

export default UserChat;