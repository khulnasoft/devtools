# Kubernetes Backend

This is the backend part of the Kubernetes plugin for Devtools. It is called by and responds to requests from the frontend [`@devtools/plugin-kubernetes`](https://github.com/khulnasoft/devtools/tree/master/plugins/kubernetes) plugin.

It directly interfaces with the Kubernetes API control plane to obtain information about objects that will then be presented at the front end.

## Introduction

See our announcement blog post [New Devtools feature: Kubernetes for Service Owners](https://devtools.khulnasoft.com/blog/2021/01/12/new-devtools-feature-kubernetes-for-service-owners) to learn more about the motivation behind developing the plugin.

## Setup & Configuration

This plugin must be explicitly added to a Devtools app, along with it's peer frontend plugin.

The plugin requires configuration in the Devtools `app-config.yaml` to connect to a Kubernetes API control plane.

In addition, configuration of an entity's `catalog-info.yaml` helps identify which specific Kubernetes object(s) should be presented on a specific entity catalog page.

For more information, see the [formal documentation about the Kubernetes feature in Devtools](https://devtools.khulnasoft.com/docs/features/kubernetes/).
