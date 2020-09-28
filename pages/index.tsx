import React, { useEffect, useState } from "react";
import CardTable from "../components/CardTable";
import FileChooser from "../components/FileChooser";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  return (
    <>
      <div
        className={`flex flex-col justify-center space-y-4 ${
          selectedFiles.length === 0 && "h-screen"
        }`}
      >
        <header className="flex-grow-0">
          <div className="conatiner border-b-2 bg-blue-900 text-white text-center">
            <h1 className="domine-400 text-2xl py-6 tracking-wider">
              Yugioh Price Finder
            </h1>
          </div>
        </header>
        <main className="roboto-300 flex-grow flex">
          <div className="w-5/6 m-auto justify-center">
            <div className="text-center">
              <FileChooser setFiles={setSelectedFiles} />
            </div>
            {selectedFiles.length > 0 && (
              <div className="py-4">
                <CardTable files={selectedFiles} />
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
