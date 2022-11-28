import { useState } from "react";
import Image from "next/image";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import rapid from "../public/assets/rapid.webp";
import github from "../public/assets/github.webp";
import vercel from "../public/assets/vercel.webp";

export default function Reference() {
  let [modalTitle, setModalTitle] = useState("");
  let [modalMessage, setModalMessage] = useState("");
  let [modalOpened, setModalOpened] = useState(false);

  function openModal(title, message) {
    setModalTitle(title);
    setModalMessage(message);
    setModalOpened(true);
  }

  return (
    <div>
      <Meta title="Fish Species: Reference" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-cyan-200 text-cyan-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "Rapid API",
                  "All data used by Fish Species Application is sourced from the Rapid API Platform."
                )
              }
            >
              <Image src={rapid} alt="rapid" width="100" height="100" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Rapid API
              </h2>
              <p className="leading-relaxed text-base">
                All data used by Fish Species Application is sourced from the
                Rapid API Platform.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                GitHub
              </h2>
              <p className="leading-relaxed text-base">
                Fish Species source code is already published on GitHub under
                The MIT License (open source).
              </p>
            </div>
            <div
              className="hover:cursor-pointer sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-cyan-200 text-cyan-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "GitHub",
                  "Fish Species source code is already published on GitHub under The MIT License (open source)."
                )
              }
            >
              <Image src={github} alt="github" width="80" height="80" />
            </div>
          </div>
          <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
            <div
              className="hover:cursor-pointer sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-cyan-200 text-cyan-500 flex-shrink-0"
              onClick={() =>
                openModal(
                  "Vercel",
                  "This application is deployed using Vercel Frontend Deployment Platform and accessible to everyone."
                )
              }
            >
              <Image src={vercel} alt="vercel" width="80" height="80" />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-semibold mb-2">
                Vercel
              </h2>
              <p className="leading-relaxed text-base">
                This application is deployed using Vercel Frontend Deployment
                Platform and accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Modal
        title={modalTitle}
        message={modalMessage}
        open={modalOpened}
        onClose={() => setModalOpened(false)}
      />
    </div>
  );
}
