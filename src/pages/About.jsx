import { Link } from "react-router-dom";

function About() {
    return (
        <main className="min-h-screen">

            <section className="max-w-4xl mx-auto px-6 py-16">

                <div className="bg-white rounded-2xl shadow-sm p-8">

                    <p className="text-blue-600 font-semibold mb-3">
                        ABOUT THE PROJECT
                    </p>

                    <h1 className="text-4xl font-bold mb-6">
                        About This Application
                    </h1>

                    <p className="text-slate-600 leading-7 mb-6">
                        This project is a simple React application created
                        to understand client-side routing using
                        react-router-dom.
                    </p>

                    <p className="text-slate-600 leading-7 mb-8">
                        It demonstrates multiple pages, navigation,
                        dynamic routes, URL parameters, and reusable
                        React components.
                    </p>

                    <Link
                        to="/"
                        className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
                    >
                        Back to Home
                    </Link>

                </div>

            </section>

        </main>
    );
}

export default About;