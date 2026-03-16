import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ItemModel = runtime.Types.Result.DefaultSelection<Prisma.$ItemPayload>;
export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
export type ItemMinAggregateOutputType = {
    itemId: string | null;
    orderId: string | null;
};
export type ItemMaxAggregateOutputType = {
    itemId: string | null;
    orderId: string | null;
};
export type ItemCountAggregateOutputType = {
    itemId: number;
    orderId: number;
    _all: number;
};
export type ItemMinAggregateInputType = {
    itemId?: true;
    orderId?: true;
};
export type ItemMaxAggregateInputType = {
    itemId?: true;
    orderId?: true;
};
export type ItemCountAggregateInputType = {
    itemId?: true;
    orderId?: true;
    _all?: true;
};
export type ItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithRelationInput | Prisma.ItemOrderByWithRelationInput[];
    cursor?: Prisma.ItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ItemCountAggregateInputType;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type GetItemAggregateType<T extends ItemAggregateArgs> = {
    [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateItem[P]> : Prisma.GetScalarType<T[P], AggregateItem[P]>;
};
export type ItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    orderBy?: Prisma.ItemOrderByWithAggregationInput | Prisma.ItemOrderByWithAggregationInput[];
    by: Prisma.ItemScalarFieldEnum[] | Prisma.ItemScalarFieldEnum;
    having?: Prisma.ItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ItemCountAggregateInputType | true;
    _min?: ItemMinAggregateInputType;
    _max?: ItemMaxAggregateInputType;
};
export type ItemGroupByOutputType = {
    itemId: string;
    orderId: string;
    _count: ItemCountAggregateOutputType | null;
    _min: ItemMinAggregateOutputType | null;
    _max: ItemMaxAggregateOutputType | null;
};
type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ItemGroupByOutputType[P]>;
}>>;
export type ItemWhereInput = {
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    itemId?: Prisma.UuidFilter<"Item"> | string;
    orderId?: Prisma.UuidFilter<"Item"> | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.orderWhereInput>;
};
export type ItemOrderByWithRelationInput = {
    itemId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    order?: Prisma.orderOrderByWithRelationInput;
};
export type ItemWhereUniqueInput = Prisma.AtLeast<{
    itemId?: string;
    AND?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    OR?: Prisma.ItemWhereInput[];
    NOT?: Prisma.ItemWhereInput | Prisma.ItemWhereInput[];
    orderId?: Prisma.UuidFilter<"Item"> | string;
    order?: Prisma.XOR<Prisma.OrderScalarRelationFilter, Prisma.orderWhereInput>;
}, "itemId">;
export type ItemOrderByWithAggregationInput = {
    itemId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    _count?: Prisma.ItemCountOrderByAggregateInput;
    _max?: Prisma.ItemMaxOrderByAggregateInput;
    _min?: Prisma.ItemMinOrderByAggregateInput;
};
export type ItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.ItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ItemScalarWhereWithAggregatesInput | Prisma.ItemScalarWhereWithAggregatesInput[];
    itemId?: Prisma.UuidWithAggregatesFilter<"Item"> | string;
    orderId?: Prisma.UuidWithAggregatesFilter<"Item"> | string;
};
export type ItemCreateInput = {
    itemId?: string;
    order: Prisma.orderCreateNestedOneWithoutOrderItemsInput;
};
export type ItemUncheckedCreateInput = {
    itemId?: string;
    orderId: string;
};
export type ItemUpdateInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.orderUpdateOneRequiredWithoutOrderItemsNestedInput;
};
export type ItemUncheckedUpdateInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemCreateManyInput = {
    itemId?: string;
    orderId: string;
};
export type ItemUpdateManyMutationInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemUncheckedUpdateManyInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemListRelationFilter = {
    every?: Prisma.ItemWhereInput;
    some?: Prisma.ItemWhereInput;
    none?: Prisma.ItemWhereInput;
};
export type ItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ItemCountOrderByAggregateInput = {
    itemId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type ItemMaxOrderByAggregateInput = {
    itemId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type ItemMinOrderByAggregateInput = {
    itemId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type ItemCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput> | Prisma.ItemCreateWithoutOrderInput[] | Prisma.ItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOrderInput | Prisma.ItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ItemCreateManyOrderInputEnvelope;
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
};
export type ItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput> | Prisma.ItemCreateWithoutOrderInput[] | Prisma.ItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOrderInput | Prisma.ItemCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ItemCreateManyOrderInputEnvelope;
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
};
export type ItemUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput> | Prisma.ItemCreateWithoutOrderInput[] | Prisma.ItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOrderInput | Prisma.ItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.ItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ItemCreateManyOrderInputEnvelope;
    set?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    disconnect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    delete?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    update?: Prisma.ItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.ItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ItemUpdateManyWithWhereWithoutOrderInput | Prisma.ItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
};
export type ItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput> | Prisma.ItemCreateWithoutOrderInput[] | Prisma.ItemUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ItemCreateOrConnectWithoutOrderInput | Prisma.ItemCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ItemUpsertWithWhereUniqueWithoutOrderInput | Prisma.ItemUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ItemCreateManyOrderInputEnvelope;
    set?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    disconnect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    delete?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    connect?: Prisma.ItemWhereUniqueInput | Prisma.ItemWhereUniqueInput[];
    update?: Prisma.ItemUpdateWithWhereUniqueWithoutOrderInput | Prisma.ItemUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ItemUpdateManyWithWhereWithoutOrderInput | Prisma.ItemUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
};
export type ItemCreateWithoutOrderInput = {
    itemId?: string;
};
export type ItemUncheckedCreateWithoutOrderInput = {
    itemId?: string;
};
export type ItemCreateOrConnectWithoutOrderInput = {
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput>;
};
export type ItemCreateManyOrderInputEnvelope = {
    data: Prisma.ItemCreateManyOrderInput | Prisma.ItemCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.ItemUpdateWithoutOrderInput, Prisma.ItemUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ItemCreateWithoutOrderInput, Prisma.ItemUncheckedCreateWithoutOrderInput>;
};
export type ItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.ItemUpdateWithoutOrderInput, Prisma.ItemUncheckedUpdateWithoutOrderInput>;
};
export type ItemUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ItemScalarWhereInput;
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyWithoutOrderInput>;
};
export type ItemScalarWhereInput = {
    AND?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
    OR?: Prisma.ItemScalarWhereInput[];
    NOT?: Prisma.ItemScalarWhereInput | Prisma.ItemScalarWhereInput[];
    itemId?: Prisma.UuidFilter<"Item"> | string;
    orderId?: Prisma.UuidFilter<"Item"> | string;
};
export type ItemCreateManyOrderInput = {
    itemId?: string;
};
export type ItemUpdateWithoutOrderInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemUncheckedUpdateWithoutOrderInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemUncheckedUpdateManyWithoutOrderInput = {
    itemId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    itemId?: boolean;
    orderId?: boolean;
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    itemId?: boolean;
    orderId?: boolean;
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    itemId?: boolean;
    orderId?: boolean;
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["item"]>;
export type ItemSelectScalar = {
    itemId?: boolean;
    orderId?: boolean;
};
export type ItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"itemId" | "orderId", ExtArgs["result"]["item"]>;
export type ItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
};
export type ItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
};
export type ItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.orderDefaultArgs<ExtArgs>;
};
export type $ItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Item";
    objects: {
        order: Prisma.$orderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        itemId: string;
        orderId: string;
    }, ExtArgs["result"]["item"]>;
    composites: {};
};
export type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ItemPayload, S>;
export type ItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ItemCountAggregateInputType | true;
};
export interface ItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Item'];
        meta: {
            name: 'Item';
        };
    };
    findUnique<T extends ItemFindUniqueArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ItemFindFirstArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ItemFindManyArgs>(args?: Prisma.SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ItemCreateArgs>(args: Prisma.SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ItemCreateManyArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ItemDeleteArgs>(args: Prisma.SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ItemUpdateArgs>(args: Prisma.SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ItemUpdateManyArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ItemUpsertArgs>(args: Prisma.SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma.Prisma__ItemClient<runtime.Types.Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ItemCountArgs>(args?: Prisma.Subset<T, ItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ItemCountAggregateOutputType> : number>;
    aggregate<T extends ItemAggregateArgs>(args: Prisma.Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>;
    groupBy<T extends ItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ItemGroupByArgs['orderBy'];
    } : {
        orderBy?: ItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ItemFieldRefs;
}
export interface Prisma__ItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.orderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orderDefaultArgs<ExtArgs>>): Prisma.Prisma__orderClient<runtime.Types.Result.GetResult<Prisma.$orderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ItemFieldRefs {
    readonly itemId: Prisma.FieldRef<"Item", 'String'>;
    readonly orderId: Prisma.FieldRef<"Item", 'String'>;
}
export type ItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
};
export type ItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.ItemCreateManyInput | Prisma.ItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type ItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ItemUpdateManyMutationInput, Prisma.ItemUncheckedUpdateManyInput>;
    where?: Prisma.ItemWhereInput;
    limit?: number;
    include?: Prisma.ItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.ItemCreateInput, Prisma.ItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ItemUpdateInput, Prisma.ItemUncheckedUpdateInput>;
};
export type ItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
    where: Prisma.ItemWhereUniqueInput;
};
export type ItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ItemWhereInput;
    limit?: number;
};
export type ItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ItemSelect<ExtArgs> | null;
    omit?: Prisma.ItemOmit<ExtArgs> | null;
    include?: Prisma.ItemInclude<ExtArgs> | null;
};
export {};
