import styled from "styled-components";

export const Container = styled.section`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;
   user-select: none;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
`

export const Image = styled.img`
   position: relative;
   width: 100%;
   height: 100vh;
   object-fit: cover;
   pointer-events: none;
`;

export const UolImage = styled.img`
   position: absolute;
   bottom: 0;
   right: 0;
`;

export const Logo = styled.img`
   position: fixed;
   top: 0;
   margin-top: 36px;
   height: 66px;
   z-index: 10;
   cursor: pointer;
`;