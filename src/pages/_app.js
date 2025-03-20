// pages/_app.js
import Navbar from "../components/Navbar";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <div id="app-container">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
