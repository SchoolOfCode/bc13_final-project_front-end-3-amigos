import Footer from "../components/Footer";
import JournalForm from "../components/Journal/JournalForm";
import SearchBar from "../components/SearchBar";
import JournalDataDisplay from "../components/Journal/JournalData";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";

const Journal = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);


  return (
    <div>
      <JournalForm user={user}/>
      <JournalDataDisplay/>
    </div>
  );
};

export default Journal;
