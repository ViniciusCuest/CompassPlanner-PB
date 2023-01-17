import { Input, Select, Option } from "./styled";

type Props = {
   placeholder?: string;
   type: React.HTMLInputTypeAttribute;
   options?: string[];
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
                        return (
                           <Option key={_}>
                              {
                                 item
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