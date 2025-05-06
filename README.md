# Extract Coordinates from Google Maps URL

This is a simple and lightweight library written in TypeScript that extracts geographic coordinates (latitude and longitude) from Google Maps URLs. It supports fetching redirected URLs and parsing coordinates from URLs like `https://maps.app.goo.gl/...`.

## Features

- Extract latitude and longitude from Google Maps URLs.
- Handles redirects and fetches the final URL.
- Lightweight and simple to use.
- Written in TypeScript with type definitions.

## Installation

You can install this library via npm:

```bash
npm install your-library-name
```

```typescript
import { extractCoordinatesUrl } from 'your-library-name';

const url = 'https://maps.app.goo.gl/5a2iNmeLGDpY9gc36';

const coordinates = await extractCoordinatesUrl(url);
if (coordinates) {
    console.log(`Latitude: ${coordinates.latitude}, Longitude: ${coordinates.longitude}`);
} else {
    console.log('No coordinates found.');
}

```
