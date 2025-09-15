import Form from "../ui/Form";

const GetStarted = () => {
  return (
    <section className="bg-gradient-to-l from-[#0273DE] to-[#10B0EB]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="rounded-2xl w-full sm:p-10 md:p-12 flex flex-col md:flex-row items-stretch gap-8">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative flex items-center justify-center h-[260px] sm:h-[320px] md:h-[400px] w-full">
              <img
                src="/world.png"
                alt="world"
                className="absolute inset-0 m-auto w-[320px] sm:w-[360px] md:w-[420px] md:pt-[180px] max-w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
