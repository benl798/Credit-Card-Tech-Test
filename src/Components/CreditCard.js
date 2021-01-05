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
    month: "",
    year: "",
    cvc: "",
    selectMonth: "",
    selectYear: "",
    errors: {
        title: "",
        number: "",
        month: "",
        year: "",
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
          value.trim().length < 5 ? "Your card name must be at least 5 characters long" : "";
        break;
      case "number": 
        errors.number = 
          value.trim().length < 16 || !Number(value) ? "Card number must be 16 digits long and a number" : "";
        break;
      case "month":
        errors.month = 
          value.trim().length < 2 || !Number(value) ? "This input accepts numerical values only, please enter a valid date" : "";
        break;
      case "year":
        errors.year = 
          value.trim().length < 2 || !Number(value) ? "This input accepts numerical values only, please enter a valid date" : "";
        break;  
      case "cvc":
        errors.year = 
          value.trim().length < 3 || !Number(value) ? "This input accepts numerical values only, please enter a valid date" : "";
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
     {errors.year.length > 0 && 
        <span className='error'>{errors.year}</span>}
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
