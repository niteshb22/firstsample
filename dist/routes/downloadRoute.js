"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/downloadRoutes.ts
const express_1 = __importDefault(require("express"));
const downloadService_1 = require("../service/downloadService");
const router = express_1.default.Router();
// Route to download Excel
router.get('/download', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Call the service function with both req and res
    yield (0, downloadService_1.generateAndSendExcel)(req, res);
}));
exports.default = router;
