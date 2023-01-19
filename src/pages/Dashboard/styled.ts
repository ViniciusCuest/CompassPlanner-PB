import styled from "styled-components";

export const ActionArea = styled.form`
   display: flex;
   width: 100%;
   flex-direction: row;
   justify-content: space-between;
   margin-top: calc(130px + 35px);
   padding: 0 20px;
`;

export const WrapperItem = styled.section`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const Icon = styled.img`
   width: 16px;
`;

export const TableWrapper = styled.div`
   height: 100%;
   overflow: scroll;
   transform: rotateX(180deg);
   margin-top: 20px;
`;