import styled, { keyframes } from "styled-components";

const dropdownAnimation = keyframes`
  0% {
    transform: scaleY(0)
  }
  100% {
    transform: scaleY(1)
  }
`
export const DropdownWrapper = styled.div`
  position: relative;
`;

export const GradientButton = styled.div`
  width: calc(240px - 18px);
  cursor: pointer;
  color: #bac1cc;
  font-weight: 600;
  padding: 9px;
  user-select: none;
  line-height: 16px;
  font-size: 14px;
  font-family: "sofia-sans", sans-serif;
  position: relative;
  background-color: #2b2c36;
  text-transform: uppercase;
  background-color: rgba(52, 196, 246, 0.1);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 4px; 
    padding: 1px;
    background: linear-gradient(to right, #54f4df, #2ab6fd); 
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

export const DropdownButton = styled.button`
  color: #bac1cc;
  outline: none;
  width: 240px;
  font-weight: 600;
  padding: 9px;
  line-height: 16px;
  font-size: 14px;
  font-family: "sofia-sans", sans-serif;
  background-color: rgba(52, 196, 246, 0.1);
  border-radius: 4px;
  text-transform: uppercase;
  border: 1px solid transparent;
  background-color: #2b2c36;
  &:focus {
    border-image: linear-gradient(to right, #54f4df, #2ab6fd) 1;
    background-color: rgba(52, 196, 246, 0.1);
  }
  &:hover {
    border-image: linear-gradient(to right, #54f4df, #2ab6fd) 1;
    background-color: rgba(52, 196, 246, 0.1);
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 42px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(71, 194, 233, 0.18);
  border-bottom: 0;
  animation: ${dropdownAnimation} .2s ease-in-out forwards;
  transform-origin: top center;
`;

export const DropdownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 24px;
  color: #bac1cc;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 16px;
  font-size: 14px;
  background: #2b2c36;
  border-bottom: 1px solid rgba(186, 193, 204, 0.1);
  transition: all 0.2s ease;
  &:hover {
    color: white;
  }
`;

