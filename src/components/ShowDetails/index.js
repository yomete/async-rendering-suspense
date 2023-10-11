import React, { Suspense } from "react";

import { fetchData } from "../fetchData";
import * as Styles from "./styles";
import ShowEpisodes from "../ShowEpisodes";

const resource = fetchData(`https://api.tvmaze.com/shows/27436`);

const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};

const Loading = ({ name }) => (
  <Styles.Loading>
    <p>loading episodes for {name}...</p>
  </Styles.Loading>
);

const ShowDetails = () => {
  const show = resource.read();

  return (
    <Styles.Root>
      <Styles.Container>
        <div>
          <img src={show.image.medium} alt="show poster" />
          <p>Show name: {show.name}</p>
          <p>Description: {removeTags(show.summary)}</p>
          <p>Language: {show.language}</p>
          <p>Genres: {show.genres.join(", ")}</p>
          <p>Score: {show.rating.average}/10</p>
          <p>Status: {show.status}</p>
        </div>

        <Suspense fallback={<Loading name={show.name} />}>
          <ShowEpisodes />
        </Suspense>
      </Styles.Container>
    </Styles.Root>
  );
};

export default ShowDetails;
