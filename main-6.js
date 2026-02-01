function toggleLyInfo() {
    var cover = document.getElementById("ly-cover");
    var detail = document.getElementById("ly-detail");
    
    if (detail.style.display === "none") {
        detail.style.display = "block";
        cover.style.display = "none";
    } else {
        detail.style.display = "none";
        cover.style.display = "block";
    }
}