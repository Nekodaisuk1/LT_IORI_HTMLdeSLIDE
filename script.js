const slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlide() {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    current = Math.min(current + 1, slides.length - 1);
  }
  if (e.key === "ArrowLeft") {
    current = Math.max(current - 1, 0);
  }
  updateSlide();
});

// ===== Live Editor =====
const cssEditor = document.getElementById("css-editor");
const htmlEditor = document.getElementById("html-editor");
const preview = document.getElementById("preview");
let styleEl = null;

function updatePreview() {
  // HTML更新（プレビューエリア）
  if (preview) {
    preview.innerHTML = htmlEditor.value;
  }
  
  // CSS更新（スライド全体に適用）
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "live-style";
    document.head.appendChild(styleEl);
  }
  styleEl.textContent = cssEditor.value;
}

if (cssEditor && htmlEditor) {
  cssEditor.addEventListener("input", updatePreview);
  htmlEditor.addEventListener("input", updatePreview);
  // 初期表示
  updatePreview();
}
