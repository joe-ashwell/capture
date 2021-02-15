import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../MovieState";

import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const MovieDetail = () => {
  // useHistory records the users location and path so if I went to '../work/hello' the pathname would be just that.
  const history = useHistory();
  const url = history.location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(0);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(...currentMovie);
  }, [url]);

  return (
    // Require so the JSX doesn't get it's knickers in a twist as it makes sure only one main neat thing is returned
    <>
      {/* This is required to tell JS to wait until the movie becomes available as initially it's state is 0 */}
      {movie && (
        <MovieDetailsDiv
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadlineDiv>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </HeadlineDiv>
          <AwardsDiv>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </AwardsDiv>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="" />
          </ImageDisplay>
        </MovieDetailsDiv>
      )}
    </>
  );
};

// Award component
const Award = ({ title, description }) => {
  return (
    <AwardComponentStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardComponentStyle>
  );
};

const MovieDetailsDiv = Styled(motion.div)`
  color: white;
`;

const HeadlineDiv = Styled.div`
  min-height: 90vh;
  padding-top: 15rem;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const AwardsDiv = Styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
`;

const AwardComponentStyle = Styled.div`
  padding: 2rem;

  h3 {
    font-size: 2rem;
  }

  p {
    padding: 2rem 0rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
`;

const ImageDisplay = Styled.div`
  min-height: 50vh;

  img {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

export default MovieDetail;
