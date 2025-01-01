# Catalog Client

Contains a frontend and backend compatible client for communicating with the
Devtools Catalog.

Backend code may import and use this package directly.

However, frontend code will not want to instantiate a catalog client directly -
use the `@devtools/plugin-catalog-react` package instead, which exports a
`catalogApiRef` that can be leveraged like other frontend utility APIs.

## Links

- [Default frontend part of the catalog](https://github.com/spotify/devtools/tree/master/plugins/catalog)
- [Default backend part of the catalog](https://github.com/spotify/devtools/tree/master/plugins/catalog-backend)
- [The Devtools homepage](https://devtools.khulnasoft.com)
