import Footer from "../components/Footer";
import JournalForm from "../components/Journal/JournalForm";
import SearchBar from "../components/SearchBar";
import JournalDataDisplay from "../components/Journal/JournalData";

const Journal = () => {
  return (
    <div>
      <JournalForm />
      <JournalDataDisplay/>
    </div>
  );
};

export default Journal;
