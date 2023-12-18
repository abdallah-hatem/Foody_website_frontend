import AboutCard from "./aboutCard";

export default function Features() {
  const cards = [
    { title: "Natural Process", image: "/icon-1.png" },
    { title: "Organic Products", image: "/icon-1.png" },
    { title: "Biologically Safe", image: "/icon-1.png" },
  ];
  return (
    <div
      className="min-h-[100vh] bg-[#F7F8FC] flex"
      style={{ backgroundImage: `url(/bg_icon.png)` }}
    >
      <div className="justify-center w-full m-auto py-20">
        <header className="text-center flex flex-col justify-center items-center">
          <div className="border-[2px] w-[60px] border-primary"></div>
          <div className="border-[2px] w-[110px] border-secondary mt-1"></div>
          <h1 className="mt-4">Our Features</h1>
          <p className="mt-4 text-[gray]">
            Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
            <br /> diam justo sed rebum vero dolor duo.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 w-[80%] m-auto">
          {cards.map((el, index) => (
            <AboutCard title={el.title} image={el.image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
