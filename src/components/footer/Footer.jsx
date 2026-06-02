import PfsFooter from "../../assets/pfs-footer.webp";

function Footer() {
  return (
    <div className="w-full flex justify-center md:justify-end md:pr-12 mt-4 md:mt-0">
      <img
        src={PfsFooter}
        className="w-1/2 sm:w-2/5 md:w-1/4 h-auto object-contain cursor-pointer transition-all duration-300 scale-95 hover:scale-100 md:scale-[0.65] md:hover:scale-[0.72] filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        alt="PFS Footer representation"
      />
    </div>
  );
}

export default Footer;
