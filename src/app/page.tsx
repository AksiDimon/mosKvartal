import BuyFinish from '../components/buy/BuyFinish';
import BuyTerms from '../components/buy/BuyTerms';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ScrollTopButton from '../components/common/ScrollTopButton';
import FlatCard from '../components/flat/FlatCard';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import styles from './page.module.css';

const Page = () => {
  return (
    <>
      <div id="panel"></div>
      <Header />

      <main className={`${styles.page} uk-overflow-hidden open_obj_page`}>
        <Breadcrumbs />
        <div className={styles.containerBorders}>
          <div
            className={`${styles['page-title']} uk-container uk-container-xlarge`}
          >
            <h1>3-я Прядильная ул., влд. 4</h1>
          </div>

          <FlatCard />
          <BuyFinish />
          <BuyTerms />
        </div>

        <div className={styles['scroll-helper']}></div>
      </main>

      <Footer />

      <ScrollTopButton />
    </>
  );
};

export default Page;
