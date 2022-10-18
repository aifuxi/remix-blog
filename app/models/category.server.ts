import type { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Category } from "@prisma/client";

export async function createCategory(data: Prisma.CategoryCreateArgs["data"]) {
  return prisma.category.create({
    data,
  });
}
