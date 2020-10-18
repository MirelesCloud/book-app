"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _BookControllers = _interopRequireDefault(require("../controllers/BookControllers"));

var router = (0, _express.Router)();
router.get('/', _BookControllers["default"].getAllBooks);
router.post('/', _BookControllers["default"].addBook);
router.get('/:id', _BookControllers["default"].getABook);
router.put('/:id', _BookControllers["default"].updatedBook);
router["delete"]('/:id', _BookControllers["default"].deleteBook);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=BookRoutes.js.map