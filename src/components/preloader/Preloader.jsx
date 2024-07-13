import React, { useState, useEffect } from "react";
import "./preloader.scss";

const phrases = [
  "Pinging profile server",
  "Syncing about data",
  "Encrypting contact channels",
  "Uploading service info",
  "Compiling project files",
  "Buffering background data",
  "Fetching personal details",
  "Parsing portfolio packets",
  "Generating phrases",
  "Simulating workflow",
  "Optimizing code snippets",
  "Aligning HTML hierarchies",
  "Slacking off",
];

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Preloader = () => {
  const [shuffledPhrases, setShuffledPhrases] = useState([]);

  useEffect(() => {
    setShuffledPhrases(shuffleArray(phrases));
  }, []);

  return (
    <div id="loader">
      <div id="phrase_box">
        <svg width="100%" height="100%">
          <defs>
            <mask
              id="mask"
              maskUnits="userSpaceOnUse"
              maskContentUnits="userSpaceOnUse"
            >
              <linearGradient
                id="linearGradient"
                gradientUnits="objectBoundingBox"
                x2="0"
                y2="1"
              >
                <stop stopColor="white" stopOpacity="0" offset="0%" />
                <stop stopColor="white" stopOpacity="1" offset="30%" />
                <stop stopColor="white" stopOpacity="1" offset="70%" />
                <stop stopColor="white" stopOpacity="0" offset="100%" />
              </linearGradient>
              <rect width="100%" height="100%" fill="url(#linearGradient)" />
            </mask>
          </defs>
          <g width="100%" height="100%" style={{ mask: "url(#mask)" }}>
            <g id="phrases">
              {shuffledPhrases.map((phrase, index) => (
                <g key={index}>
                  <text
                    fill="white"
                    x="50"
                    y={30 + 50 * index}
                    fontSize="18"
                    fontFamily="Arial"
                  >
                    {phrase}...
                  </text>
                  <g
                    transform={`translate(10 ${
                      30 + 50 * index - 20
                    }) scale(.9)`}
                  >
                    <circle
                      id={`loadingCheckCircleSVG-${index}`}
                      fill="rgba(255,255,255,0)"
                      cx="16"
                      cy="16"
                      r="15"
                    />
                    <polygon
                      id={`loadingCheckSVG-${index}`}
                      points="21.661,7.643 13.396,19.328 9.429,15.361 7.075,17.714 13.745,24.384 24.345,9.708"
                      fill="rgba(255,255,255,1)"
                    />
                    <path
                      d="M16,0C7.163,0,0,7.163,0,16s7.163,16,16,16s16-7.163,16-16S24.837,0,16,0z M16,30C8.28,30,2,23.72,2,16C2,8.28,8.28,2,16,2 c7.72,0,14,6.28,14,14C30,23.72,23.72,30,16,30z"
                      fill="white"
                    />
                  </g>
                </g>
              ))}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Preloader;
