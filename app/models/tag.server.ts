import type { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Tag } from "@prisma/client";

export async function createTag(data: Prisma.TagCreateArgs["data"]) {
  return prisma.tag.create({
    data,
  });
}
