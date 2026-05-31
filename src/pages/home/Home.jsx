import NavBar from "../../components/navigation/NavBar";
import ContactUs from "../../assets/contact-us.png";
import SpringTime from "../../assets/spring-time.png";

function Home() {
  return (
    <div className="bg-black w-full min-h-screen overscroll-none">
      <NavBar />

      <div className="homepage flex flex-col items-center gap-2 pt-6">
        <div className="contactimg h-50 w-full max-w-xs overflow-none flex items-center justify-center">
          <img
            src={ContactUs}
            className="w-full h-full object-cover scale-125 cursor-pointer"
            alt="Contact Us button logo click to go to contact page"
          />
        </div>

        <div className="springtime max-w-xl w-full px-4">
          <img
            src={SpringTime}
            className="w-full h-auto object-contain"
            alt="springtime deals in the ozarks"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
