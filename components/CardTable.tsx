export default function CardTable({ files }: { files: File[] }) {
  console.log(files);
  return (
    <>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">
              File name
            </th>
            <th className="border border-gray-400 px-4 py-2 text-gray-800">
              Img
            </th>
          </tr>
        </thead>
        <tbody>
          {files.map((file: File) => (
            <tr key={file.name + file.size}>
              <td className="border border-gray-400 px-4 py-2">
                <span>{file.name}</span>
              </td>
              <td className="border border-gray-400 px-4 py-2">
                <img src={URL.createObjectURL(file)}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
