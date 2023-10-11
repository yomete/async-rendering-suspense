import { fetchData } from "../fetchData";
import * as Styles from "./styles";

const resource = fetchData(`https://api.tvmaze.com/shows/27436/episodes`, 5000);

const removeTags = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
};

const convertRuntimeToHoursAndMinutes = (runtime) => {
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hours}h ${minutes}m`;
};

const ShowEpisodes = () => {
  const episodes = resource.read();

  return (
    <Styles.Root>
      <Styles.Container>
        {episodes.map((episode, index) => (
          <Styles.ShowWrapper key={index}>
            <Styles.ImageWrapper>
              <img
                src={episode.image ? episode.image.original : ""}
                alt="Show Poster"
              />
            </Styles.ImageWrapper>

            <Styles.TextWrapper>
              <p>{episode.name}</p>
              <p>{removeTags(episode.summary)}</p>
              <p>Score: {episode.rating.average}/10</p>
              <p>Runtime: {convertRuntimeToHoursAndMinutes(episode.runtime)}</p>
            </Styles.TextWrapper>
          </Styles.ShowWrapper>
        ))}
      </Styles.Container>
    </Styles.Root>
  );
};

export default ShowEpisodes;
