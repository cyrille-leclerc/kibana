/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import * as i18n from '../translations';

// TODO: I have to use any here for now, but once this is available below, we should use the correct types, https://github.com/elastic/kibana/issues/105731
// import { IFieldType } from '../../../../../../../src/plugins/data/common';
type IFieldType = any;

/**
 * Determines if empty value is ok
 */
export const checkEmptyValue = (
  param: string | undefined,
  field: IFieldType | undefined,
  isRequired: boolean,
  touched: boolean
): string | undefined | null => {
  if (isRequired && touched && (param == null || param.trim() === '')) {
    return i18n.FIELD_REQUIRED_ERR;
  }

  if (
    field == null ||
    (isRequired && !touched) ||
    (!isRequired && (param == null || param === ''))
  ) {
    return undefined;
  }

  return null;
};
