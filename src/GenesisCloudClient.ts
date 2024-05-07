import type { BaseHttpRequest } from "./core/BaseHttpRequest";
import type { OpenAPIConfig } from "./core/OpenAPI";
import { Interceptors } from "./core/OpenAPI";
import { FetchHttpRequest } from "./core/FetchHttpRequest";

import { AvailabilityService } from "./services.gen";
import { CatalogService } from "./services.gen";
import { FilesystemsService } from "./services.gen";
import { FloatingIpsService } from "./services.gen";
import { ImagesService } from "./services.gen";
import { InstancesService } from "./services.gen";
import { SecurityGroupsService } from "./services.gen";
import { SnapshotsService } from "./services.gen";
import { SshKeysService } from "./services.gen";
import { VolumesService } from "./services.gen";

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class GenesisCloudClient {
  public readonly availability: AvailabilityService;
  public readonly catalog: CatalogService;
  public readonly filesystems: FilesystemsService;
  public readonly floatingIps: FloatingIpsService;
  public readonly images: ImagesService;
  public readonly instances: InstancesService;
  public readonly securityGroups: SecurityGroupsService;
  public readonly snapshots: SnapshotsService;
  public readonly sshKeys: SshKeysService;
  public readonly volumes: VolumesService;

  public readonly request: BaseHttpRequest;

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = FetchHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? "https://api.genesiscloud.com/compute/v1",
      VERSION: config?.VERSION ?? "1.0.0",
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? "include",
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
      interceptors: {
        request: config?.interceptors?.request ?? new Interceptors(),
        response: config?.interceptors?.response ?? new Interceptors(),
      },
    });

    this.availability = new AvailabilityService(this.request);
    this.catalog = new CatalogService(this.request);
    this.filesystems = new FilesystemsService(this.request);
    this.floatingIps = new FloatingIpsService(this.request);
    this.images = new ImagesService(this.request);
    this.instances = new InstancesService(this.request);
    this.securityGroups = new SecurityGroupsService(this.request);
    this.snapshots = new SnapshotsService(this.request);
    this.sshKeys = new SshKeysService(this.request);
    this.volumes = new VolumesService(this.request);
  }
}
