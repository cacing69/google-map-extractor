import { extractCoordinatesShortUrl } from '../src/index';

test('Get coordinates from Short URL', async () => {
    const url = "https://maps.app.goo.gl/5a2iNmeLGDpY9gc36";
    const result = await extractCoordinatesShortUrl(url);

    expect(result).toEqual({
        latitude: -6.6398231,
        longitude: 106.774047
    });
});


test('Get coordinates from Wrong URL', async () => {
    const url = "https://maps.app.goo.gl/invalid-url";
    const result = await extractCoordinatesShortUrl(url);

    expect(result).toBeNull();
});
