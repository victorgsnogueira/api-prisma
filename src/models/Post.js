import { prisma } from "../../config/prisma.js";

export const createPost = async (title, userid, subtitle, body) => {
    try {
      return await prisma.post.create({
        data: {
          title,
          userid,
          subtitle,
          body,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create post: ${error.message}`);
    }
  };
  
  export const findPosts = async () => {
    try {
      return await prisma.post.findMany();
    }
    catch (error) {
      throw new Error(`Failed to get all post: ${error.message}`);
    }
  };
  
  export const findPostById = async (id) => {
    return await prisma.post.findFirst({
      where: {
        id: id,
      },
    });
  };
  
  export const updatePost = async (id, userPost) => {
    return await prisma.post.update({
      where: {
        id: id
      },
      data: {
        title: userPost.title,
        subtitle: userPost.subtitle,
        body: userPost.body,
      },
    });
  };
  
  export const deletePost = async (id) => {
    return await prisma.post.delete({
      where: {
        id: id,
      },
    });
  };
 