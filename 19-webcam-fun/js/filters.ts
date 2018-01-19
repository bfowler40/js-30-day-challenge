export const redEffect = (pixels) => {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
		pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
		pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
	}
	return pixels;
};

export const rgbSplit = (pixels) => {
	for (let i = 0; i < pixels.data.length; i += 4) {
		pixels.data[i - 50] = pixels.data[i + 0]; // RED
		pixels.data[i + 50] = pixels.data[i + 1]; // GREEN
		pixels.data[i - 55] = pixels.data[i + 2]; // Blue
	}
	return pixels;
};
