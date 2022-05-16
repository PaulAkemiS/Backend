const fs = require("fs");
let productosArray = [];

class Contenedor {
  constructor(nombre) {
    this.nombre = nombre;
  }
  /**
   * Metodo para generar archivo
   * @param objeto
   * Retorna el ID de cada uno de los elementos del objeto
   */

  async save(obj) {
    const nuevoObjeto = {
      ...obj,
      id: productosArray.length + 1,
    };

    productosArray.push(nuevoObjeto);
    await fs.promises.writeFile(this.nombre, JSON.stringify(productosArray));
    console.log(nuevoObjeto.id);
    return nuevoObjeto.id;
  }

  /**
   * Metodo para realizar busqueda por ID
   * @param numero
   * Retorna el elemento buscado por ID
   */
  getById(num) {
    fs.promises
      .readFile("productos.txt", "utf-8")
      .then(() => {
        const buscado = productosArray.filter((item) => item.id == num);
        console.log("Tu busqueda es:", buscado);
        if (buscado == "") {
          console.log("No se pudo encontrar lo buscado");
          return null;
        } else {
          return buscado;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * Metodo para realizar busqueda global en el archivo
   * Retorna todo el contenido del archivo en forma de STRING
   */
  getAll() {
    fs.promises
      .readFile("productos.txt", "utf-8")
      .then((contenido) => {
        console.log("Busqueda global finalizada");
        console.log(JSON.parse(contenido));
        return JSON.parse(contenido);
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  }
  /**
   * Metodo para eliminar elemento del Objeto
   * @param numero
   * Retorna el objeto modificado
   */
  deleteById(num) {
    fs.promises
      .readFile("productos.txt", "utf-8")
      .then((contenido) => {
        const convertir = JSON.parse(contenido);
        const nuevoObjeto = convertir.filter((item) => item.id != num);
        console.log("Elemento eliminado, tu nuevo resultado es:", nuevoObjeto);
      })
      .catch((error) => {
        console.log("error=>", error);
      });
  }
  /**
   * Metodo para eliminar archivo
   */
  deleteAll() {
    fs.unlink("productos.txt", (error) => {
      if (error) {
        console.log("No se pudo eliminar el archivo");
      } else {
        console.log("Archivo eliminado");
      }
    });
  }
}

module.exports.Contenedor = Contenedor;
