const Novedad = require('../models/novedadModel');

// Obtener todas las novedades
const getNovedades = async (req, res) => {
  try {
    const novedades = await Novedad.find().sort({ fecha: -1 });
    res.json(novedades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva novedad
const createNovedad = async (req, res) => {
  const { titulo, contenido } = req.body;
  let multimedia = '';

  if (req.file) {
    multimedia = `/uploads/${req.file.filename}`;
  }

  const nuevaNovedad = new Novedad({ titulo, contenido, multimedia });

  try {
    const novedad = await nuevaNovedad.save();
    res.status(201).json(novedad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getNovedades, createNovedad };
