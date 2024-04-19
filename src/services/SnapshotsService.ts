/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OSType } from "../models/OSType";
import type { Region } from "../models/Region";
import type { Snapshot } from "../models/Snapshot";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SnapshotsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create snapshot
   * @returns any SingleSnapshotResponse
   * @throws ApiError
   */
  public createSnapshot({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name set for the snapshot.
       *
       */
      name: string;
      /**
       * The storage size of this snapshot given in GiB (Min: 1GiB).
       *
       */
      size: number;
      /**
       * The url pointing to a raw or raw with zstd compressed image.
       *
       */
      url: string;
      os_type?: OSType;
      region: Region;
    };
  }): CancelablePromise<{
    snapshot: Snapshot;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/snapshots",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List Snapshots
   * @returns any PaginatedSnapshotsResponse
   * @throws ApiError
   */
  public listSnapshots({
    page = 1,
    perPage = 50,
  }: {
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
      url: "/snapshots",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Get snapshot
   * Get details of a snapshot with the given ID
   * @returns any SingleSnapshotResponse
   * @throws ApiError
   */
  public getSnapshot({
    snapshotId,
  }: {
    snapshotId: string;
  }): CancelablePromise<{
    snapshot: Snapshot;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/snapshots/{snapshot_id}",
      path: {
        snapshot_id: snapshotId,
      },
    });
  }

  /**
   * Update snapshot
   * Update the details of a snapshot with the given ID
   * @returns any SingleSnapshotResponse
   * @throws ApiError
   */
  public updateSnapshot({
    snapshotId,
    requestBody,
  }: {
    snapshotId: string;
    requestBody: {
      /**
       * The new human-readable name for your snapshot.
       *
       */
      name?: string;
    };
  }): CancelablePromise<{
    snapshot: Snapshot;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/snapshots/{snapshot_id}",
      path: {
        snapshot_id: snapshotId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete snapshot
   * Delete a snapshot with the given ID
   * @returns void
   * @throws ApiError
   */
  public deleteSnapshot({
    snapshotId,
  }: {
    snapshotId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/snapshots/{snapshot_id}",
      path: {
        snapshot_id: snapshotId,
      },
    });
  }
}
