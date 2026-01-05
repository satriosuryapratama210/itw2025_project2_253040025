const scriptURL = "https://script.google.com/macros/s/AKfycbzc1r7WHrushdIiKD-YJR21oDopaxjY9Bu7eQUpBNS8fCYJxJkVGK3nPFHA_Tb8Cg9tsg/exec";
const form = document.forms["sgh-contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // ini untuk menghilangkan loading dan menampilkan kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //   menampilkan alert
      myAlert.classList.toggle("d-none");
      //   reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
