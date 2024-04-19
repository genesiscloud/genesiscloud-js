/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Instance_Type } from "./Instance_Type";
import type { Region } from "./Region";

export type InstancesAvailability = {
  availability: {
    type: string;
    region: Region;
    placement?: string;
    instance_types: Array<{
      type: Instance_Type;
      available: boolean;
      count?: number;
    }>;
  };
};
