import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type orderModel = runtime.Types.Result.DefaultSelection<Prisma.$orderPayload>;
export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
export type OrderAvgAggregateOutputType = {
    totalPrice: runtime.Decimal | null;
};
export type OrderSumAggregateOutputType = {
    totalPrice: runtime.Decimal | null;
};
export type OrderMinAggregateOutputType = {
    orderId: string | null;
    ownerId: string | null;
    totalPrice: runtime.Decimal | null;
    paymentStatus: string | null;
    paymentMethod: string | null;
    deliveryAddress: string | null;
    deliveryPhone: string | null;
    paidAt: Date | null;
    isPaid: boolean | null;
    paymentReference: string | null;
    paystackAccessCode: string | null;
    status: $Enums.orderStatus | null;
    deliveryStatus: $Enums.orderStatus | null;
};
export type OrderMaxAggregateOutputType = {
    orderId: string | null;
    ownerId: string | null;
    totalPrice: runtime.Decimal | null;
    paymentStatus: string | null;
    paymentMethod: string | null;
    deliveryAddress: string | null;
    deliveryPhone: string | null;
    paidAt: Date | null;
    isPaid: boolean | null;
    paymentReference: string | null;
    paystackAccessCode: string | null;
    status: $Enums.orderStatus | null;
    deliveryStatus: $Enums.orderStatus | null;
};
export type OrderCountAggregateOutputType = {
    orderId: number;
    ownerId: number;
    totalPrice: number;
    paymentStatus: number;
    paymentMethod: number;
    deliveryAddress: number;
    deliveryPhone: number;
    paidAt: number;
    isPaid: number;
    paymentReference: number;
    paystackAccessCode: number;
    status: number;
    deliveryStatus: number;
    _all: number;
};
export type OrderAvgAggregateInputType = {
    totalPrice?: true;
};
export type OrderSumAggregateInputType = {
    totalPrice?: true;
};
export type OrderMinAggregateInputType = {
    orderId?: true;
    ownerId?: true;
    totalPrice?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    deliveryAddress?: true;
    deliveryPhone?: true;
    paidAt?: true;
    isPaid?: true;
    paymentReference?: true;
    paystackAccessCode?: true;
    status?: true;
    deliveryStatus?: true;
};
export type OrderMaxAggregateInputType = {
    orderId?: true;
    ownerId?: true;
    totalPrice?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    deliveryAddress?: true;
    deliveryPhone?: true;
    paidAt?: true;
    isPaid?: true;
    paymentReference?: true;
    paystackAccessCode?: true;
    status?: true;
    deliveryStatus?: true;
};
export type OrderCountAggregateInputType = {
    orderId?: true;
    ownerId?: true;
    totalPrice?: true;
    paymentStatus?: true;
    paymentMethod?: true;
    deliveryAddress?: true;
    deliveryPhone?: true;
    paidAt?: true;
    isPaid?: true;
    paymentReference?: true;
    paystackAccessCode?: true;
    status?: true;
    deliveryStatus?: true;
    _all?: true;
};
export type OrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithRelationInput | Prisma.orderOrderByWithRelationInput[];
    cursor?: Prisma.orderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrderCountAggregateInputType;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrder[P]> : Prisma.GetScalarType<T[P], AggregateOrder[P]>;
};
export type orderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithAggregationInput | Prisma.orderOrderByWithAggregationInput[];
    by: Prisma.OrderScalarFieldEnum[] | Prisma.OrderScalarFieldEnum;
    having?: Prisma.orderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
};
export type OrderGroupByOutputType = {
    orderId: string;
    ownerId: string;
    totalPrice: runtime.Decimal;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date;
    isPaid: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status: $Enums.orderStatus;
    deliveryStatus: $Enums.orderStatus;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
};
type GetOrderGroupByPayload<T extends orderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrderGroupByOutputType[P]>;
}>>;
export type orderWhereInput = {
    AND?: Prisma.orderWhereInput | Prisma.orderWhereInput[];
    OR?: Prisma.orderWhereInput[];
    NOT?: Prisma.orderWhereInput | Prisma.orderWhereInput[];
    orderId?: Prisma.UuidFilter<"order"> | string;
    ownerId?: Prisma.UuidFilter<"order"> | string;
    totalPrice?: Prisma.DecimalFilter<"order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFilter<"order"> | string;
    paymentMethod?: Prisma.StringFilter<"order"> | string;
    deliveryAddress?: Prisma.StringFilter<"order"> | string;
    deliveryPhone?: Prisma.StringFilter<"order"> | string;
    paidAt?: Prisma.DateTimeFilter<"order"> | Date | string;
    isPaid?: Prisma.BoolFilter<"order"> | boolean;
    paymentReference?: Prisma.StringFilter<"order"> | string;
    paystackAccessCode?: Prisma.StringFilter<"order"> | string;
    status?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orderItems?: Prisma.ItemListRelationFilter;
};
export type orderOrderByWithRelationInput = {
    orderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    deliveryAddress?: Prisma.SortOrder;
    deliveryPhone?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paymentReference?: Prisma.SortOrder;
    paystackAccessCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deliveryStatus?: Prisma.SortOrder;
    owner?: Prisma.UserOrderByWithRelationInput;
    orderItems?: Prisma.ItemOrderByRelationAggregateInput;
};
export type orderWhereUniqueInput = Prisma.AtLeast<{
    orderId?: string;
    AND?: Prisma.orderWhereInput | Prisma.orderWhereInput[];
    OR?: Prisma.orderWhereInput[];
    NOT?: Prisma.orderWhereInput | Prisma.orderWhereInput[];
    ownerId?: Prisma.UuidFilter<"order"> | string;
    totalPrice?: Prisma.DecimalFilter<"order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFilter<"order"> | string;
    paymentMethod?: Prisma.StringFilter<"order"> | string;
    deliveryAddress?: Prisma.StringFilter<"order"> | string;
    deliveryPhone?: Prisma.StringFilter<"order"> | string;
    paidAt?: Prisma.DateTimeFilter<"order"> | Date | string;
    isPaid?: Prisma.BoolFilter<"order"> | boolean;
    paymentReference?: Prisma.StringFilter<"order"> | string;
    paystackAccessCode?: Prisma.StringFilter<"order"> | string;
    status?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
    owner?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    orderItems?: Prisma.ItemListRelationFilter;
}, "orderId">;
export type orderOrderByWithAggregationInput = {
    orderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    deliveryAddress?: Prisma.SortOrder;
    deliveryPhone?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paymentReference?: Prisma.SortOrder;
    paystackAccessCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deliveryStatus?: Prisma.SortOrder;
    _count?: Prisma.orderCountOrderByAggregateInput;
    _avg?: Prisma.orderAvgOrderByAggregateInput;
    _max?: Prisma.orderMaxOrderByAggregateInput;
    _min?: Prisma.orderMinOrderByAggregateInput;
    _sum?: Prisma.orderSumOrderByAggregateInput;
};
export type orderScalarWhereWithAggregatesInput = {
    AND?: Prisma.orderScalarWhereWithAggregatesInput | Prisma.orderScalarWhereWithAggregatesInput[];
    OR?: Prisma.orderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.orderScalarWhereWithAggregatesInput | Prisma.orderScalarWhereWithAggregatesInput[];
    orderId?: Prisma.UuidWithAggregatesFilter<"order"> | string;
    ownerId?: Prisma.UuidWithAggregatesFilter<"order"> | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringWithAggregatesFilter<"order"> | string;
    paymentMethod?: Prisma.StringWithAggregatesFilter<"order"> | string;
    deliveryAddress?: Prisma.StringWithAggregatesFilter<"order"> | string;
    deliveryPhone?: Prisma.StringWithAggregatesFilter<"order"> | string;
    paidAt?: Prisma.DateTimeWithAggregatesFilter<"order"> | Date | string;
    isPaid?: Prisma.BoolWithAggregatesFilter<"order"> | boolean;
    paymentReference?: Prisma.StringWithAggregatesFilter<"order"> | string;
    paystackAccessCode?: Prisma.StringWithAggregatesFilter<"order"> | string;
    status?: Prisma.EnumorderStatusWithAggregatesFilter<"order"> | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusWithAggregatesFilter<"order"> | $Enums.orderStatus;
};
export type orderCreateInput = {
    orderId?: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
    owner: Prisma.UserCreateNestedOneWithoutOrdersInput;
    orderItems?: Prisma.ItemCreateNestedManyWithoutOrderInput;
};
export type orderUncheckedCreateInput = {
    orderId?: string;
    ownerId: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
    orderItems?: Prisma.ItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type orderUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    owner?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
    orderItems?: Prisma.ItemUpdateManyWithoutOrderNestedInput;
};
export type orderUncheckedUpdateInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    orderItems?: Prisma.ItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type orderCreateManyInput = {
    orderId?: string;
    ownerId: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
};
export type orderUpdateManyMutationInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
};
export type orderUncheckedUpdateManyInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
};
export type orderCountOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    deliveryAddress?: Prisma.SortOrder;
    deliveryPhone?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paymentReference?: Prisma.SortOrder;
    paystackAccessCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deliveryStatus?: Prisma.SortOrder;
};
export type orderAvgOrderByAggregateInput = {
    totalPrice?: Prisma.SortOrder;
};
export type orderMaxOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    deliveryAddress?: Prisma.SortOrder;
    deliveryPhone?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paymentReference?: Prisma.SortOrder;
    paystackAccessCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deliveryStatus?: Prisma.SortOrder;
};
export type orderMinOrderByAggregateInput = {
    orderId?: Prisma.SortOrder;
    ownerId?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    paymentStatus?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    deliveryAddress?: Prisma.SortOrder;
    deliveryPhone?: Prisma.SortOrder;
    paidAt?: Prisma.SortOrder;
    isPaid?: Prisma.SortOrder;
    paymentReference?: Prisma.SortOrder;
    paystackAccessCode?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    deliveryStatus?: Prisma.SortOrder;
};
export type orderSumOrderByAggregateInput = {
    totalPrice?: Prisma.SortOrder;
};
export type OrderListRelationFilter = {
    every?: Prisma.orderWhereInput;
    some?: Prisma.orderWhereInput;
    none?: Prisma.orderWhereInput;
};
export type orderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrderScalarRelationFilter = {
    is?: Prisma.orderWhereInput;
    isNot?: Prisma.orderWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EnumorderStatusFieldUpdateOperationsInput = {
    set?: $Enums.orderStatus;
};
export type orderCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput> | Prisma.orderCreateWithoutOwnerInput[] | Prisma.orderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOwnerInput | Prisma.orderCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.orderCreateManyOwnerInputEnvelope;
    connect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
};
export type orderUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput> | Prisma.orderCreateWithoutOwnerInput[] | Prisma.orderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOwnerInput | Prisma.orderCreateOrConnectWithoutOwnerInput[];
    createMany?: Prisma.orderCreateManyOwnerInputEnvelope;
    connect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
};
export type orderUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput> | Prisma.orderCreateWithoutOwnerInput[] | Prisma.orderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOwnerInput | Prisma.orderCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.orderUpsertWithWhereUniqueWithoutOwnerInput | Prisma.orderUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.orderCreateManyOwnerInputEnvelope;
    set?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    disconnect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    delete?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    connect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    update?: Prisma.orderUpdateWithWhereUniqueWithoutOwnerInput | Prisma.orderUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.orderUpdateManyWithWhereWithoutOwnerInput | Prisma.orderUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.orderScalarWhereInput | Prisma.orderScalarWhereInput[];
};
export type orderUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput> | Prisma.orderCreateWithoutOwnerInput[] | Prisma.orderUncheckedCreateWithoutOwnerInput[];
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOwnerInput | Prisma.orderCreateOrConnectWithoutOwnerInput[];
    upsert?: Prisma.orderUpsertWithWhereUniqueWithoutOwnerInput | Prisma.orderUpsertWithWhereUniqueWithoutOwnerInput[];
    createMany?: Prisma.orderCreateManyOwnerInputEnvelope;
    set?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    disconnect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    delete?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    connect?: Prisma.orderWhereUniqueInput | Prisma.orderWhereUniqueInput[];
    update?: Prisma.orderUpdateWithWhereUniqueWithoutOwnerInput | Prisma.orderUpdateWithWhereUniqueWithoutOwnerInput[];
    updateMany?: Prisma.orderUpdateManyWithWhereWithoutOwnerInput | Prisma.orderUpdateManyWithWhereWithoutOwnerInput[];
    deleteMany?: Prisma.orderScalarWhereInput | Prisma.orderScalarWhereInput[];
};
export type orderCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOrderItemsInput, Prisma.orderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.orderWhereUniqueInput;
};
export type orderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.orderCreateWithoutOrderItemsInput, Prisma.orderUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.orderCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.orderUpsertWithoutOrderItemsInput;
    connect?: Prisma.orderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.orderUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.orderUpdateWithoutOrderItemsInput>, Prisma.orderUncheckedUpdateWithoutOrderItemsInput>;
};
export type orderCreateWithoutOwnerInput = {
    orderId?: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
    orderItems?: Prisma.ItemCreateNestedManyWithoutOrderInput;
};
export type orderUncheckedCreateWithoutOwnerInput = {
    orderId?: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
    orderItems?: Prisma.ItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type orderCreateOrConnectWithoutOwnerInput = {
    where: Prisma.orderWhereUniqueInput;
    create: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput>;
};
export type orderCreateManyOwnerInputEnvelope = {
    data: Prisma.orderCreateManyOwnerInput | Prisma.orderCreateManyOwnerInput[];
    skipDuplicates?: boolean;
};
export type orderUpsertWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.orderWhereUniqueInput;
    update: Prisma.XOR<Prisma.orderUpdateWithoutOwnerInput, Prisma.orderUncheckedUpdateWithoutOwnerInput>;
    create: Prisma.XOR<Prisma.orderCreateWithoutOwnerInput, Prisma.orderUncheckedCreateWithoutOwnerInput>;
};
export type orderUpdateWithWhereUniqueWithoutOwnerInput = {
    where: Prisma.orderWhereUniqueInput;
    data: Prisma.XOR<Prisma.orderUpdateWithoutOwnerInput, Prisma.orderUncheckedUpdateWithoutOwnerInput>;
};
export type orderUpdateManyWithWhereWithoutOwnerInput = {
    where: Prisma.orderScalarWhereInput;
    data: Prisma.XOR<Prisma.orderUpdateManyMutationInput, Prisma.orderUncheckedUpdateManyWithoutOwnerInput>;
};
export type orderScalarWhereInput = {
    AND?: Prisma.orderScalarWhereInput | Prisma.orderScalarWhereInput[];
    OR?: Prisma.orderScalarWhereInput[];
    NOT?: Prisma.orderScalarWhereInput | Prisma.orderScalarWhereInput[];
    orderId?: Prisma.UuidFilter<"order"> | string;
    ownerId?: Prisma.UuidFilter<"order"> | string;
    totalPrice?: Prisma.DecimalFilter<"order"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFilter<"order"> | string;
    paymentMethod?: Prisma.StringFilter<"order"> | string;
    deliveryAddress?: Prisma.StringFilter<"order"> | string;
    deliveryPhone?: Prisma.StringFilter<"order"> | string;
    paidAt?: Prisma.DateTimeFilter<"order"> | Date | string;
    isPaid?: Prisma.BoolFilter<"order"> | boolean;
    paymentReference?: Prisma.StringFilter<"order"> | string;
    paystackAccessCode?: Prisma.StringFilter<"order"> | string;
    status?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFilter<"order"> | $Enums.orderStatus;
};
export type orderCreateWithoutOrderItemsInput = {
    orderId?: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
    owner: Prisma.UserCreateNestedOneWithoutOrdersInput;
};
export type orderUncheckedCreateWithoutOrderItemsInput = {
    orderId?: string;
    ownerId: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
};
export type orderCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.orderWhereUniqueInput;
    create: Prisma.XOR<Prisma.orderCreateWithoutOrderItemsInput, Prisma.orderUncheckedCreateWithoutOrderItemsInput>;
};
export type orderUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.orderUpdateWithoutOrderItemsInput, Prisma.orderUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.orderCreateWithoutOrderItemsInput, Prisma.orderUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.orderWhereInput;
};
export type orderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.orderWhereInput;
    data: Prisma.XOR<Prisma.orderUpdateWithoutOrderItemsInput, Prisma.orderUncheckedUpdateWithoutOrderItemsInput>;
};
export type orderUpdateWithoutOrderItemsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    owner?: Prisma.UserUpdateOneRequiredWithoutOrdersNestedInput;
};
export type orderUncheckedUpdateWithoutOrderItemsInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    ownerId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
};
export type orderCreateManyOwnerInput = {
    orderId?: string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus: string;
    paymentMethod: string;
    deliveryAddress: string;
    deliveryPhone: string;
    paidAt: Date | string;
    isPaid?: boolean;
    paymentReference: string;
    paystackAccessCode: string;
    status?: $Enums.orderStatus;
    deliveryStatus?: $Enums.orderStatus;
};
export type orderUpdateWithoutOwnerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    orderItems?: Prisma.ItemUpdateManyWithoutOrderNestedInput;
};
export type orderUncheckedUpdateWithoutOwnerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    orderItems?: Prisma.ItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type orderUncheckedUpdateManyWithoutOwnerInput = {
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    paymentStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentMethod?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    deliveryPhone?: Prisma.StringFieldUpdateOperationsInput | string;
    paidAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isPaid?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    paymentReference?: Prisma.StringFieldUpdateOperationsInput | string;
    paystackAccessCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
    deliveryStatus?: Prisma.EnumorderStatusFieldUpdateOperationsInput | $Enums.orderStatus;
};
export type OrderCountOutputType = {
    orderItems: number;
};
export type OrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs;
};
export type OrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderCountOutputTypeSelect<ExtArgs> | null;
};
export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
};
export type orderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    ownerId?: boolean;
    totalPrice?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    deliveryAddress?: boolean;
    deliveryPhone?: boolean;
    paidAt?: boolean;
    isPaid?: boolean;
    paymentReference?: boolean;
    paystackAccessCode?: boolean;
    status?: boolean;
    deliveryStatus?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.order$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type orderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    ownerId?: boolean;
    totalPrice?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    deliveryAddress?: boolean;
    deliveryPhone?: boolean;
    paidAt?: boolean;
    isPaid?: boolean;
    paymentReference?: boolean;
    paystackAccessCode?: boolean;
    status?: boolean;
    deliveryStatus?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type orderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    orderId?: boolean;
    ownerId?: boolean;
    totalPrice?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    deliveryAddress?: boolean;
    deliveryPhone?: boolean;
    paidAt?: boolean;
    isPaid?: boolean;
    paymentReference?: boolean;
    paystackAccessCode?: boolean;
    status?: boolean;
    deliveryStatus?: boolean;
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["order"]>;
export type orderSelectScalar = {
    orderId?: boolean;
    ownerId?: boolean;
    totalPrice?: boolean;
    paymentStatus?: boolean;
    paymentMethod?: boolean;
    deliveryAddress?: boolean;
    deliveryPhone?: boolean;
    paidAt?: boolean;
    isPaid?: boolean;
    paymentReference?: boolean;
    paystackAccessCode?: boolean;
    status?: boolean;
    deliveryStatus?: boolean;
};
export type orderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"orderId" | "ownerId" | "totalPrice" | "paymentStatus" | "paymentMethod" | "deliveryAddress" | "deliveryPhone" | "paidAt" | "isPaid" | "paymentReference" | "paystackAccessCode" | "status" | "deliveryStatus", ExtArgs["result"]["order"]>;
export type orderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    orderItems?: boolean | Prisma.order$orderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.OrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type orderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type orderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    owner?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $orderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "order";
    objects: {
        owner: Prisma.$UserPayload<ExtArgs>;
        orderItems: Prisma.$ItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        orderId: string;
        ownerId: string;
        totalPrice: runtime.Decimal;
        paymentStatus: string;
        paymentMethod: string;
        deliveryAddress: string;
        deliveryPhone: string;
        paidAt: Date;
        isPaid: boolean;
        paymentReference: string;
        paystackAccessCode: string;
        status: $Enums.orderStatus;
        deliveryStatus: $Enums.orderStatus;
    }, ExtArgs["result"]["order"]>;
    composites: {};
};
export type orderGetPayload<S extends boolean | null | undefined | orderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$orderPayload, S>;
export type orderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<orderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrderCountAggregateInputType | true;
};
export interface orderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['order'];
        meta: {
            name: 'order';
        };
    };
    findUnique<T extends orderFindUniqueArgs>(args: Prisma.SelectSubset<T, orderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends orderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, orderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends orderFindFirstArgs>(args?: Prisma.SelectSubset<T, orderFindFirstArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends orderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, orderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends orderFindManyArgs>(args?: Prisma.SelectSubset<T, orderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends orderCreateArgs>(args: Prisma.SelectSubset<T, orderCreateArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends orderCreateManyArgs>(args?: Prisma.SelectSubset<T, orderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends orderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, orderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends orderDeleteArgs>(args: Prisma.SelectSubset<T, orderDeleteArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends orderUpdateArgs>(args: Prisma.SelectSubset<T, orderUpdateArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends orderDeleteManyArgs>(args?: Prisma.SelectSubset<T, orderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends orderUpdateManyArgs>(args: Prisma.SelectSubset<T, orderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends orderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, orderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends orderUpsertArgs>(args: Prisma.SelectSubset<T, orderUpsertArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends orderCountArgs>(args?: Prisma.Subset<T, orderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrderCountAggregateOutputType> : number>;
    aggregate<T extends OrderAggregateArgs>(args: Prisma.Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>;
    groupBy<T extends orderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: orderGroupByArgs['orderBy'];
    } : {
        orderBy?: orderGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, orderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: orderFieldRefs;
}
export interface Prisma__orderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    owner<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    orderItems<T extends Prisma.order$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface orderFieldRefs {
    readonly orderId: Prisma.FieldRef<"order", 'String'>;
    readonly ownerId: Prisma.FieldRef<"order", 'String'>;
    readonly totalPrice: Prisma.FieldRef<"order", 'Decimal'>;
    readonly paymentStatus: Prisma.FieldRef<"order", 'String'>;
    readonly paymentMethod: Prisma.FieldRef<"order", 'String'>;
    readonly deliveryAddress: Prisma.FieldRef<"order", 'String'>;
    readonly deliveryPhone: Prisma.FieldRef<"order", 'String'>;
    readonly paidAt: Prisma.FieldRef<"order", 'DateTime'>;
    readonly isPaid: Prisma.FieldRef<"order", 'Boolean'>;
    readonly paymentReference: Prisma.FieldRef<"order", 'String'>;
    readonly paystackAccessCode: Prisma.FieldRef<"order", 'String'>;
    readonly status: Prisma.FieldRef<"order", 'orderStatus'>;
    readonly deliveryStatus: Prisma.FieldRef<"order", 'orderStatus'>;
}
export type orderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where: Prisma.orderWhereUniqueInput;
};
export type orderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where: Prisma.orderWhereUniqueInput;
};
export type orderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithRelationInput | Prisma.orderOrderByWithRelationInput[];
    cursor?: Prisma.orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type orderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithRelationInput | Prisma.orderOrderByWithRelationInput[];
    cursor?: Prisma.orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type orderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where?: Prisma.orderWhereInput;
    orderBy?: Prisma.orderOrderByWithRelationInput | Prisma.orderOrderByWithRelationInput[];
    cursor?: Prisma.orderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type orderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orderCreateInput, Prisma.orderUncheckedCreateInput>;
};
export type orderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.orderCreateManyInput | Prisma.orderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type orderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    data: Prisma.orderCreateManyInput | Prisma.orderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.orderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type orderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orderUpdateInput, Prisma.orderUncheckedUpdateInput>;
    where: Prisma.orderWhereUniqueInput;
};
export type orderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.orderUpdateManyMutationInput, Prisma.orderUncheckedUpdateManyInput>;
    where?: Prisma.orderWhereInput;
    limit?: number;
};
export type orderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orderUpdateManyMutationInput, Prisma.orderUncheckedUpdateManyInput>;
    where?: Prisma.orderWhereInput;
    limit?: number;
    include?: Prisma.orderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type orderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where: Prisma.orderWhereUniqueInput;
    create: Prisma.XOR<Prisma.orderCreateInput, Prisma.orderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.orderUpdateInput, Prisma.orderUncheckedUpdateInput>;
};
export type orderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
    where: Prisma.orderWhereUniqueInput;
};
export type orderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orderWhereInput;
    limit?: number;
};
export type order$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ItemScalarFieldEnum | Prisma.ItemScalarFieldEnum[];
};
export type orderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orderSelect<ExtArgs> | null;
    omit?: Prisma.orderOmit<ExtArgs> | null;
    include?: Prisma.orderInclude<ExtArgs> | null;
};
export {};
