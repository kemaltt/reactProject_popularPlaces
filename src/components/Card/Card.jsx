import React from "react";
import "./Card.css";
import styles from "./Card.module.css";

export default function Card(props) {
  //   const youTubeUrl = "https://www.youtube.com/embed/";

  //   console.log(props);
  return (
    <div className={styles.card_body} key={props.id}>
      <div className={styles.card_title}>
        <h5>{props.title}</h5>
      </div>
      <div className={styles.card_img}>
        <img src={props.img} alt={props.title} />
        <div className={styles.card_over}>
          {/* <a onClick={handleUrl} className="trailer" target="_blank" rel="noreferrer">
            {props.title}
          </a>
          <iframe
            // style={trailer ? { display: "block" } : { display: "none" }}
            src={youTubeUrl + trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <div> {props.desc}</div>
        </div>
      </div>
    </div>
  );
}

// export default function Card({ title, img, desc, id }) {
// const { platform, phone, beverage } = props;
//   //   console.log(props);
//   return (
//     <div className={styles.card_body} key={id}>
//       <div className={styles.card_title}>
//         <h5>{title}</h5>
//       </div>
//       <div className={styles.card_img}>
//         <img src={img} alt={title} />
//         <div className={styles.card_over}>{desc}</div>
//       </div>
//     </div>
//   );
// }
