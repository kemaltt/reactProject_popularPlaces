import React from "react";
import Card from "../Card/Card";
import { data } from "../Data";
import styles from "../Card/Card.module.css";

const CardList = () => {
  // console.log(data);
  return (
    <div className={styles.card_container}>
      {data.map((obj) => {
        return (
          <Card title={obj.title} img={obj.image} desc={obj.desc} id={obj.id} />
        );
      })}
    </div>
    //  Bootstrap----------------------------------------------------------------------
    // <div className="row m-5 " style={{ fontFamily: "Shadows Into Light" }}>
    //   {data.map((el) => (
    //     <div className="  col-lg-4 mb-4  " key={el.id}>
    //       <div className="card bg-dark ">
    //         <div className="card-body ">
    //           <h5 className="card-title text-center text-white fw-bolder">
    //             {el.title}
    //           </h5>
    //         </div>
    //         <img
    //           src={el.image}
    //           className="card-img-top img-fluid p-3 w-100 rounded"
    //           alt={el.title}
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

// export { CardList };
export default CardList;
