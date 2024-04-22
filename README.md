# Genesis Cloud JavaScript Client

The JavaScript library for the [Genesis Cloud](http://genesiscloud.com) API offers an easy way to manage resources like instances, volumes, snapshots, filesystems, floating IPs, security groups and more in your JavaScript or TypeScript applications.

## Installation

You can install the Genesis Cloud SDK using your preferred node package manager:

```bash
npm install @genesiscloud/genesiscloud-js
# or
yarn add @genesiscloud/genesiscloud-js
# or
pnpm add @genesiscloud/genesiscloud-js
```

## Configuration

Before you start, you'll need to configure the client with your Genesis Cloud API token. You can generate your API token from the [Genesis Cloud console](https://console.genesiscloud.com/dashboard).

Here's how to configure the SDK:

```typescript
const genesiscloud = new GenesisCloudClient({
  TOKEN: "your_api_token_here",
});
```

## Examples

### Managing Instances

Listing Instances:

```typescript
const instances = await genesiscloud.instances.listInstances({
  page: 1,
  perPage: 100,
});
```

Creating a new Instance:

```typescript
const instance = await genesiscloud.instances.createInstance({
  requestBody: {
    name: "test instance",
    hostname: "test instance",
    type: "vcpu-192_memory-1920g_nvidia-h100-sxm5-8",
    image: "ubuntu-ml-nvidia-pytorch",
    region: "NORD-NO-KRS-1",
    ssh_keys: ["ssh_key_id_here"],
  },
});
```

Updating an Instance:

```typescript
const updatedInstance = await genesiscloud.instances.updateInstance({
  instanceId: "your_instance_id",
  requestBody: {
    name: "New Instance Name",
    volumes: ["volume_id_here"],
  },
});
```

Deleting an Instance:

```typescript
await genesiscloud.instances.deleteInstance({
  instanceId: "your_instance_id",
});
```

### Managing Volumes

Creating a Volume

```typescript
const volume = await genesiscloud.volumes.createVolume({
  requestBody: {
    name: "volume name",
    description: "volume description",
    type: "ssd",
    size: 10, // in GiB
    region: "NORD-NO-KRS-1",
  },
});
```

Deleting a Volume

```typescript
await genesiscloud.volumes.deleteVolume({
  volumeId: "your_volume_id",
});
```

### Managing Snapshots

Creating a Snapshot from an instance:

```typescript
const snapshot = await genesiscloud.instances.createInstanceSnapshot({
  instanceId: "your_instance_id",
  requestBody: {
    name: "Test snapshot",
  },
});
```

Deleting a Snapshot:

```typescript
await genesiscloud.snapshots.deleteSnapshot({
  snapshotId: "your_snapshot_id",
});
```

### Managing SSH Keys

Listing SSH Keys:

```typescript
const sshKeys = await genesiscloud.sshKeys.listSshKeys({});
```

Creating an SSH Key:

```typescript
const sshKey = await genesiscloud.sshKeys.createSshKey({
  requestBody: {
    name: "test key",
    value: "ssh-rsa XXXXXXXXXXXXXXXXXXXXXXXX...",
  },
});
```

Deleting an SSH Key:

```typescript
await genesiscloud.sshKeys.deleteSshKey({
  sshKeyId: "your-ssh-key-id",
});
```

For more detailed information on the Genesis Cloud API refer to the [Genesis Cloud API documentation](https://developers.genesiscloud.com/).
