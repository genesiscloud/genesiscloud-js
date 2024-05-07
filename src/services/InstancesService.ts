/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ImageId } from "../models/ImageId";
import type { Instance } from "../models/Instance";
import type { Instance_Action } from "../models/Instance_Action";
import type { Instance_BillingType } from "../models/Instance_BillingType";
import type { Instance_DestroyOnShutdown } from "../models/Instance_DestroyOnShutdown";
import type { Instance_FloatingIp } from "../models/Instance_FloatingIp";
import type { Instance_Hostname } from "../models/Instance_Hostname";
import type { Instance_IsProtected } from "../models/Instance_IsProtected";
import type { Instance_Name } from "../models/Instance_Name";
import type { Instance_PublicIpv6 } from "../models/Instance_PublicIpv6";
import type { Instance_ReuseLongTermSubscription } from "../models/Instance_ReuseLongTermSubscription";
import type { Instance_SecurityGroupIds } from "../models/Instance_SecurityGroupIds";
import type { Instance_SSHKeyId } from "../models/Instance_SSHKeyId";
import type { Instance_Type } from "../models/Instance_Type";
import type { Instance_UserData } from "../models/Instance_UserData";
import type { Region } from "../models/Region";
import type { Snapshot } from "../models/Snapshot";
import type { VolumeId } from "../models/VolumeId";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class InstancesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List instances
   * @returns any PaginatedInstancesResponse
   * @throws ApiError
   */
  public listInstances({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    instances: Array<Instance>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/instances",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Create instance
   * @returns any SingleInstanceResponse
   * @throws ApiError
   */
  public createInstance({
    requestBody,
  }: {
    requestBody: {
      name: Instance_Name;
      hostname: Instance_Hostname;
      type: Instance_Type;
      image: ImageId;
      /**
       * An array of ssh key ids.
       * This should not be provided if `password` authentication method is desired.
       *
       */
      ssh_keys?: Array<Instance_SSHKeyId>;
      /**
       * An array of volume ids.
       *
       */
      volumes?: Array<VolumeId>;
      /**
       * The password to access the instance.
       * Your password must have upper and lower chars, digits and length between 8-72.
       * **Please Note**: Only one of `ssh_keys` or `password` can be provided.
       * Password is less secure - we recommend you use an SSH key-pair.
       *
       */
      password?: string;
      /**
       * The placement option identifier in which instances are physically located relative to each other within a zone.
       *
       */
      placement_option?: string;
      security_groups?: Instance_SecurityGroupIds;
      is_protected?: Instance_IsProtected;
      destroy_on_shutdown?: Instance_DestroyOnShutdown;
      public_ipv6?: Instance_PublicIpv6;
      floating_ip?: Instance_FloatingIp;
      region: Region;
      billing_type?: Instance_BillingType;
      reuse_long_term_subscription?: Instance_ReuseLongTermSubscription;
      /**
       * The storage size of the instance's boot volume given in GiB (Min: 80GiB).
       *
       */
      disk_size?: number;
      /**
       * Option to provide metadata.
       */
      metadata?: {
        user_data?: Instance_UserData;
        /**
         * A plain text bash script or "cloud-config" file that will be executed after the first instance boot.
         * It is limited to 64 KiB in size. You can use it to configure your instance, e.g. installing the **NVIDIA GPU driver**.
         * Learn more about [startup scripts and installing the GPU driver](https://support.com/support/solutions/articles/47001122478).
         *
         */
        startup_script?: string;
      };
    };
  }): CancelablePromise<{
    instance: Instance;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/instances",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get instance
   * Get details of an instance with the given ID.
   * @returns any SingleInstanceResponse
   * @throws ApiError
   */
  public getInstance({
    instanceId,
  }: {
    instanceId: string;
  }): CancelablePromise<{
    instance: Instance;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/instances/{instance_id}",
      path: {
        instance_id: instanceId,
      },
    });
  }

  /**
   * Delete instance
   * Delete an instance with the given ID.
   * @returns void
   * @throws ApiError
   */
  public deleteInstance({
    instanceId,
  }: {
    instanceId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/instances/{instance_id}",
      path: {
        instance_id: instanceId,
      },
    });
  }

  /**
   * Update instance (attach/detach volumes, security groups, instance name)
   * Update instance with the given ID (attach/detach volumes, security groups, name).
   * @returns any SingleInstanceResponse
   * @throws ApiError
   */
  public updateInstance({
    instanceId,
    requestBody,
  }: {
    instanceId: string;
    requestBody: {
      name?: Instance_Name;
      is_protected?: Instance_IsProtected;
      security_groups?: Instance_SecurityGroupIds;
      /**
       * The instance's volumes IDs.
       */
      volumes?: Array<VolumeId>;
    };
  }): CancelablePromise<{
    instance: Instance;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/instances/{instance_id}",
      path: {
        instance_id: instanceId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List Instance actions
   * Liste all actions that can currently be performed on a instance.
   * @returns any Instance.ListActionsResponse
   * @throws ApiError
   */
  public listInstanceActions({
    instanceId,
  }: {
    instanceId: string;
  }): CancelablePromise<{
    actions: Array<Instance_Action>;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/instances/{instance_id}/actions",
      path: {
        instance_id: instanceId,
      },
    });
  }

  /**
   * Perform action
   * The action to perform on the instance.
   * @returns void
   * @throws ApiError
   */
  public performInstanceAction({
    instanceId,
    requestBody,
  }: {
    instanceId: string;
    requestBody: {
      action: Instance_Action;
    };
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "POST",
      url: "/instances/{instance_id}/actions",
      path: {
        instance_id: instanceId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List instance snapshots
   * @returns any PaginatedSnapshotsResponse
   * @throws ApiError
   */
  public listInstanceSnapshots({
    instanceId,
    page = 1,
    perPage = 50,
  }: {
    instanceId: string;
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    snapshots: Array<Snapshot>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/instances/{instance_id}/snapshots",
      path: {
        instance_id: instanceId,
      },
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Create instance snapshot
   * Takes a snapshot of the instance.
   * @returns any SingleSnapshotResponse
   * @throws ApiError
   */
  public createInstanceSnapshot({
    instanceId,
    requestBody,
  }: {
    instanceId: string;
    requestBody: {
      /**
       * Name of the snapshot.
       */
      name: string;
    };
  }): CancelablePromise<{
    snapshot: Snapshot;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/instances/{instance_id}/snapshots",
      path: {
        instance_id: instanceId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
