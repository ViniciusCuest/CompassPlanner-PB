import styled from "styled-components";

export const Container = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;
   pointer-events: none;
   user-select: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
`

export const Image = styled.img`
   position: relative;
   width: 100%;
`;

export const Logo = styled.img`
   position: absolute;
   top: 0;
   margin-top: 36px;
   height: 66px;
   z-index: 5;
`;