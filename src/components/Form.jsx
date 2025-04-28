export default function Form() {
    return (
      <div className="relative bg-white p-6 md:p-8 rounded-xl shadow-2xl mx-auto" style={{ maxWidth: "480px" }}>
        <img src="/assets/img/whyus/Group 1171281079.png" alt="" className="hidden md:block md:absolute md:top-[-50px] md:right-[-60px]" />
        <h2 className="text-2xl md:text-3xl text-gray-800 mb-6 text-center">
          Получите <span className="text-[#FFC23E]">бесплатную</span> консультацию
        </h2>
  

        <form className="space-y-4" id="contactForm">

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">ФИО</label>
            <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]" required />
          </div>
  

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Електронная Почта</label>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]" required />
          </div>
  

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">Номер Телефона</label>
            <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]" required />
            <p id="phoneError" className="mt-1 text-sm text-red-600 hidden">Geçersiz телефон numarası</p>
          </div>
  

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-500 mb-1">Услуг</label>
            <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#11B4EC] focus:border-[#11B4EC]" required>
              <option value="">Выберите услугу</option>
              <option>Услуг 1</option>
              <option>Услуг 2</option>
              <option>Услуг 3</option>
              <option>Услуг 4</option>
            </select>
          </div>
  

          <div className="flex items-start gap-3 pt-2">
            <div className="flex items-start mt-0.5">
              <input id="consent" name="consent" type="checkbox"
                className="focus:ring-[#11B4EC] h-4 w-4 text-[#11B4EC] border-gray-300 rounded mt-0.5" required />
            </div>
            <div className="flex-1">
              <label htmlFor="consent" className="text-xs text-[#8C8C8C] leading-tight block">
                Вы соглашаетесь на обработку файлов cookie и ваших персональных данных при использовании нашего сайта.
              </label>
            </div>
          </div>
  
   
          <button type="submit" className="w-full bg-gradient-to-r from-[#006FDC] to-[#11B4EC] hover:from-[#005bbc] hover:to-[#0e9fd4] text-white py-3 px-4 rounded-lg font-medium transition-all shadow-md">
            Подайте Заявку
          </button>
        </form>
      </div>
    );
  }
  