import ButtonComp from "@/components/functional/buttonComp";
import {
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactUs() {
  const items = [
    { title: "Call Us", icon: <FaPhone />, desc: "+012 345 67890" },
    { title: "Email Us", icon: <FaEnvelope />, desc: "info@example.com" },
    {
      title: "Office Address",
      icon: <FaLocationArrow />,
      desc: "123 Street, New York, USA",
    },
  ];

  return (
    <div
      id="contact"
      className="w-[80%] mx-auto min-h-[100vh] flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center items-center py-5">
        <div className="border-[2px] w-[60px] border-primary"></div>
        <div className="border-[2px] w-[110px] border-secondary mt-1"></div>
        <h1>Contact Us</h1>
        <p className="text-[gray] text-center">
          Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum
          <br /> diam justo sed rebum vero dolor duo.
        </p>
      </div>

      <section className="flex justify-between gap-4 w-full max-[890px]:flex-col">
        <div className="w-[40%] max-[890px]:w-full bg-primary p-5 flex flex-col gap-9 justify-between text-[white]">
          {items.map((el, index) => (
            <>
              <div key={index}>
                <h3>{el.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                  {el.icon}
                  <p>{el.desc}</p>
                </div>
              </div>
            </>
          ))}
          <div>
            <h3>Follow Us</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="rounded-full border-[1px] border-[white] p-2 cursor-pointer">
                <FaTwitter />
              </div>
              <div className="rounded-full border-[1px] border-[white] p-2 cursor-pointer">
                <FaFacebook />
              </div>
              <div className="rounded-full border-[1px] border-[white] p-2 cursor-pointer">
                <FaYoutube />
              </div>
              <div className="rounded-full border-[1px] border-[white] p-2 cursor-pointer">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
        <form className="w-[60%] h-full max-[890px]:w-full flex flex-col self-center">
          <div className="flex gap-4 w-full max-[600px]:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="border-[1px] border-[gray] h-[40px] pl-3 w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-[1px] border-[gray] h-[40px] pl-3 w-full"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="border-[1px] border-[gray] h-[40px] pl-3 mt-4"
          />
          <textarea
            placeholder="Message"
            className="border-[1px] border-[gray] h-[40px] pl-3 mt-4 pt-2 min-h-[200px]"
          />
          <ButtonComp title="Send Message" style="bg-primary mt-4 w-[210px]" />
        </form>
      </section>
    </div>
  );
}
