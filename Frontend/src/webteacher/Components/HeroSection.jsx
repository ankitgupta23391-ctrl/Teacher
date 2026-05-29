// Components/HeroSection.jsx
export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-24 px-6 pt-55">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Best Teachers For Your Learning Journey
          </h2>

          <p className="text-lg text-gray-100 mb-8">
            Explore experienced teachers and improve your skills with quality
            education.
          </p>

          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
            Explore Teachers
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
            alt="Teacher"
            className="rounded-3xl shadow-2xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
