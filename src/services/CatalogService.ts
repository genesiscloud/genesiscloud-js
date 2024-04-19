/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Catalog } from "../models/Catalog";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class CatalogService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List catalog
   * @returns any PaginatedCatalogResponse
   * @throws ApiError
   */
  public listCatalog({
    page = 1,
    perPage = 50,
  }: {
    page?: number | null;
    perPage?: number | null;
  }): CancelablePromise<{
    catalog: Array<Catalog>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/catalog",
      query: {
        page: page,
        per_page: perPage,
      },
    });
  }
}
