import { Link } from 'react-router-dom';
import AppRouter from '../routes';

function App() {
  // let page;
  // const pathname = window.location.pathname;
  // switch (pathname) {
  //   case "/":
  //     page = <Home />;
  //     break;
  //   case "/products":
  //     page = <Products />;
  //     break;
  //   case "/about":
  //     page = <About />;
  //     break;
  //   default:
  //     page = <NotFound />
  // }

  return (
    <>
      <header className="bg-neutral-950 text-white flex flex-row justify-between px-20 items-center h-[10%]">
        <Link
          to="/"   
          className="font-bold italic text-4xl hover:text-amber-300 duration-200"
        >
          LOGO
        </Link>
        <ul className="flex flex-row gap-5 text-2xl align-middle">
          <li className="hover:text-amber-500 duration-200">
            <Link to="/products"  >Products</Link>
          </li>
          <li className="hover:text-amber-500 duration-200">
            <Link to="/about"  >About</Link>
          </li>
        </ul>
      </header>
      <AppRouter />
    </>
  );
}

export default App;
