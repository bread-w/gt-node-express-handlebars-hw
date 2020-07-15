// $(function () {
//   $(".change-devoured").on("click", function (event) {
//     const id = $(this).data("id");
//     const newDevoured = $(this).data("devoured");
//     const newDevouredState = {
//       devoured: newDevoured,
//     };
//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newDevouredState,
//     }).then(function () {
//       console.log("changed devoured to", newDevoured);
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });

//   $(".create-form").on("submit", function (event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     const newBurger = {
//       burger: $("#burg").val().trim(),
//       devoured: false,
//     };
//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger,
//     }).then(function () {
//       console.log("created new burger");
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });
//   console.log("Is this thing on?");
// });

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured: newDevour,
    };

    // This sends the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      console.log("changed devour to", newDevour);
      // Then this .reload method refreshes the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // This is the standard method to make sure to prevent refreshing on a submit event for forms.
    event.preventDefault();
    // The newBurger created by being trimmed of excess spaces and a value placed on it by its id
    const newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0,
    };

    // This sends the POST request.
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
