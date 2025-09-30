import Category from '../models/category.model.js';

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Nome é obrigatório' });

    const existing = await Category.findOne({ where: { name } });
    if (existing) return res.status(400).json({ message: 'Categoria já existe' });

    const category = await Category.create({ name });
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao criar categoria', error });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.json(categories);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao listar categorias', error });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });

    await category.update({ name: req.body.name });
    return res.json(category);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao atualizar categoria', error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ message: 'Categoria não encontrada' });

    await category.destroy();
    return res.json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao deletar categoria', error });
  }
};
