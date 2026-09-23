import { Link, useParams } from "react-router-dom";

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

function UserDetail() {
    const { id } = useParams();

    const user = users.find(
        (user) => user.id === Number(id)
    );

    return (
        <div>
            <h1>User Details</h1>

            {user ? (
                <div>
                    <h2>{user.name}</h2>

                    <p>Email: {user.email}</p>

                    <p>User ID: {user.id}</p>
                </div>
            ) : (
                <p>User not found.</p>
            )}

            <Link to="/users">
                Go Back to Users
            </Link>
        </div>
    );
}

export default UserDetail;