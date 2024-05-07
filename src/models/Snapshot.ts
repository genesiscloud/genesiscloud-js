/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OSType } from "./OSType";
import type { Region } from "./Region";
import type { Snapshot_Status } from "./Snapshot_Status";
import type { Timestamp } from "./Timestamp";

export type Snapshot = {
  /**
   * A unique identifier for each snapshot. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the snapshot.
   *
   */
  name: string;
  /**
   * The storage size of this snapshot given in GiB.
   *
   */
  size: number;
  /**
   * The id of the resource (e.g. instance) that was snapshotted.
   *
   */
  resource_id: string;
  region: Region;
  status: Snapshot_Status;
  os_type: OSType;
  created_at: Timestamp;
  updated_at: Timestamp;
};
