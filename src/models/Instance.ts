/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ImageId } from "./ImageId";
import type { Instance_Hostname } from "./Instance_Hostname";
import type { Instance_Name } from "./Instance_Name";
import type { Instance_SecurityGroupId } from "./Instance_SecurityGroupId";
import type { Instance_SSHKeyId } from "./Instance_SSHKeyId";
import type { Instance_Status } from "./Instance_Status";
import type { Instance_Type } from "./Instance_Type";
import type { OSType } from "./OSType";
import type { Region } from "./Region";
import type { Timestamp } from "./Timestamp";
import type { VolumeId } from "./VolumeId";

export type Instance = {
  /**
   * The unique ID of the instance.
   */
  id: string;
  name: Instance_Name;
  hostname: Instance_Hostname;
  type: Instance_Type;
  os_type: OSType;
  /**
   * The public IPv4 IP-Address (IPv4 address).
   */
  public_ip: string | null;
  /**
   * The private IPv4 IP-Address (IPv4 address).
   */
  private_ip: string | null;
  status: Instance_Status;
  /**
   * The ssh keys of the instance.
   */
  ssh_keys: Array<{
    id: Instance_SSHKeyId;
    /**
     * The name of the ssh key.
     */
    name: string;
  }>;
  /**
   * The image of the instance.
   */
  image: {
    id: ImageId;
    /**
     * The image name.
     */
    name: string;
  };
  /**
   * The floating IP attached to the instance.
   */
  floating_ip?: {
    /**
     * The ID of the floating IP.
     */
    id: string;
    /**
     * The name of the floating IP.
     */
    name: string;
  } | null;
  /**
   * The security groups of the instance.
   */
  security_groups: Array<{
    id: Instance_SecurityGroupId;
    /**
     * The name of the security group.
     */
    name: string;
  }>;
  /**
   * The volumes of the instance
   */
  volumes: Array<{
    id: VolumeId;
    /**
     * The volume name.
     */
    name: string;
  }>;
  region: Region;
  /**
   * The placement option identifier in which instances are physically located relative to each other within a zone.
   *
   */
  placement_option: string;
  created_at: Timestamp;
  updated_at: Timestamp;
};
