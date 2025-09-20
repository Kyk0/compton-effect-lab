import BackButton from './BackButton';

export default function InstructionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(background1.jpeg)' }}
      />
      <div className="absolute inset-0 backdrop-blur-sm bg-black/70 z-0" />

      {/* content */}
      <div className="relative z-10 h-screen flex flex-col items-center px-16">
        <BackButton />

        {/* content box */}
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl my-8 h-[calc(100vh-4rem)] overflow-hidden">
          <iframe
            src="/Plan/Lab95ukr_plan.html"
            title="Plan"
            className="w-full h-full border-none rounded-2xl px-6 py-2"
          />
        </div>
      </div>
      <div className="absolute bottom-5 left-5 flex items-center z-10">
        <img
          src="/pdtu-logo.png"
          alt="Логотип"
          className="w-16 h-16 object-contain"
        />
        <span className="ml-3 mt-2 text-white text-lg font-semibold">
          Kyrylo Kolesnichenko
        </span>
      </div>
    </main>
  );
}