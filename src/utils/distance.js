function getDistance(lat1, lon1, lat2, lon2) {
    const toRad = (angle) => (Math.PI / 180) * angle;
    const R = 6371; // Radius of Earth in km

    // Convert degrees to radians
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    // Haversine formula
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));


    // Distance in km
    return R * c;
}

module.exports = { getDistance };
