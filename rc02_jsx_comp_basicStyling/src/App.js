import React from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";

// //? React,JSX kullanmaktadir.
// //? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

import Header from "./components/Header";

// //! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
// //! bir kod parcacigidir.

// //! Bir componentin return () kismi ise JSX kodlari icerir.

// //! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
// //! component eger birden fazla html elementi dondurmesi
// //! gerekirse bunlari tek bir container elemani ile sarmayalarak
// //! dondurmelidir.container icin div, article, header, <> v.b
// //! herhangi bir element kullanilabilir.

//? App componentinin function declaration ile tanimlanmasi

function App() {
  return (
    //*JSX
    //? stillendirme yapilmaycaksa container icin <> kullanilkabilir. Aksi halde div e alınması gerekir.
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
