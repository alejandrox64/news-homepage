import React from "react";
import styles from "../styles/app.module.css";

const RankingNews = ({ news }) => {
  return (
    <section className={styles.rankingNews}>
      {news.map(({ img, rankPosition, title, resumeOfNew }) => (
        <article className={styles.cardRankingNews} key={rankPosition}>
          <img src={img} />
          <div>
            <h2>{rankPosition}</h2>
            <h3>
              <a>{title}</a>
            </h3>
            <p>{resumeOfNew}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default RankingNews;
