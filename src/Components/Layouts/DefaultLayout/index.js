import Header from './Header';
import Footer from '../Components/Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="wraper">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
