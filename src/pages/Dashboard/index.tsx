import { Header } from "../../components/Header";

import logoBlack from '../../assets/compass-logo-black.png';
import { Background } from "../../components/Background";

import mainImage from '../../assets/uol-logo.png';

export default function Dashboard() {
   return (
      <Background
         currentPage="Dashboard"
         background={mainImage}
      >
         <Header logo={logoBlack} />
      </Background>
   )
}