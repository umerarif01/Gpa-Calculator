import Head from "next/head";
import Gpa from "../Components/Gpa";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <Head>
        <title>GPA CALCULATOR</title>
        <meta name="description" content="Calculate your GPA" />
      </Head>

      <main className="flex-grow">
        <div className="pt-[75px]" />
        <h1 className="flex justify-center items-center font-bold text-4xl pb-4  2xl:text-6xl">
          GPA <span className="pl-3 text-red-600"> CALCULATOR</span>
        </h1>
        <center>
          <button
            className="mb-2 p-2 text-black font-semibold bg-yellow-300 rounded-md hover:bg-yellow-400 transition"
            onClick={onOpenModal}
          >
            View Grading System
          </button>
        </center>

        <Modal
          className="flex justify-center items-center"
          open={open}
          onClose={onCloseModal}
          center
        >
          <p className="font-semibold py-2">
            This Calculator uses the following grading system to evaluate
            student performance.
          </p>
          <Image
            src="/table.png"
            alt="Grading Procedure"
            width={700}
            height={500}
          />
        </Modal>
        <Gpa />
      </main>

      <footer className="border-t-2 w-full py-4">
        <a
          href="https://coderumera.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <center>
            <h2 className=" items-center font-semibold">
              Made with ❤️ by Umer Arif
            </h2>
          </center>
        </a>
      </footer>
    </div>
  );
}
