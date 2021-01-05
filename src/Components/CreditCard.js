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
    title: null,
    number: null,
    month: null,
    year: null,
    cvc: null,
    errors: {
        title: "",
        number: "",
        month: "",
        year: "",
        cvc: ""
        }
    };
    } // constructor

// typeOfNaN = (event) => 
//     event.preventDefault(); 
//     if (Number.isNaN()) {
//         return "Number NaN";
//     } 
//     if (isNaN()) {
//         return "NaN";
//     }



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
          value.trim().length < 5 ? "Your card name must be at least 5 characters long" : "";
        break;
      case "number": 
        errors.title = 
          value.trim().length < 16 ? "Card number must be 16 digits long" : "";
        break;
      case "month": 
        errors.month = 
          value.
        //   value.length < 2 ? "Wrong input muppet" : "";
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value});
  } // handleChange

handleSubmit = (event) => {
    event.preventDefault();
  }
  
render() {
 const { errors } = this.state;
 return (
  <div>
    <form onSubmit={this.handleSubmit} noValidate>
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
      name = "month"
      placeholder = "MM"
      maxLength = "2"
      size = "3"
      onChange = {this.handleChange}
      noValidate
     />  
     {errors.month.length > 0 && 
        <span className='error'>{errors.month}</span>}
     <span>/</span>
     <input
      type = "text"
      name = "year"
      placeholder = "YY"
      maxLength = "2"
      size = "3"
      onChange = {this.handleChange}
      noValidate
     />
     <input
      type = "text"
      placeholder = "CVC"
      name = "cvc"
      maxLength = "3"
      onChange = {this.handleChange}
      noValidate
     />  
     <button type = "submit">Submit</button>
    </form>
  </div>
  )
 }
}


export default CreditCard
