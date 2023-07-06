import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/section/postSwiper.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

// Json Import:
import postData from "../data/posts.json";

const Posts = () => {
  const [posts, setPosts] = useState(postData);
  return (
    <div className="section">
      <p className="sectionTitle">Posts</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        // loop={true}
        autoplay={{
          delay: 3000,
        }}
        grabCursor={true}
        modules={[Navigation, FreeMode, Autoplay, Mousewheel, Pagination]}
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          330: {
            slidesPerView: 1.1,
          },
          380: {
            slidesPerView: 1.2,
          },
          550: {
            slidesPerView: 2,
          },
          996: {
            slidesPerView: 3,
          },
        }}
      >
        {posts?.map((value) => {
          return (
            <SwiperSlide className={styles.slide} key={value.id}>
              <Link to={value.link} className={styles.link}>
                <div className={styles.icon}></div>
                <div className={styles.imgContainer}>
                  <img src={value.preview} alt="" className={styles.img} />
                </div>
                <div className={styles.diffuser}></div>
                <p className={styles.title}>{value.title}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Posts;
