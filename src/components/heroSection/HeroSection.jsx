import Carousel from 'react-bootstrap/Carousel';
import heroSectionStyles from './heroSection.module.css';
import myCV from '../../assets/pdfs/MOHAMED ELSAYED FAHIM.pdf'
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className={heroSectionStyles.heroSec__handler}>
      <Carousel className={`${heroSectionStyles.carouselSlideParent}`} pause={false} fade={true} interval={2000} controls={false}>
        <Carousel.Item className={`${heroSectionStyles.carouselSlide1} p-5`}>
          <div className={`${heroSectionStyles.carouselContent} d-flex flex-column justify-centent-center`}>
            <h1>
              Hi! <br />Im Mohamed
            </h1>
            <p>
              100% html5 bootstrap templates Made
              <br />
              By <Link to='https://colorlib.com/' className={heroSectionStyles.navLink}>Colorlib.com</Link>
            </p>
            <button type='button' className={`${heroSectionStyles.heroSec__btn}`}>
              <a href={myCV} download="My_CV.pdf">
                DownLoad Cv
                <i className="fa-solid fa-download"></i>
              </a>
            </button>
          </div>
        </Carousel.Item>
        <Carousel.Item className={`${heroSectionStyles.carouselSlide2} p-5`}>
          <div className={`${heroSectionStyles.carouselContent} d-flex flex-column justify-centent-center`}>
            <h1>
              I am <br />a Designer
            </h1>
            <p>
              100% html5 bootstrap templates Made
              <br />
              By <Link to='https://colorlib.com/' className={heroSectionStyles.navLink}>Colorlib.com</Link>
            </p>
            <button type='button' className={`${heroSectionStyles.heroSec__btn}`}>
              <Link target='_blank' to='https://github.com/MohamedFahim123?tab=repositories'> View Portfolio <i className="fa-solid fa-briefcase"></i></Link>
            </button>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};