import { createPost, deletePost, findPostById, findPosts, updatePost } from "../models/Post.js";

export const addPost = async (req, res) => {
  try {
    const { title, subtitle, userid, body } = req.body;
    const post = await createPost(title, subtitle, userid, body);
    res.status(201).json({ post });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add Post", message: error.message });
  }
};

export const findAllPosts = async () => {
  try {
    const post = await findPosts();
    res.status(200).json({ post });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "failed to find posts", message: error.message });
  }
}

export const getPostById = async (req, res) => {
  try {
    const post = await findPostById(req.params.id);
    res.status(200).json({ post });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to find Post", message: error.message })
  }
};

export const updatPost = async (req, res) => {
  try {
    const { id } = req.params.id;
    const postData = req.body;
    const post = await updatePost(id, postData);
    res.status(200).json({ post });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update post", message: error.message })
  }
};

export const delPost = async (req, res) => {
  try {
    const { id } = req.params.id;
    const post = await deletePost(id);
    res.status(200).json({ post });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete post", message: error.message })
  }
};
