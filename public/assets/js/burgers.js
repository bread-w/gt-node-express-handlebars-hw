$(function () {
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured: newDevour,
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed devour to", newDevour);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0,
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("New burger, order up!");
      location.reload();
    });
  });
  console.log("Is this thing on?");
});
