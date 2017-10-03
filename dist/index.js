"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _http = require("http");

var _http2 = _interopRequireDefault(_http);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

var _route = require("./route");

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createserver(app);

// Middleware 

// Passport Config

// API route V1

app.use("/v1", routes);

// ROUTE ICI -> 

app.server.listen(_config2.default.port);

console.log("started import ${app.server.address().port}");

exports.default = app;
//# sourceMappingURL=index.js.map