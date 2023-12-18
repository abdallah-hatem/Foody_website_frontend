import ButtonComp from "@/components/functional/buttonComp";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}
export default function AboutCard({ title, image }: Props) {
  return (
    <div className="bg-[white] h-[400px] shadow-md text-center justify-center items-center flex flex-col p-5">
      <Image
        src={image}
        alt="icon"
        width={200}
        height={200}
        className="w-[100px] mb-5"
      />
      <h3 className="mb-3">{title}</h3>
      <p className="text-[gray]">
        Tempor ut dolore lorem kasd vero ipsum sit
        <br /> eirmod sit. Ipsum diam justo sed vero dolor duo.
      </p>
      <ButtonComp
        title="Read More"
        style="border-[2px] text-primary border-primary w-[130px] self-center px-[0px] py-[10px] mt-5 hover:bg-primary hover:text-[white] durtion-300"
      />
    </div>
  );
}
