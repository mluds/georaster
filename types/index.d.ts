/**
 * Returns a Leaflet GeoRaster layer for displaying GeoTIFF data.
 *
 * @param {any]} data The GeoTIFF data, either a URL string, plain Array, or ArrayBuffer.
 * @param {any} metadata Layer metadata.
 * @param {boolean} debug A flag for enabling debug logging.
 * @returns {GeoRaster} The Leaflet GeoRaster layer.
 */
declare function parseGeoraster(data: any, metadata: any, debug: boolean): GeoRaster
export default parseGeoraster;
