$("#ClinicLegalEntityRegistration_Section").click(function(){
  $(".ClinicLegalEntityRegistration_Section").show();
  $(".ClinicRegistration_Section").hide();
  $(".ClinicBranch_Section").hide();
  $("#ClinicLegalEntityRegistration_Section").addClass("active");
  $("#ClinicRegistration_Section").removeClass("active");
  $("#ClinicBranch_Section").removeClass("active");
});

$("#ClinicRegistration_Section").click(function(){
  $(".ClinicLegalEntityRegistration_Section").hide();
  $(".ClinicRegistration_Section").show();
  $(".ClinicBranch_Section").hide();
  $("#ClinicRegistration_Section").addClass("active");
  $("#ClinicLegalEntityRegistration_Section").removeClass("active");
  $("#ClinicBranch_Section").removeClass("active");
});

$("#ClinicBranch_Section").click(function(){
  $(".ClinicLegalEntityRegistration_Section").hide();
  $(".ClinicRegistration_Section").hide();
  $(".ClinicBranch_Section").show();
  $("#ClinicBranch_Section").addClass("active");
  $("#ClinicRegistration_Section").removeClass("active");
  $("#ClinicLegalEntityRegistration_Section").removeClass("active");
});

$("#applyBtn").click(function(){
  $(".Subtotal_show").show();
  $(".applyBtn").hide(); 
  $(".deleteBtn").show();
});
$("#deleteBtn").click(function(){
  $(".Subtotal_show").hide();
  $(".applyBtn").show(); 
  $(".deleteBtn").hide();
});
$(function () { 
    $("[data-toggle='tooltip']").tooltip(); 
});