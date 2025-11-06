zLKksxz,zd j nklfkdjb
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Navbar Scroll Effect
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {m blkgn/kbnlkfsnxknvl.k sl.jbxkv lk ho;8hsdoivdso;ih08awyvorwrvo8h;8ofbv;orevho8fhzk hdkz ,mkj.x buiowegi.
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

//landing section time out

setTimeout(() => {
  document.getElementById("landing").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("landing").style.display = "none";
    document.getElementById("home").style.opacity = "1";
    document.getElementById("home").style.pointerEvents = "auto";
  }, 500);
}, 1000);

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page reload
    sendmail(); // Calls your function
    
  });
function sendmail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("Message").value,
  };
  emailjs.send("service_0bin7pf", "template_xdb6xji", params).then(() => {
    let alertBox = document.getElementById("alertBox");
    alertBox.classList.add("show");

    // Auto-close after 3 seconds
    setTimeout(() => {
      alertBox.classList.remove("show");
    }, 3000);
  });
  console.log(params);
}

function closeAlert() {
  document.getElementById("alertBox").classList.remove("show");
}
