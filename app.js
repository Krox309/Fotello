(function () {
  var grid = document.getElementById("grid");
  var backdrop = document.getElementById("backdrop");
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-img");
  var modalTitle = document.getElementById("modal-title");
  var modalCreator = document.getElementById("modal-creator");
  var modalDesc = document.getElementById("modal-desc");
  var modalNumber = document.getElementById("modal-number");
  var closeBtn = document.getElementById("close-btn");

  projects.forEach(function (project, index) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "card";
    card.style.animationDelay = 0.05 + index * 0.07 + "s";
    card.innerHTML =
      '<div class="card-media"><img loading="lazy" alt=""></div>' +
      '<div class="card-body"><h2></h2><p></p></div>';
    var img = card.querySelector("img");
    img.src = project.image;
    img.alt = project.name;
    card.querySelector("h2").textContent = project.name;
    card.querySelector(".card-body p").textContent = project.creator;
    card.addEventListener("click", function () {
      openModal(project);
    });
    grid.appendChild(card);
  });

  function openModal(project) {
    modalImg.src = project.image;
    modalImg.alt = project.name;
    modalTitle.textContent = project.name;
    modalCreator.textContent = project.creator;
    modalDesc.textContent = project.description;
    modalNumber.textContent = project.number ? "Wzór nr " + project.number : "";
    backdrop.hidden = false;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closeModal() {
    backdrop.hidden = true;
    modal.hidden = true;
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);
  modal.addEventListener("click", function (event) {
    if (event.target === modal) closeModal();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });
})();
