import Link from "next/link";

export default function About() {
  return (
    <main className="bg-purple-50 min-h-screen py-12">
      <section className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
          About Bitlink
        </h1>
        <p className="text-center text-lg text-purple-600 mb-10">
          Bitlink is a free and open-source URL shortening service designed to make your links easy to share, manage, and track. Our goal is to provide a user-friendly experience for transforming lengthy URLs into concise, memorable links that drive engagement.
        </p>

        <div className="space-y-8">
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              Why Choose Bitlink?
            </h2>
            <p className="text-purple-600">
              Bitlink offers a fast and reliable link shortening experience, ideal for personal use, businesses, and social media influencers who want to improve link visibility. Our service is free, easy to use, and packed with features to help you make the most out of every link you share.
            </p>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-purple-600 space-y-2">
              <li>Customizable short links to boost brand recognition</li>
              <li>Analytics to track clicks and engagement</li>
              <li>Secure, privacy-focused service</li>
              <li>Free to use with no sign-up required</li>
            </ul>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 mb-2">
              Our Mission
            </h2>
            <p className="text-purple-600">
              We aim to empower everyone, from individuals to businesses, to share links efficiently without compromising on privacy. Bitlink is committed to providing a tool that’s reliable, easy-to-use, and focused on creating a positive user experience.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/shorten">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-colors">
              Get Started with Bitlink
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
