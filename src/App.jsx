import Books from "./components/books/Books";
import Table from "./components/table/table";

const books = [
  {
    bookTitle: "100 años de soledad",
    bookAuthor: "Gabriel García Marquez",
    bookRating: Array(5).fill("*"),
    pageCount: 410,
    imageUrl:
      "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691410493-81eYzfe2LWL.jpg",
  },
  {
    bookTitle: "Asesinato en el Orient Express",
    bookAuthor: "Agatha Christie",
    bookRating: Array(4).fill("*"),
    pageCount: 256,
    imageUrl:
      "https://m.media-amazon.com/images/I/71RFyM95qwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookTitle: "Las dos torres",
    bookAuthor: "J.R.R Tolkien",
    bookRating: Array(5).fill("*"),
    pageCount: 352,
    imageUrl:
      "https://m.media-amazon.com/images/I/A1y0jd28riL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookTitle: "50 sombras de Grey",
    bookAuthor: "E.L James",
    bookRating: Array(1).fill("*"),
    pageCount: 514,
    imageUrl:
      "https://prodimage.images-bn.com/pimages/9781728260839_p0_v2_s1200x630.jpg",
  },
];

const App = () => {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];
  const ingresoTotal = netIncomes.reduce((acumulador, item) => acumulador + item.income, 0);
  const ingresoPromedio = ingresoTotal / netIncomes.length;
  return (
    <div>
      <h2>book champions App</h2>
      <p>¡Quiero leer libros!</p>
      <Books books={books} />
      <Table netIncomes={netIncomes} />
      <p>Promedio de ingreso neto entre todas las marcas: {ingresoPromedio}</p>
    </div>
  );
};

export default App;
