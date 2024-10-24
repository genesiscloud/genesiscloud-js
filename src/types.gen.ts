// This file is auto-generated by @hey-api/openapi-ts

export type Timestamp = string;

export type Error = {
  /**
   * The Genesis Cloud error code.
   * Check the [developer documentation](https://developers.com/#error-codes) for more information on error codes.
   *
   */
  code: string;
  /**
   * An explanation of what went wrong.
   */
  message: string;
};

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

/**
 * Describes the kind of image.
 */
export type Image_Type =
  | "base-os"
  | "cloud-image"
  | "preconfigured"
  | "snapshot";

export type Snapshot = {
  /**
   * A unique identifier for each snapshot. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the snapshot.
   *
   */
  name: string;
  /**
   * The storage size of this snapshot given in GiB.
   *
   */
  size: number;
  /**
   * The id of the resource (e.g. instance) that was snapshotted.
   *
   */
  resource_id: string;
  region: Region;
  status: Snapshot_Status;
  os_type: OSType;
  created_at: Timestamp;
  updated_at: Timestamp;
};

/**
 * The snapshot status.
 */
export type Snapshot_Status =
  | "creating"
  | "created"
  | "pending_delete"
  | "deleting"
  | "active"
  | "error";

/**
 * A unique identifier for each volume. This is automatically generated.
 *
 */
export type VolumeId = string;

