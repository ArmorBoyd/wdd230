document.addEventListener("DOMContentLoaded", function () {
    const tempElement = document.getElementById("temp");
    const speedElement = document.getElementById("speed");
    const chillElement = document.getElementById("chill");

    if (tempElement && speedElement && chillElement) {
        const temp = parseFloat(tempElement.textContent);
        const speed = parseFloat(speedElement.textContent);

        if (!isNaN(temp) && !isNaN(speed)) {
            if (temp <= 50 && speed > 3.0) {
                const chill = calculateWindChill(temp, speed);
                chillElement.textContent = `Wind Chill: ${chill}°F`;
            } else {
                chillElement.textContent = "Wind Chill: N/A";
            }
        }
    }
});

function calculatechill(temperature, speed) {
    const chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    return Math.round(chill);
}
