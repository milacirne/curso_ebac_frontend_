$(document).ready(function() {
    $("form").on("submit", function(e) {
        e.preventDefault();
        const addNewTask = $("#write-task").val();
        const newItem = $("<li></li>");
        $(`<li><p id="new-task" class="added">${addNewTask}</p></li>`).appendTo(newItem);
        $(newItem).appendTo("ul");
        $("p").click(function () {
            $(this).css("text-decoration", "line-through");
        })
    })
})