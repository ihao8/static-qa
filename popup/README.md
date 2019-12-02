# Popup
Launches a confirmation pop.

## Installation

Install dependencies:

```bash
yarn
```

## Date Format

`accountCreationDate` value must be supplied in [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) format.

## Development

Run dev server:

```bash
yarn dev
```

Use in local browser for testing (port may vary):

```html
<script src="http://localhost:8080/main.js"></script>
<script>window.addEventListener('load',function(){window.tithelyConfirm.load({accountCreationDate:'2019-01-01T10:00:00'})});</script>
```

## QA

Use this for QA, inserting the correct account creation date.

```html
<script src="https://static.tithelyqa.com/popup/main.js"></script>
<script>window.addEventListener('load',function(){window.tithelyConfirm.load({accountCreationDate:'2019-01-01T10:00:00'})});</script>
```

## Production

Use this for production, inserting the correct account creation date.

```html
<script src="https://static.tithely.com/popup/main.js"></script>
<script>window.addEventListener('load',function(){window.tithelyConfirm.load({accountCreationDate:'2019-01-01T10:00:00'})});</script>
```

## Deploy

See project [README.md](../README.md).
