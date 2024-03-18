import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

function Header() {
  const { user } = useContext(UserContext);
  const [menuButtonToggel, setMenuButtonToggel] = useState(false);

  function menuToggel() {
    let list = document.querySelector("ul");

    // For menu button -> close button
    menuButtonToggel === true
      ? (setMenuButtonToggel(false), list.classList.remove("top-[56px]"))
      : (setMenuButtonToggel(true),
        list.classList.add("top-[56px]"),
        list.classList.add("opacity-100"));
  }

  return (
    <>
      <div className="sticky px-4 pt-2 bg-transparent">
        <header className="flex justify-between items-center">
          <div className="flex justify-between items-center my-1">
            <Link
              to={"/"}
              className="flex items-center gap-1  md:gap-2 cursor-pointer px-2"
            >
              <img className="p-1 h-9 w-10 md:h-12 md:w-13 " src={logo} alt="" />
              <span className="text-xl md:text-2xl font-semibold welcom_title">
                APC&nbsp;Nadiad
              </span>
            </Link>
          </div>
          <div>
            <a
              className="py-1 px-2 md:py-2 md:px-4 gradient-border welcom_title duration-200 mx-4"
              href={"/login"}
            >
              Log&nbsp;in
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
