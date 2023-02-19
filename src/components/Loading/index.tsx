import { CSSProperties } from "styled-components";
import { Spinner } from "./styled";

type Props = {
   style: CSSProperties
}

export function Loading ({ style } : Props) {
   return (
      <Spinner style={style}>
         
      </Spinner>
   );
}