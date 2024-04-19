/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Region } from "../models/Region";
import type { Volume } from "../models/Volume";
import type { VolumeType } from "../models/VolumeType";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class VolumesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Create volume
   * @returns any SingleVolumeResponse
   * @throws ApiError
   */
  public createVolume({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name set for the volume.
       *
       */
      name: string;
      /**
       * The human-readable description set for the volume.
       *
       */
      description?: string;
      type?: VolumeType;
      /**
       * The storage size of this volume given in GiB (Min: 1GiB).
       *
       */
      size: number;
      region: Region;
    };
  }): CancelablePromise<{
    volume: Volume;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/volumes",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List volumes
   * @returns any PaginatedVolumesResponse
   * @throws ApiError
   */
  public listVolumes({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    volumes: Array<Volume>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/volumes",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Get volume
   * Get details of a volume with the given ID
   * @returns any SingleVolumeResponse
   * @throws ApiError
   */
  public getVolume({ volumeId }: { volumeId: string }): CancelablePromise<{
    volume: Volume;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/volumes/{volume_id}",
      path: {
        volume_id: volumeId,
      },
    });
  }

  /**
   * Update volume
   * Update the details of a volume with the given ID
   * @returns any SingleVolumeResponse
   * @throws ApiError
   */
  public updateVolume({
    volumeId,
    requestBody,
  }: {
    volumeId: string;
    requestBody: {
      /**
       * The human-readable name set for the volume.
       */
      name?: string;
      /**
       * The human-readable description set for the volume.
       */
      description?: string;
    };
  }): CancelablePromise<{
    volume: Volume;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/volumes/{volume_id}",
      path: {
        volume_id: volumeId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete volume
   * Delete a volume with the given ID
   * @returns void
   * @throws ApiError
   */
  public deleteVolume({
    volumeId,
  }: {
    volumeId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/volumes/{volume_id}",
      path: {
        volume_id: volumeId,
      },
    });
  }
}
