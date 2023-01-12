import React from "react";

const Menu = ({ filteritem, Cardsdata, setcopyData }) => {
  return (
    <>
      <div>
        <nav class=" relative flex flex-wrap items-center justify-between px-2 py-5 bg-red-500 mb-3">
          <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              class="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul class="flex flex-col lg:flex-row list-none ">
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("mobile")}
                    class="px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#mobile"
                  >
                    Moblie
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("laptop")}
                    class=" px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#laptop"
                  >
                    Laptop
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("earphone")}
                    class=" px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#earphone"
                  >
                    Earphone
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("shoes")}
                    class=" px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#shoes"
                  >
                    Shoes
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("shirt")}
                    class=" px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#shirt"
                  >
                    Shirts
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("pant")}
                    class="px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#pant"
                  >
                    Pants
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => setcopyData(Cardsdata)}
                    class="px-3 py-2 flex items-center text-md  font-bold leading-snug text-white  hover:bg-rose-600 rounded-md"
                    href="#pablo"
                  >
                    All
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
