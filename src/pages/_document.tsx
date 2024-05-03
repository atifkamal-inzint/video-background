import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="relative">
          <div className="fixed inset-0 z-0 " id="background-video-div">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
              id="bg-video"
            >
              {/* Add fallback sources here (e.g., MP4) for cross-browser compatibility */}
              <source
                src="https://dextoro-images.s3.ap-southeast-2.amazonaws.com/wave.mp4"
                type="video/mp4"
              />
              <source
                src="https://dextoro-images.s3.ap-southeast-2.amazonaws.com/wave.webm"
                type="video/webm"
              />
            </video>
          </div>
          <div className="relative z-10 overflow-hidden">
            <Main />
            <NextScript />
          </div>
        </div>
      </body>
    </Html>
  );
}
