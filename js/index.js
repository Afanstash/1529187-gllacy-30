const ESC_KEYCODE = 27;

const contactsButton = document.querySelector(".contacts__button");

const feedbackModal = document.querySelector(".feedback-overlay");
const feedbackClose = document.querySelector(".feedback__button-close");
const feedbackInputName = document.querySelector("input[name=feedback-name]");

const contactsBtnHandler = (evt) => {
  evt.preventDefault();
  feedbackModal.classList.add("feedback-overlay_show");
  feedbackInputName.focus();

  feedbackClose.addEventListener("click", feedbackCloseHandler);
  document.addEventListener("keydown", escHandler);
};

const feedbackCloseHandler = (evt) => {
  evt.preventDefault();
  feedbackModal.classList.remove("feedback-overlay_show");
  feedbackClose.removeEventListener("click", feedbackCloseHandler);
};

const escHandler = (evt) => {
  evt.preventDefault();
  if (evt.keyCode === ESC_KEYCODE) {
    feedbackModal.classList.remove("feedback-overlay_show");
    document.removeEventListener("keydown", escHandler);
  }
};

contactsButton.addEventListener("click", contactsBtnHandler);
