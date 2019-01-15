### Local Setup

Install dependencies:

```bash
yarn install
```

Install `json-server`, used to simulate library served from network request:

```bash
yarn global add json-server
```

Start the `json-server`:

```bash
yarn run json-server
```
Start the API:

```bash
yarn start
```

Library available at `http://localhost:3000/api/library`

Audio files are stored on dropbox with the link included in the library metadata.

### Project Structure

- data directory contains a `db.json` file served by `json-server`.
- modules directory contains a directory for each logical module and exports each one (only library in this case)
- each module contains, at minimum, a `router.js`, a `controller.js`, and an `index.js` that exports anything that needs to be accessible outside of the module.
- `router.js` imports module routers and exports the root api router
- `index.js` is the entry point, creates and sets up the express server

### Potential Improvements

- router could be more extensible to allow for root paths other than `/api`, api versioning for example: `/api/v1`, `/api/v2`
- additional metadata for songs, like album or artists images
- paging for library to support more songs
- additional layers/abstractions as site grows, config directory as opposed to single file, for instance
- unit tests
- use of environment variables to configure port, production mode, etc
