/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Image_Type } from "./Image_Type";
import type { ImageId } from "./ImageId";
import type { OSType } from "./OSType";
import type { Region } from "./Region";
import type { Timestamp } from "./Timestamp";

export type Image = {
  id: ImageId;
  type: Image_Type;
  family: string | null;
  /**
   * The display name that has been given to an image. This is what is shown in the control panel and is generally a descriptive title for the image in question.
   */
  name: string;
  os_type: OSType;
  slug: string | null;
  /**
   * The list of versions if this is a cloud-image otherwise empty.
   */
  versions: Array<string> | null;
  /**
   * The list of regions in which this image can be used in.
   */
  regions: Array<Region>;
  created_at: Timestamp;
  updated_at: Timestamp;
};
