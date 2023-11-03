/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright Dhruva 2023 All rights reserved
 * @author  Dhruva <dhruvabhat24@gmail.com>
 */
'use strict';

const api_key ="e4d474a322c0877f50ad1ce9bfa13d83";

export const fetchData = function(URL, callback) {
    fetch('${URL}&appid=${api_key}')
    .then(res => res.json())
    .then(data => callback(data));
}