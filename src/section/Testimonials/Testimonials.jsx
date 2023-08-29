import Section from "../../components/Section/Section";
import styles from "./Testimonials.module.css";
import IMAGES from "../../constants/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "../../components/Image/Image";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const testimonialData = [
  {
    img: IMAGES.testimonial,
    name: "Aliceano Colby",
    profession: "CEO of Prime IT",
    heading: "Awesome Work",
    description:
      "“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”",
  },
  {
    img: IMAGES.dentist1,
    name: "Darry Milin",
    profession: "CTO of Prime IT",
    heading: "Awesome Work",
    description:
      "“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”",
  },
  {
    img: IMAGES.dentist2,
    name: "Salman Ahmed",
    profession: "HOD of Prime IT",
    heading: "Awesome Work",
    description:
      "“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”",
  },
  {
    img: IMAGES.dentist3,
    name: "Darry Milin",
    profession: "HOD of Prime IT",
    heading: "Awesome Work",
    description:
      "“They really took my individual case to heart. Their team is very helpful. They all work together in an impressive way to make sure that my needs were met and I walked out pain free.”",
  },
];

function Testimonials() {
  return (
    <Section
      className={`${styles.testimonialSection} globalWidth globalPadding`}
    >
      <h1 className={styles.testimonialSectionHeading}>Testimonials</h1>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialCardLeft}>
                  <div className={styles.testimonialCardImgContainer}>
                    <Image
                      src={testimonial.img}
                      alt="testimonial-img"
                      className={styles.testimonialCardImg}
                    />
                  </div>
                  <h1 className={styles.testimonialCardName}>
                    {testimonial.name}
                  </h1>
                  <p className={styles.testimonialCardProfession}>
                    {testimonial.profession}
                  </p>
                </div>
                <div className={styles.testimonialCardRight}>
                  <h1 className={styles.testimonialCardHeading}>
                    {testimonial.heading}
                  </h1>
                  <p className={styles.testimonialCardDescription}>
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
}

export default Testimonials;
