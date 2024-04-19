/* eslint-disable react/prop-types */
import { ButtonBack, ButtonFront } from ".";

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
