onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");

    setTimeout(() => {
        let playButton = document.createElement("button");
        playButton.style.position = "absolute";
        playButton.style.top = "-9999px"; // Sembunyikan tombol dari layar
        document.body.appendChild(playButton);

        playButton.addEventListener("click", function() {
            audio.play();
            playButton.remove();
        });

        playButton.click(); // Klik otomatis
    }, 1000); // Delay 1 detik untuk memancing browser
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".text-3d").style.transform = "translate(-50%, -50%) scale(1)";
        document.querySelector(".text-3d").style.opacity = "1";
    }, 3000); // Teks muncul setelah 3 detik (sesuaikan dengan animasi bunga)
});
document.querySelector(".button").addEventListener("click", function() {
  const bgMusic = document.getElementById("bg-music");
  bgMusic.play().catch(err => console.log("Gagal play:", err));
});
function tampilkanPesan() {
    document.getElementById("isi-pesan").style.display = "block";
    document.querySelector("button").style.display = "none";

    // Putar musik
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play().catch((e) => console.log("Musik gagal diputar:", e));
  }


