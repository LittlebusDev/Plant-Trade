import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Upload from "../Components/Upload";

export function UploadPage() {
  return (
    <>
      <Navbar />
      <Header headerName="Upload a plant" />
      <Upload />
    </>
  );
}
