import { useContext } from "react";
import { AuthContex } from "./AuthContext";

export const useAuth = () => {
	const authContext = useContext(AuthContex);

	if (!authContext) {
		throw new Error("useAuth must be used within an AuthContext");
	}

	return authContext;
};