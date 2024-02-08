import Navbar from "./components/Navbar";
import styles from "./styles/app.module.css";

function App() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.mainNew}>
          <img src="../public/images/image-web-3-desktop.jpg" />
          <div className={styles.contentMainNew}>
            <h1 className={styles.titleMainNew}>
              The Bright Future of Web 3.0?
            </h1>
            <div className={styles.containerDescriptionMainNew}>
              <p className={styles.descriptonMainNew}>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </section>
        {/* 
        <section className={styles.rankingNews}></section>
        <article className={styles.moreNews}></article> */}
      </div>
    </>
  );
}

export default App;
