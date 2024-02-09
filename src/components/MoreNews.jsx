import React from "react";
import styles from "../styles/app.module.scss";

const MoreNews = () => {
  return (
    <section className={styles.moreNews}>
      <h1>New</h1>
      <article>
        <h2>Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
      </article>
      <hr />
      <article>
        <h2>The Downsides of AI Artistry</h2>
        <p>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </article>
      <hr />
      <article>
        <h2>Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </article>
    </section>
  );
};

export default MoreNews;
