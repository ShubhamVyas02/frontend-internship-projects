const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        // Close all other accordion sections
        document.querySelectorAll(".accordion-content").forEach((item) => {

            if (item !== content) {

                item.style.display = "none";

                item.previousElementSibling.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

        // Toggle current accordion section
        if (content.style.display === "block") {

            content.style.display = "none";

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            content.style.display = "block";

            button.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});