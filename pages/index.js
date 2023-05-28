import Intro from "./Intro";
import Counter from "./counter";
import Coursedetails from "./coursedetails";
import Footer from "./footer";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

export default function Home() {
  return (
   
      <main>
        <Intro />
        <Counter />
        <Coursedetails />
        <Footer />
      </main>
  );
}
