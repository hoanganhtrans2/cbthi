$(document).ready(function () {
  $("form").submit(function (event) {
    alert("fdss");
    event.preventDefault();
    var x = $(this).serializeArray();
    console.log(x);
    //   $.ajax({
    //     type: "post",
    //     url: "/index/order",
    //     data: {
    //       id: x[0].name,
    //       soluong: x[0].value,
    //     },
    //     dataType: "text",
    //   }).done(function (data) {
    //     $(".listorder").html(data);
    //   });
  });
});
