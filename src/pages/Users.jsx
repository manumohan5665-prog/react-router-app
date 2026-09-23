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
        <div>
            <h1>Users</h1>

            <p>Here is our list of users.</p>

            {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>

                    <p>{user.email}</p>

                    <Link to={`/users/${user.id}`}>
                        View Profile
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Users;