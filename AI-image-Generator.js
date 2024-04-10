

(async function() {
    const resp = await fetch('https://api.deepai.org/api/text2img', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'f2aeee2b-fe8a-4dcc-b941-8861712bf2fb'
        },
        body: JSON.stringify({
            text: "beautifull girl techwear cyberpunk",
        })
    });
    
    const data = await resp.json();
    console.log(data);
})()


