-- CreateTable
CREATE TABLE "VisitorSession" (
    "id" TEXT NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "enteredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leftAt" TIMESTAMP(3),
    "clickedPayAt" TIMESTAMP(3),

    CONSTRAINT "VisitorSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserData" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "paystackRef" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "paidAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DownloadLog" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "downloadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ipAddress" TEXT,

    CONSTRAINT "DownloadLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserData_sessionId_key" ON "UserData"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_sessionId_key" ON "Payment"("sessionId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_paystackRef_key" ON "Payment"("paystackRef");

-- AddForeignKey
ALTER TABLE "UserData" ADD CONSTRAINT "UserData_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "VisitorSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "VisitorSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DownloadLog" ADD CONSTRAINT "DownloadLog_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "VisitorSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
