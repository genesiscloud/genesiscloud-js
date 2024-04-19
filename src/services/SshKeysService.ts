/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SSHKey } from "../models/SSHKey";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class SshKeysService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List SSH keys
   * @returns any PaginatedSSHKeysResponse
   * @throws ApiError
   */
  public listSshKeys({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    ssh_keys: Array<SSHKey>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/ssh-keys",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }

  /**
   * Create SSH key
   * @returns SSHKey SingleSSHKeyResponse
   * @throws ApiError
   */
  public createSshKey({
    requestBody,
  }: {
    requestBody: {
      /**
       * The human-readable name for your ssh key.
       *
       */
      name: string;
      /**
       * SSH public key.
       */
      value: string;
    };
  }): CancelablePromise<SSHKey> {
    return this.httpRequest.request({
      method: "POST",
      url: "/ssh-keys",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get SSH key
   * Get details of a ssh key with the given ID.
   * @returns SSHKey SingleSSHKeyResponse
   * @throws ApiError
   */
  public getSshKey({
    sshKeyId,
  }: {
    sshKeyId: string;
  }): CancelablePromise<SSHKey> {
    return this.httpRequest.request({
      method: "GET",
      url: "/ssh-keys/{ssh_key_id}",
      path: {
        ssh_key_id: sshKeyId,
      },
    });
  }

  /**
   * Update SSH key
   * Edit the name of an existing SSH key.
   * @returns SSHKey SingleSSHKeyResponse
   * @throws ApiError
   */
  public updateSshKey({
    sshKeyId,
    requestBody,
  }: {
    sshKeyId: string;
    requestBody: {
      /**
       * The new human-readable name for your ssh key.
       *
       */
      name?: string;
    };
  }): CancelablePromise<SSHKey> {
    return this.httpRequest.request({
      method: "PATCH",
      url: "/ssh-keys/{ssh_key_id}",
      path: {
        ssh_key_id: sshKeyId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Delete SSH key
   * Delete a ssh key with the given ID.
   * @returns void
   * @throws ApiError
   */
  public deleteSshKey({
    sshKeyId,
  }: {
    sshKeyId: string;
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: "DELETE",
      url: "/ssh-keys/{ssh_key_id}",
      path: {
        ssh_key_id: sshKeyId,
      },
    });
  }
}
