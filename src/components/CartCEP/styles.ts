import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Container = styled.div`
  padding: 20px;

  .iconAndFreightage {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }

  .iconAndPrice {
    display: flex;
    justify-content: space-between;
  }
`;

export const InputContainer = styled.div<{ fadeOut: boolean }>`
  margin-top: 10px;
  animation: ${({ fadeOut }) => (fadeOut ? fadeOutAnimation : slideUp)} 0.3s ease-in-out;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
  }
`;
