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
// src/db.ts
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = 'mongodb+srv://15July24Admin:vYBPsu7Zm9XKdwOC@k1paydev.tde229c.mongodb.net/K1payDev?retryWrites=true'; // replace with your MongoDB URI
        yield mongoose_1.default.connect(mongoURI, {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        // Optional settings
        // useFindAndModify: false,
        // useCreateIndex: true,
        });
        console.log('MongoDB connected successfully');
    }
    catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process with failure
    }
});
exports.default = connectDB;
