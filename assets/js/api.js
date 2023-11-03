/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Dhruva 2023 All rights reserved
 * @author  Dhruva <dhruvabhat24@gmail.com>
 */
'use strict';

const api_key ="e4d474a322c0877f50ad1ce9bfa13d83";

/**
 *
 * @param {string} URL API URL
 * @param {Function} callback callback
 */

export const fetchData = function (URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
      .then((res) => res.json())
      .then((data) => callback(data));
  };
  
  export const url = {
    currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=imperial`;
    },
    forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=imperial`;
    },
    airPollution(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`;
    },
    reverseGeo(lat, lon) {
      return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`;
    },
  
    /**
     *
     * @param {string} query Search Query E.G.: "London", "Philadelphia"
     * @returns
     */
  
    geo(query) {
      return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    },
  };