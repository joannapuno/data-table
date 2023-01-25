import { Table } from "@/components";
import './styles/app.scss'

type Row = { [key: string]: string | number };
const dummyData: Row[] = [
  {
    name: "Anya Foger",
    description: "Espaaa"
  },
  {
    name: "Kakarot",
    description: "Ricee"
  },
  {
    name: "Naruto Uzumaki",
    description: "Dattebayo"
  }
];

export default function App() {
  return (
    <div className="App">
      <Table dataSet={dummyData} />
    </div>
  );
}
