
const fetchUrl = async (url: string) => {
    try {
        const response = await fetch(url);

        const redirectedUrl = response.url;

        const data = await response.text();

        // Kembalikan URL yang di-redirect jika diperlukan
        return redirectedUrl;
    } catch (error) {
        console.error('Error:', error);
    }
}

export const extractCoordinatesShortUrl = async (url: string) => {

    const redirectedUrl = await fetchUrl(url);

    const regex = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;

    // Menyocokkan string dengan regex
    const matches = redirectedUrl?.match(regex);

    if (matches) {
        const latitude = parseFloat(matches[1]);  // Latitude, yang ada setelah !3d
        const longitude = parseFloat(matches[2]); // Longitude, yang ada setelah !4d

        return {latitude, longitude};
    } else {
        return null;
    }
}