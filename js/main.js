let replyIndex = 0;
let contentPlayed = false;

function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const messageText = input.value.trim();

  if (messageText !== "") {
    // Menampilkan pesan user
    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user");
    userMessage.textContent = messageText;
    chatBox.appendChild(userMessage);

    setTimeout(() => {
      // Menampilkan balasan bot
      const botReply = document.createElement("div");
      botReply.classList.add("message", "bot");
      const replyText = getBotReply();
      botReply.textContent = replyText;
      chatBox.appendChild(botReply);
      chatBox.scrollTop = chatBox.scrollHeight;

      // CEK: Jika balasan terakhir, tambahkan video YouTube
      if (
        replyText.includes(
          "Terima kasih ya udah baca ini. Semoga kamu selalu baik-baik aja, dan semesta selalu sayang sama kamu 🤍😊"
        ) &&
        !contentPlayed
      ) {
        contentPlayed = true;

        setTimeout(() => {
          // Menambahkan video YouTube
          const videoMessage = document.createElement("div");
          videoMessage.classList.add("message", "bot");
          videoMessage.innerHTML = `
            <div class="video-wrapper">
              <iframe width="100%" height="315" 
                src="https://www.youtube.com/embed/OqsM5kQYjTc?autoplay=1" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
          `;
          chatBox.appendChild(videoMessage);
          chatBox.scrollTop = chatBox.scrollHeight;
        }, 1000);
      }
    }, 800);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}

function handleKey(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
}

function getBotReply() {
  const replies = [
    "Hai Dynasti Meilan Legowo 🌸",
    "Maaf kalau tiba-tiba muncul dan ganggu waktumu — semoga kamu nggak keberatan 😊",
    "Kita memang belum pernah ketemu... dan mungkin kamu bahkan belum terlalu kenal aku juga.",
    "Tapi aku cuma pengin ngucapin sesuatu hari ini, tanpa maksud apa-apa selain tulus.",
    "Selamat ulang tahun ya 🎂 semoga kamu selalu dikelilingi hal-hal baik yang bikin kamu merasa cukup dan bahagia.",
    "Aku nggak tahu kamu sedang ada di fase hidup yang gimana sekarang... tapi semoga kamu bisa terus kuat, ya.",
    "Aku nggak berharap balasan atau perhatian balik — cukup bisa kirim ini pun rasanya udah seneng banget 😊",
    "Boleh ya aku bilang... kamu itu sosok yang bikin penasaran, tapi dengan cara yang tenang, nggak mencolok.",
    "Meskipun cuma dari tulisan atau cerita singkat, aku bisa lihat kamu itu orang yang hati-hati — dan itu justru bikin aku hormat.",
    "Aku juga nggak mau ganggu kenyamanan kamu, jadi kapanpun kamu nggak nyaman, aku bisa mundur kok 🌱",
    "Tapi jujur aja, aku seneng banget bisa sekadar ngobrol sama kamu, walau cuma sebentar.",
    "Aku tahu ini mungkin terlalu langsung, tapi aku pengin kamu tahu kalau ada seseorang di luar sana yang mendoakan kamu diam-diam hari ini.",
    "Semoga ulang tahun ini bisa jadi titik awal yang baik untuk hal-hal indah yang kamu inginkan. Pelan-pelan aja, nggak usah buru-buru.",
    "Kalau suatu hari kita bisa ketemu, aku harap suasananya tetap sama: tenang, ringan, dan menyenangkan ☕",
    "Dan kalau nggak pun, nggak apa-apa — karena bisa kenal kamu lewat cara ini aja udah jadi hal baik buat aku.",
  ];

  if (replyIndex < replies.length) {
    return replies[replyIndex++];
  } else {
    return "Terima kasih ya udah baca ini. Semoga kamu selalu baik-baik aja, dan semesta selalu sayang sama kamu 🤍😊";
  }
}
