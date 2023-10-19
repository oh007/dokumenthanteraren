import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => (
  <header className="flex flex-row space-x-10 lg:flex-row sm:flex flex-col">
    <div>
      <h1 className="font-bold text-3xl py-3">Dokumenthanteraren</h1>
    </div>
    <div className="flex items-center text-center">
      <button className="flex w-40 place-content-around bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        <FontAwesomeIcon
          icon={faPlus}
          size="xs"
          className="  w-5"
        />
        <p className="font-light">Add new doc</p>
      </button>
    </div>
  </header>
);

export default Header;
