import { adaywiser, malleability, bigthoughts } from './tracks';

export const OPEN_ALBUM = "OPEN_ALBUM";
export const CLOSE_ALBUM = "CLOSE_ALBUM";

export const openAlbum = (album) => {

  let toLoad = {};

  if (album === "adaywiser") {
    toLoad = adaywiser;
  } else if (album === "malleability") {
    toLoad = malleability
  } else if (album === "bigthoughts") {
    toLoad = bigthoughts
  }

  return {
    type: OPEN_ALBUM,
    album: toLoad
  }
};

export const closeAlbum = () => ({
  type: CLOSE_ALBUM
});