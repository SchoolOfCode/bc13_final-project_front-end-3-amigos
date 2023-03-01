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

  useEffect(() => {
    async function getJournalData() {
      if (user) {
        const URL = `${process.env.NEXT_PUBLIC_POST_JOURNAL_URL}/${user.uid}`;
        const entries = await axios.get(URL);
        setJournals(entries.data.payload);
      }
    }
    getJournalData();
  }, [user]);

  return (
    <div>
      {user && <JournalForm user={user} />}
      <JournalDataDisplay dataJournal={journals} />
    </div>
  );
};

export default Journal;
