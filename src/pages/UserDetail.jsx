import { Link, useParams } from "react-router-dom";
import users from "../data/users";

function UserDetail() {

    const { id } = useParams();

    const user = users.find(
        (user) => user.id === Number(id)
    );

    return (
        <main className="min-h-screen">

            <section className="max-w-3xl mx-auto px-6 py-16">

                {user ? (

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

                        <div className="flex items-center gap-5 mb-8">

                            <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-3xl font-bold">
                                {user.name.charAt(0)}
                            </div>

                            <div>
                                <h1 className="text-3xl font-bold">
                                    {user.name}
                                </h1>

                                <p className="text-slate-500">
                                    User ID: {user.id}
                                </p>
                            </div>

                        </div>

                        <div className="border-t border-slate-200 pt-6">

                            <p className="text-sm text-slate-500 mb-1">
                                Email Address
                            </p>

                            <p className="text-lg font-medium">
                                {user.email}
                            </p>

                        </div>

                        <Link
                            to="/users"
                            className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
                        >
                            ← Go Back
                        </Link>

                    </div>

                ) : (

                    <div className="text-center">

                        <h1 className="text-3xl font-bold mb-4">
                            User Not Found
                        </h1>

                        <p className="text-slate-600 mb-6">
                            The user you're looking for doesn't exist.
                        </p>

                        <Link
                            to="/users"
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Back to Users
                        </Link>

                    </div>

                )}

            </section>

        </main>
    );
}

export default UserDetail;