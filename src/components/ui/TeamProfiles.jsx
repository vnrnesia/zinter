import ivan from "@/assets/TeamProfilesImg/ivan.webp";
import sencer from "@/assets/TeamProfilesImg/sencer.webp";
import kto from "@/assets/TeamProfilesImg/kto.webp";

export default function TeamProfiles() {
  const profiles = [
    {
      role: "Директор компании",
      name: "Иванов Иван Иванович",
      img: ivan,
      borderColor: "#007EFF",
      badgeBg: "#ffc24b",
    },
    {
      role: "Директор компании",
      name: "Aртем Иванович",
      img: kto,
      borderColor: "#007EFF",
      badgeBg: "#ffc24b",
    },
    {
      role: "Бизнес Партнёр",
      name: "Сенджер Гирай Дюзенли",
      img: sencer,
      borderColor: "#007EFF",
      badgeBg: "#ffc24b",
    },
  ];

  return (
    <section className="bg-white py-12  max-w-[90%] 2xl:max-w-7xl mx-auto">
      <div className="text-center mb-12">
      
        <h2 className="text-4xl font-bold mb-4"> ПРЕДСТАВИТЕЛИ КОМПАНИИ</h2>
        
      </div>
      <div className="max-w-[1112px] h-[512px] mx-auto flex items-center justify-center space-x-[100px]">
        {profiles.map(({ role, name, img, borderColor, badgeBg }, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className="w-[290px] h-[290px] rounded-full "
               style={{ borderColor: i === 0 ? "transparent" : borderColor, }}
            >
              <img
                src={img}
                alt={role}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="mt-[-20px] px-6 py-2 rounded-full text-white text-center text-[16px] leading-[24px]"
              style={{ backgroundColor: badgeBg }}
            >
              {role}
            </div>
            <div className="mt-4 text-[#1D1D1F] text-[18px] font-semibold leading-[28px] text-center">
              {name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
