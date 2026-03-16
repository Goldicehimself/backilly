"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.QueryMode = exports.SortOrder = exports.ItemScalarFieldEnum = exports.UserScalarFieldEnum = exports.OrderScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
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
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map