// set local storage item
export const setToCache = (coords, name, daily, hourly, timestamp)=>{ 
    const obj = {
        lng : coords.lng,
        lat : coords.lat,
        name : name,
        timestamp : timestamp,
        daily : daily,
        hourly : hourly
    }
    console.log(obj);
    // if type object, JSON it, if not save as string
    localStorage.setItem(obj.name, JSON.stringify(obj)); // turn obj into string for storage
    console.log("Item Stored");
}

// get local storage item
export const getFromCache = (key) =>{ // getCoords
    return JSON.parse(localStorage.getItem(key)); // retrieve string and turn into obj
}