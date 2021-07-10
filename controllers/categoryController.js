const Category = require("../models/category");

exports.createCategory = (req, res) => {
  const category = new Category(req.body);

  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Bad request !",
      });
    }

    res.json({
      category: category,
    });
  });
};

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(404).json({
        error: "Category not found !",
      });
    }

    req.category = category;
    next();
  });
};

exports.showCategory = (req, res) => {
  res.json({
    category: req.category,
  });
};

exports.removeCategory = (req, res) => {
  let category = req.category;

  category.remove((err, category) => {
    if (err) {
      return res.status(404).json({
        error: "category not deleted !",
      });
    }
    res.status(204).json({});
  });
};

exports.updateCategory = (req, res) => {
  const category = req.category;

  category.name = req.body.name;

  category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "category not updated !",
      });
    }

    res.json({
      category: category,
    });
  });
};

exports.allCategories = (req, res) => {
  Category.find().exec((err, categories) => {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    res.json({
      categories,
    });
  });
};
