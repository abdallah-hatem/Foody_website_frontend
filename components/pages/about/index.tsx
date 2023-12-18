import Image from "next/image";
import aboutImg from "../../../public/about_img.jpg";
import ButtonComp from "@/components/functional/buttonComp";
import { FaCheck } from "react-icons/fa";

export default function About() {
  const items = [
    { title: "Tempor erat elitr rebum at clita" },
    { title: "Tempor erat elitr rebum at clita" },
    { title: "Tempor erat elitr rebum at clita" },
  ];

  return (
    <div
      id="about"
      className="sm:w-[70%] md:w-[80%] min-h-[110vh] flex items-center mx-auto p-6"
    >
      <div className="flex flex-col lg:flex-row gap-9 items-center">
        <Image
          src={aboutImg}
          alt="pic"
          className="min-w-[50%] rounded-md"
        />
        <section className="min-w-[50%] py-12 flex flex-col justify-between items-center">
          <h1 className="leading-[45px]">Best Organic Fruits And Vegetables</h1>
          <p className="text-[gray] mt-10">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <ul className="self-start mt-8">
            {items.map((el, index) => (
              <li key={index} className="flex items-center mb-5 text-[gray]">
                <span className="text-primary mr-3">
                  <FaCheck />
                </span>
                {el.title}
              </li>
            ))}
          </ul>
          <ButtonComp title="Read More" style="bg-primary w-[200px] self-start mt-5 max-[720px]:self-center" />
        </section>
      </div>
    </div>
  );
}
