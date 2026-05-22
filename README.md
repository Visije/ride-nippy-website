# ride-nippy-website
export default function RideNippyWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-100 via-white to-yellow-50 px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ride Nippy <span className="text-orange-600">Private Limited</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Premium food manufacturing, processing and trading company specializing in delicious pickles, pure vinegar, fruit jams, and high-quality edible oils.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-2xl shadow-lg transition">
                Explore Products
              </button>

              <button className="border border-gray-300 hover:border-orange-500 px-6 py-3 rounded-2xl transition">
                Contact Us
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl shadow-xl p-6 border">
              <div className="text-5xl mb-4">🥒</div>
              <h3 className="text-xl font-semibold">Pickles</h3>
              <p className="text-gray-600 mt-2">
                Traditional taste with authentic recipes.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border mt-10">
              <div className="text-5xl mb-4">🍓</div>
              <h3 className="text-xl font-semibold">Fruit Jam</h3>
              <p className="text-gray-600 mt-2">
                Rich fruity flavors crafted with care.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border -mt-6">
              <div className="text-5xl mb-4">🫒</div>
              <h3 className="text-xl font-semibold">Edible Oil</h3>
              <p className="text-gray-600 mt-2">
                Quality oils for healthy everyday cooking.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 border mt-4">
              <div className="text-5xl mb-4">🍶</div>
              <h3 className="text-xl font-semibold">Vinegar</h3>
              <p className="text-gray-600 mt-2">
                Pure and versatile for kitchens and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">About Us</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Ride Nippy Private Limited is dedicated to delivering quality food products with trusted manufacturing and processing standards. Our mission is to bring authentic taste, purity, and freshness to households and businesses.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Our Products</h2>
            <p className="text-gray-600 mt-4 text-lg">
              Carefully processed and packed for quality and freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🥭',
                title: 'Pickles',
                desc: 'Mango, mixed, lemon and traditional Indian varieties.'
              },
              {
                icon: '🍇',
                title: 'Fruit Jam',
                desc: 'Sweet and flavorful fruit spreads made with quality fruits.'
              },
              {
                icon: '🫗',
                title: 'Vinegar',
                desc: 'Processed with quality ingredients for multipurpose use.'
              },
              {
                icon: '🌻',
                title: 'Edible Oil',
                desc: 'Refined and hygienic oils for daily cooking needs.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition border"
              >
                <div className="text-5xl mb-5">{item.icon}</div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-gray-600 mt-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Why Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-8 rounded-3xl">
              <div className="text-4xl">✅</div>
              <h3 className="text-2xl font-semibold mt-5">Quality Products</h3>
              <p className="text-gray-700 mt-3">
                We maintain high standards in manufacturing and processing.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-3xl">
              <div className="text-4xl">🚚</div>
              <h3 className="text-2xl font-semibold mt-5">Reliable Supply</h3>
              <p className="text-gray-700 mt-3">
                Timely delivery and dependable product availability.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-3xl">
              <div className="text-4xl">🤝</div>
              <h3 className="text-2xl font-semibold mt-5">Trusted Business</h3>
              <p className="text-gray-700 mt-3">
                Building long-term relationships through consistency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-6 text-lg text-gray-300">
            Get in touch for business inquiries, dealership opportunities, or product details.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-800 p-6 rounded-3xl">
              <h3 className="font-semibold text-xl">📞 Phone</h3>
              <p className="mt-3 text-gray-300">+91 XXXXX XXXXX</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-3xl">
              <h3 className="font-semibold text-xl">📧 Email</h3>
              <p className="mt-3 text-gray-300">info@ridenippy.com</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-3xl">
              <h3 className="font-semibold text-xl">📍 Address</h3>
              <p className="mt-3 text-gray-300">India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        © 2026 Ride Nippy Private Limited. All rights reserved.
      </footer>
    </div>
  );
}
