import { useRef } from "react";

export default function FileChooser({
  setFiles,
}: {
  setFiles: (files: File[]) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={(e) =>
          e.currentTarget.files && setFiles(Array.from(e.currentTarget.files))
        }
        multiple
        accept="image/*"
      />

      <button
        className="border-0 p-6 border-blue-800 rounded text-center text-lg focus:outline-none hover:bg-blue-600 text-white bg-blue-500 "
        onClick={() => inputRef.current && inputRef.current.click()}
      >
        <strong>Select your files</strong>
      </button>
    </>
  );
}
