---
id: architecture
title: Search Architecture
description: Documentation on Search Architecture
---

Below you can explore the Search Architecture. Our aim with this architecture is
to support a wide variety of search engines, while providing a simple developer
experience for plugin developers, and a good out-of-the-box experience for
Devtools end-users.

<!-- todo: Needs zoomable plugin -->

![Search Architecture](../../assets/search/architecture.drawio.svg)

At a base-level, we want to support the following:

- We aim to enable the capability to search across the entire Devtools
  ecosystem including, but not limited to, entities in the software catalog.
  Searchable content won't be required to relate directly to the software
  catalog, but by convention, we may encourage loose relationships using
  well-known field names or attributes.
- We aim to enable the capability to deploy Devtools using any search engine,
  by providing an integration and translation layer between the core search
  plugin and search engine specific logic that can be extended for different
  search engines. We may also introduce the ability to replace the backend API
  endpoint with a custom endpoint for simpler customization.

More advanced use-cases we hope to support with this architecture include:

- It should be possible for any plugin to expose new content to search. (e.g.
  entity metadata, documentation from TechDocs)
- It should be possible for any plugin to append relevant metadata to existing
  content in search. (e.g. location (path) for TechDocs page)
- It should be possible to refine search queries (e.g. ranking, scoring, etc.)
- It should be possible to customize the search UI
- It should be possible to add search functionality to any Devtools plugin or
  deployment

Architecture non-goals:

- At this time, we do not intend to directly support event-driven or incremental
  index management. Instead, we'll be focused on scheduled, bulk index
  management.

## Tech Stack

| Stack                     | Location                                              |
| ------------------------- | ----------------------------------------------------- |
| Frontend Plugin           | @devtools/plugin-search                              |
| Frontend Plugin Library   | @devtools/plugin-search-react                        |
| Isomorphic Plugin Library | @devtools/plugin-search-common                       |
| Backend Plugin            | @devtools/plugin-search-backend                      |
| Backend Plugin Library    | @devtools/plugin-search-backend-node                 |
| Backend Plugin Module     | @devtools/plugin-search-backend-module-elasticsearch |
| Backend Plugin Module     | @devtools/plugin-search-backend-module-pg            |
