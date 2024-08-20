export const textToSpeech = (text) => {
    const response = fetch("/api/textToSpeech", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: text,
        }),
    }).then((res) => res.json());
    return response
}

export const geminiAPI = (data, text) => {
    const response = fetch("/api/geminiAPI", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: data,
            text: text
        }),
    });
    return response
}

export const ColorfulText = (text) => {
  const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#00FF00",
    "#0000FF",
    "#9400D3",
    "#FF1493",
    "#8B0082",
    "#FF69B4",
    "#FFC0CB",
    "#FFD700",
    "#FF8C00",
    "#FF4500",
  ]
  return (
    <span>
      {text.split("").map((char, index) => (
        <span key={index} style={{ color: colors[index % colors.length] }}>
          {char}
        </span>
      ))}
    </span>
  )
}
