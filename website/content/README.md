# Content

Site content lives here as Markdown files with **typed frontmatter** (the `---` block
at the top). At build time, `src/lib/content.ts` reads and validates every file with
zod — **invalid frontmatter fails the build** with an error naming the file. Add or edit
content by editing these files; no code changes needed.

- One file = one item. The **filename (without `.md`) is the `slug`** (e.g.
  `products/aerowing-x1.md` → `aerowing-x1`).
- `order` sorts items ascending (lowest first).
- Fields marked _(optional)_ can be omitted.
- Text below the frontmatter (the Markdown body) is currently **not rendered** — keep
  content in the frontmatter fields for now.

## products/ — RC planes, drones, defence platforms

| Field           | Type                            | Notes                                         |
| --------------- | ------------------------------- | --------------------------------------------- |
| `title`         | string                          | Product name                                  |
| `category`      | `plane` \| `drone` \| `defence` | Drives the Products filter                    |
| `categoryLabel` | string                          | Display tag, e.g. "RC Aircraft", "Multirotor" |
| `summary`       | string                          | One-line description                          |
| `specs`         | list of `{ label, value }`      | Key specs (optional; defaults to none)        |
| `image`         | string _(optional)_             | Path under `public/` (real photos pending)    |
| `featured`      | boolean _(optional)_            | Show on the homepage (default false)          |
| `order`         | number _(optional)_             | Sort order (default 0)                        |

## team/ — founders & team

| Field   | Type                | Notes                |
| ------- | ------------------- | -------------------- |
| `name`  | string              |                      |
| `role`  | string              | e.g. "Founder & CEO" |
| `bio`   | string              | Short bio            |
| `photo` | string _(optional)_ | Path under `public/` |
| `order` | number _(optional)_ |                      |

## labs/ — education programs

| Field       | Type                         | Notes           |
| ----------- | ---------------------------- | --------------- |
| `title`     | string                       |                 |
| `audience`  | `k12` \| `college`           |                 |
| `summary`   | string                       |                 |
| `equipment` | list of strings _(optional)_ | What's included |
| `benefits`  | list of strings _(optional)_ |                 |
| `order`     | number _(optional)_          |                 |

## defence/ — capability cards

General capability only — **no classified or export-controlled detail**.

| Field         | Type                | Notes                             |
| ------------- | ------------------- | --------------------------------- |
| `title`       | string              |                                   |
| `description` | string              |                                   |
| `icon`        | string _(optional)_ | Icon key (e.g. `radar`, `shield`) |
| `order`       | number _(optional)_ |                                   |

## testimonials/

| Field    | Type                | Notes |
| -------- | ------------------- | ----- |
| `quote`  | string              |       |
| `author` | string              |       |
| `org`    | string _(optional)_ |       |
| `order`  | number _(optional)_ |       |
