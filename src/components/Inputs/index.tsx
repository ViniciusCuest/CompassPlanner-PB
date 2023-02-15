import { Input, Select, Option } from "./styled";
import { ObjDays } from "../../pages/Dashboard";

type Props = {
   placeholder?: string;
   type: React.HTMLInputTypeAttribute;
   options?: ObjDays;
   style?: React.CSSProperties;
   value?: string;
   reference?: any;
   onChange?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const REGEX = "([01]?[0-9]|2[0-3]):[0-5][0-9]";

export function Inputs({ type, placeholder, options, style, reference, onChange, value }: Props) {
   return (
      <>
         {
            type === 'select' ?
               <Select ref={reference} style={style}>
                  {
                     options?.map((item, _id) => {
                        return (
                           <Option key={_id}>
                              {
                                 item.day
                              }
                           </Option>
                        );
                     })
                  }
               </Select>
               :
               <Input
                  type={type}
                  ref={reference}
                  value={value}
                  placeholder={placeholder}
                  pattern={REGEX}
                  onChange={(e) => {
                     if (onChange) {
                        let value = e.target.value;

                        if (value.length > 7)
                           return;

                        let newString = value.replace(/^(\d{2})(\d{2})/, "$1h $2m")
                        onChange(newString);
                     }
                  }}
                  style={style}
               />
         }
      </>
   )
}