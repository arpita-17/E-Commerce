import React from "react";

const Menu = ({ filteritem, Cardsdata, setcopyData }) => {
  // const {filteritem}=props
  return (
    <>
      {/* <ul class="flex border-b">
        <li class="-mb-px mr-1">
          <a
            onClick={() => filteritem("punjabi")}
            class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
          >
            Punjabi
          </a>
        </li>
        <li class="mr-1">
          <a
            onClick={() => filteritem("vadapav")}
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Vadapav
          </a>
        </li>
        <li class="mr-1">
          <a
            onClick={() => filteritem("pizza")}
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Pizza
          </a>
        </li>
        <li class="mr-1">
          <a
            onClick={() => filteritem("chai")}
            class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
          >
            Chai
          </a>
        </li>
        <li class="mr-1">
          <a
            onClick={() => filteritem("laptop")}
            class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
          >
            Laptop
          </a>
        </li>
        <li class="mr-1">
          <a
            onClick={() => setcopyData(Cardsdata)}
            class="bg-white inline-block py-2 px-4 text-gray-400 font-semibold"
          >
            All
          </a>
        </li>
      </ul> */}
      <div>
        <nav class=" relative flex flex-wrap items-center justify-between px-2 py-3 bg-red-500 mb-3">
          <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              class="lg:flex flex-grow items-center"
              id="example-navbar-warning"
            >
              <ul class="flex flex-col lg:flex-row list-none ">
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("mobile")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Moblie
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("laptop")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Laptop
                  </a>
                </li>
                <li class="nav-item">
                  <a
                  onClick={() => filteritem("earphone")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Earphone
                  </a>
                </li>
                <li class="nav-item">
                  <a
                  onClick={() => filteritem("shoes")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Shoes
                  </a>
                </li>
                <li class="nav-item">
                  <a
                  onClick={() => filteritem("shirt")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Shirts
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => filteritem("pant")}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                  >
                    Pants
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    onClick={() => setcopyData(Cardsdata)}
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
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
