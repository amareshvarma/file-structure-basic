import "./styles.css";
import explorer from "./data/mock-data";
import FileExplorer from "./components/FileExplorer";
import { useState } from "react";

export default function App() {
  const [treeData, setTreeData] = useState(explorer);

  return (
    <div className="App">
      <FileExplorer treeData={treeData} />
    </div>
  );
}
