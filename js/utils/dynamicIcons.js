// sets weather icon based on cloud cover or rainfall 
export const hourlyWeatherIcon = (cloud, rain, hour)=>{
    let icon;
    if (hour > 6 && hour < 21) {
        icon = rain > 0.1 ? "rain.png" : cloud > 40 ? "cloud.png" : "sun.png";
    } else {
        icon = rain > 0.1 ? "night-rain.png" : cloud > 40 ? "night-cloud.png" : "night.png";
    }
    return icon;
}
export const weatherIcon = (cloud, rain)=>{
    const icon = rain > 0.1 ? "rain.png" : cloud > 40 ? "cloud.png" : "sun.png";
    return icon;
}

// sets wave height icon based on current wave height
export const waveHeightIcon = (waveHeight)=>{
    const boardSize = localStorage.getItem("boardSize") ? localStorage.getItem("boardSize") : "7";
    console.log(boardSize);
    let selectedClass;
    switch (boardSize) {
        case "5":
            selectedClass = waveHeight < 0.65 ? "red" : waveHeight < 1.6 ? "orange" : "green";
            break;
        case "6":
            selectedClass = waveHeight < 0.6 ? "red" : waveHeight < 1.5 ? "orange" : "green";
            break;
        case "7":
            selectedClass = waveHeight < 0.5 ? "red" : waveHeight < 1.4 ? "orange" : "green";
            break;
        case "8":
            selectedClass = waveHeight < 0.5 ? "red" : waveHeight < 1.3 ? "orange" : "green";
            break;
        case "9":
            selectedClass = waveHeight < 0.4 ? "red" : waveHeight < 1.1 ? "orange" : "green";
            break;
    }
    return selectedClass;
}

// sets wind speed icon based on current wind speed
export const windSpeedIcon = (windSpeed)=>{
    const selectedClass = windSpeed < 5 ? "green" : windSpeed < 15 ? "orange" : "red";
    return selectedClass;
}

// sets water temp icon based on current water temp
export const tempIcon = (temp)=>{
    const selectedClass = temp < 10 ? "blue" : "orange";
    return selectedClass;
}

export const highlight = (waveHeight)=>{
    const boardSize = localStorage.getItem("boardSize") ? localStorage.getItem("boardSize") : "7";
    console.log(boardSize);
    let selectedClass;
    switch (boardSize) {
        case "5":
            selectedClass = waveHeight < 0.65 ? "red" : waveHeight < 1.6 ? "orange" : "green";
            break;
        case "6":
            selectedClass = waveHeight < 0.6 ? "red" : waveHeight < 1.5 ? "orange" : "green";
            break;
        case "7":
            selectedClass = waveHeight < 0.5 ? "red" : waveHeight < 1.4 ? "orange" : "green";
            break;
        case "8":
            selectedClass = waveHeight < 0.5 ? "red" : waveHeight < 1.3 ? "orange" : "green";
            break;
        case "9":
            selectedClass = waveHeight < 0.4 ? "red" : waveHeight < 1.1 ? "orange" : "green";
            break;
    }
    return selectedClass;
}

export const gradientManager = (hour)=>{
    const selectedClass = hour < 5 ? "night-gradient" 
                        : hour < 7 ? "dawn-dusk-gradient" 
                        : hour < 20 ? "day-gradient" 
                        : hour < 22 ? "dawn-dusk-gradient"
                        : "night-gradient";
    return selectedClass;
}

export const waveHeightStatement = (waveHeight)=>{
    const statement = waveHeight <= 0.5 ? "up to knee high"
                        : waveHeight <= 1 ? "up to waist high"
                        : waveHeight <= 1.5 ? "up to shoulder high"
                        : waveHeight <= 1.9 ? "up to head high"
                        : "over head high";
    return statement;
}