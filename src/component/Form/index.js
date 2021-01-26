import React from "react";
import { FormGroup, InputGroup , Classes } from "@blueprintjs/core";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./styles.css";

export default class Form extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  };

  handleInputFocus = (event) => {
    this.setState({ focus: event.target.name });
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <Cards className="custom-card"
          number={this.state.number}
          name={this.state.name}
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
        />

        <FormGroup 
        labelFor="text-input"
        className="my-custom-class-form"
        >
          <InputGroup
            maxLength={16}
            type="tel"
            id="number"
            name="number"
            placeholder="Card Number"
            // disabled={true}
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <small>E.g.: 49..., 51..., 36..., 37...</small>

          <InputGroup
            maxLength={300}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="my-custom-class-input"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />

          <div class="exp-cvc-input">
            <InputGroup
              maxLength={4}
              type="tel"
              id="expiry"
              name="expiry"
              placeholder="expiry"
              className="my-custom-class-input"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <InputGroup
              maxLength={3}
              type="tel"
              id="cvc"
              name="cvc"
              placeholder="cvc"
              className="my-custom-class-input"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
        </FormGroup>
      </div>
    );
  }
}
