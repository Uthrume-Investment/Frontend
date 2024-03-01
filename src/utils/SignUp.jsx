import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useStateContext } from "../contexts/ContextProvider";
import { auth } from "./firebase";

export async function SignUpUser(user){
    const {setToken, setUser} = useStateContext();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed up 
        const newUser = userCredential.user;
        setToken(auth);
        setUser(newUser);
        return true; // Indicate successful sign-up
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        return false; // Indicate sign-up failure
    }
}
