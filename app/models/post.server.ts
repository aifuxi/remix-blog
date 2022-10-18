import type { Prisma } from "@prisma/client";
import { prisma } from "~/db.server";

export type { Post, Prisma } from "@prisma/client";

export async function createPost(data: Prisma.PostCreateArgs["data"]) {
  return prisma.post.create({ data });
}
