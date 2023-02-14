import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Container = styled.header`
   position: fixed;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   top: 0;
   height: 130px;
   padding-right: 25px;
   width: 100%;
   background-color: ${colors.white};
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.1);
   z-index: 5;
`;

export const Badge = styled.div`
   width: 588px;
   border-radius: 0px 14px 15px 0px;
   padding: 12px 0px 0 24px;
   justify-self: flex-start;
   background-color: ${colors.black};
`

export const DateTime = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
export const Hour = styled.time`
   font-size: 40px;
   font-weight: ${fonts.extra};
   color: ${colors.gray800};
`;

export const Date = styled.time`
   font-size: 20px;
   font-weight: ${fonts.regular};
   color: ${colors.gray800};
`;

export const LocationTemperature = styled.section`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   font-size: 48px;
   font-weight: ${fonts.bold};
   color: ${colors.gray800};
`

export const Logout = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: flex-end;
`;

export const City = styled.span`
   font-size: 14px;
   font-weight: ${fonts.regular};
`;

export const Logo = styled.img`
   height: 24px;
`;

export const LogoutButton = styled.button`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin-top: 10px;
   font-size: 17px;
   background: none;
   outline: none;
   border: 0;
   padding: 0;
   cursor: pointer;
`;

export const Icon = styled.img`
   height: 34px;
   margin-bottom: -5px;
   margin-right: 15px;
`