import Head from "next/head";
import { createWorker } from "tesseract.js";
import { useState } from "react";
const worker = createWorker({
  logger: (m) => console.log(m),
});

const extractId = (imgBlob) => {
  (async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    await worker.setParameters({
      tessedit_char_whitelist: "0123456789",
    });
    const {
      data: { text },
    } = await worker.recognize(imgBlob);
    console.log(text);
    await worker.terminate();
  })();
};

export default function Home() {
  const [cardImg, setCardImg] = useState<string>();
  const [cardId, setCardId] = useState<Number>();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCardImg(URL.createObjectURL(img));
    }
  };

  return (
    <>
      <Head>
        <title>Yugioh Price Finder</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300|Domine:400"
          rel="stylesheet"
        />
      </Head>

      <div className="w-4/6 m-auto roboto-300 text-center">
        <main>
          <div className="conatiner">
            <h1 className="domine-400 text-xl my-6 border-b-4 border-indigo-500">
              Yugioh Price Finder
            </h1>
          </div>
          <div className="py-6">
            <label htmlFor="cardImg">Select a file</label>
            <input
              type="file"
              id="cardImg"
              name="cardImg"
              accept="image/png, image/jpeg"
              onChange={onImageChange}
            />
          </div>
          {cardImg && <img src={cardImg}></img>}
          <div className="py-6">
            <button
              disabled={cardImg === undefined}
              onClick={() => extractId(cardImg)}
              type="button"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Find price
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
