import styled from "styled-components";

export const LeftSection = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 80%; /* Adjust width for smaller screens */
    display: flex;
    flex-direction: column;
    margin: 0 auto; /* Center the content */
  }
`;
