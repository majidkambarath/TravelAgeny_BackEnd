"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const activtityManage_1 = require("../../controllers/adminController/activtityManage");
const categoryManage_1 = require("../../controllers/adminController/categoryManage");
const destin_manage_1 = require("../../controllers/adminController/destin_manage");
const uploadCloudinary_1 = __importDefault(require("../../utils/uploadCloudinary"));
const router = (0, express_1.Router)();
router.post("/category", uploadCloudinary_1.default.single('file'), categoryManage_1.category_manage);
router.get("/getCategory", categoryManage_1.fetchingData);
router.post('/activity', activtityManage_1.activtiyManage);
router.get('/getActivity', activtityManage_1.fetchingActivity);
router.post('/add_destin', uploadCloudinary_1.default.array('file'), destin_manage_1.add_destina);
router.get('/getDestin', destin_manage_1.fetchDestin);
router.get('/edit_IDFetch', destin_manage_1.edit_Collection);
router.post('/edit_Destin', uploadCloudinary_1.default.array('file'), destin_manage_1.updateCollection);
exports.default = router;
