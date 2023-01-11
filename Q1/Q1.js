var currentPage = 0;
var limit = 10;
var totalPages;

$.get("https://dummyjson.com/posts", function (data) {
  totalPages = Math.ceil(data.total / limit);
});

function updatePage(skip) {
  $.get(
    "https://dummyjson.com/posts?limit=" + limit + "&skip=" + skip,
    function (data) {
      $("#list").empty();
      for (var i = 0; i < data.posts.length; i++) {
        $("#list").append(
          "<div class='post'>" + data.posts[i].title + "</div>"
        );
      }
      currentPage = Math.floor(skip / limit) + 1;
      $("#pgn").text(currentPage + " of " + totalPages);
    }
  );
}

// Listen for clicks on the next and previous buttons
$("#pre").click(function () {
  if (currentPage > 1) {
    updatePage((currentPage - 2) * limit);
  }
});
$("#pos").click(function () {
  if (currentPage < totalPages) {
    updatePage(currentPage * limit);
  }
});

// Initialize the page
updatePage(0);
