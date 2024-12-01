const mongoose = require('mongoose');

const novedadSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  multimedia: {
    type: String, // Guardará la URL de la imagen o video
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Novedad', novedadSchema);
