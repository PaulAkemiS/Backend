const testClass = require("./index");

const test = new testClass.Contenedor("productos.txt");
test.save({
  title: "Lenovo IdeaPad",
  imagen:
    "https://images.fravega.com/f300/62344279986390f512d41432f58cc519.jpg.webp",
  precio: 100,
});

test.save({
  title: "Lenovo ThinkBook",
  imagen: "https://mla-s1-p.mlstatic.com/671025-MLA45296950041_032021-F.jpg",
  precio: 100,
});

test.getAll();
test.getById(2);
test.deleteById(2);
test.deleteAll();
