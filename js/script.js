jQuery(($) => {
    // menu 
    $(".menu__list").on('click', function () {
        $('.menu__list').removeClass('active');
        $(this).addClass('active');
    });
    // hamburger
    $('.hamburger').on('click', function () {
        $('.header__user').slideToggle();
        if ($(window).width() < 601) {
            $('.header__form').slideToggle();
        }
        $(this).toggleClass('active');
        $('.header').toggleClass('active');
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
        if ($(this).hasClass('open active')) {
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
    $('.checkbox').on('click', function () {
        $(this).parents('tr').toggleClass('active');
        $(this).parents('td:first-child').toggleClass('activ');
        $(this).parents('.switch').toggleClass('activ');
        $(this).closest('tr').find(".toggle-bg").toggleClass("bg");
        $('[type="checkbox"]').on('change', function () {
            let isChecked = $(this).is(":checked");
            let $currentTr = $(this).closest('tr');
            $currentTr.find('[type="radio"]').prop('checked', false);
            $currentTr.find('[value="on"]').prop('checked', isChecked);
        });
    });
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
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    var date = new Date();
    date.setDate(date.getDate() + 1);
    var date1 = new Date();
    date1.setDate(date1.getDate());

    $("#datepicker").datepicker({
        dateFormat: "dd.mm.yy",
        minDate: date1
    });
    $("#datepicker-1").datepicker({
        dateFormat: "dd.mm.yy",
        minDate: date
    });
});