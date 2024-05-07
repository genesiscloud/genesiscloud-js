/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FloatingIP } from "../models/FloatingIP";
import type { Region } from "../models/Region";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class FloatingIPsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List floating IPs
   * @returns any PaginatedFloatingIPsResponse
   * @throws ApiError
   */
  public listFloatingIPs({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    floating_ips: Array<FloatingIP>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/floating-ips",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Create floating IP
   * Create a new floating IP.
   * @returns any SingleFloatingIPResponse
   * @throws ApiError
   */
  public createFloatingIp({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name set for the floating IP.
       *
       */
      name: string;
      /**
       * The human-readable description set for the floating IP.
       *
       */
      description?: string;
      region: Region;
      /**
       * The IP version of the floating IP.
       *
       */
      version?: "ipv4";
    };
  }): CancelablePromise<{
    floating_ip: FloatingIP;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/floating-ips",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get floating IP
   * Get floating IP.
   * @returns any SingleFloatingIPResponse
   * @throws ApiError
   */
  public getFloatingIp({
    floatingIpId,
  }: {
    floatingIpId: string;
  }): CancelablePromise<{
    floating_ip: FloatingIP;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/floating-ips/{floating_ip_id}",
      path: {
        floating_ip_id: floatingIpId,
      },
    });
  }

  /**
   * Update floating IP
   * Update an existing floating IP.
   * @returns any SingleFloatingIPResponse
   * @throws ApiError
   */
  public updateFloatingIp({
    floatingIpId,
    requestBody,
  }: {
    floatingIpId: string;
    requestBody: {
      /**
       * The human-readable name set for the floating IP.
       */
      name?: string;
      /**
       * The human-readable description set for the floating IP.
       */
      description?: string;
    };
  }): CancelablePromise<{
    floating_ip: FloatingIP;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/floating-ips/{floating_ip_id}",
      path: {
        floating_ip_id: floatingIpId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete floating IP
   * Delete floating IP.
   * @returns void
   * @throws ApiError
   */
  public deleteFloatingIp({
    floatingIpId,
  }: {
    floatingIpId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/floating-ips/{floating_ip_id}",
      path: {
        floating_ip_id: floatingIpId,
      },
    });
  }
}
