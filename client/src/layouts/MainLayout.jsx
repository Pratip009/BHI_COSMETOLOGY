import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {/* Main content, adjusted for the fixed header */}
      <main className="min-h-screen pt-5">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
