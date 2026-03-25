function toggleChild(element) {
    event.stopPropagation(); // yuqoriga tarqalmasin
    let child = element.querySelector(".children");
    if (child) {
      child.style.display =
        child.style.display === "none" ? "block" : "none";
    }
  }