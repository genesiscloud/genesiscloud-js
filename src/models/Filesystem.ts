/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Filesystem_Status } from "./Filesystem_Status";
import type { FilesystemId } from "./FilesystemId";
import type { FilesystemType } from "./FilesystemType";
import type { Region } from "./Region";
import type { Timestamp } from "./Timestamp";

export type Filesystem = {
  id: FilesystemId;
  /**
   * The human-readable name for the filesystem.
   */
  name: string;
  /**
   * The human-readable description for the filesystem.
   */
  description: string;
  type: FilesystemType;
  /**
   * The storage size of this filesystem given in GiB.
   */
  size: number;
  region: Region;
  status: Filesystem_Status;
  /**
   * The mount endpoint range of the filesystem.
   */
  mount_endpoint_range: Array<string> | null;
  /**
   * The mount base path of the filesystem.
   */
  mount_base_path: string | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};
