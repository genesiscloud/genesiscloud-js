/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Filesystem } from "../models/Filesystem";
import type { FilesystemType } from "../models/FilesystemType";
import type { Region } from "../models/Region";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FilesystemsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create filesystem
   * @returns any SingleFilesystemResponse
   * @throws ApiError
   */
  public createFilesystem({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name set for the filesystem.
       *
       */
      name: string;
      /**
       * The human-readable description set for the filesystem.
       *
       */
      description?: string;
      type?: FilesystemType;
      /**
       * The storage size of this filesystem given in GiB (Min: 1GiB).
       *
       */
      size: number;
      region: Region;
    };
  }): CancelablePromise<{
    filesystem: Filesystem;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/filesystems",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List filesystems
   * @returns any PaginatedFilesystemsResponse
   * @throws ApiError
   */
  public listFilesystems({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    filesystems: Array<Filesystem>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/filesystems",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Get filesystem
   * Get details of a filesystem with the given ID
   * @returns any SingleFilesystemResponse
   * @throws ApiError
   */
  public getFilesystem({
    filesystemId,
  }: {
    filesystemId: string;
  }): CancelablePromise<{
    filesystem: Filesystem;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/filesystems/{filesystem_id}",
      path: {
        filesystem_id: filesystemId,
      },
    });
  }

  /**
   * Update filesystem
   * Update the details of a filesystem with the given ID
   * @returns any SingleFilesystemResponse
   * @throws ApiError
   */
  public updateFilesystem({
    filesystemId,
    requestBody,
  }: {
    filesystemId: string;
    requestBody: {
      /**
       * The human-readable name set for the filesystem.
       */
      name?: string;
      /**
       * The human-readable description set for the filesystem.
       */
      description?: string;
      /**
       * The storage size of this filesystem given in GiB.
       */
      size?: number;
    };
  }): CancelablePromise<{
    filesystem: Filesystem;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/filesystems/{filesystem_id}",
      path: {
        filesystem_id: filesystemId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete filesystem
   * Delete a filesystem with the given ID
   * @returns void
   * @throws ApiError
   */
  public deleteFilesystem({
    filesystemId,
  }: {
    filesystemId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/filesystems/{filesystem_id}",
      path: {
        filesystem_id: filesystemId,
      },
    });
  }
}
