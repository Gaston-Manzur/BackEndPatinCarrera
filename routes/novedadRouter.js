const express = require('express');
const multer = require('multer');
const { getNovedades, createNovedad } = require('../controllers/novedadController');

const router = express.Router();

// Configuración de multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/uploads'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Rutas
router.get('/', getNovedades);
router.post('/', upload.single('multimedia'), createNovedad);

module.exports = router;
