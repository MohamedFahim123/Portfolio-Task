import { useEffect, useState } from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Loader from "../../components/loader/Loader";

export default function Home() {
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
          <HeroSection />
      }
    </>
  );
};
