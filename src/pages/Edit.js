import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Upload from "../Components/Upload";

export function Edit() {
  return (
    <>
      <Navbar />
      <Header headerName="Edit your listing" />
      <Upload/>
    </>
  );
}
