import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import profile from "../public/assets/profile.webp";

export default function About() {
  return (
    <div>
      <Meta title="Fish Species: About" />

      <Header />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <Image
                    src={profile}
                    alt="profile"
                    className="rounded-full"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Diefa Edra Rivandi
                  </h2>
                  <div className="w-12 h-1 bg-cyan-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Undergraduate student of Computer Engineering,
                    <br />
                    Diponegoro University.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Hello! I am Diefa Edra Rivandi, an Undergraduate Computer
                  Engineering Student at Diponegoro University. I am someone who
                  is enthusiastic about trying new challenges, quite experienced
                  and has an interest in developing web application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
