/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Catalog_Fields } from "./Catalog_Fields";
import type { Timestamp } from "./Timestamp";

export type Catalog = {
  /**
   * A unique identifier for each catalog. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the catalog.
   *
   */
  name: string;
  /**
   * The human-readable description for the catalog.
   *
   */
  description: string;
  /**
   * The url of the catalog
   *
   */
  logo_url: string;
  /**
   * The image catalog requires driver
   *
   */
  requires_driver: boolean;
  base_image_ids: Array<string>;
  images: Array<{
    id: string;
    name: string;
  }>;
  fields: Catalog_Fields;
  created_at: Timestamp;
  updated_at: Timestamp;
};
