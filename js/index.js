let isLocalStorage = true;
let storageLogin = "";

try {
  storageLogin = localStorage.getItem("login");
} catch (err) {
  isLocalStorage = false;
}

const contactsButton = document.querySelector(".contacts__button");
const feedbackModal = document.querySelector(".feedback-overlay");
const feedbackBody = feedbackModal.querySelector(".feedback");
const feedbackClose = feedbackModal.querySelector(".feedback__button-close");
const feedbackForm = feedbackModal.querySelector(".feedback-form");
const feedbackName = feedbackForm.querySelector("#feedback-name");
const feedbackEmail = feedbackForm.querySelector("#feedback-email");
const feedbackReview = feedbackForm.querySelector("#feedback-review");

const signForm = document.querySelector(".sign-form");
const signLogin = signForm.querySelector("#sign-email");
const signPassword = signForm.querySelector("#sign-password");

const carouselSwitches = document.querySelectorAll(".switch");
const carouselSlides = document.querySelectorAll(".slide");

const carouselMap = {
  0: "body_green",
  1: "body_grey",
  2: "body_brown",
};

carouselSwitches.forEach((switchNode, idx) => {
  switchNode.addEventListener("click", (evt) => {
    const currentSwitch = document.querySelector(".switch_current");
    currentSwitch.classList.remove("switch_current");
    evt.currentTarget.classList.add("switch_current");

    const currentSlide = document.querySelector(".slide_current");
    currentSlide.classList.remove("slide_current");
    carouselSlides[idx].classList.add("slide_current");

    document.body.classList.remove(document.body.classList[1]);
    document.body.classList.add(carouselMap[idx]);
  });
});

const showOverlay = () => {
  feedbackModal.classList.add("feedback-overlay_show");
  feedbackBody.classList.add("feedback_bounce");
  feedbackClose.addEventListener("click", feedbackCloseHandler);
  document.addEventListener("keydown", onEscapePress);
};

const closeOverlay = () => {
  feedbackModal.classList.remove("feedback-overlay_show");
  feedbackBody.classList.remove("feedback_bounce");
  feedbackBody.classList.remove("feedback_err");
  feedbackClose.removeEventListener("click", feedbackCloseHandler);
  document.removeEventListener("keydown", onEscapePress);
};

const onContactsBtnClick = (evt) => {
  evt.preventDefault();
  showOverlay();
  feedbackName.focus();
};

const feedbackCloseHandler = (evt) => {
  evt.preventDefault();
  closeOverlay();
};

const onEscapePress = (evt) => {
  const ESC_KEYCODE = 27;

  if (evt.keyCode === ESC_KEYCODE) {
    closeOverlay();
  }
};

const onFeedbackFormSubmit = (evt) => {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackReview.value) {
    evt.preventDefault();
    feedbackBody.classList.remove("feedback_err");
    feedbackBody.offsetWidth = feedbackBody.offsetWidth;
    feedbackBody.classList.add("feedback_err");
  }
};

const onSignFormSubmit = (evt) => {
  if (!signLogin.value || !signPassword.value) {
    evt.preventDefault();
  } else {
    if (isLocalStorage) {
      localStorage.setItem("login", signLogin.value);
    }
  }
};

const onSignLoginFocus = () => {
  evt.preventDefault();
  if (storageLogin) {
    signLogin.value = storageLogin;
    signPassword.focus();
  }
};

contactsButton.addEventListener("click", onContactsBtnClick);
feedbackForm.addEventListener("submit", onFeedbackFormSubmit);
signForm.addEventListener("submit", onSignFormSubmit);
signLogin.addEventListener("focus", onSignLoginFocus);
