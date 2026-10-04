/* =========================================================
   NAVJEEVAN STUDENT HUB
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       THEME
    ===================================================== */

    const themeButton = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");


    function updateThemeButton() {

        const darkMode =
            document.body.classList.contains("dark-mode");


        if (themeIcon) {
            themeIcon.textContent =
                darkMode ? "☀" : "☾";
        }


        if (themeText) {
            themeText.textContent =
                darkMode ? "Light" : "Dark";
        }

    }


    const savedTheme =
        localStorage.getItem("navjeevan-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeButton();


    if (themeButton) {

        themeButton.addEventListener("click", function () {

            document.body.classList.toggle("dark-mode");


            const darkMode =
                document.body.classList.contains("dark-mode");


            localStorage.setItem(
                "navjeevan-theme",
                darkMode ? "dark" : "light"
            );


            updateThemeButton();

        });

    }



    /* =====================================================
       LOGIN
    ===================================================== */

    const loginButton =
        document.getElementById("login-btn");


    if (loginButton) {

        loginButton.addEventListener("click", function () {

            const studentId =
                document.getElementById("student-id");

            const password =
                document.getElementById("password");


            if (!studentId || !password) {
                return;
            }


            if (
                studentId.value.trim() === "" ||
                password.value.trim() === ""
            ) {

                alert(
                    "Please enter your Student ID and Password."
                );

                return;

            }


            window.location.href =
                "dashboard.html";

        });

    }



    /* =====================================================
       SIDEBAR NAVIGATION
    ===================================================== */

    const navItems =
        document.querySelectorAll(".nav-item");


    navItems.forEach(function (button) {

        const text =
            button.textContent
                .trim()
                .toLowerCase();


        /* DASHBOARD */

        if (text.includes("dashboard")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "dashboard.html";

                }
            );

        }


        /* SUBJECTS */

        else if (text.includes("subjects")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "subjects.html";

                }
            );

        }


        /* TIMETABLE */

        else if (text.includes("timetable")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "timetable.html";

                }
            );

        }


        /* ASSIGNMENTS */

        else if (text.includes("assignments")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "assignments.html";

                }
            );

        }


        /* NOTES */

        else if (text.includes("notes")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "notes.html";

                }
            );

        }


        /* PROGRESS */

        else if (text.includes("progress")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "progress.html";

                }
            );

        }


        /* SETTINGS */

        else if (text.includes("settings")) {

            button.addEventListener(
                "click",
                function () {

                    window.location.href =
                        "settings.html";

                }
            );

        }


        /* LOGOUT */

        else if (text.includes("logout")) {

            button.addEventListener(
                "click",
                function () {

                    const confirmLogout =
                        confirm(
                            "Are you sure you want to logout?"
                        );


                    if (confirmLogout) {

                        window.location.href =
                            "index.html";

                    }

                }
            );

        }

    });



    /* =====================================================
       ACTIVE SIDEBAR ITEM
    ===================================================== */

    const currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    navItems.forEach(function (button) {

        const text =
            button.textContent
                .trim()
                .toLowerCase();


        button.classList.remove("active");


        if (
            currentPage === "dashboard.html" &&
            text.includes("dashboard")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "subjects.html" &&
            text.includes("subjects")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "timetable.html" &&
            text.includes("timetable")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "assignments.html" &&
            text.includes("assignments")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "notes.html" &&
            text.includes("notes")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "progress.html" &&
            text.includes("progress")
        ) {

            button.classList.add("active");

        }


        else if (
            currentPage === "settings.html" &&
            text.includes("settings")
        ) {

            button.classList.add("active");

        }

    });

});



/* =========================================================
   SYLLABUS NAVIGATION
========================================================= */

function openSyllabus(subject) {


    const pages = {

        mathematics:
            "mathematics.html",

        chemistry:
            "chemistry.html",

        "chemistry-lab":
            "chemistry-lab.html",

        mechanics:
            "mechanics.html",

        "mechanics-lab":
            "mechanics-lab.html",

        pps:
            "pps.html",

        "pps-lab":
            "pps-lab.html",

        communication:
            "communication.html",

        "communication-lab":
            "communication-lab.html",

        workshop:
            "workshop.html"

    };


    if (pages[subject]) {

        window.location.href =
            pages[subject];

    }

    else {

        alert(
            "This syllabus page is not available yet."
        );

    }

}