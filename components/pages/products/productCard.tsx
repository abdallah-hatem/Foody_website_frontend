import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
}
export default function ProductCard({ img, title }: Props) {
  return (
    <div className="flex flex-col min-w-[280px] h-[400px] overflow-hidden border-[1px] border-[beige] shadow-md">
      <div className="w-full h-[75%] overflow-hidden">
        <Image
          src={img}
          className="hover:scale-[1.1] duration-[400ms] h-full w-full"
          alt="pic"
        />
      </div>
      <div className="flex flex-col h-[25%] justify-center items-center">
        <h4>{title}</h4>
        <div className="flex gap-2 mt-1">
          <p className="text-primary">$19.00</p>
          <p className="text-[gray] line-through">$29.00</p>
        </div>
      </div>
    </div>
  );
}
