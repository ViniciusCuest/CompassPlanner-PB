import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Title = styled.h1`
   font-size: 3.75em;
   font-weight: ${fonts.regular};
   color: ${colors.secondary_text};
   line-height: 0;
`

export const Description = styled.p`
   font-size: 1em;
   font-weight: ${fonts.regular};
   color: ${colors.secondary_text};
   margin-top: 6px;
`;