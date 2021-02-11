import React from 'react'
import './input-form.styles.scss';

//Redux import
import {connect} from 'react-redux';
import {storeInput} from '../../redux/input-data/input-data.action';

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            firstName: '', 
            lastName: '', 
            qualification: '',
            dateOfBirth: '', 
            martitalStatus: '', 
            hobby: ''
        }    
    }
    //First name- text
    //Middle Name - text
    //Qualification - dropdown
    //DOB - Date
    //Martial Status - Dropdown
    //Hobby - Checkbox
    handleSubmit = (e) => {
        const {storeInput} = this.props;
        storeInput(this.state);
        e.preventDefault();
        this.setState({firstName: '', lastName: '', qualification: '', dateOfBirth: '', martialStatus: '', hobby: ''});
    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value, id: Math.floor(Math.random()*1000)});
        console.log(this.state);
    }
    render() {
        const {inputs} = this.props;
        const {
            firstName, lastName, dateOfBirth, martialStatus, qualification
        } = this.state;
        return (
            <div className='input-form'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='group'>
                        <label className='form-input-label'>First Name:</label>
                        <input type='text' name='firstName' className='form-input' value={firstName} onChange={this.handleChange} required />
                    </div>
                    <div className='group'>
                        <label className='form-input-label'>Last Name:</label>
                        <input type='text' name='lastName' className='form-input' value={lastName} onChange={this.handleChange} required />
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Qualifications:</label>
                        <select className='form-input' name='qualification' onChange={this.handleChange} value={qualification}>
                            <option value=''>--Select--</option>
                            <option value='BscIt'>BscIt</option>
                            <option value='BCA'>BCA</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Date of Birth:</label>
                        <input type='date' className='form-input' name='dateOfBirth' onChange={this.handleChange} value={dateOfBirth} />
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Martial Status:</label>
                        <select className='form-input' name='martialStatus' onChange={this.handleChange} value={martialStatus}>
                            <option value=''>--Select--</option>
                            <option value='Married'>Married</option>
                            <option value='UnMarried'>UnMarried</option>
                        </select>
                    </div>
                    <div className='dropdown'>
                        <label className='form-input-label'>Hobbies:</label>
                        <input type='radio' name='hobby' value='music' onChange={this.handleChange} /> Music
                        <input type='radio' name='hobby' value='book reading' onChange={this.handleChange} /> Book Reading
                    </div>
                    <button className='submit-button' type='submit'>Submit</button>
                    
                </form>   
                     
            </div>
        )
    }
    
}
const mapDispatchToProps = (dispatch) => ({
    storeInput: (input) => dispatch(storeInput(input))
});
export default connect(null, mapDispatchToProps)(InputForm);
