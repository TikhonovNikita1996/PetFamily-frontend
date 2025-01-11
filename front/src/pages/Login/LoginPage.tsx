import { NavLink } from "react-router";


export default function LoginPage() {
  return (
    <div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
        <NavLink to="/" className="text-lg">
            Обратно на главную
        </NavLink>
        <div className="flex flex-col flex-1 min-w-80 mx-auto justify-center items-center gap-9">
                 
        </div>
    </div>
  );
}
