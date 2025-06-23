export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 bg-white">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Artistly</h1>
        <p className="text-lg text-gray-700">Book the best performers for your events — Singers, Dancers, Speakers, and more.</p>
        <a
          href="/artists"
          className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Explore Artists
        </a>
      </section>

      {/* Category Cards */}
      <section className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {['Singers', 'Dancers', 'Speakers', 'DJs'].map(category => (
          <div
            key={category}
            className="border rounded p-6 text-center shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{category}</h3>
            <p className="text-sm text-gray-600">Find the best {category.toLowerCase()} near you</p>
          </div>
        ))}
      </section>
    </main>
  );
}