import Image from "next/image";
import home_img from "../../../public/home_img.jpg";
import ButtonComp from "@/components/functional/buttonComp";

export default function HomeHeader() {
  const btns = [
    { name: "Products", color: "primary" },
    { name: "Services", color: "secondary" },
  ];

  function btnsStyles(color: string) {
    if (color === "primary") return "bg-primary";

    return "bg-secondary";
  }
  return (
    <main
      className="h-[60vh] md:h-[80vh] lg:h-[100vh] flex items-center w-full"
      style={{ backgroundImage: `url(/home_img.jpg)`, backgroundSize: "cover" }}
    >
      <div className="md:ml-16 w-full flex flex-col justify-center max-[380px]:items-center">
        <h1 className="text-[calc(1.5rem+3.9vw)] leading-[calc(1.7rem+4vw)]">
          Natural Food Is
          <br /> Always Healthy
        </h1>
        <div className="flex gap-4 flex-wrap">
          {btns.map((el: any, index: number) => (
            <ButtonComp
              title={el.name}
              style={`mt-7 ${btnsStyles(el.color)}`}
              key={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
