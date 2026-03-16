"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMode = exports.SortOrder = exports.ItemScalarFieldEnum = exports.UserScalarFieldEnum = exports.OrderScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    order: 'order',
    User: 'User',
    Item: 'Item'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.OrderScalarFieldEnum = {
    orderId: 'orderId',
    ownerId: 'ownerId',
    totalPrice: 'totalPrice',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    deliveryAddress: 'deliveryAddress',
    deliveryPhone: 'deliveryPhone',
    paidAt: 'paidAt',
    isPaid: 'isPaid',
    paymentReference: 'paymentReference',
    paystackAccessCode: 'paystackAccessCode',
    status: 'status',
    deliveryStatus: 'deliveryStatus'
};
exports.UserScalarFieldEnum = {
    userId: 'userId'
};
exports.ItemScalarFieldEnum = {
    itemId: 'itemId',
    orderId: 'orderId'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map