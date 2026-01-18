/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Portainer URL - URL of your Portainer instance (e.g., https://portainer.example.com:9443) */
  "portainerUrl": string,
  /** API Key - Your Portainer API access token */
  "apiKey": string,
  /** Default Environment ID - ID of the default Portainer environment to use (defaults to 1) */
  "defaultEndpointId": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `containers` command */
  export type Containers = ExtensionPreferences & {}
  /** Preferences accessible in the `stacks` command */
  export type Stacks = ExtensionPreferences & {}
  /** Preferences accessible in the `images` command */
  export type Images = ExtensionPreferences & {}
  /** Preferences accessible in the `volumes` command */
  export type Volumes = ExtensionPreferences & {}
  /** Preferences accessible in the `networks` command */
  export type Networks = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `containers` command */
  export type Containers = {}
  /** Arguments passed to the `stacks` command */
  export type Stacks = {}
  /** Arguments passed to the `images` command */
  export type Images = {}
  /** Arguments passed to the `volumes` command */
  export type Volumes = {}
  /** Arguments passed to the `networks` command */
  export type Networks = {}
}

