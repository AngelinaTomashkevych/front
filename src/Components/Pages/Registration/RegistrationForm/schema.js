import * as Yup from 'yup';

import { FIELD_NAMES } from './constants';

export const schema = Yup.object({
  [FIELD_NAMES.EMAIL]: Yup.string().required(),
  [FIELD_NAMES.PASSWORD]: Yup.string().required(),
});
