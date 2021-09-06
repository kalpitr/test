$(document).ready(function () {
    $('#page-content-wrapper').click(function(){
        $('.MenuLevl2').removeClass('show');
        $('.menu_1').addClass('collapsed');
    });

    $('.inputDisable .form-control').attr('disabled', 'disabled'); //Disable
    $('#fieldId').removeAttr('disabled'); //Enable

    $(".enableFields").click(function (e) {
        e.preventDefault();
        $('.inputDisable .form-control').removeAttr( 'disabled'); //Disable
    });

    $(".add_edit").click(function (e) {
        e.preventDefault();
        $(".view_section").hide();
        $(".add_edit_section").show();
    });

    $(".view_data").click(function (e) {
        e.preventDefault();
        $(".view_section").show();
        $(".add_edit_section").hide();
    });

    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('.menu_1').addClass('collapsed');
        $('.MenuLevl2').removeClass('show');
    });

    $(".view-demography").click(function (e){
        $('.description-section').show();
        $('.contact-details-section').hide();
        $('.add-contact-detail-section').hide();
        $('.add-branch-address-details').hide();
        $('.description-edit-section').hide();
        $('.edit-clinic-section').hide();
    });

    $(".edit-contact-detail").click(function (e){
        $('.description-edit-section').show();
        $('.description-section').hide();
        $('.contact-details-section').hide();
        $('.add-contact-detail-section').hide();
        $('.add-branch-address-details').hide();
        $('.edit-clinic-section').hide();
    });

    $(".view-contact-detail").click(function (e){
        $('.contact-details-section').show();
        $('.description-section').hide();
        $('.add-contact-detail-section').hide();
        $('.add-branch-address-details').hide();
        $('.description-edit-section').hide();
        $('.edit-clinic-section').hide();
    });


    $(".add-contact-detail").click(function (e){
        $('.add-contact-detail-section').show();
        $('.contact-details-section').hide();
        $('.description-section').hide();
        $('.add-branch-address-details').hide();
        $('.description-edit-section').hide();
        $('.edit-clinic-section').hide();
    });

     $(".add-branch-detail").click(function (e){
        $('.add-branch-address-details').show();
        $('.add-contact-detail-section').hide();
        $('.contact-details-section').hide();
        $('.description-section').hide();
        $('.description-edit-section').hide();
    });
     $(".edit-clinic-demography").click(function (e){
        $('.edit-clinic-section').show();
        $('.contact-details-section').hide();
        $('.description-section').hide();
        $('.add-contact-detail-section').hide();
        $('.add-branch-address-details').hide();
        $('.description-edit-section').hide();
    });

    $(".add-user-master-btn").click(function (e){
        $('.view-user-master').show();
        $('.add-user-master').hide();
        $('.view-role-master').hide();
        $('.add-role-master').hide();
    });
    $(".view-user-master-btn").click(function (e){
        $('.view-user-master').hide();
        $('.add-user-master').show();
        $('.view-role-master').hide();
        $('.add-role-master').hide();
    });

    $(".add-role-master-btn").click(function (e){
        $('.view-role-master').show();
        $('.add-role-master').hide();
        $('.view-user-master').hide();
        $('.add-user-master').hide();
    });
    $(".view-role-master-btn").click(function (e){
        $('.view-role-master').hide();
        $('.add-role-master').show();
        $('.view-user-master').hide();
        $('.add-user-master').hide();
    });

    var setMenuVal = '0';
    $('.menu_1').on('click', function (e) {
        //e.preventDefault();
        var ClickedMenuId = $(this).attr('id');

        if (ClickedMenuId == setMenuVal) {
            if ($(this).hasClass('collapsed')) {
                $(this).removeClass('collapsed');
                $(this).siblings('.MenuLevl2').addClass('show');
            }
            else {
                $(this).addClass('collapsed');
                $(this).siblings('.MenuLevl2').removeClass('show');
            }
        }
        else {
            $('.menu_1').addClass('collapsed');
            $('.menu_1').siblings('.MenuLevl2').removeClass('show');
            $(this).removeClass('collapsed');
            $(this).siblings('.MenuLevl2').addClass('show');
            setMenuVal = ClickedMenuId;
        }
    });

});

$("#page-content-wrapper").click(function () {
    $(".toggled1").removeClass('toggled');
});


/*---start short menu alphabetacly---*/
    function sortList(ul) {
      var ul = document.getElementById(ul);

      Array.from(ul.getElementsByTagName("LI"))
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => ul.appendChild(li));
    }
    sortList("submenu1");
    sortList("submenu2");
    sortList("submenu3");   
    sortList("FrontDeskMenu");
    sortList("CreditPartyTPABillingMenu");
    sortList("WardsMenu");
    sortList("OperationMenu");
    sortList("BillMenu");
    sortList("MastersMenu");
/*---end menu alphabetacly---*/