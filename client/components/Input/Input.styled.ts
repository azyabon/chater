import styled from "@emotion/styled";

export const FormItem = styled.div`
  margin: 1.5rem 0;
`;
export const Label = styled.label``;
export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
  outline: none;
  font-size: 1rem;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  &:focus {
    border: 1px solid #008cff;
  }
  ::placeholder {
    opacity: 0.5;
  }
`;
