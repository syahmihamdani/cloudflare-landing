import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    title: "CDN & Performance",
    description: "Deliver content at lightning speed with our global CDN and smart routing.",
    icon: "🚀",
  },
  {
    title: "Security Suite",
    description: "Protect your site with DDoS mitigation, WAF, and bot defense.",
    icon: "🔐",
  },
  {
    title: "Developer Platform",
    description: "Deploy serverless functions and static sites at the edge.",
    icon: "💻",
  },
  {
    title: "Networking & DNS",
    description: "Blazing-fast DNS, IP management, and secure network services.",
    icon: "🌐",
  },
  {
    title: "Analytics & Insights",
    description: "Real-time traffic, security, and performance analytics.",
    icon: "📊",
  },
];

const resources = [
  {
    type: "Blog",
    title: "Understanding Edge Computing",
    img: "/assets/cf_logo_white.png",
  },
  {
    type: "Webinar",
    title: "How to Build a Scalable API",
    img: "/assets/cf_logo_white.png",
  },
  {
    type: "Insight",
    title: "2025 State of the Internet",
    img: "/assets/cf_logo_white.png",
  },
  {
    type: "Blog",
    title: "Optimizing CDN Performance",
    img: "/assets/cf_logo_white.png",
  },
  {
    type: "Webinar",
    title: "Zero Trust in Practice",
    img: "/assets/cf_logo_white.png",
  },
  {
    type: "Insight",
    title: "AI at the Network Edge",
    img: "/assets/cf_logo_white.png",
  },
];


const logos = [
  '/logos/broadcom.svg',
  '/logos/colgate.svg',
  '/logos/doordash.svg',
  '/logos/garmin.svg',
  '/logos/homeland.svg',
  '/logos/ncsc.svg',
  '/logos/roche.svg',
  '/logos/shopify.svg',
  '/logos/sofi.svg',
  '/logos/thomsonreuters.svg',
];

