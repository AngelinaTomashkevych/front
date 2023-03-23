import { FIELD_NAMES } from '../constants';

export const getDefaultFormState = () => {
  return {
    [FIELD_NAMES.TITLE]: '',
    [FIELD_NAMES.DESCRIPTION]: '',
    [FIELD_NAMES.COMPLITED]: false,
  };
};
