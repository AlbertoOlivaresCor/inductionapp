// Importa el módulo 'fs' (filesystem) de Node.js para trabajar con archivos
import fs from 'fs'

// Define la ruta al archivo JSON que actúa como base de datos
const path = './database/database.json'

// Función que lee el contenido del archivo JSON, lo convierte de texto a objeto JavaScript y lo devuelve
const readData = () => JSON.parse(fs.readFileSync(path, 'utf-8'))

// Función que escribe datos en el archivo JSON, convirtiendo el objeto a texto con formato legible
const writeData = (data) => fs.writeFileSync(path, JSON.stringify(data, null, 2))

// Exporta las funciones para poder utilizarlas en otros módulos
export { readData, writeData }
