import React from "react";
import { ImageList, ImageListItem } from "@mui/material/";
import styles from "./style.module.css";

const ImagesList = () => {
  return (
    <>
      <p className={styles.title}>Gallery</p>
      <ImageList
        sx={{ width: 500, height: 450 }}
        variant="woven"
        cols={3}
        gap={8}
      >
        {/*     {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={}
            alt={}
            loading="lazy"
          />
        </ImageListItem>
      ))}*/}
      </ImageList>{" "}
    </>
  );
};

export default ImagesList;
