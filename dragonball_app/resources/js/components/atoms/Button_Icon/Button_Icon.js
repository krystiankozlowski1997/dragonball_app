import styled from 'styled-components';

const Button_Icon = styled.button`
  display: block;
  width: 67px;
  height: 67px;
  border-radius: 20px;
  background-image: url(${({icon}) =>
    icon
  });
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 110%;
  border: none;
  background-color: ${({active}) => active ? 'white' : 'transparent'};
  &.active {
    background-color: white;
  }
`;

export default Button_Icon;

