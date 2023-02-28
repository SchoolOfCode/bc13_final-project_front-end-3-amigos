import JournalForm from "../components/Journal/JournalForm";
import JournalDataDisplay from "../components/Journal/JournalData";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase/firebase.js";
import { useEffect, useState } from "react";
import axios from "axios";
const Journal = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [journals, setJournals] = useState([]);

  const URL = `${process.env.NEXT_PUBLIC_POST_JOURNAL_URL}/${user.uid}`;

  useEffect(() => {
    async function getJournalData() {
      const entries = await axios.get(URL);
      setJournals(entries.data.payload);
      console.log(entries.data.payload, "what are you");
    }
    getJournalData();
  }, []);

  return (
    <div>
      <JournalForm user={user} />
      <JournalDataDisplay dataJournal={journals} />
    </div>
  );
};

export default Journal;
