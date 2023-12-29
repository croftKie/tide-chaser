import searchGlass from "../../assets/search.svg";
import downArrowImg from "../../assets/down-arrow.png";
import { useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useDispatch } from "react-redux";
import { setCurrentCoords, setInfoBarData } from "../../redux/surfDataSlice";
import "mapbox-gl/dist/mapbox-gl.css";
import { fetchData, coordsFromPlaceName } from "../../utilities/fetchData";
import { setData } from "../../redux/surfDataSlice";

function Search() {
  const searchPlace = useRef();
  const makeSearch = useRef();
  const downArrow = useRef();
  const searchContent = useRef();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const dispatch = useDispatch();
  let mode = 0;

  // Map API key
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2llY3JvZnQiLCJhIjoiY2xnejM2MjlrMDc3YTNlb3g0dDY4bmVkaCJ9.rDCU8bqMRQN1xwkYCp0uuQ";

  // default coordinates for initial load
  const coords = {
    lng: -13.558,
    lat: 29.117,
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      searchContent.current.classList.add("expanded");
      downArrow.current.classList.add("rotated-arrow");
      mode = 1;
      setTimeout(() => {
        mapGeneration(e.target);
      }, 1000);
    }
  };
  const handleSearchClick = (e) => {
    // opens map and calls map generation on img click
    searchContent.current.classList.add("expanded");
    downArrow.current.classList.add("rotated-arrow");
    mode = 1;
    setTimeout(() => {
      mapGeneration(searchPlace.current);
    }, 1000);
  };
  const handleMapClick = (e) => {
    // rotates arrow identifier
    if (mode === 1) {
      searchContent.current.classList.remove("expanded");
      downArrow.current.classList.remove("rotated-arrow");
      mode = 0;
    } else {
      searchContent.current.classList.add("expanded");
      downArrow.current.classList.add("rotated-arrow");
      mode = 1;
    }
  };

  // map generation function
  async function mapGeneration(e) {
    const data = await coordsFromPlaceName(e.value);
    if (data[0] === undefined) {
      console.log("city not found");
    } else {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [data[0].lon, data[0].lat],
        zoom: 9,
      });
      map.current.on("click", async (e) => {
        // setNotifications(data[0].name, data[0].state, data[0].lon, data[0].lat); //sets infobar data
        dispatch(
          setInfoBarData({
            state: data[0].name,
            country: data[0].country,
          })
        );

        const { lng, lat } = e.lngLat;
        dispatch(setCurrentCoords([lng, lat]));
        const newSurfData = await fetchData(lng, lat);
        dispatch(setData(newSurfData));

        new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map.current);
      });
    }
  }

  return (
    <section ref={searchContent} className="search">
      <div className="search-bar">
        <div className="bar">
          <input
            ref={searchPlace}
            placeholder="Search for a city to open the map"
            id="search-place"
            type="text"
          />
          <img
            onClick={handleSearchClick}
            ref={makeSearch}
            className="make-search"
            src={searchGlass}
            alt=""
          />
        </div>
        <img
          onClick={handleMapClick}
          ref={downArrow}
          className="down-arrow"
          src={downArrowImg}
          alt=""
        />
      </div>
      <div ref={mapContainer} className="map" id="map"></div>
    </section>
  );
}

export default Search;
