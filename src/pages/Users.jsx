import { Link } from "react-router-dom";

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
    },
    {
        id: 4,
        name: "Emily Davis",
        email: "emily@example.com",
    },
];

function Users() {
    return (
        <main className="min-h-screen">

            <section className="max-w-6xl mx-auto px-6 py-16">

                <div className="mb-10">
                    <p className="text-blue-600 font-semibold mb-2">
                        OUR USERS
                    </p>

                    <h1 className="text-4xl font-bold text-slate-900">
                        Users Directory
                    </h1>

                    <p className="text-slate-600 mt-3">
                        Select a user to view their profile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {users.map((user) => (

                        <div
                            key={user.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
                        >

                            <div className="flex items-center gap-4 mb-5">

                                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl font-bold">
                                    {user.name.charAt(0)}
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {user.name}
                                    </h2>

                                    <p className="text-slate-500">
                                        {user.email}
                                    </p>
                                </div>

                            </div>

                            <Link
                                to={`/users/${user.id}`}
                                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                View Profile
                            </Link>

                        </div>

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Users;