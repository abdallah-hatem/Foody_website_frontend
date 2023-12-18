import ButtonComp from "@/components/functional/buttonComp";

export default function BigHeader() {
  return (
    <div className="mt-10 bg-primary flex justify-center min-h-[45vh]">
      <div className="w-[80%] flex justify-between items-center gap-4 max-[720px]:flex-wrap max-[720px]:gap-0 max-[720px]:justify-center">
        <div className="text-[white] min-w-[320px]">
          <h1>Visit Our Firm</h1>
          <p className="mt-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat
            <br /> ipsum et lorem et sit, sed stet lorem sit clita duo justo
            magna dolore erat amet. Diam dolor diam
            <br /> ipsum sit. Aliqu diam amet diam et eos.
          </p>
        </div>
        <ButtonComp
          title="Visit Now"
          style="bg-secondary text-[20px] font-semibold min-w-[200px] "
        />
      </div>
    </div>
  );
}
