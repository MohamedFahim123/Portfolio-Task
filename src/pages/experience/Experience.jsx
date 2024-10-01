import { Link } from 'react-router-dom';
import styles from './experience.module.css';
import { useEffect, useState } from 'react';
import Loader from '../../components/loader/Loader';

export default function Experience() {
  const [loader, setLoader] = useState(true);
  const timeLineItems = [
    {
      id: 1,
      color: '#2c98f0',
      head: 'Full Stack Developer',
      date: '2017-2018',
      content: 'Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.'
    },
    {
      id: 2,
      color: '#d9534f',
      head: 'Front End Developer at Google Company',
      date: '2017-2018',
      content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
      id: 3,
      color: '#f0ad4e',
      head: 'System Analyst',
      date: '2017-2018',
      content: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.'
    },
    {
      id: 4,
      color: '#fff',
    }
  ];

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
          <div className="section__handler">
            <p className="mainPage__paragraph">EXPERIENCE</p>
            <h2 className="mainPage__head">WORK EXPERIENCE</h2>
            <ul className={`${styles.timeLine__handler}`}>
              {timeLineItems?.map(line => (
                <li key={line?.id} className={`${styles?.timeLine__element}`}>
                  <div className={`${styles?.timeLine__circle}`} style={{ backgroundColor: line?.color }}>
                    <i className={`fa-solid fa-pencil ${styles?.timeLine__icon}`}></i>
                  </div>
                  {
                    (line?.head || line?.date || line?.content) &&
                    <div className={`${styles?.timeLine__innerContent}`}>
                      <h3>
                        <Link to='/experience'>{line?.head ? line?.head : ''}</Link>
                        <span>{line?.date ? line?.date : ''}</span>
                      </h3>
                      <p>{line?.content ? line?.content : ''}</p>
                    </div>
                  }
                </li>
              ))}
            </ul>
          </div>
      }
    </>
  );
};
