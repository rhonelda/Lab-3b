// 2. Beaufort Wind Scale
function beaufortWindScale(windspeed) {
    if (windspeed < 1) {
        return "Calm (0-0.2 m/s)";
    } else if (windspeed < 5) {
        return "Light Air (1-4 m/s)";
    } else if (windspeed < 11) {
        return "Light Breeze (5-10 m/s)";
    } else if (windspeed < 19) {
        return "Gentle Breeze (11-18 m/s)";
    } else if (windspeed < 29) {
        return "Moderate Breeze (19-28 m/s)";
    } else if (windspeed < 39) {
        return "Strong Breeze (29-38 m/s)";
    } else if (windspeed < 50) {
        return "Gale (39-49 m/s)";
    } else {
        return "Strong Gale or Hurricane (50+ m/s)";
    }
}
