import { adaywiser } from './tracks';

export const OPEN_ALBUM = "OPEN_ALBUM";
export const CLOSE_ALBUM = "CLOSE_ALBUM";

export const openAlbum = (album) => {

  let toLoad = {};

  if (album === "adaywiser") {
    toLoad = adaywiser;
  }

  return {
    type: OPEN_ALBUM,
    album: toLoad
  }
};

export const closeAlbum = () => ({
  type: CLOSE_ALBUM
});