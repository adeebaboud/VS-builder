$(function () {
    $("#sortable, #sortable2, #sortable3").sortable();
    $("#sortable, #sortable2, #sortable3").disableSelection();
});
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

$("#flexCheckDefault6").change(function () {
    $("#iceAktar").toggleClass("d-none");
});

$('#accBtns a').each(function (index) {
    $(this).on("click", function () {
        $('#accBtns a').each(function (index) {
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
    });
});

$('#accBtns-Varyant a').each(function (index) {
    $(this).on("click", function () {
        $('#accBtns-Varyant a').each(function (index) {
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
    });
});

$('#accBtns-dijital a').each(function (index) {
    $(this).on("click", function () {
        $('#accBtns-dijital a').each(function (index) {
            $(this).removeClass('active');
        });
        $(this).toggleClass('active');
    });
});

$('#accordion .card-header button').each(function (index) {
    $(this).on("click", function () {

        id = $(this).data("id");
        $('#accBtns a').each(function (index) {
            $(this).removeClass('active');
        });
        $("#" + id).toggleClass('active');
    });
});

$('#accordion-Varyant .card-header button').each(function (index) {
    $(this).on("click", function () {

        id = $(this).data("id");
        $('#accBtns-Varyant a').each(function (index) {
            $(this).removeClass('active');
        });
        $("#" + id).toggleClass('active');
    });
});

$('#accordion-dijital .card-header button').each(function (index) {
    $(this).on("click", function () {

        id = $(this).data("id");
        $('#accBtns-dijital a').each(function (index) {
            $(this).removeClass('active');
        });
        $("#" + id).toggleClass('active');
    });
});

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [ 'link', 'image', 'video', 'formula' ],          // add's image support
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];
const quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow',
    placeholder: "Kategori Açıklaması"
});
const quill2 = new Quill('#editor-2', {
    theme: 'snow',
    placeholder: "SEO Başlığı"
});
const quill3 = new Quill('#editor-3', {
    theme: 'snow',
    placeholder: "SEO Açıklaması"
});
const quill4 = new Quill('#editor-4', {
    theme: 'snow',
    placeholder: "Kategori anahtar Kelimeleri"
});

// textarea for varyant


const quillv1 = new Quill('#editor-v-1', {
    theme: 'snow',
    placeholder: "Kategori Açıklaması"
});
const quillv2 = new Quill('#editor-v-2', {
    theme: 'snow',
    placeholder: "SEO Başlığı"
});
const quillv3 = new Quill('#editor-v-3', {
    theme: 'snow',
    placeholder: "SEO Açıklaması"
});
const quillv4 = new Quill('#editor-v-4', {
    theme: 'snow',
    placeholder: "Kategori anahtar Kelimeleri"
});



// textarea for dijita


const quilld1 = new Quill('#editor-d-1', {
    theme: 'snow',
    placeholder: "Kategori Açıklaması"
});
const quilld2 = new Quill('#editor-d-2', {
    theme: 'snow',
    placeholder: "SEO Başlığı"
});
const quilld3 = new Quill('#editor-d-3', {
    theme: 'snow',
    placeholder: "SEO Açıklaması"
});
const quilld4 = new Quill('#editor-d-4', {
    theme: 'snow',
    placeholder: "Kategori anahtar Kelimeleri"
});

