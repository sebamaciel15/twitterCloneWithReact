import '../styles/style.css'
import { SearchRight } from '../components/container-right/SearchRight';
import { WhRight } from '../components/container-right/WhRight';
import { Footer } from '../components/container-right/Footer';
import { ModalTweet } from '../components/responsive/ModalTweet';
import { SolucionJs } from '../components/SolucionJs';
import { ContainerLeft } from '../components/container-left/ContainerLeft';
import { ContainerCenter } from '../components/container-center/ContainerCenter';
import { ContainerRight } from '../components/container-right/ContainerRight';


export const Home = () => {
  return (
    <>
      <h1>Inicio / Twitter</h1>
      <div className="grid__container">
        <ContainerLeft/>

        <ContainerCenter/>
        
        <ContainerRight/>        

        {/* <!-- //modales --> */}

        <ModalTweet />
      </div>
      <SolucionJs/>
    </>
  );
}
