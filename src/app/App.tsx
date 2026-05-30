import { MapPin, Calendar, Clock } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Open_Sans',sans-serif]">
      {/* Header - Lottery Ticket Invitation */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dbcab6]/20 via-[#b4c5a5]/10 to-white" />

        <div className="relative max-w-2xl w-full">
          {/* Lottery Ticket */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-dashed border-[#525834]/30">
            {/* Ticket Header */}
            <div className="bg-gradient-to-r from-[#525834] to-[#694532] text-white py-6 px-8 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#b4c5a5]" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#b4c5a5]" />
              <div className="text-center">
                <div className="text-sm font-medium tracking-widest mb-2 opacity-90">СЧАСТЛИВЫЙ БИЛЕТ №</div>
                <div className="text-3xl md:text-4xl font-bold tracking-wider">30052026</div>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-8 md:p-12 bg-gradient-to-b from-white to-[#dbcab6]/10">
              <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display',serif] text-[#525834] mb-4">
                  Иван & Мария
                </h1>

                <div className="inline-block bg-[#b4c5a5]/20 rounded-full px-6 py-3 border-2 border-[#b4c5a5]">
                  <p className="text-xl md:text-2xl text-[#525834] font-medium">
                    приглашают вас на свадьбу
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t-2 border-dashed border-[#525834]/20">
                  <div className="flex items-center justify-center gap-3 text-[#525834]">
                    <Calendar className="w-6 h-6" />
                    <div>
                      <div className="text-sm opacity-70">Дата</div>
                      <div className="text-xl font-semibold">30 Мая 2026</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[#525834]">
                    <Clock className="w-6 h-6" />
                    <div>
                      <div className="text-sm opacity-70">Время</div>
                      <div className="text-xl font-semibold">16:00</div>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-[#4b4d4d] italic mt-6">
                  Этот билет дарует право на незабываемый вечер!
                </div>
              </div>
            </div>

            {/* Ticket Footer - Perforated Line */}
            <div className="h-8 bg-[#525834]/5 border-t-2 border-dashed border-[#525834]/30 flex items-center justify-center gap-2">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-[#525834]/30" />
              ))}
            </div>
          </div>

          {/* Decorative circles (lottery balls) */}
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#b4c5a5] opacity-50 blur-xl" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-[#694532] opacity-30 blur-xl" />
        </div>
      </section>

      {/* General Info Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#dbcab6]/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] mb-8">Дорогие друзья!</h2>
          <p className="text-lg text-[#4b4d4d] leading-relaxed">
            Мы приглашаем вас разделить с нами один из самых важных дней в нашей жизни.
            Ваше присутствие сделает этот день по-настоящему особенным и незабываемым.
            Будем рады видеть вас на нашем празднике любви и счастья!
          </p>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] text-center mb-12">Место проведения</h2>

          <div className="bg-gradient-to-br from-[#dbcab6]/20 to-[#b4c5a5]/20 rounded-lg p-8 md:p-12 border-2 border-[#525834]/10">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-[#525834] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-[#525834] mb-2">Ресторан "Белая Терраса"</h3>
                <p className="text-[#4b4d4d]">г. Москва, ул. Примерная, д. 123</p>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-[#d9d9d9]/30 to-[#b4c5a5]/30 rounded-lg flex items-center justify-center mb-6 border border-[#525834]/10">
              <div className="text-center text-[#525834]">
                <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm opacity-70">Здесь будет карта</p>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-auto text-center bg-[#525834] hover:bg-[#694532] text-white py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Открыть в картах
            </a>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#b4c5a5]/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] text-center mb-12">Программа дня</h2>

          <div className="space-y-6">
            {[
              { time: "16:00", event: "Сбор гостей", desc: "Приветственные напитки и фотосессия" },
              { time: "16:30", event: "Церемония", desc: "Официальная часть бракосочетания" },
              { time: "17:00", event: "Банкет", desc: "Праздничный ужин, поздравления и развлечения" },
              { time: "23:00", event: "Завершение вечера", desc: "Прощальный танец и салют" }
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-6 items-start p-6 bg-white rounded-lg shadow-md border-l-4 border-[#b4c5a5] hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <div className="text-2xl font-bold text-[#525834]">{item.time}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#525834] mb-1">{item.event}</h3>
                  <p className="text-[#4b4d4d]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] text-center mb-12">Дресс-код</h2>

          {/* Color Palette */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-[#525834] text-center mb-6">Цветовая палитра</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { color: "#dbcab6", name: "Бежевый" },
                { color: "#b4c5a5", name: "Мятный" },
                { color: "#525834", name: "Оливковый" },
                { color: "#694532", name: "Коричневый" },
                { color: "#4b4d4d", name: "Графитовый" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-20 h-20 rounded-full shadow-lg mb-2 border-2 border-white ring-2 ring-[#525834]/20"
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="text-sm text-[#4b4d4d]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outfit Inspiration */}
          <div>
            <h3 className="text-xl font-semibold text-[#525834] text-center mb-8">Образы для вдохновения</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "https://images.unsplash.com/photo-1521467752200-3bccf80f16ed?w=400",
                "https://images.unsplash.com/photo-1549417229-7686ac5595fd?w=400",
                "https://images.unsplash.com/photo-1543290556-86c013a17574?w=400",
                "https://images.unsplash.com/photo-1591997297702-d43f7f008486?w=400",
                "https://images.unsplash.com/photo-1525773544200-d64f061f7e1d?w=400",
                "https://images.unsplash.com/photo-1619702156162-e5b70a044b4d?w=400"
              ].map((url, index) => (
                <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
                  <img
                    src={url}
                    alt={`Образ ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#dbcab6]/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] text-center mb-12">Важные детали</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#b4c5a5]">
              <h3 className="text-xl font-semibold text-[#525834] mb-4">Подарки</h3>
              <p className="text-[#4b4d4d] leading-relaxed">
                Лучший подарок для нас — это ваше присутствие! Но если вы хотите порадовать нас,
                мы будем благодарны за конверт, который поможет нам в начале нашего семейного пути.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#694532]">
              <h3 className="text-xl font-semibold text-[#525834] mb-4">Контакты</h3>
              <p className="text-[#4b4d4d] leading-relaxed">
                Если у вас возникнут вопросы, пожалуйста, свяжитесь с нами по телефону +7 (999) 123-45-67
                или напишите в WhatsApp. Мы всегда рады помочь!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#525834] mb-8">Подтверждение присутствия</h2>
          <p className="text-lg text-[#4b4d4d] mb-8">
            Пожалуйста, подтвердите своё присутствие до 1 мая 2026 года
          </p>

          <div className="bg-gradient-to-br from-[#dbcab6]/20 to-[#b4c5a5]/20 rounded-lg p-8 border-2 border-[#525834]/10">
            <p className="text-[#525834] mb-6">Заполните анкету, чтобы мы могли лучше подготовиться к вашему приходу</p>
            <a
              href="https://forms.yandex.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#525834] hover:bg-[#694532] text-white py-4 px-12 rounded-lg transition-colors duration-300 text-lg font-medium"
            >
              Заполнить анкету
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#525834] to-[#694532] text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-['Playfair_Display',serif] mb-4">С любовью,</p>
          <p className="text-3xl font-['Playfair_Display',serif] mb-8">Иван & Мария</p>
          <div className="flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-[#b4c5a5]" />
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}