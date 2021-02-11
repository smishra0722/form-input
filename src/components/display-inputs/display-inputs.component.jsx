import React from 'react'
import './display-inputs.styles.scss';

//redux import 
import {connect} from 'react-redux';
import Inputs from '../inputs/inputs.components';

function DisplayInputs({inputs}) {

    return (
        <div className='display-inputs'>
            {
                inputs.length > 0?inputs.map(input => <Inputs input={input} />): <div className='empty-inputs'>NO Records</div>
            }
        </div>
    )
}
const mapStatsToProps = (state) => ({
    inputs: state.inputData.inputData
})
export default connect(mapStatsToProps)(DisplayInputs)
