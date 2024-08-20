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