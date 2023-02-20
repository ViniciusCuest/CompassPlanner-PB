import { Loading } from "../Loading";
import { Container, Description, IconCircle } from "./styled";

import { RxCheck } from 'react-icons/rx';
import { BsExclamation } from 'react-icons/bs';
import { colors } from "../../global/theme";
import { useEffect } from "react";

export type Response = {
   active: boolean
   loading: boolean;
   success: boolean;
   error: boolean;
   message: string;
}

type Props = {
   active: boolean;
   response: Response;
   onClose: React.Dispatch<React.SetStateAction<Response>>;
   Noderef?: any;
}

export function Toast({ active, onClose, Noderef, response }: Props) {

   useEffect(() => {
      if (response.success || response.error) {
         setTimeout(() => {
            onClose({
               active: false,
               loading: false,
               success: false,
               error: false,
               message: ''
            });
         }, 1500);
      }

   }, [response.success, response.error]);

   return (
      <Container
         ref={Noderef}
         active={active}
      >
         {
            response.loading &&
            <Loading
               style={response.loading ? {
                  opacity: 1
               } : { opacity: 0 }}
            />

         }
         {
            response.success &&
            <IconCircle
               style={
                  response.success ? {
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
            response.error &&
            <IconCircle
               style={
                  response.error ? {
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
            {
               response.message
            }
         </Description>
      </Container>
   );
}