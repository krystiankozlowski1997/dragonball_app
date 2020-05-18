import styled from 'styled-components';

const Button = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  letter-spacing: 0.16em;
  font-weight: 300;
  font-size: 1.6rem;
  text-transform: uppercase;
  box-shadow: rgba(0, 63, 126, 0.54) 0px 10px 27px;
  opacity: 1;
  color: rgb(255, 255, 255);
  width: 15rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: none ${({secondary, color, theme}) => secondary ? theme.secondary : theme[color]};
  padding: 1rem 1.7rem 0.9rem;
  transition: transform 0.15s ease-out 0s, box-shadow 0.15s ease-out 0s;
  &:hover{
      box-shadow: rgba(0, 63, 126, 0.54) 0px 18px 40px;
      transform: scale(1.05);
  }
`;

export default Button;
