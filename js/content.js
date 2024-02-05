let id = 1;

document.addEventListener("keydown", function (event) {
  let cdnplayerControlCC = document.querySelector("#cdnplayer_control_cc");
  let cdnplayerSettings = document.querySelector("#cdnplayer_settings");
  let elementsWithF2id = cdnplayerSettings.querySelectorAll("[f2id]");

  cdnplayerControlCC.style.display = "block";

  if (cdnplayerControlCC.style.display != "none") {
    if (event.code == "KeyC") {
      if (elementsWithF2id.length > 3) {
        if (elementsWithF2id.length === 4) {
          let targetElement = document.querySelector('[f2id="' + id + '"]');
          targetElement.click();

          id === 1 ? (id = 2) : (id = 1);
        }

        if (elementsWithF2id.length === 5) {
          let targetElement = document.querySelector('[f2id="' + id + '"]');
          targetElement.click();

          id === 1 ? (id = 3) : (id = 1);
        }
      }
    }
  }
});
