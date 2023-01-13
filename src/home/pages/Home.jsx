import '../styles/style.css'
import { Elements } from '../components/elements';
import { Icon } from '../components/Icon';
import { ProfileButton } from '../components/ProfileButton';
import { ResponsiveNav } from '../components/responsive/ResponsiveNav';
import { Fixed } from '../components/Fixed';
import { Twittear } from '../components/Twittear';
import { HomeTweets } from '../components/HomeTweets';
import { ResponsiveNav2 } from '../components/responsive/ResponsiveNav2';
import { SearchRight } from '../components/SearchRight';
import { WhRight } from '../components/Whright';
import { Footer } from '../components/Footer';
import { ModalTweet } from '../components/responsive/ModalTweet';
import { SolucionJs } from '../components/SolucionJs';


export const Home = () => {
  return (
    <>
      <h1>Inicio / Twitter</h1>
      <div className="grid__container">
        <div className="container-left">
          <nav className="pc">
            <Icon />

            <Elements />

            <ProfileButton />
          </nav>

          <nav className="responsive-nav">
            <ResponsiveNav />
          </nav>
        </div>

        <div className="container-center">
          <Fixed />

          <Twittear />

          <HomeTweets />

          <ResponsiveNav2 />
        </div>

        <div className="container-right">
          <SearchRight />

          <WhRight />

          <Footer />
        </div>

        {/* <!-- //modales --> */}

        <ModalTweet />
      </div>
      <SolucionJs/>
    </>
  );
}
