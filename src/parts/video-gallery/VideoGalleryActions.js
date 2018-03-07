export const OPEN_VIDEO = "OPEN_VIDEO";
export const CLOSE_VIDEO = "CLOSE_VIDEO";

export const openVideo = (vId) => {

  document.body.style.overflow = "hidden";

  return {
    type: OPEN_VIDEO,
    vId: vId
  }
};

export const closeVideo = () => {

  document.body.style.overflow = "auto";

  return {
    type: CLOSE_VIDEO
  }
};