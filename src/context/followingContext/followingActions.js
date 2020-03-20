import {
  GET_SELECTED_TAGS,
  GET_ALL_TAGS,
  SET_SELECTED_TAG,
  REMOVE_SELECTED_TAG,
  SAVE_SELECTED_TAGS
} from "./followingTypes";

// fetching all the user selected tags
export const Get_Selected_Tags = () => {
  return {
    type: GET_SELECTED_TAGS
  };
};

// fetching all the available tags in the database
export const Get_All_Tags = () => {
  return {
    type: GET_ALL_TAGS
  };
};

// setting the selected tag
export const Set_Selected_Tag = tag => {
  return {
    type: SET_SELECTED_TAG,
    payload: tag
  };
};

// removing the selected tag
export const Remove_Selected_Tag = tag => {
  return {
    type: REMOVE_SELECTED_TAG,
    payload: tag
  };
};
