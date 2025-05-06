var banner = document.getElementById("banner");

  var images = [
    "image/slider1.jpg",
    "image/quang-cao-noi-that-phuc-loi-viet.jpg",
    "image/in-phun-kho-lon-da-nang.jpg"
  ];
  var currentIndex = 0;

  function showImage(index) {
    banner.style.backgroundImage = "url('" + images[index] + "')";
    banner.style.backgroundSize = "cover";
    banner.style.backgroundPosition = "center";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Gán sự kiện cho nút
  document.querySelector(".next").addEventListener("click", nextImage);
  document.querySelector(".prev").addEventListener("click", prevImage);

  // Hiển thị ảnh đầu tiên và tự động chuyển
  showImage(currentIndex);
  setInterval(nextImage, 2000);