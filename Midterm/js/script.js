$(document).ready(function () {
    if (document.getElementById("register-form")) {
        function feedback(id, valid, message) {
            $("#" + id).toggleClass("is-valid", valid).toggleClass("is-invalid", !valid);
            $("#" + id + "-feedback").text(message)
                .attr("class", "small " + (valid ? "text-success" : "text-danger"));
        }

        function checkRegistration() {
            const name = $("#reg-name").val().trim();
            const email = $("#reg-email").val().trim();
            const password = $("#reg-password").val();
            const confirmation = $("#reg-confirm").val();
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            const match = confirmation !== "" && confirmation === password;

            feedback("reg-name", name !== "", name ? "Looks good" : "Name is required");
            feedback("reg-email", emailValid, emailValid ? "Looks good" : "Enter a valid email");
            $("#reg-password").toggleClass("is-valid", password !== "")
                .toggleClass("is-invalid", password === "");
            feedback("reg-confirm", match, match ? "Passwords match" : "Passwords must match");

            let strength = "Weak";
            if (password.length >= 10 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
                strength = "Strong";
            } else if (password.length >= 6) {
                strength = "Medium";
            }
            let color = "danger";
            if (strength === "Medium") color = "warning";
            if (strength === "Strong") color = "success";
            $("#password-strength").text(password ? strength + " password" : "Password is required")
                .attr("class", "small text-" + color);

            return name !== "" && emailValid && password !== "" && match;
        }

        $("#register-form input").on("input", function () {
            checkRegistration();
            $("#registration-status").text("").removeClass("alert alert-danger alert-success");
        });

        $("#register-form").on("submit", function (event) {
            event.preventDefault();
            const valid = checkRegistration();
            $("#registration-status")
                .text(valid ? "Registration successful! (Demo only)" : "Please correct the fields above.")
                .attr("class", "alert mt-3 " + (valid ? "alert-success" : "alert-danger"));
        });
    }

    if (document.getElementById("menu-items")) {
        const items = [
            { name: "Espresso", price: 800, category: "Drinks" },
            { name: "Catpuccino", price: 1200, category: "Drinks" },
            { name: "Vanilla Latte", price: 1400, category: "Drinks" },
            { name: "Hot Chocolate", price: 1300, category: "Drinks" },
            { name: "Butter Croissant", price: 900, category: "Treats" },
            { name: "Cheesecake", price: 1600, category: "Treats" }
        ];
        let category = "All";
        let editIndex = -1;

        function showItems() {
            const search = $("#menu-search").val().toLowerCase().trim();
            $("#menu-items").empty();
            let count = 0;

            items.forEach(function (item, index) {
                if (!item.name.toLowerCase().includes(search) ||
                    (category !== "All" && item.category.toLowerCase() !== category.toLowerCase())) return;

                count++;
                const row = $("<tr>");
                $("<th scope='row'>").text(item.name).appendTo(row);
                $("<td>").text(item.price).appendTo(row);
                $("<td>").text(item.category).appendTo(row);
                const actions = $("<td>");
                $("<button type='button' class='btn btn-sm btn-outline-secondary me-1'>")
                    .text("Edit").on("click", function () { openItem(index); }).appendTo(actions);
                $("<button type='button' class='btn btn-sm btn-outline-danger'>")
                    .text("Delete").on("click", function () {
                        if (confirm("Delete " + item.name + "?")) {
                            items.splice(index, 1);
                            showItems();
                        }
                    }).appendTo(actions);
                row.append(actions).appendTo("#menu-items");
            });
            $("#no-results").toggle(count === 0);
        }

        function openItem(index) {
            editIndex = index;
            $("#item-form")[0].reset();
            $("#form-title").text(index === -1 ? "Add menu item" : "Edit menu item");
            if (index !== -1) {
                $("#item-name").val(items[index].name);
                $("#item-price").val(items[index].price);
                $("#item-category").val(items[index].category);
            }
            document.getElementById("item-dialog").showModal();
        }

        $("#menu-search").on("input", showItems);
        $(".category-btn").on("click", function () {
            category = $(this).data("category");
            $(".category-btn").removeClass("active");
            $(this).addClass("active");
            showItems();
        });
        $("#add-item").on("click", function () { openItem(-1); });
        $("#cancel-item").on("click", function () {
            document.getElementById("item-dialog").close();
        });
        $("#item-form").on("submit", function (event) {
            event.preventDefault();
            const item = {
                name: $("#item-name").val().trim(),
                price: Number($("#item-price").val()),
                category: $("#item-category").val()
            };
            if (!item.name || item.price <= 0) return;
            if (editIndex === -1) items.push(item);
            else items[editIndex] = item;
            document.getElementById("item-dialog").close();
            showItems();
        });
        showItems();
    }

    if (document.getElementById("lightbox")) {
        const photos = $(".gallery-photo");
        let photoIndex = 0;

        function showPhoto() {
            $("#lightbox-image").attr("src", photos.eq(photoIndex).attr("src"))
                .attr("alt", photos.eq(photoIndex).attr("alt"));
        }

        photos.on("click", function () {
            photoIndex = photos.index(this);
            showPhoto();
            $("#lightbox").fadeIn(200);
        });
        $("#lightbox-close").on("click", function () { $("#lightbox").fadeOut(200); });
        $("#lightbox-prev").on("click", function () {
            photoIndex--;
            if (photoIndex < 0) photoIndex = photos.length - 1;
            showPhoto();
        });
        $("#lightbox-next").on("click", function () {
            photoIndex++;
            if (photoIndex === photos.length) photoIndex = 0;
            showPhoto();
        });
    }
});
