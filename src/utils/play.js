import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { faCircleStop } from '@fortawesome/free-solid-svg-icons'

export function Play({ audioBuffer, autoPlayOff}) {
  const [audioUrl, setAudioUrl] = useState(null);
  const myRef = useRef();
  const [audioStatus, changeAudioStatus] = useState(false);

  const startAudio = () => {
    myRef?.current?.play();
    changeAudioStatus(true);
  };

  const pauseAudio = () => {
    myRef?.current?.pause();
    changeAudioStatus(false);
  };

  const handleEnded = () => {
    changeAudioStatus(false);
  }

  useEffect(() => {
    if (audioBuffer) {
      const audioBlob = new Blob([audioBuffer], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      return () => URL.revokeObjectURL(url);
    }
  }, [audioBuffer]);

  useEffect(() => {
    if (!autoPlayOff) {
      setTimeout(() => {
        startAudio();
      }, 500);
    }
  }, []);

  return (
    <div>
      {audioUrl && (
        <audio
          ref={myRef}
          src={audioUrl}
          onEnded={handleEnded}
        ></audio>
      )}
      {audioStatus ? (
        <button onClick={pauseAudio}>
          <FontAwesomeIcon icon={faCircleStop} />
        </button>
      ) : (
        <button onClick={startAudio}>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
      )}
    </div>
  );
}