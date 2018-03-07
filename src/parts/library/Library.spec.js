import * as actions from './LibraryActions';
import reducer from './LibraryReducer';
import { adaywiser } from './tracks';

const defaultState = {
  albumOpen: true,
  album: adaywiser
}

describe('Library', () => {

  it('should create action to open album', () => {
    expect(actions.openAlbum("adaywiser")).toEqual({
      type: actions.OPEN_ALBUM,
      album: adaywiser
    });
  });

  it('should load album into store with openAlbum', () => {
    expect(reducer(undefined, actions.openAlbum("adaywiser"))).toEqual({
      albumOpen: true,
      album: adaywiser
    });
  });

  it('should create action to close album', () => {
    expect(actions.closeAlbum()).toEqual({
      type: actions.CLOSE_ALBUM
    });
  });

  it('should set album to closed with closeAlbum', () => {
    expect(reducer(undefined, actions.closeAlbum())).toEqual(
      defaultState
    );
  });

  it('should return default state with unexpected action', () => {
    expect(reducer(undefined, { type: "unexpected" })).toEqual(
      defaultState
    );
  });

});