export type Volume = {
  id: VolumeId;
  /**
   * The human-readable name for the volume.
   */
  name: string;
  /**
   * The human-readable description for the volume.
   */
  description: string;
  type: VolumeType;
  /**
   * The storage size of this volume given in GiB.
   */
  size: number;
  region: Region;
  /**
   * The attached instances.
   */
  instances: Array<{
    /**
     * The id of the attached instance.
     */
    id?: string;
    /**
     * The name of the attached instance.
     */
    name?: string;
  }>;
  status: Volume_Status;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type Volume_Status =
  | "creating"
  | "created"
  | "pending_delete"
  | "deleting"
  | "available"
  | "in-use"
  | "error";

/**
 * A unique identifier for each filesystem. This is automatically generated.
 *
 */
export type FilesystemId = string;

export type Filesystem = {
  id: FilesystemId;
  /**
   * The human-readable name for the filesystem.
   */
  name: string;
  /**
   * The human-readable description for the filesystem.
   */
  description: string;
  type: FilesystemType;
  /**
   * The storage size of this filesystem given in GiB.
   */
  size: number;
  region: Region;
  status: Filesystem_Status;
  /**
   * The mount endpoint range of the filesystem.
   */
  mount_endpoint_range: [string, string, null];
  /**
   * The mount base path of the filesystem.
   */
  mount_base_path: string | null;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type Filesystem_Status = "creating" | "created" | "deleting";

/**
 * A unique identifier for each security group. This is automatically generated.
 *
 */
export type SecurityGroupId = string;

export type SecurityGroup = {
  id: SecurityGroupId;
  /**
   * The human-readable name for the security group.
   *
   */
  name: string;
  /**
   * The human-readable description for the security group.
   *
   */
  description: string;
  is_internal: boolean;
  region: Region;
  status: SecurityGroup_Status;
  rules: Array<SecurityGroup_Rule>;
  created_at: Timestamp;
  updated_at: Timestamp;
};

/**
 * The security group status.
 */
export type SecurityGroup_Status =
  | "creating"
  | "created"
  | "deleting"
  | "updating"
  | "error";

export type SecurityGroup_Rule = {
  protocol: SecurityGroup_Rule_Protocol;
  direction: SecurityGroup_Rule_Direction;
  /**
   * The minimum port number of the rule.
   */
  port_range_min?: number | null;
  /**
   * The maximum port number of the rule.
   */
  port_range_max?: number | null;
};

/**
 * The direction of the rule.
 */
export type SecurityGroup_Rule_Direction = "ingress" | "egress";

/**
 * The protocol of the rule.
 */
export type SecurityGroup_Rule_Protocol = "tcp" | "udp" | "icmp" | "all";

export type Instance = {
  /**
   * The unique ID of the instance.
   */
  id: string;
  name: Instance_Name;
  hostname: Instance_Hostname;
  dns_name: Instance_DNSName;
  /**
   * The unique ID of the reservation the instance is associated with.
   */
  reservation_id?: string | null;
  type: Instance_Type;
  os_type: OSType;
  /**
   * The public IPv4 IP-Address (IPv4 address).
   */
  public_ip: string | null;
  /**
   * The private IPv4 IP-Address (IPv4 address).
   */
  private_ip: string | null;
  status: Instance_Status;
  /**
   * The ssh keys of the instance.
   */
  ssh_keys: Array<{
    id: Instance_SSHKeyId;
    /**
     * The name of the ssh key.
     */
    name: string;
  }>;
  /**
   * The image of the instance.
   */
  image: {
    id: ImageId;
    /**
     * The image name.
     */
    name: string;
  };
  /**
   * The floating IP attached to the instance.
   */
  floating_ip?: {
    /**
     * The ID of the floating IP.
     */
    id: string;
    /**
     * The name of the floating IP.
     */
    name: string;
  } | null;
  /**
   * The security groups of the instance.
   */
  security_groups: Array<{
    id: SecurityGroupId;
    /**
     * The name of the security group.
     */
    name: string;
  }>;
  /**
   * The volumes of the instance
   */
  volumes: Array<{
    id: VolumeId;
    /**
     * The volume name.
     */
    name: string;
  }>;
  region: Region;
  disk_size?: Instance_DiskSize;
  /**
   * The placement option identifier in which instances are physically located relative to each other within a zone.
   *
   */
  placement_option: string;
  created_at: Timestamp;
  updated_at: Timestamp;
};

/**
 * The human-readable name set for the instance.
 */
export type Instance_Name = string;

/**
 * The hostname of your instance.
 */
export type Instance_Hostname = string;

/**
 * The dns name of your instance.
 */
export type Instance_DNSName = string;

/**
 * A unique number that can be used to identify and reference a specific image.
 */
export type ImageId = string;

/**
 * The ssh key ID.
 */
export type Instance_SSHKeyId = string;

/**
 * The storage size of the instance's boot volume given in GiB.
 *
 */
export type Instance_DiskSize = number;

/**
 * Specifies if the instance is termination protected.
 * When set to `true`, it"s not possible to destroy the instance until it"s switched to `false`.
 * Set to `true` automatically for long-term billed instances.
 *
 */
export type Instance_IsProtected = boolean;

/**
 * Option that you can set at instance creation that will allow the instance to destroy on shutdown command
 *
 */
export type Instance_DestroyOnShutdown = boolean;

export type Instance_Action = "start" | "stop" | "reset";

/**
 * The instance status
 */
export type Instance_Status =
  | "creating"
  | "pending_payment"
  | "active"
  | "stopping"
  | "stopped"
  | "starting"
  | "resetting"
  | "error"
  | "deleting"
  | "enqueued"
  | "copying"
  | "build"
  | "restarting"
  | "shutoff"
  | "updating"
  | "unknown";

/**
 * The id of the floating IP to attach to the instance.
 */
export type Instance_FloatingIp = string;

/**
 * A boolean value indicating whether the instance should have an ipv6 address or not.
 *
 */
export type Instance_PublicIpv6 = boolean;

/**
 * The instance type identifier.
 */
export type Instance_Type = string;

export type Instance_UserData = Array<{
  type: string;
  filename?: string;
  content: string;
}>;

/**
 * The billing type of the instance.
 *
 */
export type Instance_BillingType =
  | "on-demand"
  | "prepaid-monthly"
  | "prepaid-3-month"
  | "prepaid-6-month"
  | "prepaid-12-month";

/**
 * The long term subscription id to be used for this instance.
 * If not provided, the billing_type will default to on-demand.
 *
 */
export type Instance_ReuseLongTermSubscription = string;

export type Instance_UpdateSecurityGroups =
  | Instance_UpdateSecurityGroups_List
  | Instance_UpdateSecurityGroups_Attach
  | Instance_UpdateSecurityGroups_Detach;

/**
 * The instance's security group IDs.
 */
export type Instance_UpdateSecurityGroups_List = Array<SecurityGroupId>;

export type Instance_UpdateSecurityGroups_Attach = {
  attach: SecurityGroupId;
};

export type Instance_UpdateSecurityGroups_Detach = {
  detach: SecurityGroupId;
};

export type Instance_UpdateVolumes =
  | Instance_UpdateVolumes_List
  | Instance_UpdateVolumes_Attach
  | Instance_UpdateVolumes_Detach;

/**
 * The instance's volume IDs.
 */
export type Instance_UpdateVolumes_List = Array<VolumeId>;

export type Instance_UpdateVolumes_Attach = {
  attach: VolumeId;
};

export type Instance_UpdateVolumes_Detach = {
  detach: VolumeId;
};

export type SSHKey = {
  /**
   * A unique identifier for each SSH key. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the SSH key.
   *
   */
  name: string;
  /**
   * SSH public key.
   *
   */
  value: string;
  /**
   * The fingerprint of the SSH key.
   *
   */
  fingerprint: string;
  /**
   * The encryption algorithm type of the SSH key.
   *
   */
  type: string;
  /**
   * The length of the SSH key.
   *
   */
  size: number;
  created_at: Timestamp;
  updated_at: Timestamp;
};

export type FloatingIP = {
  /**
   * A unique identifier for each floating IP. This is automatically generated.
   *
   */
  id: string;
  /**
   * The human-readable name for the floating IP.
   *
   */
  name: string;
  /**
   * The human-readable description for the floating IP.
   *
   */
  description: string;
  /**
   * The IP address of the floating IP.
   *
   */
  ip_address: string | null;
  /**
   * A boolean value indicating whether the floating IP is public or private.
   *
   */
  is_public: boolean;
  /**
   * The IP version of the floating IP.
   *
   */
  version: "ipv4" | "ipv6";
  region: Region;
  status: FloatingIp_Status;
  created_at: Timestamp;
  updated_at: Timestamp;
  instance: {
    /**
     * A unique identifier for the attached instance.
     *
     */
    id: string;
    /**
     * The name of the attached instance.
     *
     */
    name: string;
  } | null;
};

/**
 * The floating ip status.
 */
export type FloatingIp_Status = "creating" | "created" | "deleting" | "error";

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

export type Catalog_Fields = Array<{
  key: string;
  label: string;
  type: string;
  env: string;
}>;

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

/**
 * The region identifier.
 */
export type Region = "ARC-IS-HAF-1" | "EUC-DE-MUC-1" | "NORD-NO-KRS-1";

/**
 * The volume type.
 */
export type VolumeType = "ssd" | "hdd";

/**
 * The filesystem type.
 */
export type FilesystemType = "vast";

/**
 * The OS type.
 */
export type OSType = "linux" | "windows";

export type PerPageQueryParameter = number | null;

export type PageQueryParameter = number | null;

export type $OpenApiTs = {
  "/images": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
        type?: Image_Type;
      };
      res: {
        /**
         * PaginatedImagesResponse
         */
        200: {
          images: Array<Image>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
  };
  "/snapshots": {
    post: {
      req: {
        requestBody: {
          /**
           * The human-readable name set for the snapshot.
           *
           */
          name: string;
          /**
           * The storage size of this snapshot given in GiB (min: 1GiB).
           *
           */
          size: number;
          /**
           * The url pointing to a raw or raw with zstd compressed image.
           *
           */
          url: string;
          os_type?: OSType;
          region: Region;
        };
      };
      res: {
        /**
         * SingleSnapshotResponse
         */
        201: {
          snapshot: Snapshot;
        };
      };
    };
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedSnapshotsResponse
         */
        200: {
          snapshots: Array<Snapshot>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
  };
  "/snapshots/{snapshot_id}": {
    get: {
      req: {
        snapshotId: string;
      };
      res: {
        /**
         * SingleSnapshotResponse
         */
        200: {
          snapshot: Snapshot;
        };
      };
    };
    patch: {
      req: {
        requestBody: {
          /**
           * The new human-readable name for your snapshot.
           *
           */
          name?: string;
        };
        snapshotId: string;
      };
      res: {
        /**
         * SingleSnapshotResponse
         */
        200: {
          snapshot: Snapshot;
        };
      };
    };
    delete: {
      req: {
        snapshotId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/volumes": {
    post: {
      req: {
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
           * The storage size of this volume given in GiB (min: 1GiB).
           *
           */
          size: number;
          region: Region;
        };
      };
      res: {
        /**
         * SingleVolumeResponse
         */
        201: {
          volume: Volume;
        };
      };
    };
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedVolumesResponse
         */
        200: {
          volumes: Array<Volume>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
  };
  "/volumes/{volume_id}": {
    get: {
      req: {
        volumeId: string;
      };
      res: {
        /**
         * SingleVolumeResponse
         */
        200: {
          volume: Volume;
        };
      };
    };
    patch: {
      req: {
        requestBody: {
          /**
           * The human-readable name set for the volume.
           */
          name?: string;
          /**
           * The human-readable description set for the volume.
           */
          description?: string;
          /**
           * The storage size of this volume given in GiB (min: previous size).
           *
           */
          size?: number;
        };
        volumeId: string;
      };
      res: {
        /**
         * SingleVolumeResponse
         */
        200: {
          volume: Volume;
        };
      };
    };
    delete: {
      req: {
        volumeId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/filesystems": {
    post: {
      req: {
        requestBody: {
          /**
           * The human-readable name set for the filesystem.
           *
           */
          name: string;
          /**
           * The human-readable description set for the filesystem.
           *
           */
          description?: string;
          type?: FilesystemType;
          /**
           * The storage size of this filesystem given in GiB (min: 1GiB).
           *
           */
          size: number;
          region: Region;
        };
      };
      res: {
        /**
         * SingleFilesystemResponse
         */
        201: {
          filesystem: Filesystem;
        };
      };
    };
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedFilesystemsResponse
         */
        200: {
          filesystems: Array<Filesystem>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
  };
  "/filesystems/{filesystem_id}": {
    get: {
      req: {
        filesystemId: string;
      };
      res: {
        /**
         * SingleFilesystemResponse
         */
        200: {
          filesystem: Filesystem;
        };
      };
    };
    patch: {
      req: {
        filesystemId: string;
        requestBody: {
          /**
           * The human-readable name set for the filesystem.
           */
          name?: string;
          /**
           * The human-readable description set for the filesystem.
           */
          description?: string;
          /**
           * The storage size of this filesystem given in GiB (min: previous size).
           *
           */
          size?: number;
        };
      };
      res: {
        /**
         * SingleFilesystemResponse
         */
        200: {
          filesystem: Filesystem;
        };
      };
    };
    delete: {
      req: {
        filesystemId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/security-groups": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedSecurityGroupsResponse
         */
        200: {
          security_groups: Array<SecurityGroup>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
    post: {
      req: {
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
      };
      res: {
        /**
         * SingleSecurityGroupResponse
         */
        201: {
          security_group: SecurityGroup;
        };
      };
    };
  };
  "/security-groups/{security_group_id}": {
    get: {
      req: {
        securityGroupId: string;
      };
      res: {
        /**
         * SingleSecurityGroupResponse
         */
        200: {
          security_group: SecurityGroup;
        };
      };
    };
    patch: {
      req: {
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
        securityGroupId: string;
      };
      res: {
        /**
         * SingleSecurityGroupResponse
         */
        200: {
          security_group: SecurityGroup;
        };
      };
    };
    delete: {
      req: {
        securityGroupId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/instances": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedInstancesResponse
         */
        200: {
          instances: Array<Instance>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
    post: {
      req: {
        requestBody: {
          name: Instance_Name;
          hostname: Instance_Hostname;
          type: Instance_Type;
          image: ImageId;
          /**
           * The unique ID of the reservation the instance is associated with.
           *
           */
          reservation_id?: string;
          /**
           * An array of ssh key ids.
           * This should not be provided if `password` authentication method is desired.
           *
           */
          ssh_keys?: Array<Instance_SSHKeyId>;
          /**
           * An array of security group ids.
           *
           */
          security_groups?: Array<SecurityGroupId>;
          /**
           * An array of volume ids.
           *
           */
          volumes?: Array<VolumeId>;
          /**
           * The password to access the instance.
           * Your password must have upper and lower chars, digits and length between 8-72.
           * **Please Note**: Only one of `ssh_keys` or `password` can be provided.
           * Password is less secure - we recommend you use an SSH key-pair.
           *
           */
          password?: string;
          /**
           * The placement option identifier in which instances are physically located relative to each other within a zone.
           *
           */
          placement_option?: string;
          is_protected?: Instance_IsProtected;
          destroy_on_shutdown?: Instance_DestroyOnShutdown;
          public_ipv6?: Instance_PublicIpv6;
          floating_ip?: Instance_FloatingIp;
          region: Region;
          billing_type?: Instance_BillingType;
          reuse_long_term_subscription?: Instance_ReuseLongTermSubscription;
          disk_size?: Instance_DiskSize;
          /**
           * Option to provide metadata.
           */
          metadata?: {
            user_data?: Instance_UserData;
            /**
             * A plain text bash script or "cloud-config" file that will be executed after the first instance boot.
             * It is limited to 64 KiB in size. You can use it to configure your instance, e.g. installing the **NVIDIA GPU driver**.
             * Learn more about [startup scripts and installing the GPU driver](https://support.com/support/solutions/articles/47001122478).
             *
             */
            startup_script?: string;
          };
        };
      };
      res: {
        /**
         * SingleInstanceResponse
         */
        201: {
          instance: Instance;
        };
      };
    };
  };
  "/instances/{instance_id}": {
    get: {
      req: {
        instanceId: string;
      };
      res: {
        /**
         * SingleInstanceResponse
         */
        200: {
          instance: Instance;
        };
      };
    };
    delete: {
      req: {
        instanceId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
    patch: {
      req: {
        instanceId: string;
        requestBody: {
          name?: Instance_Name;
          is_protected?: Instance_IsProtected;
          /**
           * The unique ID of the reservation the instance is associated with.
           *
           */
          reservation_id?: string;
          security_groups?: Instance_UpdateSecurityGroups;
          volumes?: Instance_UpdateVolumes;
          disk_size?: Instance_DiskSize;
        };
      };
      res: {
        /**
         * SingleInstanceResponse
         */
        200: {
          instance: Instance;
        };
      };
    };
  };
  "/instances/{instance_id}/actions": {
    get: {
      req: {
        instanceId: string;
      };
      res: {
        /**
         * Instance.ListActionsResponse
         */
        200: {
          actions: Array<Instance_Action>;
        };
      };
    };
    post: {
      req: {
        instanceId: string;
        requestBody: {
          action: Instance_Action;
        };
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/instances/{instance_id}/user-metadata": {
    get: {
      req: {
        instanceId: string;
      };
      res: {
        /**
         * Instance.GetInstanceUserMetadataResponse
         */
        200: {
          [key: string]: unknown;
        };
      };
    };
  };
  "/instances/{instance_id}/snapshots": {
    get: {
      req: {
        instanceId: string;
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedSnapshotsResponse
         */
        200: {
          snapshots: Array<Snapshot>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
    post: {
      req: {
        instanceId: string;
        requestBody: {
          /**
           * Name of the snapshot.
           */
          name: string;
        };
      };
      res: {
        /**
         * SingleSnapshotResponse
         */
        201: {
          snapshot: Snapshot;
        };
      };
    };
  };
  "/ssh-keys": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedSSHKeysResponse
         */
        200: {
          ssh_keys: Array<SSHKey>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
    post: {
      req: {
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
      };
      res: {
        /**
         * SingleSSHKeyResponse
         */
        201: SSHKey;
      };
    };
  };
  "/ssh-keys/{ssh_key_id}": {
    get: {
      req: {
        sshKeyId: string;
      };
      res: {
        /**
         * SingleSSHKeyResponse
         */
        200: SSHKey;
      };
    };
    patch: {
      req: {
        requestBody: {
          /**
           * The new human-readable name for your ssh key.
           *
           */
          name?: string;
        };
        sshKeyId: string;
      };
      res: {
        /**
         * SingleSSHKeyResponse
         */
        200: SSHKey;
      };
    };
    delete: {
      req: {
        sshKeyId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/floating-ips": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedFloatingIPsResponse
         */
        200: {
          floating_ips: Array<FloatingIP>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
    post: {
      req: {
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
      };
      res: {
        /**
         * SingleFloatingIPResponse
         */
        201: {
          floating_ip: FloatingIP;
        };
      };
    };
  };
  "/floating-ips/{floating_ip_id}": {
    get: {
      req: {
        floatingIpId: string;
      };
      res: {
        /**
         * SingleFloatingIPResponse
         */
        200: {
          floating_ip: FloatingIP;
        };
      };
    };
    patch: {
      req: {
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
      };
      res: {
        /**
         * SingleFloatingIPResponse
         */
        200: {
          floating_ip: FloatingIP;
        };
      };
    };
    delete: {
      req: {
        floatingIpId: string;
      };
      res: {
        /**
         * success
         */
        204: void;
      };
    };
  };
  "/availability/{region}/instances": {
    get: {
      req: {
        placement?: string;
        region: Region;
      };
      res: {
        /**
         * InstancesAvailabilityResponse
         */
        200: InstancesAvailability;
      };
    };
  };
  "/catalog": {
    get: {
      req: {
        page?: number | null;
        perPage?: number | null;
      };
      res: {
        /**
         * PaginatedCatalogResponse
         */
        200: {
          catalog: Array<Catalog>;
          total_count: number;
          page: number;
          per_page: number;
        };
      };
    };
  };
};
