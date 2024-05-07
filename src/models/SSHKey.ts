/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Timestamp } from "./Timestamp";

export type SSHKey = {
  /**
   * A unique identifier for each SSH key. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the SSH key.
   *
   */
  name: string;
  /**
   * SSH public key.
   *
   */
  value: string;
  /**
   * The fingerprint of the SSH key.
   *
   */
  fingerprint: string;
  /**
   * The encryption algorithm type of the SSH key.
   *
   */
  type: string;
  /**
   * The length of the SSH key.
   *
   */
  size: number;
  created_at: Timestamp;
  updated_at: Timestamp;
};
