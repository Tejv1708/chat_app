import React from 'react';
import UserListing from './UserListing';

function Sidebar() {
    return (
        <div className="w-1/6 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
            <UserListing />
        </div>
    );
}

export default Sidebar;
