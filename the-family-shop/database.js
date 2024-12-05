//Import the necessary modules from the firebase CDN

import { initalizeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

/* Import the necessary modules/functions for Firebase Realtime for crud operations */

import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  update,
  remove,
  get,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
