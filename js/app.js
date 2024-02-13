/*--------------Hmabergur menu js ------------------*/
const Navbar = document.querySelector(".header__navbar");
const Hambergur = document.querySelector(".hambergur");
Hambergur.addEventListener("click", () => {
  Navbar.classList.toggle("active");
});
/*--------------Feature section js -----------------*/
const featureHeaders = document.querySelectorAll(".our__features h3");
const featureContents = document.querySelectorAll(".feature .content");
const featureImage = document.querySelector("#feature-illustration");

const handleClick = (index) => {
  featureHeaders.forEach((header) => header.classList.remove("active"));
  featureContents.forEach((content) => content.classList.remove("active"));

  featureHeaders[index].classList.add("active");
  featureContents[index].classList.add("active");

  featureImage.src = `./images/illustration-features-tab-${index + 1}.svg`;
};

featureHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    handleClick(index);
  });
});
/*---------------------Accordian javascript-------------------*/
const Question = document.querySelectorAll(".question");
Question.forEach((Q) => {
  Q.addEventListener("click", () => {
    Q.parentElement.classList.toggle("active");
  });
});
/*-------------------Email validation--------------------------*/
const EmailInput = document.querySelector(".email");
const EmailError = document.querySelector(".error");
const InputGroup = document.querySelector(".input-group");
const validateForm = () => {
  let EmailValue = EmailInput.value;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^/s@]+$/;
  if (EmailValue == "") {
    InputGroup.classList.add("error");
    EmailError.textContent = "Can't be blank";
    return false;
  } else if (!emailRegex.test(EmailValue)) {
    InputGroup.classList.add("error");
    EmailError.textContent = "Whoops, make sure it's an email";
    return false;
  } else {
    InputGroup.classList.remove("error");
    EmailError.textContent = "";
    EmailInput.value = "";
    return true;
  }
};
