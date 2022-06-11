// form validation 
// $('.form-content select').on('change', function() {
//   if ($(this).val()) {
//     return $(this).css('color', '#000000');
//   } else {
//   return $(this).css('color', '#888888');
//   }
// });

$(".form-control").on("keyup change", function (event) {
  if($(this).parent().siblings('.invalid').length){
    $(this).parent().siblings('.invalid').hide()
    $(this).removeClass('error')
  }
});
function submitData(e){
  let valid = true;
  $("form#getInTouch :input[required]").each(function(){
    var input = $(this); 
    console.log(input)
    if ($(this).is(':invalid') || !$(this).val()){
      valid = false;
      $(this).addClass('error').focus();
      $(this).parent().siblings('.invalid').show()
      console.log(valid)
    }
  });
  if(valid) {
    console.log("form valid")
    $('#thankYou').popup('show');
  }
}

function AllowOnlyNumbers(e) {
  e = e ? e : window.event;
  var clipboardData = e.clipboardData ? e.clipboardData : window.clipboardData;
  var key = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
  var str =
    e.type && e.type == "paste"
      ? clipboardData.getData("Text")
      : String.fromCharCode(key);
  return /^\d+$/.test(str);
}