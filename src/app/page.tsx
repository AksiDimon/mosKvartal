import BuyFinish from '../components/buy/BuyFinish';
import BuyTerms from '../components/buy/BuyTerms';
import Breadcrumbs from '../components/common/Breadcrumbs';
import FlatCard from '../components/flat/FlatCard';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import MobileMenu from '../components/layout/MobileMenu';

const Page = () => {
  return (
    <>
      <div id="panel"></div>
      <MobileMenu />
      <Header />

      <main className="page uk-overflow-hidden open_obj_page">
        <Breadcrumbs />
        <div className="page-title uk-container uk-container-xlarge">
          <h1>3-я Прядильная ул., влд. 4</h1>
        </div>

        <FlatCard />
        <BuyFinish />
        <BuyTerms />

        <div className="scroll-helper"></div>
      </main>

      <Footer />

      <div className="scroll-top-button hidden-block" id="js-scroll-top">
        <div className="icon-wrapper">
          <img src="/assets/icon-scroll.svg" alt="icon-wrapper" />
        </div>
      </div>
    </>
  );
};

export default Page;
