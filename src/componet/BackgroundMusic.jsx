import React, {useRef, useEffect} from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.play(); // Play the audio on component mount
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="../assets/audio/bgmusik.mp3"
      controls
      loop
      autoPlay
    />
  );
};

export default BackgroundMusic;
