import React, { useState, useEffect } from "react";
import * as Styles from "./styles";

const formatScore = (number) => {
  return Math.round(number * 100);
};

const Shows = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch(
          "https://api.tvmaze.com/search/shows?q=heist"
        );
        const data = await result.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Styles.Root>
      <Styles.Container>
        {data.map((show, index) => (
          <Styles.ShowWrapper key={index}>
            <Styles.ImageWrapper>
              <img
                src={show.show.image ? show.show.image.original : ""}
                alt="Show Poster"
              />
            </Styles.ImageWrapper>

            <Styles.TextWrapper>
              <Styles.Title>{show.show.name}</Styles.Title>
              <Styles.Subtitle>
                Score: {formatScore(show.score)}
              </Styles.Subtitle>
              <Styles.Subtitle>Status: {show.show.status}</Styles.Subtitle>
              <Styles.Subtitle>
                Network: {show.show.network ? show.show.network.name : "N/A"}
              </Styles.Subtitle>
            </Styles.TextWrapper>
          </Styles.ShowWrapper>
        ))}
      </Styles.Container>
    </Styles.Root>
  );
};

export default Shows;
