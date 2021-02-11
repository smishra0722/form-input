import React from 'react';
import './inputs.styles.scss';

import {connect} from 'react-redux';
import {removeInput} from '../../redux/input-data/input-data.action';



function Inputs({input, removeInput}) {
    return (
        <div className='inputs' key={input.id}>
                {
                    <div className='input-texts'>
                        <span className='input-text'>{input.firstName}</span>
                        <span className='input-text'>{input.lastName}</span>
                        <span className='input-text'>{input.qualification}</span>
                        <span className='input-text'>{input.dateOfBirth}</span>
                        <span className='input-text'>{input.martialStatus}</span>
                        <span className='input-text'>{input.selectedRadio}</span>
                    </div>
                }
                <div className='input-buttons'>
                    <button className='btn' onClick={() => console.log('Edit')}>Edit</button>
                    <button className='btn' onClick={() => console.log('Update')}>Update</button>
                    <button className='btn' onClick={() => removeInput(input.id)}>Delete</button>
                </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => ({
    removeInput: (id) => dispatch(removeInput(id))
});
export default connect(null, mapDispatchToProps)(Inputs);
