import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <footer className="relative bottom-0 left-0 h-[10vh] py5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg">
          Copyright {year} | All rights reserved
        </section>

        <section className="flex items-center justify-center gap-5 text-2xl text-white">
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsFacebook />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsInstagram />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsTwitterX />
          </a>
          <a
            className="hover:text-yellow-500 transition-all ease-in-out duration-300"
            href=""
          >
            <BsLinkedin />
          </a>
        </section>
      </footer>
    </>
  );
};

export default Footer;
