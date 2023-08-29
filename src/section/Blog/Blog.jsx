import Card from "../../components/Card/Card";
import Section from "../../components/Section/Section";
import styles from "./Blog.module.css";
import IMAGES from "../../constants/Images";
import Image from "../../components/Image/Image";

const blogData = [
  {
    img: IMAGES.blog1,
    title: "Maximize Your 2019 Dental Insurance with lots of Benefits",
    postBy: "Post by: Salman",
    date: "12 Oct, 2019",
  },
  {
    img: IMAGES.blog2,
    title: "Are Your Teeth Making You Old? Are You Surprised!",
    postBy: "Post by: Admin",
    date: "14 Oct, 2019",
  },
  {
    img: IMAGES.blog3,
    title: "Dental Implants: The Next Best Thing to Get Natural Teeth",
    postBy: "Post by: Salman",
    date: "10 Oct, 2020",
  },
];

function Blog() {
  return (
    <Section className={`${styles.blogSection} globalWidth globalPadding`}>
      <h1 className={styles.blogHeading}>Our Dentists</h1>
      <BlogCard blogData={blogData} />
    </Section>
  );
}

function BlogCard({ blogData }) {
  return (
    <div className={styles.blogCards}>
      {blogData.map((blog, index) => (
        <Card className={styles.blogCard} key={index}>
          <div className={styles.blogCardImgContainer}>
            <Image
              src={blog.img}
              alt="blog-img"
              className={styles.blogCardImg}
            />
          </div>

          <div className={styles.blogCardDetails}>
            <h1 className={styles.blogCardTitle}>{blog.title}</h1>
            <p className={styles.blogCardCreater}>
              {blog.postBy}
              <span className={styles.blogCardDate}>{blog.date}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Blog;
