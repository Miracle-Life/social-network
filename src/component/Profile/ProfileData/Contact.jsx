import React from 'react';

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div className='px-4 '>
            {/*<b>{contactTitle}</b> : {!contactValue? 'null':contactValue} */}
             <p className="fw-normal"><b>{contactTitle}:</b> {!contactValue? 'null':contactValue}</p>
        </div>

    );
};

export default Contacts;
