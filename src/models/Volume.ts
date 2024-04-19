/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Region } from "./Region";
import type { Timestamp } from "./Timestamp";
import type { Volume_Status } from "./Volume_Status";
import type { VolumeId } from "./VolumeId";
import type { VolumeType } from "./VolumeType";

export type Volume = {
  id: VolumeId;
  /**
   * The human-readable name for the volume.
   */
  name: string;
  /**
   * The human-readable description for the volume.
   */
  description: string;
  type: VolumeType;
  /**
   * The storage size of this volume given in GiB.
   */
  size: number;
  region: Region;
  /**
   * The attached instances.
   */
  instances: Array<{
    /**
     * The id of the attached instance.
     */
    id?: string;
    /**
     * The name of the attached instance.
     */
    name?: string;
  }>;
  status: Volume_Status;
  created_at: Timestamp;
  updated_at: Timestamp;
};
