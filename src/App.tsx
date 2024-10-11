import React, { useState } from 'react';

const iframeUrls = [
  'https://jbilcke-hf-facepoke.hf.space',
  'https://ohayonguy-pmrf.hf.space'
];

function App() {
  const [activeIframe, setActiveIframe] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-8 flex space-x-8">
        {iframeUrls.map((_, index) => (
          <button
            key={index}
            className="button btnPush btnBlueGreen"
            onClick={() => setActiveIframe(index)}
          >
            butten {index + 1}
          </button>
        ))}
      </div>
      <div className="w-full max-w-4xl bg-gray-300 p-4 rounded-lg">
        {activeIframe !== null && (
          <iframe
            src={iframeUrls[activeIframe]}
            frameBorder="0"
            width="850"
            height="450"
            className="w-full"
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default App;