import React from "react";
import styles from "../styles/app.module.css";

const MoreNews = () => {
  return (
    <section className={styles.moreNews}>
      <h1>New</h1>
      <article>
        <h3>
          <a href="#">Hydrogen VS Electric Cars</a>
        </h3>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </article>
      <hr />
      <article>
        <h3>
          <a href="#">The Downsides of AI Artistry</a>
        </h3>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </article>
      <hr />
      <article>
        <h3>
          <a href="#">Is VC Funding Drying Up?</a>
        </h3>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </article>
    </section>
  );
};

export default MoreNews;
