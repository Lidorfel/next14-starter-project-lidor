import React from "react";
import styles from "./singlePost.module.css";
import Image from "next/image";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/18497713/pexels-photo-18497713/free-photo-of-back-of-a-young-woman-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/18497713/pexels-photo-18497713/free-photo-of-back-of-a-young-woman-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Lidor Feldman</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ad eum
          aut ab non ipsa doloremque sapiente corrupti repudiandae vero incidunt
          excepturi placeat culpa sunt, saepe nostrum laboriosam assumenda
          ipsam.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
