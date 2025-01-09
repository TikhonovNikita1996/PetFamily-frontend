import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router";

export default function LoginPage() {
  const [users, setUsers] = useState<string[]>([]);
  axios.get<string[]>("https://localhost:44328/api/users")
    .then((res) => {
      setUsers(res.data)
    }).catch((error) => console.log(error));

  return (
    <div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
        <NavLink to="/" className="text-lg">
            Обратно на главную
        </NavLink>

        <div className="flex flex-col flex-1 min-w-80 mx-auto justify-center items-center gap-9">
            {users.map((user, i) => (<div key={i}>{user}</div>) )}
        </div>
    </div>
  );
}
