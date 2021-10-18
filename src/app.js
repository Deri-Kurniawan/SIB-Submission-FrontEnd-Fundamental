import "regenerator-runtime";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./scripts/components/app-bar.js";
import $ from "jquery";
import main from "./scripts/view/main.js";

document.addEventListener("DOMContentLoaded", main);