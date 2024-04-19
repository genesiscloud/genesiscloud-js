/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Region } from "../models/Region";
import type { SecurityGroup } from "../models/SecurityGroup";
import type { SecurityGroup_Rule } from "../models/SecurityGroup_Rule";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SecurityGroupsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List security groups
   * @returns any PaginatedSecurityGroupsResponse
   * @throws ApiError
   */
  public listSecurityGroups({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    security_groups: Array<SecurityGroup>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/security-groups",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Create security group
   * @returns any SingleSecurityGroupResponse
   * @throws ApiError
   */
  public createSecurityGroup({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name set for the security group. **Please Note**: `default` and `standard` are not allowed names (reserved words).
       *
       */
      name: string;
      /**
       * he human-readable description set for the security group.
       */
      description?: string;
      region: Region;
      /**
       * The list of rules of the security group.
       */
      rules: Array<SecurityGroup_Rule>;
    };
  }): CancelablePromise<{
    security_group: SecurityGroup;
  }> {
    return this.httpRequest.request({
      method: "POST",
      url: "/security-groups",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get security group
   * Get details of a security group with the given ID
   * @returns any SingleSecurityGroupResponse
   * @throws ApiError
   */
  public getSecurityGroup({
    securityGroupId,
  }: {
    securityGroupId: string;
  }): CancelablePromise<{
    security_group: SecurityGroup;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/security-groups/{security_group_id}",
      path: {
        security_group_id: securityGroupId,
      },
    });
  }

  /**
   * Update security group
   * Update the details of a security group with the given ID
   * @returns any SingleSecurityGroupResponse
   * @throws ApiError
   */
  public updateSecurityGroup({
    securityGroupId,
    requestBody,
  }: {
    securityGroupId: string;
    requestBody: {
      /**
       * The human-readable name set for the security group.
       */
      name?: string;
      /**
       * he human-readable description set for the security group.
       */
      description?: string;
      /**
       * The list of rules of the security group.
       */
      rules?: Array<SecurityGroup_Rule>;
    };
  }): CancelablePromise<{
    security_group: SecurityGroup;
  }> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/security-groups/{security_group_id}",
      path: {
        security_group_id: securityGroupId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete security group
   * Delete a security group with the given ID
   * @returns void
   * @throws ApiError
   */
  public deleteSecurityGroup({
    securityGroupId,
  }: {
    securityGroupId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/security-groups/{security_group_id}",
      path: {
        security_group_id: securityGroupId,
      },
    });
  }
}
