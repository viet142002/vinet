import Footer from '~/Components/Layouts/Components/Footer';

function OnlyFooterLayout({ children }) {
  return (
    <div className="wraper">
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

export default OnlyFooterLayout;
