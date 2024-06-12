import React from 'react';
import { Link } from 'react-router-dom';

const UserListing = () => {
    // Dummy list of 20 users with images
    const users = Array.from( { length: 20 }, ( v, k ) => ( {
        username: `User ${ k + 1 }`,
        img: `https://via.placeholder.com/40?text=U${ k + 1 }`
    } ) );

    return (
        <div className="w-full mt-4">
            <h2 className="text-xl font-bold mb-4">Users</h2>
            <ul className="space-y-2 w-full">
                { users.map( ( user, index ) => (
                    <li key={ index } className="flex items-center space-x-3 p-2 rounded-md bg-gray-700 hover:bg-gray-600 w-full">
                        <img
                            src={ user.img }
                            alt={ `${ user.username }'s avatar` }
                            className="w-10 h-10 rounded-full"
                        />
                        <Link
                            href={ `/chat/${ user.username }` }
                            className="text-white hover:text-gray-300"
                        >
                            { user.username }
                        </Link>
                    </li>
                ) ) }
            </ul>
        </div>
    );
};

export default UserListing;
