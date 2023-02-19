import { Loading } from "../Loading";
import { Container, Description, IconCircle } from "./styled";

import { RxCheck } from 'react-icons/rx';
import { BsExclamation } from 'react-icons/bs';
import { colors } from "../../global/theme";


type Props = {
   loading: boolean;
   success: boolean;
   error: boolean;
   message?: string;
}

export function Toast() {
   let loading = true;
   let success = false;
   let error = false;
   return (
      <Container active={true}>
         {
            loading &&
            <Loading
               style={loading ? {
                  opacity: 1
               } : { opacity: 0 }}
            />

         }
         {
            success &&


            <IconCircle
               style={
                  success ? {
                     backgroundColor: colors.green_success,
                     opacity: 1
                  } :
                     { opacity: 0 }
               }
            >
               <RxCheck color={colors.white} size={34} />
            </IconCircle>

         }
         {
            error &&

            <IconCircle
               style={
                  error ? {
                     backgroundColor: colors.red,
                     opacity: 1
                  } :
                     {
                        opacity: 0
                     }
               }
            >
               <BsExclamation color={colors.white} size={36} />
            </IconCircle>

         }
         <Description>

         </Description>
      </Container>
   );
}