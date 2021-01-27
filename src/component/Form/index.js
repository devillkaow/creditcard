import React, { useEffect, useState } from "react";
import { FormGroup, InputGroup } from "@blueprintjs/core";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./styles.css"

function Input() {
  const [state, setState] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: ""
  });
  console.log(state);
  const handleInputFocus = (event) => {
    setState({ ...state, focus: event.target.name });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div className="container">
      <Cards
        className="custom-card"
        number={state.number}
        name={state.name}
        cvc={state.cvc}
        expiry={state.expiry}
        focused={state.focus}
      />

      <FormGroup labelFor="text-input" className="my-custom-class-form">
        <InputGroup
          maxLength={16}
          type="tel"
          id="number"
          name="number"
          placeholder="Card Number"
          // disabled={true}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <small>E.g.: 49..., 51..., 36..., 37...</small>

        <InputGroup
          maxLength={300}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          className="my-custom-class-input"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <div class="exp-cvc-input">
          <InputGroup
            maxLength={4}
            type="tel"
            id="expiry"
            name="expiry"
            placeholder="expiry"
            className="my-custom-class-input"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />

          <InputGroup
            maxLength={3}
            type="tel"
            id="cvc"
            name="cvc"
            placeholder="cvc"
            className="my-custom-class-input"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </FormGroup>
    </div>
  );
}

export default Input;
