import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";
import styles from "./Gallery.module.css";
import Section from "../../components/Section/Section";

const galleryImages = [
  { img: IMAGES.gallery1 },
  { img: IMAGES.gallery2 },
  { img: IMAGES.gallery3 },
  { img: IMAGES.gallery5 },
  { img: IMAGES.gallery1 },
  { img: IMAGES.gallery2 },
  { img: IMAGES.gallery3 },
  { img: IMAGES.gallery5 },
];

function Gallery() {
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");

  function modalHandler() {
    setModal((modal) => !modal);
  }

  function getImageHandler(i) {
    setImage(galleryImages[i].img);

    modalHandler();
  }

  return (
    <Section className={styles.gallerySection}>
      <div className={`${styles.galleryContainer} globalWidth globalPadding`}>
        <h1 className={styles.galleryHeading}>Our Gallery</h1>

        <GalleryPhotos
          galleryImages={galleryImages}
          onGetImage={getImageHandler}
          onOpenModal={modalHandler}
        />
      </div>

      {modal && (
        <Modal onClose={modalHandler}>
          <Image src={image} alt="modal-img" className={styles.modalImg} />
        </Modal>
      )}
    </Section>
  );
}

function GalleryPhotos({ galleryImages, onGetImage, onOpenModal }) {
  return (
    <div className={styles.galleryImgContainer}>
      {galleryImages.map((image, i) => (
        <div
          key={i}
          onClick={() => onGetImage(i)}
          className={styles.galleryImgSubContainer}
        >
          <Image
            src={image.img}
            alt="gallery-img"
            className={styles.galleryImg}
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
