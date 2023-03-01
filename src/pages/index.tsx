import { useState, useEffect } from "react";

const Home = () => {
  const [locked, setLocked] = useState(false);

  const toggleLock = () => {
    setLocked(!locked);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      toggleLock();
    }, 1500);
    return () => clearInterval(intervalId);
  }, [locked]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-xl my-4">
        Welcome to OpenPapers protocol
      </div>
      <div className="text-5xl my-4">
        <span>
          {locked ? "🔒" : "🔓"}
        </span>
        {" "}
        📝
      </div>
    </div >
  );
};

export default Home;
