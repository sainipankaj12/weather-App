import img1 from "/src/assets/hot5.jpeg";
import img2 from "/src/assets/pk.png";
import { WiHumidity } from "react-icons/wi";
import { HiMiniArrowUp } from "react-icons/hi2";
import { MdCompress } from "react-icons/md";
import { HiMiniArrowDown } from "react-icons/hi2";
import { GiSeaCreature } from "react-icons/gi";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
function Weather() {
  const [city, setCity] = useState({});
  const [data, setData] = useState({});
  let apiKey = "fb18e94558886cbc603798b0a2cb0455";

  const getWeather = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleOnchange = (e) => {
    e.preventDefault();
    setCity(e.target.value);
  };
  const handleSubmit = () => {
    getWeather(city);
  };
  useEffect(() => {
    getWeather("london");
  }, []);
  return (
    <>
      <div
        className="   w-full h-screen bg-no-repeat  bg-cover "
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="overlay   ">
          <div className="container mx-auto min-w-full min-h-screen md:w-full md:h-screen  p-5  ">
            <div className="section  input-section sm:w-full  flex justify-between p-3  ms:pl-10 ms:pr-10 bg-opacity-75 text-black font-bold rounded bg-slate-800">
              <input
                className="md:w-60 w-40 rounded md:pl-5"
                type="text"
                name="city"
                placeholder="Enter city..."
                onChange={handleOnchange}
              ></input>
              <button
                className="bg-white text-black font-bold pl-4 pr-4 rounded hover:bg-yellow-600 "
                type=" button "
                onClick={handleSubmit}
              >
                City
              </button>
            </div>

            <div
              className="section section__tempreture sm:w-full flex justify-between rounded mt-5
             bg-opacity-75 bg-slate-800 p-3  pl-10 pr-10 text-white "
            >
              <div className="icons  grid gap-3 font-extrabold">
                <h3 className="text-2xl"> {data.name}</h3>
                <img
                  className=" h-16 w-16"
                  src={img2}
                  alt="img"
                ></img>
                <h3>{data?.sys?.country}</h3>
              </div>
              <div className="temprature flex  items-center font-extrabold text-3xl md:text-5xl">
                <h>{(data?.main?.temp - 273.15).toFixed(2)}&deg;C</h>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:w-full  mt-20 text-white font-extrabold gap-8 ">
              <div className="  grid  justify-center items-center font-extrabold text-xl md:text-3xl  rounded opacity-75 bg-black h-20">
                <h className="flex  text-xl place-items-center">
                  <HiMiniArrowUp />
                  max{" "}
                </h>
                {(data?.main?.temp_max - 273.15).toFixed(2)}&deg;C
              </div>

              <div className="  grid  justify-center items-center font-extrabold text-2xl md:text-3xl  rounded opacity-75 bg-black h-20 ">
                <h className="flex  text-xl place-items-center">
                  <HiMiniArrowDown />
                  min{" "}
                </h>
                {(data?.main?.temp_min - 273.15).toFixed(2)}&deg;C
              </div>

              <div className="  grid  justify-center items-center font-extrabold text-2xl md:text-3xl  rounded opacity-75 bg-black h-20">
                <h className="flex  text-xl place-items-center">
                  <WiHumidity />
                  humidity{" "}
                </h>
                {data?.main?.humidity}
              </div>

              <div className="  grid  justify-center items-center font-extrabold md:text-3xl text-2xl  rounded opacity-75 bg-black h-20">
                <h className="flex  text-xl place-items-center ">
                  <MdCompress />
                  pressure{" "}
                </h>
                {data?.main?.pressure}&deg;C
              </div>

              <div className="  grid  justify-center items-center font-extrabold md:text-3xl text-2xl  rounded opacity-75 bg-black h-20">
                <h className="flex  text-xl place-items-center">
                  <GiSeaCreature /> sea_level{" "}
                </h>
                {data?.main?.sea_level}
              </div>

              <div className="  grid  justify-center items-center font-extrabold md:text-3xl text-2xl  rounded opacity-75 bg-black h-20">
                <h className="flex  text-xl place-items-center">
                  <HiMiniArrowDown />
                  wind_speed
                </h>
                {data?.wind?.speed}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
