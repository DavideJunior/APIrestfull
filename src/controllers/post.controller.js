import Post from '../models/post.model.js';
import User from '../models/user.model.js';
import Category from '../models/category.model.js';

export const createPost = async (req, res) => {
  try {
    const { title, content, userId, categoryId } = req.body;

    if (!title || !content || !userId || !categoryId) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const user = await User.findByPk(userId);
    const category = await Category.findByPk(categoryId);
    if (!user || !category) return res.status(400).json({ message: 'Usuário ou categoria inválido' });

    const post = await Post.create({ title, content, userId, categoryId });
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar postagem', error });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ['id', 'name', 'email'] },
        { model: Category, attributes: ['id', 'name'] },
      ],
    });
    return res.json(posts);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar postagens', error });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ['id', 'name'] },
        { model: Category, attributes: ['id', 'name'] },
      ],
    });
    if (!post) return res.status(404).json({ message: 'Postagem não encontrada' });
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar postagem', error });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Postagem não encontrada' });

    await post.update(req.body);
    return res.json(post);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar postagem', error });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) return res.status(404).json({ message: 'Postagem não encontrada' });

    await post.destroy();
    return res.json({ message: 'Postagem deletada com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar postagem', error });
  }
};
