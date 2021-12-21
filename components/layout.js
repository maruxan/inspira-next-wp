import Alert from '../components/alert';
import Footer from '../components/Footer/Footer';
import Meta from '../components/meta';
import Navbar from './Navbar/Navbar';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* Post preview
        <Alert preview={preview} /> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
