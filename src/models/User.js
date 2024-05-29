import { prisma } from "../../config/prisma.js";

export const createUser = async (name, email) => {
  try {
    return await prisma.user.create({
      data: {
        name,
        email,
      },
    });
  } catch (error) {
    if (error.code == "P2002") {
      throw new Error("Email address already exists.");
    }
    throw new Error(`Failed to create user: ${error.message}`);
  }
};

export const findUsers = async () => {
  try {
    return await prisma.user.findMany();
  }
  catch (error) {
    throw new Error(`Failed to get all user: ${error.message}`);
  }
};

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
};

export const updateUser = async (email, userData) => {
  return await prisma.user.update({
    where: {
      email: email
    },
    data: {
      name: userData.name,
      status: userData.status,
    },
  });
};

export const deleteUser = async (email) => {
  return await prisma.user.delete({
    where: {
      email: email,
    },
  });
};

export const createUserWithPost = async (userData, postData) => {
  return await prisma.user.create({
    data: {
      name: userData.name,
      email: userData.email,
      Post:{
        title: postData.title,
        body: postData.body,
      },
    },
  });
};