import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
      transition: 0.2s;
      border-radius: 3px;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: none;
    
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;
    border: none;

    &:hover {
      background-color: white;
      color: #3578e8;
      border: 1px solid #3578e8;
      transition: 0.2s;
      border-radius: 3px;
    }
`;

const shopButtonStyles = css`
  width: 80%;
  position: absolute;
  top: 255px;
  opacity: 0.9;
`;
 
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
 
  if (props.shopButton) {
    return { shopButtonStyles, invertedButtonStyles };
  }
 
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Abel', sans-serif;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 3px;
    display: flex;
    justify-content: center;

    ${getButtonStyles}    
`;  