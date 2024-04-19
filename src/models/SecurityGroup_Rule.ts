/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SecurityGroup_Rule_Direction } from "./SecurityGroup_Rule_Direction";
import type { SecurityGroup_Rule_Protocol } from "./SecurityGroup_Rule_Protocol";

export type SecurityGroup_Rule = {
  protocol: SecurityGroup_Rule_Protocol;
  direction: SecurityGroup_Rule_Direction;
  /**
   * The minimum port number of the rule.
   */
  port_range_min?: number | null;
  /**
   * The maximum port number of the rule.
   */
  port_range_max?: number | null;
};
