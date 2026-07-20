import { useEffect, useState } from "react";

export default function AvatarSpeaker({ text, gender = "female" }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);

  const avatarImg =
    gender === "male" ? "/avatars/male.jpg" : "/avatars/female.jpg";

  // Load voices properly
  useEffect(() => {
    const loadVoices = () => {
      const voiceList = window.speechSynthesis.getVoices();
      if (voiceList.length > 0) {
        setVoices(voiceList);
      }
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Speak text
  useEffect(() => {
    if (!text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.lang = "en-US";

    // better pitch
    utterance.pitch = gender === "female" ? 1.4 : 0.7;

    // Select voice based on gender
    let selectedVoice = null;

    if (gender === "female") {
      selectedVoice = voices.find(
        (v) =>
          v.name.toLowerCase().includes("female") ||
          v.name.toLowerCase().includes("zira") ||
          v.name.toLowerCase().includes("susan")
      );
    } else {
      selectedVoice = voices.find(
        (v) =>
          v.name.toLowerCase().includes("male") ||
          v.name.toLowerCase().includes("david") ||
          v.name.toLowerCase().includes("mark")
      );
    }

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  }, [text, gender, voices]);

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <h3 style={{ marginBottom: "10px" }}>Interviewer</h3>

      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={avatarImg}
          alt="Avatar"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: isSpeaking ? "5px solid purple" : "5px solid gray",
            boxShadow: isSpeaking
              ? "0px 0px 30px rgba(128,0,255,0.6)"
              : "0px 0px 10px rgba(0,0,0,0.3)",
            transform: isSpeaking ? "scale(1.05)" : "scale(1)",
            transition: "0.3s ease",
          }}
        />
      </div>

      <p style={{ marginTop: "12px", fontWeight: "bold" }}>
        {isSpeaking ? "🎤 Interviewer Speaking..." : "🟢 Waiting for your answer"}
      </p>
    </div>
  );
}