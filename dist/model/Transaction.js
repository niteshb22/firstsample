"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/models/Transaction.ts
const mongoose_1 = __importStar(require("mongoose"));
// Define the Transaction schema
const TransactionSchema = new mongoose_1.Schema({
    createdAt: { type: String, required: true },
    transactionId: { type: String, required: true },
    clientRefId: { type: String, required: true },
    categoryId: { type: String, required: true },
    productName: { type: String, required: true },
    transactionType: { type: String, required: true },
    mode: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    operator: {
        key1: { type: String, required: true },
        key2: { type: String },
        key3: { type: String }
    },
    bankName: { type: String, required: true },
    bankAccountNumber: { type: String, required: true },
    ifsc: { type: String, required: true },
    vendorUtrNumber: { type: String, required: true },
    transaction_amount: { type: Number, required: true },
    ccf: { type: Number, required: true },
    credit: { type: Number, required: true },
    status: { type: String, required: true },
    opening_balance: { type: Number, required: true },
    closing_balance: { type: Number, required: true },
    commission: { type: Number, required: true },
    tds: { type: Number, required: true },
    charges: { type: Number, required: true },
    gst: { type: Number, required: true }
});
// Create the Transaction model
const Transaction = mongoose_1.default.model('Transaction', TransactionSchema);
exports.default = Transaction;
