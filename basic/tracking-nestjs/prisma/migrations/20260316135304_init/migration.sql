-- CreateEnum
CREATE TYPE "orderStatus" AS ENUM ('pending', 'out_for_delivery', 'delivered', 'cancelled');

-- CreateTable
CREATE TABLE "order" (
    "orderId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "ownerId" UUID NOT NULL,
    "totalPrice" DECIMAL(65,30) NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "deliveryPhone" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "paymentReference" TEXT NOT NULL,
    "paystackAccessCode" TEXT NOT NULL,
    "status" "orderStatus" NOT NULL DEFAULT 'pending',
    "deliveryStatus" "orderStatus" NOT NULL DEFAULT 'pending',

    CONSTRAINT "order_pkey" PRIMARY KEY ("orderId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Item" (
    "itemId" UUID NOT NULL DEFAULT gen_random_uuid(),
    "orderId" UUID NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("itemId")
);

-- CreateIndex
CREATE INDEX "order_ownerId_idx" ON "order"("ownerId");

-- CreateIndex
CREATE INDEX "order_ownerId_status_idx" ON "order"("ownerId", "status");

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("orderId") ON DELETE RESTRICT ON UPDATE CASCADE;
