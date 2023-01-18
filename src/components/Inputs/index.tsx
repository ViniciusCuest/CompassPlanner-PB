import { Input, Select, Option } from "./styled";
import { ObjDays } from "../../pages/Dashboard";

type Props = {
   placeholder?: string;
   type: React.HTMLInputTypeAttribute;
   options?: ObjDays;
   style?: React.CSSProperties;
}

export function Inputs({ type, placeholder, options, style }: Props) {
   return (
      <>
         {
            type === 'select' ?
               <Select>
                  {
                     options?.map((item, _) => {
                        console.log(item);
                        return (
                           <Option key={_}>
                              {
                                 item.day
                              }
                           </Option>
                        );
                     })
                  }
               </Select> :
               <Input type={type} placeholder={placeholder} style={style} />
         }
      </>
   )
}