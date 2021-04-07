jQuery(($) => {
    // menu 
    $(".menu__list").on('click', function () {
        $('.menu__list').removeClass('active');
        $(this).addClass('active');
    });
    // rent
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open active')) {
            $(this).removeClass('open active');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open active');
            $('.select__list').fadeOut();
            $(this).addClass('open active');
            $(this).next().fadeIn();
        }
    });
    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open active');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open active');
            $('.select__list').fadeOut();
        }
    });
    // count
    $('.select-min').on('click', '.select__head_min', function () {
        if ($(this).hasClass('open active-min')) {
            $(this).removeClass('open active');
            $(this).next().fadeOut();
        } else {
            $('.select__head_min').removeClass('open active');
            $('.select__list_min').fadeOut();
            $(this).addClass('open active');
            $(this).next().fadeIn();
        }
    });
    $('.select-min').on('click', '.select__item_min', function () {
        $('.select__head_min').removeClass('open active');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.select-min').length) {
            $('.select__head_min').removeClass('open active');
            $('.select__list_min').fadeOut();
        }
    });
    // Maska
    $("#phone").mask("+38 (999) 999-99-99");

    // block of months
    $(".main__form_period-month").on('click', function () {
        $('.main__form_period-month').removeClass('active');
        $(this).addClass('active');
    });
    // checkbox

    // $('.checkbox label').on('click', function () {
    //     $(this).parents('tr').toggleClass('active');
    //     $(this).parents('td:first-child').toggleClass('activ');
    //     $(this).parents('.switch').toggleClass('activ');
    //     $('[type="checkbox"]').on('change', function () {
    //         let isChecked = $(this).is(":checked");
    //         let $currentTr = $(this).closest('tr');
    //         $currentTr.find('[type="radio"]').prop('checked', false);
    //         $currentTr.find('[value="on"]').prop('checked', isChecked);
    //         $(this).closest('tr').find(".toggle-bg");
    //         if (isChecked) {
    //             $(this).closest('tr').find(".toggle-bg").addClass('bg');
    //         } else {
    //             $(this).closest('tr').find(".toggle-bg").removeClass('bg');
    //         }
    //     });
    // });
    // celect
    $('.option').on('click', '.option__head', function () {
        if ($(this).hasClass('open active')) {
            $(this).removeClass('open active');
            $(this).next().fadeOut();
        } else {
            $('.option__head').removeClass('open active');
            $('.option__list').fadeOut();
            $(this).addClass('open active');
            $(this).next().fadeIn();
        }
    });

    $('.option').on('click', '.option__item', function () {
        $('.option__head').removeClass('open active');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.option').length) {
            $('.option__head').removeClass('open active');
            $('.option__list').fadeOut();
        }
    });
    // date
    $(function () {
        $(".datepicker").datepicker({ dateFormat: "dd.mm.yy" });
    });
    // hamburger
    $('.hamburger').on('click', function () {
        $('.header__user').slideToggle();
        if ($(window).width() < 901) {
            $('.header__form').slideToggle();
        }
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
    });
});