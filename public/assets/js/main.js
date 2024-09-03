// Sidebar Toggle
var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
  el.classList.toggle("toggled");
};

// Sidebar Dropdown toggle
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;
      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
      if (nextEl.classList.contains("show")) {
        element.classList.add("opened");
      } else {
        element.classList.remove("opened");
      }
    });
  });
});

// Get Current Date
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const dateSpan = document.getElementById("date");
if (dateSpan) {
  dateSpan.innerHTML = formattedDate;
}

$(document).ready(function () {
  $("#select").niceSelect();
});

// Checkbox check all box
let checkbox = document.getElementById("select_all");
if (checkbox) {
  checkbox.addEventListener("change", function () {
    let allcheckbox = document.querySelectorAll(".check");
    for (let checkbox of allcheckbox) {
      checkbox.checked = this.checked;
    }
  });
}

// OTP input
const inputs = document.querySelectorAll(".otp-input");
if (inputs) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      if (this.value.length === this.maxLength) {
        if (i < inputs.length - 1) {
          inputs[i + 1].focus();
        } else {
          inputs[i].blur();
        }
      }
    });
  }
}
