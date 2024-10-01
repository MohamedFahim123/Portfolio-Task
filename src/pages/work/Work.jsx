import { useEffect, useState } from 'react';
import styles from './work.module.css';
import img1 from '../../assets/images/img-1-C4nS0eD8.jpg';
import img2 from '../../assets/images/img-2-D-4H1m4L.jpg';
import img3 from '../../assets/images/img-3-pR2ZEVY9.jpg';
import img4 from '../../assets/images/img-4-tHccITd-.jpg';
import img5 from '../../assets/images/img-5-lAucr__a.jpg';
import img6 from '../../assets/images/img-6-DFW03AZ3.jpg';
import ListOfLinksAndMedia from '../../components/listOfLinksAndMedia/ListOfLinksAndMedia';
import ListContentViewer from '../../components/listContentViewer/ListContentViewer';
import Loader from '../../components/loader/Loader';

export default function Work() {
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(true);
  const [activeLink, setActiveLink] = useState(1);
  const [contentPerView, setContentPerView] = useState(4);
  const listOfLinks = [
    {
      id: 1,
      name: 'Graphic Design',
      listContent: [
        {
          id: 10,
          media: img1
        },
        {
          id: 11,
          media: img2
        },
        {
          id: 12,
          media: img3
        },
        {
          id: 13,
          media: img4
        },
        {
          id: 14,
          media: img5
        },
        {
          id: 15,
          media: img6
        },
      ],
    },
    {
      id: 2,
      name: 'apps',
      listContent: [
        {
          id: 10,
          media: img1
        },
        {
          id: 11,
          media: img2
        },
        {
          id: 12,
          media: img3
        },
        {
          id: 13,
          media: img4
        },
        {
          id: 14,
          media: img5
        },
        {
          id: 15,
          media: img6
        },
      ],
    },
    {
      id: 3,
      name: 'software',
      listContent: [
        {
          id: 10,
          media: img1
        },
        {
          id: 11,
          media: img2
        },
        {
          id: 12,
          media: img3
        },
        {
          id: 13,
          media: img4
        },
        {
          id: 14,
          media: img5
        },
        {
          id: 15,
          media: img6
        },
      ],
    },
  ];

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 300)
  }, [loading]);

  useEffect(() => {
    setInterval(() => {
      setLoader(false);
    }, 500);
  }, [loader]);

  const handleToggleListPerView = () => {
    if (listOfLinks[activeLink - 1]?.listContent?.length === contentPerView) {
      setContentPerView(4);
      window.scrollTo({ top: 0 });
    } else {
      setContentPerView(listOfLinks[activeLink - 1]?.listContent?.length);
    };
  };

  return (
    <>
      {
        loader ?
          <Loader />
          :
          <div className="section__handler">
            <p className="mainPage__paragraph">MY WORK</p>
            <h2 className="mainPage__head">RECENT WORK</h2>
            <ul className={styles?.links__list}>
              {
                listOfLinks?.map(link => (
                  <ListOfLinksAndMedia key={link?.id} link={link} setLoading={setLoading} setContentPerView={setContentPerView} setActiveLink={setActiveLink} activeLink={activeLink} />
                ))
              }
            </ul>
            <div className="row">
              {
                loading ?
                  <div className="spinner-border text-primary m-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  :
                  listOfLinks[activeLink - 1]?.listContent?.slice(0, contentPerView)?.map(el => (
                    <div className="col-md-6 mb-4" key={el?.id}>
                      <ListContentViewer media={el?.media} activeLink={activeLink} />
                    </div>
                  ))
              }
              {
                !loading &&
                <div className="col-12 mb-4">
                  <div
                    className={`btn ${listOfLinks[activeLink - 1]?.listContent?.length === contentPerView ?
                      'btn-danger'
                      :
                      'btn-primary'}`}
                    onClick={handleToggleListPerView}>
                    {
                      listOfLinks[activeLink - 1]?.listContent?.length === contentPerView ?
                        'Show Less'
                        :
                        'Show More'
                    }
                  </div>
                </div>
              }
            </div>
          </div>
      }
    </>
  )
}
