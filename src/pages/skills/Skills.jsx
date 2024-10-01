import { useEffect, useState } from 'react';
import skillsStyle from './skills.module.css';
import Loader from '../../components/loader/Loader';

export default function Skills() {
  const progresses = [
    { id: 1, value: '75%', name: 'Photoshop', color: '#2c98f0' },
    { id: 2, value: '60%', name: 'jQuery', color: '#ec5453' },
    { id: 3, value: '85%', name: 'HTML5', color: '#f9bf3f' },
    { id: 4, value: '90%', name: 'CSS3', color: '#a84cb8' },
    { id: 5, value: '70%', name: 'WordPress', color: '#2fa499' },
    { id: 6, value: '80%', name: 'SEO', color: '#4054b2' },
  ];
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 500);
  }, [loader]);

  return (
    <>
      {
        loader ?
          <Loader />
          :
          <div className="section__handler moreMargin">
            <p className="mainPage__paragraph">MY SPECIALTY</p>
            <h2 className="mainPage__head">MY SKILLS</h2>
            <p className="mainPage__content">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <div className="row mt-5">
              {
                progresses?.map(progress => (
                  <div key={progress?.id} className={`col-md-6 mb-3 mb-sm-4`}>
                    <p className={`mb-1 ${skillsStyle?.skillHead}`}>{progress?.name}</p>
                    <div className={`${skillsStyle?.progress_container}`}>
                      <div className={`${skillsStyle?.myProgress}`} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                        <div className={`${skillsStyle?.progress_bar}`} style={{ width: progress?.value, backgroundColor: progress?.color }}></div>
                        <span className={`${skillsStyle?.progress_counter}`} style={{ left: `calc(${progress?.value} - 25px)`, color: progress?.color }}>{progress?.value}</span>
                        <span className={`${skillsStyle?.progress_ball}`} style={{ left: `calc(${progress?.value} - 5px)`, backgroundColor: progress?.color }}></span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      }
    </>
  )
}
