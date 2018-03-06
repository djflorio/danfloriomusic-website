export const OPEN_VIDEO = "OPEN_VIDEO";
export const CLOSE_VIDEO = "CLOSE_VIDEO";

export const openVideo = (vId) => ({
  type: OPEN_VIDEO,
  vId: vId
});

export const closeVideo = () => ({
  type: CLOSE_VIDEO
});