export function Contact() {
  return (
      <section id={"contact"} className="bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-24 shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to take your business to the next level?
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Join thousands of businesses who trust InnovateX for scalable and tailored software solutions.
          </p>
          <div className="mt-8">
            <a
                href="https://wa.me/6281586525868?text=Hi,%20saya%20ingin%20membuat%20website"
                className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md text-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
  );
}
