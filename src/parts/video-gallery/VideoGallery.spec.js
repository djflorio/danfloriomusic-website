import * as actions from './VideoGalleryActions';
import reducer from './VideoGalleryReducer';

const defaultState = {
  modalOpen: false,
  currentVideo: null
}

const videoOpen = {
  modalOpen: true,
  currentVideo: "abc"
}

describe("Video Gallery", () => {

  it('should create action to open video', () => {
    expect(actions.openVideo("abc")).toEqual({
      type: actions.OPEN_VIDEO,
      vId: "abc"
    });
  });

  it('should open video with openVideo', () => {
    expect(reducer(undefined, actions.openVideo("abc"))).toEqual({
      modalOpen: true,
      currentVideo: "abc"
    });
  });

  it('should create action to close video', () => {
    expect(actions.closeVideo()).toEqual({
      type: actions.CLOSE_VIDEO
    });
  });

  it('should close video with closeVideo', () => {
    expect(reducer(videoOpen, actions.closeVideo())).toEqual(
      defaultState
    );
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unexpected" })).toEqual(
      defaultState
    );
  });

});