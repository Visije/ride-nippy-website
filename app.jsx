export default function RideNippyWebsite() {
  const products = [
    {
      name: 'Traditional Pickles',
      description: 'Authentic handcrafted pickles made with rich Indian spices and premium ingredients.',
      image: 'https://images.unsplash.com/photo-1615485291234-9fbc5b4b1c6d?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Natural Fruit Jam',
      description: 'Fresh fruit jams prepared with balanced sweetness and natural fruit flavors.',
      image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Pure Vinegar',
      description: 'High-quality vinegar for cooking, pickling, and food preservation.',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Edible Oils',
      description: 'Carefully processed edible oils ensuring purity, nutrition, and freshness.',
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-[#f8f7f3] text-gray-800 min-h-screen font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-[#1f4d36]">Ride Nippy</h1>
            <p className="text-sm text-gray-500">Private Limited</p>
          </div>

          <nav className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wide">
            <a href="#home" className="hover:text-[#1f4d36] transition">Home</a>
            <a href="#about" className="hover:text-[#1f4d36] transition">About</a>
            <a href="#products" className="hover:text-[#1f4d36] transition">Products</a>
            <a href="#quality" className="hover:text-[#1f4d36] transition">Quality</a>
            <a href="#contact" className="hover:text-[#1f4d36] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-[90vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="px-6 max-w-4xl">
          <p className="text-orange-300 uppercase tracking-[5px] mb-4 text-sm">
            Manufacturing • Processing • Trading
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Taste Crafted With Purity & Tradition
          </h2>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Ride Nippy Private Limited delivers premium pickles, vinegar, fruit jams,
            and edible oils made with quality ingredients and trusted processing standards.
          </p>

          <a
            href="#products"
            className="inline-block bg-[#1f4d36] hover:bg-[#163a29] transition px-8 py-4 rounded-full text-white font-semibold shadow-xl"
          >
            Explore Products
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#1f4d36] font-semibold uppercase tracking-[3px] mb-3">
              About Our Company
            </p>

            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Building Trust Through Taste & Quality
            </h3>

            <p className="text-gray-600 leading-8 mb-6">
              Ride Nippy Private Limited is a food manufacturing, processing, and trading company
              committed to delivering high-quality food products with consistency and authenticity.
              We focus on traditional taste, hygienic production, and customer satisfaction.
            </p>

            <p className="text-gray-600 leading-8 mb-8">
              Our product range includes flavorful pickles, premium vinegar, delicious fruit jams,
              and pure edible oils crafted to meet modern food standards while preserving traditional richness.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <h4 className="text-3xl font-bold text-[#1f4d36] mb-2">100%</h4>
                <p className="text-gray-600">Quality Focused</p>
              </div>

              <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
                <h4 className="text-3xl font-bold text-[#1f4d36] mb-2">4+</h4>
                <p className="text-gray-600">Product Categories</p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop"
              alt="Food Manufacturing"
              className="rounded-[35px] shadow-2xl h-[650px] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#1f4d36] font-semibold uppercase tracking-[3px] mb-3">
              Our Products
            </p>

            <h3 className="text-4xl font-bold mb-4">
              Fresh, Flavorful & Trusted
            </h3>

            <p className="text-gray-600 max-w-2xl mx-auto leading-7">
              We deliver food products crafted with premium ingredients and careful processing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-[#f8f7f3] rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3">{product.name}</h4>
                  <p className="text-gray-600 leading-7 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-24 px-6 bg-[#1f4d36] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[3px] text-orange-300 font-semibold mb-3">
            Why Choose Us
          </p>

          <h3 className="text-4xl font-bold mb-12">
            Quality You Can Trust
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <h4 className="text-2xl font-bold mb-4">Premium Ingredients</h4>
              <p className="text-gray-200 leading-7">
                Carefully selected raw materials ensuring authentic taste and quality.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <h4 className="text-2xl font-bold mb-4">Hygienic Processing</h4>
              <p className="text-gray-200 leading-7">
                Manufactured with modern processing standards and cleanliness.
              </p>
            </div>

            <div className="bg-white/10 rounded-3xl p-8 backdrop-blur">
              <h4 className="text-2xl font-bold mb-4">Reliable Supply</h4>
              <p className="text-gray-200 leading-7">
                Consistent product quality with dependable delivery and customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#1f4d36] font-semibold uppercase tracking-[3px] mb-3">
            Contact Us
          </p>

          <h3 className="text-4xl font-bold mb-6">
            Let’s Build Business Together
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto leading-7 mb-12">
            For product inquiries, wholesale orders, partnerships, or dealership opportunities,
            connect with Ride Nippy Private Limited.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#f8f7f3] rounded-3xl p-8 shadow-md">
              <h4 className="font-bold text-xl mb-3 text-[#1f4d36]">Address</h4>
              <p className="text-gray-600 leading-7">
                Add Your Company Address Here
              </p>
            </div>

            <div className="bg-[#f8f7f3] rounded-3xl p-8 shadow-md">
              <h4 className="font-bold text-xl mb-3 text-[#1f4d36]">Phone</h4>
              <p className="text-gray-600 leading-7">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-[#f8f7f3] rounded-3xl p-8 shadow-md">
              <h4 className="font-bold text-xl mb-3 text-[#1f4d36]">Email</h4>
              <p className="text-gray-600 leading-7">
                info@ridenippy.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#12291d] text-gray-300 py-8 text-center px-6">
        <p>
          © 2026 Ride Nippy Private Limited • All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
