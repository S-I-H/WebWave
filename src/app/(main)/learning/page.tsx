"use client";
import React, { useState } from "react";
import ModuleSelection from "./_components/ModuleSelection";
import { LearningModule } from "./_components/LearningModule";

const App = () => {
  const [selectedModule, setSelectedModule] = useState("");
  

  return (
    <div>
      {!selectedModule ? (
        <ModuleSelection onSelectModule={setSelectedModule} />
      ) : (
        <LearningModule module={selectedModule} onBack={()=>setSelectedModule("")}/>
      )}
    </div>
  );
};

export default App;
