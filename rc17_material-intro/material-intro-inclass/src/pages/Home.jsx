import { TextField } from "@mui/material";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";

//! Material.Uı kullanılma nedenleri
//! Eski bir kütüphane olduğu için bilindik ve genel kullanım gördüğünden
//! Mobil cihazlarda kullanılabiliyor, react neativ ile uyumlu
//! Styling güzel olduğu için tercih sebebi.
const Home = () => {
  return (
    <>
      <TypoButtons />
      <TextFieldComp />
      <CardGrid />
    </>
  );
};

export default Home;
