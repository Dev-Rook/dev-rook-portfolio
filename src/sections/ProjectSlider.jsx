import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/section/projectSlider.module.scss";
import headStyles from "../styles/other/projectSectionHead.module.scss";

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
import projectsData from "../data/work.json";

const ProjectSlider = ({ data, error, loading, projects, title, number }) => {
  //   const [projects, setProjects] = useState(projectsData);
  return (
    <div className="section">
      <div className={headStyles.head}>
        <p className={headStyles.title}>{title}</p>
        <p className={headStyles.project_number}>{number} Projects</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
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
        {data?.map((value) => {
          return (
            <SwiperSlide className={styles.slide} key={value.id}>
              <Link to={`/project/${value.id}`} className={styles.link}>
                <div className={styles.icon}></div>
                <div className={styles.imgContainer}>
                  <img src={value.image} alt="" className={styles.img} />
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

export default ProjectSlider;
