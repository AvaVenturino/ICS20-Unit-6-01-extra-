// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-6-01-extra-/sw.js", {
    scope: "/ICS20-Unit-6-01-extra-/",
  })
}

/**
 * This function calculates the volume of a sphere.
 */
function calculate() {
  // input
  const radius = parseInt(document.getElementById("radius").value)
  // process
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  // output
  document.getElementById("volume").innerHTML =
    "The volume is: " + volume.toFixed(2) + " cm³"
}
