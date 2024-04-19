/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FloatingIp_Status } from "./FloatingIp_Status";
import type { Region } from "./Region";
import type { Timestamp } from "./Timestamp";

export type FloatingIP = {
  /**
   * A unique identifier for each floating IP. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the floating IP.
   *
   */
  name: string;
  /**
   * The human-readable description for the floating IP.
   *
   */
  description: string;
  /**
   * The IP address of the floating IP.
   *
   */
  ip_address: string | null;
  /**
   * A boolean value indicating whether the floating IP is public or private.
   *
   */
  is_public: boolean;
  /**
   * The IP version of the floating IP.
   *
   */
  version: "ipv4" | "ipv6";
  region: Region;
  status: FloatingIp_Status;
  created_at: Timestamp;
  updated_at: Timestamp;
  instance: {
    /**
     * A unique identifier for the attached instance.
     *
     */
    id: string;
    /**
     * The name of the attached instance.
     *
     */
    name: string;
  } | null;
};
