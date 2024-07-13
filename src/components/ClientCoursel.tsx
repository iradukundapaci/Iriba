import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './ClientCoursel.module.css';

function SampleNextArrow(props?: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} ${styles.arrow}`}
      style={{ ...style }}
      onClick={onClick}
      src="/right_arrow_icon.png"
    />
  );
}

function SamplePrevArrow(props?: any) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} ${styles.arrow}`}
      style={{ ...style }}
      onClick={onClick}
      src="/left_arrow_icon.png"
    />
  );
}

function ClientCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <img className={styles.clientIcon} alt="Khwezi" src="/khwezi.svg" />
        </div>
        <div>
          <img className={styles.clientIcon} alt="Cascade" src="/cascade.svg" />
        </div>
        <div>
          <img className={styles.clientIcon} alt="Harambe" src="/harambe.svg" />
        </div>
        <div>
          <img
            className={styles.clientIcon}
            alt="Quick Homes"
            src="/quick-homes.svg"
          />
        </div>
        <div>
          <div className={styles.nara}>
            <img className={styles.groupIcon} alt="Group 8" src="/group8.svg" />
            <img className={styles.groupIcon} alt="Group 9" src="/group9.svg" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ClientCarousel;
