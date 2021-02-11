import React from 'react';
import './inputs.styles.scss';

function Inputs({input}) {
    return (
        <div className='inputs' key={input.id}>
                {
                    <div className='input-texts'>
                        <span className='input-text'>{input.firstName}</span>
                        <span className='input-text'>{input.lastName}</span>
                        <span className='input-text'>{input.qualification}</span>
                        <span className='input-text'>{input.dateOfBirth}</span>
                        <span className='input-text'>{input.martialStatus}</span>
                        <span className='input-text'>{input.hobby}</span>
                    </div>
                }
                <div className='input-buttons'>
                    <button className='btn' onClick={() => console.log('Edit')}>Edit</button>
                    <button className='btn' onClick={() => console.log('Update')}>Update</button>
                    <button className='btn' onClick={() => console.log('Delete')}>Delete</button>
                </div>
        </div>
    )
}

export default Inputs
