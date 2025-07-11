# Vibe coded picture date reader

This repository contains a Quarkus backend and a minimal Angular frontend.
The Angular app lets users upload a photo, which the backend analyses to extract
the original capture date from the image's metadata. The date is returned to the
frontend and shown next to the uploaded photo.

Vibe coded with OpenAI's codex agent. 

## Build

This project uses Maven. To build the application run:

```bash
mvn package
```

## Run

To run the application in dev mode:

```bash
mvn quarkus:dev
```

The Angular dev server can be started from the `frontend` folder:

```bash
npx ng serve
```

The backend has CORS enabled for `http://localhost:4200` so the frontend can
call the `/upload` endpoint during development.
