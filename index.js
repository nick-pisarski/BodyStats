// Page functionality
function showContent(btn) {
    $('.content').hide();
    $('.nav-link').removeClass('active')
    $('#navbarNavDropdown').removeClass('show')

    $(`#${btn}-nav-btn`).addClass('active')
    $(`#${btn}-container`).show();
}

// Link click functions
$('#bmr-nav-btn').click(_ => showContent('bmr'));
$('#bfc-nav-btn').click(_ => showContent('bfc'));
