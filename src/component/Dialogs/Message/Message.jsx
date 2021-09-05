import React from 'react';

export const Message = ({message, id}) => (
    <div>
        <ul className="list-group ">
            <li className="list-group-item list-group-item-info ">{id} - {message}</li>
        </ul>
    </div>
)


