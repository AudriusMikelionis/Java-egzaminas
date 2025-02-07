import { Footer } from '../components/Footer';
export const PageNotFound = () => {
  return (
    <>
      <section className="error-page">
        <img src="https://www.shutterstock.com/image-vector/page-not-found-404-error-600nw-774749455.jpg" />
      </section>
      <div className='additional_footer'>
        <Footer />
      </div>
    </>
  );
};
