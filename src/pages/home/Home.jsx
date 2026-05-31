import NavBar from "../../components/navigation/NavBar";

function Home() {
  return (
    <div className="bg-black w-full h-screen">
      <NavBar />
      <h1>Welcome to Barneys Supply!</h1>
      <p>Your one-stop shop for all your supply needs.</p>
    </div>
  );
}

export default Home;
