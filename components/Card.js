import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  try {
    return (
      <div class="p-4 md:w-1/4 w-full">
        <Link
          href={{
            pathname: "/detail",
            query: { data: JSON.stringify(props) },
          }}
        >
          <div class="h-full bg-white drop-shadow-lg rounded-lg overflow-hidden">
            <Image
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              width="720"
              height="400"
              alt="thumbnail"
              src={props.data.img_src_set["1.5x"]}
            />
            <div class="p-5">
              <h1 class="title-font text-lg font-medium text-gray-900">
                {props.data.name}
              </h1>
            </div>
          </div>
        </Link>
      </div>
    );
  } catch (e) {
    console.error(e);
  }
}
