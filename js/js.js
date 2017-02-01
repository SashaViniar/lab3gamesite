function fadeOutAll() {
 $(".warlock").fadeOut("fast", function() {});
 $(".jayna").fadeOut("fast", function() {});
 $(".hunter").fadeOut("fast", function() {});
 $(".druid").fadeOut("fast", function() {});
 $(".trall").fadeOut("fast", function() {});
 $(".valira").fadeOut("fast", function() {});
 $(".anduin").fadeOut("fast", function() {});
 $(".garosh").fadeOut("fast", function() {});
 $(".uter").fadeOut("fast", function() {});
}

fadeOutAll()
$("#guldan").click(function() {
 fadeOutAll()
 $(".warlock").fadeIn("slow", function() {});
});
$("#jayna").click(function() {
 fadeOutAll()
 $(".jayna").fadeIn("slow", function() {});
});
$("#hunter").click(function() {
 fadeOutAll()
 $(".hunter").fadeIn("slow", function() {});
});
$("#druid").click(function() {
 fadeOutAll()
 $(".druid").fadeIn("slow", function() {});
});
$("#trall").click(function() {
 fadeOutAll()
 $(".trall").fadeIn("slow", function() {});
});
$("#valira").click(function() {
 fadeOutAll()
 $(".valira").fadeIn("slow", function() {});
});
$("#anduin").click(function() {
 fadeOutAll()
 $(".anduin").fadeIn("slow", function() {});
});
$("#garosh").click(function() {
 fadeOutAll()
 $(".garosh").fadeIn("slow", function() {});
});
$("#uter").click(function() {
 fadeOutAll()
 $(".uter").fadeIn("slow", function() {});
});