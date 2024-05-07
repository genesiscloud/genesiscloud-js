/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Image } from "../models/Image";
import type { Image_Type } from "../models/Image_Type";

import type { CancelablePromise } from "../core/CancelablePromise";
import type { BaseHttpRequest } from "../core/BaseHttpRequest";

export class ImagesService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List images
   * @returns any PaginatedImagesResponse
   * @throws ApiError
   */
  public listImages({
    page = 1,
    perPage = 50,
    type,
  }: {
    page?: number | null;
    perPage?: number | null;
    type?: Image_Type;
  }): CancelablePromise<{
    images: Array<Image>;
    total_count: number;
    page: number;
    per_page: number;
  }> {
    return this.httpRequest.request({
      method: "GET",
      url: "/images",
      query: {
        page: page,
        per_page: perPage,
        type: type,
      },
    });
  }
}
