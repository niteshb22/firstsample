"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenObject = void 0;
// src/utils/flattenObject.ts
const flattenObject = (obj, prefix = '') => {
    const flattened = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                Object.assign(flattened, (0, exports.flattenObject)(value, newKey));
            }
            else {
                flattened[newKey] = value;
            }
        }
    }
    return flattened;
};
exports.flattenObject = flattenObject;
