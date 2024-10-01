import { useEffect, useState } from 'react';
import FeildCard from '../../components/feildCard/FeildCard';
import aboutStyles from './about.module.css';
import Loader from '../../components/loader/Loader';

export default function About() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 500);
  }, [loader]);

  const feilds = [
    { id: 1, name: 'Graphic Design', iconClassName: 'fa-regular fa-lightbulb', color: '#2c98f0' },
    { id: 2, name: 'Web Design', iconClassName: 'fa-solid fa-earth-africa', color: '#ec5453' },
    { id: 3, name: 'Software', iconClassName: 'fa-solid fa-database', color: '#f9bf3f' },
    { id: 4, name: 'Application', iconClassName: 'fa-solid fa-mobile-screen-button', color: '#a84cb8' },
  ];

  return (
    <>
      {
        loader ?
          <Loader />
          :
          <div className={`section__handler`}>
            <p className={'mainPage__paragraph'}>about us</p>
            <h2 className='mainPage__head'>who Am I?</h2>
            <p className={`mainPage__content`}>
              <strong>Hi Im Jackson Ford</strong> On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.
            </p>
            <p className={aboutStyles.about__para}>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <div className="row">
              {
                feilds?.map(feild => (
                  <FeildCard key={feild?.id} name={feild?.name} icon={feild?.iconClassName} color={feild?.color} />
                ))
              }
            </div>
          </div>
      }
    </>
  );
};