export default function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const total = products.length;
  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const prev_products = () => setCurrent((current - 1 + total) % total);
  const next_products = () => setCurrent((current + 1) % total);

  const next_resources = () => {
    if (index + visibleCards < resources.length) setIndex(index + visibleCards);
  };

  const prev_resources = () => {
    if (index - visibleCards >= 0) setIndex(index - visibleCards);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div className="relative fullscreen-element scroll-smooth">
      {/* Navbar */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="bg-white backdrop-blur-md shadow-xl rounded-full px-6 py-3 border border-gray-200">
          <div className="flex justify-between items-center">
            <ul className="flex space-x-6 items-center pr-8">
              <li><a href="#" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Home</a></li>
              <li><a href="#solutions" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Solutions</a></li>
              <li><a href="#products" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Products</a></li>
            </ul>

            <div className="flex items-center space-x-2 px-4">
              <img src="/assets/cf_logo.png" alt="Cloudflare Logo" className="h-6 w-6" />
              <h1 className="text-lg font-bold text-black">Cloudflare</h1>
            </div>

            <ul className="flex space-x-6 items-center pl-8">
              <li><a href="#pricing" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Pricing</a></li>
              <li><a href="#resources" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Resources</a></li>
              <li><a href="#partners" className="text-gray-700 hover:text-cloudflare-orange transition-colors font-medium">Partners</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-64 pb-20 px-4 bg-[url(/assets/hero_bg.jpg)] bg-cover">

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Powering secure connections <span className="bg-gradient-to-r from-cloudflare-orange to-cloudflare-yellow inline-block text-transparent bg-clip-text">worldwide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            We optimize performance for websites and apps while providing the ultimate platform for developers to build AI-powered applications.          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-cloudflare-orange text-white rounded-full font-medium hover:bg-orange-700 transition">
              Get Started
            </button>
            <button className="px-8 py-3 bg-white text-gray-800 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition">
              Under Attack?
            </button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-4 bg-gradient-to-r from-cloudflare-yellow to-cloudflare-orange">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-cloudflare-black mb-12">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Accelerate website performance",
                description: "Global CDN with edge caching for faster load times",
              },
              {
                icon: "🛡️",
                title: "Block bot traffic",
                description: "Advanced bot management protecting your applications",
              },
              {
                icon: "🎬",
                title: "Optimize video experiences",
                description: "Buffer-free streaming with smart video delivery",
              },
              {
                icon: "☁️",
                title: "Deploy serverless code",
                description: "Run functions at the edge with Cloudflare Workers",
              },
              {
                icon: "🧠",
                title: "Deploy AI on the edge",
                description: "Execute AI models closer to your users",
              },
              {
                icon: "💰",
                title: "Eliminate egress fees",
                description: "Zero-cost data transfer with R2 storage",
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="absolute inset-0 p-6 text-cloudflare-black opacity-0 group-hover:opacity-100 bg-white bg-opacity-90 rounded-2xl transition duration-300 ease-in-out pointer-events-none">
                  {feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="products" className="py-20 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Products</h2>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          <button
            onClick={prev_products}
            className="absolute left-0 p-3 bg-gray-200 hover:bg-gray-300 rounded-full z-10"
          >
            <ChevronLeft />
          </button>

          <div className="flex items-center gap-6 overflow-hidden">
            {products.map((product, index) => {
              const isActive = index === current;
              const isLeft = index === (current - 1 + total) % total;
              const isRight = index === (current + 1) % total;

              let styles =
                "transition-all duration-500 flex-shrink-0 w-64 h-80 rounded-2xl p-6 bg-white border shadow-lg";

              if (isActive) {
                styles += " scale-100 opacity-100 z-20";
              } else if (isLeft || isRight) {
                styles += " scale-90 opacity-50 blur-sm z-10";
              } else {
                styles += " hidden";
              }

              return (
                <div key={index} className={styles}>
                  <div className="text-5xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-cloudflare-black">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
              );
            })}
          </div>

          <button
            onClick={next_products}
            className="absolute right-0 p-3 bg-gray-200 hover:bg-gray-300 rounded-full z-10"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-[url(/assets/hero_bg.jpg)] bg-cover bg-center text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Our Plans and Pricing</h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-4xl font-bold text-cloudflare-orange mb-4">$0</p>
            <p className="text-sm text-gray-600 mb-6">Ideal for personal websites or experimentation.</p>
            <ul className="text-sm text-gray-700 mb-6 space-y-2">
              <li>✓ Basic CDN</li>
              <li>✓ Shared SSL</li>
              <li>✓ Email support</li>
            </ul>
            <button className="mt-auto bg-cloudflare-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-xl">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Individual</h3>
            <p className="text-4xl font-bold text-cloudflare-orange mb-4">$20<span className="text-base">/mo</span></p>
            <p className="text-sm text-gray-600 mb-6">For freelancers and portfolio sites.</p>
            <ul className="text-sm text-gray-700 mb-6 space-y-2">
              <li>✓ All Free Plan features</li>
              <li>✓ Custom Domain</li>
              <li>✓ Basic Analytics</li>
            </ul>
            <button className="mt-auto bg-cloudflare-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-xl">
              Start Trial
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border-2 border-orange-600">
            <h3 className="text-xl font-semibold mb-2">Small Business</h3>
            <p className="text-4xl font-bold text-cloudflare-orange mb-4">$200<span className="text-base">/mo</span></p>
            <p className="text-sm text-gray-600 mb-6">Perfect for startups and small teams.</p>
            <ul className="text-sm text-gray-700 mb-6 space-y-2">
              <li>✓ Priority support</li>
              <li>✓ Enhanced security</li>
              <li>✓ 99.9% uptime SLA</li>
            </ul>
            <button className="mt-auto bg-cloudflare-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-xl">
              Choose Plan
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold text-cloudflare-orange mb-4">Contact Us</p>
            <p className="text-sm text-gray-600 mb-6">Custom-tailored for large-scale organizations.</p>
            <ul className="text-sm text-gray-700 mb-6 space-y-2">
              <li>✓ Dedicated Account Manager</li>
              <li>✓ Custom SLA</li>
              <li>✓ 24/7 Premium Support</li>
            </ul>
            <button className="mt-auto bg-cloudflare-orange hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-xl">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section
        id="resources"
        className="py-20 px-4 bg-gradient-to-r from-orange-400 to-yellow-300 text-gray-900"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Resources</h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Buttons */}
          <button
            onClick={prev_resources}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full z-10"
          >
            <ChevronLeft className="text-gray-700" />
          </button>
          <button
            onClick={next_resources}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full z-10"
          >
            <ChevronRight className="text-gray-700" />
          </button>

          {/* Carousel wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${(index / visibleCards) * 100}%)` }}
            >
              {resources.map((item, i) => (
                <div
                  key={i}
                  className="basis-1/3 p-4 flex-shrink-0"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
                    <div className="h-40 bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center text-white text-4xl font-bold">
                      <img
                        src={item.img}
                        alt="Resource"
                        className="h-6 w-10"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-sm uppercase font-medium text-orange-600 mb-2">
                        {item.type}
                      </span>
                      <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                      <div className="mt-auto">
                        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-xl">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 px-4 bg-cloudflare-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-semibold text-gray-900 mb-10">
            Leading companies rely on <span className="font-bold bg-gradient-to-r from-cloudflare-orange to-cloudflare-yellow inline-block text-transparent bg-clip-text">Cloudflare</span>
          </h1>
        </div>
        <div className="overflow-hidden whitespace-nowrap py-8 bg-cloudflare-white group">
          <div className="flex items-center gap-12 animate-marquee hover:[animation-play-state:paused] min-w-full">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Partner Logo"
                className="h-12 w-auto"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-cloudflare-blue text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/cf_logo.png" alt="Cloudflare Logo" className="h-6 w-6" />
              <h1 className="text-lg font-bold">Cloudflare</h1>
            </div>
            <p className="text-gray-400">Making the Internet better, safer, and faster.</p>
          </div>
          {[
            ["Products", ["CDN", "Security", "DNS", "Serverless"]],
            ["Solutions", ["E-commerce", "SaaS", "Finance", "Healthcare"]],
            ["Resources", ["Blog", "Docs", "Community", "Learning"]]
          ].map(([title, items], index) => (
            <div key={index}>
              <h3 className="font-medium text-lg mb-4">{title}</h3>
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <li key={i}><a href="#" className="text-gray-400 hover:text-orange-500 transition">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Cloudflare, Inc. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}