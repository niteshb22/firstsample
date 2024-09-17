// src/services/downloadService.ts
import ExcelJS from 'exceljs';
import mongoose from 'mongoose';
import Transaction from '../model/Transaction';
import { Request, Response } from 'express';
import { flattenObject } from '../utils/flattened'

// Function to handle Excel file generation and response
export const generateAndSendExcel = async (req: Request, res: Response) => {
    const hardCodedObjectId = '655b28b519464949426fc7c6'; 

    try {
        // Convert string to ObjectId
        const id = new mongoose.Types.ObjectId(hardCodedObjectId);
        console.log('Fetching transaction with ID:', id);

        // Query to find the transaction by ObjectId
        const transaction = await Transaction.findById(id).exec();

        if (!transaction) {
            res.status(404).send('Transaction not found');
            return;
        }

        // Flatten the transaction document
        const flattenedTransaction = flattenObject(transaction.toObject());
        console.log('Flattened transaction:', flattenedTransaction);

        const workbook = new ExcelJS.Workbook();
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
        res.setHeader(
            'Content-Type',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        );
        res.setHeader('Content-Disposition', 'attachment; filename=transaction_data.xlsx');

        // Write to response
        await workbook.xlsx.write(res);
        res.end();
    } catch (err) {
        console.error('Error fetching transaction:', err);
        res.status(500).send('Error generating Excel file');
    }
};
