/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Type} from '@angular/core';

export type RouterConfig = Route[];
export type Data = {
  [name: string]: any
};
export type ResolveData = {
  [name: string]: any
};

export interface Route {
  path?: string;
  terminal?: boolean;
  component?: Type|string;
  outlet?: string;
  canActivate?: any[];
  canDeactivate?: any[];
  redirectTo?: string;
  children?: Route[];
  data?: Data;
  resolve?: ResolveData;
}

export function validateConfig(config: RouterConfig): void {
  config.forEach(validateNode);
}

function validateNode(route: Route): void {
  if (!!route.redirectTo && !!route.children) {
    throw new Error(
        `Invalid configuration of route '${route.path}': redirectTo and children cannot be used together`);
  }
  if (!!route.redirectTo && !!route.component) {
    throw new Error(
        `Invalid configuration of route '${route.path}': redirectTo and component cannot be used together`);
  }
  if (route.redirectTo === undefined && !route.component && !route.children) {
    throw new Error(
        `Invalid configuration of route '${route.path}': component, redirectTo, children must be provided`);
  }
  if (route.path === undefined) {
    throw new Error(`Invalid route configuration: routes must have path specified`);
  }
  if (route.path.startsWith('/')) {
    throw new Error(
        `Invalid route configuration of route '${route.path}': path cannot start with a slash`);
  }
}