let picture1 = document.getElementById("picture1");
let picture2 = document.getElementById("picture2");


    picture1.addEventListener("click", function() {
        if (picture2.style.display === "none") {
            picture2.style.display = "block";
            picture1.style.display = "none";
        } else {
            picture2.style.display = "none";
            picture1.style.display = "block";
        }
    });
    picture2.addEventListener("click", function() {
        if (picture2.style.display === "none") {
            picture2.style.display = "block";
            picture1.style.display = "none";
        } else {
            picture2.style.display = "none";
            picture1.style.display = "block";
        }
    });