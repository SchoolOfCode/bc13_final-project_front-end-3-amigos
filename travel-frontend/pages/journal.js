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
    if (user) {
      getJournalData();
    }
  }, [user]);

  async function getJournalData() {
    const URL = `${process.env.NEXT_PUBLIC_JOURNAL_URl}/${user.uid}`;
    const entries = await axios.get(URL);
    setJournals(entries.data.payload);
  }
  async function postNewEntry(newJournal) {
    const URL = `${process.env.NEXT_PUBLIC_JOURNAL_URl}/${user.uid}`;
    let res = await axios.post(URL, newJournal);
    await getJournalData();
    return res;
  }

  async function deleteJournalEntry(id) {
    const URl = `${process.env.NEXT_PUBLIC_JOURNAL_URl}/${user.uid}`;
    let res = await axios.delete(URL);
  }

  return (
    <div>
      {user && <JournalForm user={user} postNewEntry={postNewEntry} />}
      <JournalDataDisplay dataJournal={journals} />
    </div>
  );
};

export default Journal;
