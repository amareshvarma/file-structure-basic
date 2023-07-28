import { useState } from "react";
import "./FileExplorer.css";
const FileExplorer = ({ treeData }) => {
  const [showFolderStrcuture, seShowFolderstrcure] = useState(true);

  const handleFolderStrcure = () => {
    seShowFolderstrcure(!showFolderStrcuture);
  };

  if (treeData.isFolder) {
    return (
      <div style={{ marginLeft: "10px" }}>
        <div class="folder" onClick={handleFolderStrcure}>
          <span className="folder-icon">📁{treeData.name}</span>
        </div>
        <div
          className="recursive-tree"
          style={{ display: showFolderStrcuture ? "block" : "none" }}
        >
          {treeData.items.map((node, index) => (
            <FileExplorer key={index} treeData={node} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div class="file">
          <span className="file-icon">📄{treeData.name}</span>
        </div>
      </>
    );
  }
};

export default FileExplorer;
