import * as Yup from 'yup';

import {
  getMinLengthMessage,
  getMaxLengthMessage,
  ERRORS_MASSAGES,
} from 'shared/validationErrors';

import { FIELD_NAMES } from './constants';

export const schema = Yup.object({
  [FIELD_NAMES.TITLE]: Yup.string()
    .min(3, getMinLengthMessage(3))
    .max(50, getMaxLengthMessage(50))
    .required(ERRORS_MASSAGES.REQUIRED),
  [FIELD_NAMES.DESCRIPTION]: Yup.string()
    .min(3, getMinLengthMessage(3))
    .max(200, getMaxLengthMessage(200))
    .required(ERRORS_MASSAGES.REQUIRED),
});
