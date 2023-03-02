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

  // gets all data from jorunal database by use uid
  async function getJournalData() {
    const URL = `${process.env.NEXT_PUBLIC_JOURNAL_URL}/${user.uid}`;
    const entries = await axios.get(URL);
    setJournals(entries.data.payload);
  }

  // create a new journal entry
  async function postNewEntry(newJournal) {
    const URL = `${process.env.NEXT_PUBLIC_JOURNAL_URL}/${user.uid}`;
    let res = await axios.post(URL, newJournal);
    await getJournalData();
    return res;
  }

  // delete a single journal entry by id
  async function deleteJournalEntry(id) {
    const URL = `${process.env.NEXT_PUBLIC_JOURNAL_URL}/${user.uid}/${id}`;
    let res = await axios.delete(URL);
    await getJournalData();
    return res;
  }

  return (
    <div className="mt-[10vh]">
      {user && <JournalForm user={user} postNewEntry={postNewEntry} />}
      <JournalDataDisplay
        dataJournal={journals}
        deleteEntry={deleteJournalEntry}
      />
    </div>
  );
};

export default Journal;
