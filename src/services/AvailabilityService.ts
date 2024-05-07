/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstancesAvailability } from "../models/InstancesAvailability";
import type { Region } from "../models/Region";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class AvailabilityService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get cluster availability for region
   * @returns InstancesAvailability InstancesAvailabilityResponse
   * @throws ApiError
   */
  public getInstancesAvailability({
    region,
    placement,
  }: {
    region: Region;
    placement?: string;
  }): CancelablePromise<InstancesAvailability> {
    return this.httpRequest.request({
      method: "GET",
      url: "/availability/{region}/instances",
      path: {
        region: region,
      },
      query: {
        placement: placement,
      },
    });
  }
}
