import ButtonWrapper from "./Button.style.jsx";

const Button = ({ children, ...props }) => {
    return (
        <ButtonWrapper {...props}>
            {children}
        </ButtonWrapper>
    );
}

export default Button;