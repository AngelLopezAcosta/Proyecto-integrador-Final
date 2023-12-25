import PrePage from "../prePage/prePage";
import Shoesar from "../Shop/shopSections/Shoesar";
import Shoe from "../Shop/shopSections/shoe";
import { useState, useCallback, useEffect, useRef } from "react";
import useScroll from "../../Hooks/use-scroll";
const Landing = () => {
  const [exclusive, setExclusive] = useState([]);
  const [isRuning, setIsRuning] = useState(false);
  const [know, setknow] = useState([]);
  const [scrollPositionExclusive, setScrollPositionExclusive] = useState(0);
  const [scrollPositionKnow, setScrollPositionKnow] = useState(0);
  const exclusivasRef = useRef();
  const knowRef = useRef();
  const scrollRef = useRef();
  const animationRef = useRef();
  const [handleScroll] = useScroll(animationRef, setIsRuning, scrollRef);
  const fetchLand = useCallback(async () => {
    try {
      const response1 = await fetch(
        `${process.env.REACT_APP_API_URL}/Shoesar/Products/Know`
      );
      const fKnow = await response1.json();
      const response2 = await fetch(
        `${process.env.REACT_APP_API_URL}/Shoesar/Products/Exclusive`
      );
      const fExclusive = await response2.json();
      setExclusive([...fExclusive]);
      setknow([...fKnow]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchLand();
  }, [fetchLand]);

  useEffect(() => {
    function handleWindowResize() {
      exclusivasRef.current.scrollLeft =
        scrollRef.current.clientWidth * scrollPositionExclusive;
      knowRef.current.scrollLeft =
        scrollRef.current.clientWidth * scrollPositionKnow;
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [scrollPositionExclusive, scrollPositionKnow]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <main>
      <section className="prePage">
        <PrePage title={"Shoesar"} />
      </section>

      <section className="landing">
        <div className="landingSec">
          <h2 className="landTitle">Mejores del mercado</h2>

          <button className="button right " disabled={isRuning}>
            <i
              className="fa fa-chevron-right"
              onClick={() => {
                handleScroll(
                  "next",
                  exclusivasRef.current,
                  setScrollPositionExclusive,
                  scrollPositionExclusive
                );
              }}
            ></i>
          </button>
          <button className="button left" disabled={isRuning}>
            <i
              className="fa fa-chevron-left"
              onClick={() =>
                handleScroll(
                  "prev",
                  exclusivasRef.current,
                  setScrollPositionExclusive,
                  scrollPositionExclusive
                )
              }
            ></i>
          </button>
          <article className="landingArticles" ref={exclusivasRef}>
            {exclusive.map((shoe, ind) => {
              return (
                <div className="scroll" key={ind} ref={scrollRef}>
                  <Shoe shoe={shoe} />
                </div>
              );
            })}
          </article>
        </div>
      </section>

      <section className="landing">
        <div className="landingSec">
          <h2 className="landTitle">Conoce la marca</h2>
          <button className="button right" disabled={isRuning}>
            <i
              className="fa fa-chevron-right"
              onClick={() =>
                handleScroll(
                  "next",
                  knowRef.current,
                  setScrollPositionKnow,
                  scrollPositionKnow
                )
              }
            ></i>
          </button>
          <button className="button left" disabled={isRuning}>
            <i
              className="fa fa-chevron-left"
              onClick={() =>
                handleScroll(
                  "prev",
                  knowRef.current,
                  setScrollPositionKnow,
                  scrollPositionKnow
                )
              }
            ></i>
          </button>

          <article className="landingArticles" ref={knowRef}>
            {know.map((shoe, ind) => {
              return (
                <div className="scroll" key={ind}>
                  <Shoe shoe={shoe} />
                </div>
              );
            })}
          </article>
        </div>
      </section>

      <Shoesar />
    </main>
  );
};
export default Landing;
