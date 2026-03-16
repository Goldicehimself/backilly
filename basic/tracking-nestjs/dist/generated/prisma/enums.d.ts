export declare const orderStatus: {
    readonly pending: "pending";
    readonly out_for_delivery: "out_for_delivery";
    readonly delivered: "delivered";
    readonly cancelled: "cancelled";
};
export type orderStatus = (typeof orderStatus)[keyof typeof orderStatus];
