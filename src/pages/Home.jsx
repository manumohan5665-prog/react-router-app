import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen">

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="max-w-3xl">

          <p className="text-blue-600 font-semibold mb-3">
            REACT ROUTER PROJECT
          </p>

          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Welcome to our React Application
          </h1>

          <p className="text-lg text-slate-600 mb-8">
            This application demonstrates React Router,
            navigation, dynamic routes, route parameters,
            and reusable React components.
          </p>

          <div className="flex gap-4">

            <Link
              to="/users"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Users
            </Link>

            <Link
              to="/about"
              className="border border-slate-300 px-6 py-3 rounded-lg hover:bg-slate-100 transition"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;