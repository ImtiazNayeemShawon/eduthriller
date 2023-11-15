import React from "react";
import Zip from "../public/zip.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function footer() {
  const router = useRouter();
  return (
    <React.Fragment>
      <footer className=" mt-40 bg-green-200 rounded-lg shadow   outline outline-1 outline-gray-200">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between text-gray-9000">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-700 sm:mb-0 ">
              <li>
                <a
                  href="https://www.imtiaznayeem.co"
                  target="blank"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Developer contact
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              {/* <li>
                <a
                  href="/AdminPageaccesoashdsagdtsrgt324234234dssddffdfdsf"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Admin pannel
                </a>
              </li> */}
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 justify-center mb-10">
            <a
              href="https://www.facebook.com/eduthriller10"
              target="blank"
              class="mb-2 inline-block rounded-full p-3 text font-bold uppercase leading-normal text-gray-700  transition duration-150 ease-in-out  bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://wa.link/69uith"
              target="blank"
              class="mb-2 inline-block rounded-full p-3 text font-bold uppercase leading-normal text-gray-700  transition duration-150 ease-in-out  bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 font-bold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@eduthriller"
              target="blank"
              class="mb-2 inline-block rounded-full p-3 text font-bold uppercase leading-normal text-gray-700  transition duration-150 ease-in-out  bg-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="https://t.me/eduthriller"
              target="blank"
              class="mb-2 inline-block rounded-full p-3 text font-bold uppercase leading-normal text-gray-700  transition duration-150 ease-in-out  bg-white"
            >
              <svg
                class="h-4 w-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
              </svg>
            </a>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div>
            <span className="block text-sm text-gray-900 sm:text-center ">
              © 2023{" "}
              <a href="/" className="hover:underline">
                Eduthriller™
              </a>
              . All Rights Reserved.{" "}
              <a
                href="https://www.zipbox.design"
                target="blank"
                className="text-gray-800 font-bold hover:text-green-500 duration-100"
              >
                Developed by Zipbox
              </a>
            </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
