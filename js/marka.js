// input and datepicker
jQuery(document).ready(function () {
    jQuery('input[name="dateRange"]').daterangepicker({
        autoUpdateInput: false,
        singleDatePicker: true,
        locale: {
            cancelLabel: 'Clear'
        }
    });
    jQuery('input[name="dateRange"]').on('apply.daterangepicker', function (ev, picker) {
        jQuery(this).val(picker.startDate.format('MM/DD/YYYY'));
    });
    jQuery('input[name="dateRange"]').on('cancel.daterangepicker', function (ev, picker) {
        jQuery(this).val('');
    });
});

$('.dropdown-menu, .dropdown-menu label').click(function (e) {
    e.stopPropagation();
    $("div.daterangepicker").click(function (e) {
        e.stopPropagation();
    });
});
$("div.daterangepicker").click(function (e) {
    e.stopPropagation();
});
$("#flexCheckDefault_marka").change(function () {
    $("#iceAktar").toggleClass("d-none");
});

// modal slider
jQuery(document).ready(function ($) {
    var bsDefaults = {
        offset: false,
        overlay: true,
        width: '50%'
    },
        bsMain = $('.bs-offset-main'),
        bsOverlay = $('.bs-canvas-overlay');

    $('[data-toggle="canvas"][aria-expanded="false"]').on('click', function () {
        var canvas = $(this).data('target'),
            opts = $.extend({}, bsDefaults, $(canvas).data()),
            prop = $(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left';

        if (opts.width === '100%')
            opts.offset = false;

        $(canvas).css('width', opts.width);
        if (opts.offset && bsMain.length)
            bsMain.css(prop, opts.width);

        $(canvas + ' .bs-canvas-close').attr('aria-expanded', "true");
        $('[data-toggle="canvas"][data-target="' + canvas + '"]').attr('aria-expanded', "true");
        if (opts.overlay && bsOverlay.length)
            $("nav").hide();
        $("body").css("overflow", "hidden");
        bsOverlay.addClass('show');
        $(".nbocm").animate({ opacity: '1' }, "slow");
        return false;
    });

    $('.bs-canvas-close, .bs-canvas-overlay').on('click', function () {
        var canvas, aria;
        if ($(this).hasClass('bs-canvas-close')) {
            canvas = $(this).closest('.bs-canvas');
            aria = $(this).add($('[data-toggle="canvas"][data-target="#' + canvas.attr('id') + '"]'));
            if (bsMain.length)
                bsMain.css(($(canvas).hasClass('bs-canvas-right') ? 'margin-right' : 'margin-left'), '');
        } else {
            canvas = $('.bs-canvas');
            aria = $('.bs-canvas-close, [data-toggle="canvas"]');
            if (bsMain.length)

                bsMain.css({
                    'margin-left': '',
                    'margin-right': ''
                });
        }
        canvas.css('width', '');
        aria.attr('aria-expanded', "false");
        if (bsOverlay.length) {
            bsOverlay.removeClass('show');
            $("nav").show();
            $("body").css("overflow", "visible");
            $(".nbocm").animate({ opacity: '0' }, "fast");
        }


        return false;
    });
});



// marka ekle 
const quill = new Quill('#editor-1', {
    theme: 'snow',
    placeholder: "Kategori Açıklaması"
});
const quill2 = new Quill('#editor', {
    theme: 'snow',
    placeholder: "SEO Başlığı"
});
const quill4 = new Quill('#editor-2', {
    theme: 'snow',
    placeholder: "Kategori anahtar Kelimeleri"
});


// marka duzenle 
const quill_d = new Quill('#editor-d1', {
    theme: 'snow',
    placeholder: "Kategori Açıklaması"
});
const quill_d2 = new Quill('#editor-d', {
    theme: 'snow',
    placeholder: "SEO Başlığı"
});
const quill_d3 = new Quill('#editor-d2', {
    theme: 'snow',
    placeholder: "Kategori anahtar Kelimeleri"
});

