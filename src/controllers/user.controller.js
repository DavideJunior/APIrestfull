import  User  from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json(user);
  } catch (error) {
    console.error('ERRO DETALHADO:', error);
    return res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar usuários', error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar usuário', error });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    await user.update({ name, email });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar usuário', error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    await user.destroy();
    return res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar usuário', error });
  }
};
