import React, { Component } from 'react'

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      // Return the array of 'errors' property values and for each... 
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
      (val) => val.length > 0 && (valid = false)
      // Return false if any values are less than 0 characters long
    );
    return valid;
  }

class CreditCard extends Component {

constructor(props) {
    super(props);
    this.state = {
    title: "",
    number: "",
    cvc: "",
    selectMonth: "01",
    selectYear: "01",
    errors: {
        title: "",
        number: "",
        cvc: ""
        }
    };

    this.handleDropdownMonth = this.handleDropdownMonth.bind(this);
} // constructor

handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // Equivelant of:
    // let name = event.target.name;
    // let value = event.target.value; 
    // https://www.w3schools.com/react/react_forms.asp
    let errors = this.state.errors;
  
    switch (name) {
      case "title": 
        errors.title = 
          value.trim().length < 5 ? "Please enter the card holder's name which must be at least 5 characters long" : "";
        break;
      case "number": 
        errors.number = 
          !Number(value) ? "Uh Oh! This input accepts numerical values only!" : "";
        break; 
      case "cvc":
        errors.cvc = 
          !Number(value) ? "Uh Oh! This input accepts numerical values only!" : "";
        break;    
      default: 
        break;
    }
  
    this.setState({errors, [name]: value});
    // this.setState({disable: event.target.value === ''})
  } // handleChange
  
handleDropdownMonth = (event) => {
    this.setState({ selectMonth: event.target.value });
} // handleDropdownMonth

handleDropDownYear = (event) => {
    this.setState({ selectYear: event.target.value})
} // handleDropdownYear

handleSubmit = (event) => {
    event.preventDefault();
  } // handleSubmit
  
render() {
 const { errors } = this.state;
 return (
  <div>
    <form onSubmit={this.handleSubmit} noValidate>
     <select onChange={this.handleDropdownMonth}>
        <option value="01">01</option>
        <option value="02">02</option>
        <option value="03">03</option>
        <option value="04">04</option>
        <option value="05">05</option>
        <option value="06">06</option>
        <option value="07">07</option>
        <option value="08">08</option>
        <option value="09">09</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
     </select>
     <h1>{this.state.selectMonth}</h1>
     <select onChange={this.handleDropDownYear}>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
     </select>
     <h1>{this.state.selectYear}</h1>
     <input 
      type = "text"
      placeholder = "Name"
      name = "title"
      onChange = {this.handleChange}
      noValidate
     />
     {errors.title.length > 0 && 
        <span className='error'>{errors.title}</span>}
     {/* <h1>{this.state.title}</h1> */}
     <input
      type = "text"
      placeholder = "Card Number"
      name = "number" 
      maxLength = "16"
      onChange = {this.handleChange}
      noValidate
     />
     {errors.number.length > 0 && 
        <span className='error'>{errors.number}</span>}
     {/* <h1>{this.state.number}</h1> */}
     <input
      type = "text"
      placeholder = "CVC"
      name = "cvc"
      maxLength = "3"
      onChange = {this.handleChange}
      noValidate
     />  
     {errors.cvc.length > 0 && 
        <span className='error'>{errors.cvc}</span>}
     <button disabled={this.state.title.length < 2 || this.state.number.length < 2 || this.state.month.length < 2 || this.state.year.length < 2 || this.state.cvc.length < 2 ? true : false}>Submit</button>
    </form>
  </div>
  )
 }
}


export default CreditCard
