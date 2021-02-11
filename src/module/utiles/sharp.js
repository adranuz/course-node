const sharp = require('sharp')

sharp('original.png').resize(80, 80).toFile('imagen_80x80.png')