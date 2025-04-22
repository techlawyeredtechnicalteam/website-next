// lib/prisma.ts
import { PrismaClient } from "@/app/generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
	globalForPrisma.prisma ||
	new PrismaClient({
		log: ["query"], // Optional: shows SQL in terminal
	});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
