/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Region } from "./Region";
import type { SecurityGroup_Rule } from "./SecurityGroup_Rule";
import type { SecurityGroup_Status } from "./SecurityGroup_Status";
import type { Timestamp } from "./Timestamp";

export type SecurityGroup = {
  /**
   * A unique identifier for each security group. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the security group.
   *
   */
  name: string;
  /**
   * The human-readable description for the security group.
   *
   */
  description: string;
  is_internal: boolean;
  region: Region;
  status: SecurityGroup_Status;
  rules: Array<SecurityGroup_Rule>;
  created_at: Timestamp;
  updated_at: Timestamp;
};
