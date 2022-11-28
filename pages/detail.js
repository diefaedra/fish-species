import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Meta from "../components/Meta";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Detail() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!router.query.data) return;
    const _data = JSON.parse(router.query.data).data;
    setTitle(`: ${_data.name}`);
    setData(_data);
  }, []);

  return (
    <div>
      {/* title nya sesuai yang didapat dari api */}
      <Meta title={`Fish Species${title}`} />

      <Header />

      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-16 items-center justify-center flex-col">
          <Image
            class="lg:w-1/4 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded"
            alt="cover"
            width="720"
            height="600"
            src={data ? data.img_src_set["2x"] : ""}
          />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {data ? data.name : ""}
            </h1>
            <p class="leading-relaxed">{data ? data.meta.type_species : ""}</p>
            <p class="leading-relaxed">{data ? data.meta.synonyms : ""}</p>
            <div class="flex justify-center mt-4">
              <Link
                href={data ? data.url : ""}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded text-md"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
