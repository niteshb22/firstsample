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
exports.generateAndSendExcel = void 0;
// src/services/downloadService.ts
const exceljs_1 = __importDefault(require("exceljs"));
const mongoose_1 = __importDefault(require("mongoose"));
const Transaction_1 = __importDefault(require("../model/Transaction"));
const flattened_1 = require("../utils/flattened");
// Function to handle Excel file generation and response
const generateAndSendExcel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hardCodedObjectId = '655b28b519464949426fc7c6';
    try {
        // Convert string to ObjectId
        const id = new mongoose_1.default.Types.ObjectId(hardCodedObjectId);
        console.log('Fetching transaction with ID:', id);
        // Query to find the transaction by ObjectId
        const transaction = yield Transaction_1.default.findById(id).exec();
        if (!transaction) {
            res.status(404).send('Transaction not found');
            return;
        }
        // Flatten the transaction document
        const flattenedTransaction = (0, flattened_1.flattenObject)(transaction.toObject());
        console.log('Flattened transaction:', flattenedTransaction);
        const workbook = new exceljs_1.default.Workbook();
        const worksheet = workbook.addWorksheet('Transaction Data');
        // Define columns for the worksheet
        worksheet.columns = [
            { header: 'Date and Time', key: 'createdAt', width: 20 },
            { header: 'Transaction ID', key: 'transactionId', width: 30 },
            { header: 'Client ID', key: 'clientRefId', width: 30 },
            { header: 'Category', key: 'categoryId', width: 20 },
            { header: 'Product', key: 'productName', width: 20 },
            { header: 'Transaction Type', key: 'transactionType', width: 40 },
            { header: 'Mode', key: 'transactionType', width: 15 },
            { header: 'Sender Number', key: 'mobileNumber', width: 20 },
            { header: 'Operator', key: 'operator.key1', width: 20 },
            { header: 'Number', key: 'mobileNumber', width: 20 },
            { header: 'Bank Name', key: 'operator.key1', width: 20 },
            { header: 'Bank Account Number', key: 'operator.key3', width: 25 },
            { header: 'IFSC', key: 'operator.key2', width: 15 },
            { header: 'UTR', key: 'vendorUtrNumber', width: 20 },
            { header: 'Transaction Amount Rs.', key: 'transaction_amount', width: 20 },
            { header: 'CCF', key: 'ccf', width: 15 },
            { header: 'Credit', key: 'credit', width: 15 },
            { header: 'Status', key: 'status', width: 15 },
            { header: 'Opening Balance Rs.', key: 'agentDetails.oldMainWalletBalance', width: 20 },
            { header: 'Closing Balance Rs.', key: 'agentDetails.newMainWalletBalance', width: 20 },
            { header: 'Commission Rs.', key: 'agentDetails.commissionAmount', width: 20 },
            { header: 'TDS Rs.', key: 'TDS', width: 20 },
            { header: 'Charges Rs.', key: 'charges', width: 20 },
            { header: 'GST Rs.', key: 'GST', width: 20 }
        ];
        // Add the flattened transaction to the worksheet
        worksheet.addRow(flattenedTransaction);
        // Set response headers to download file
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=transaction_data.xlsx');
        // Write to response
        yield workbook.xlsx.write(res);
        res.end();
    }
    catch (err) {
        console.error('Error fetching transaction:', err);
        res.status(500).send('Error generating Excel file');
    }
});
exports.generateAndSendExcel = generateAndSendExcel;
