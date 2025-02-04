/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { Filter, FilterMeta } from './types';

export type MissingFilterMeta = FilterMeta;

export type MissingFilter = Filter & {
  meta: MissingFilterMeta;
  missing: any;
};

export const isMissingFilter = (filter: any): filter is MissingFilter => filter && filter.missing;

export const getMissingFilterField = (filter: MissingFilter) => {
  return filter.missing && filter.missing.field;
};
