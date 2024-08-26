var colId;
var viewPort;



$(".builder-topbar li a").on("click", function () {
    $(".builder-topbar li a").each(function () {
        $(this).removeClass("activeView");
    })
    $(this).addClass("activeView");
    let newWidth = $(this).data('width') + '%';
    $('#mainContent').css("width", newWidth);
    if (newWidth == '100%') {
        $(".builder-droparea ").removeClass("smallView");
    } else {
        $(".builder-droparea ").addClass("smallView");
    }

})


$(document).ready(function () {
    var resizeTimeout;

    $(function () {
        $("#sortableMenu").sortable();
        $("#sortable").disableSelection();
    });

    function debounce(func, delay) {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(func, delay);
    }
    function checkMobileView() {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 1280) {
            $('.desktop-message').css('display', 'block');
            $('.wrapper').css('display', 'none');
        } else {
            $('.desktop-message').css('display', 'none');
            $('.wrapper').css('display', 'block');
        }
    }
    checkMobileView();
    $(window).resize(function () {
        debounce(function () {
            checkMobileView();
        }, 250);
    });
    $("#showOptions").on('click', function () {
        $('.builder-bolmel').fadeIn().attr("style", "display: flex !important;");
    });
    $(".builder-bolmel").on('click', function () {
        $('.builder-bolmel').fadeOut().attr("style", "display: none !important;")
        $('.builder-element').fadeIn().attr("style", "display: flex !important;")
    });


    $('#Siparişler li , #tema li').draggable({
        revert: 'invalid',
        helper: 'clone',
        scroll: false,
        zIndex: 10000,
        connectWith: "#droppable",
        appendTo: "body",
        drag: function (ev, ui) {
            ui.helper.addClass('red');
        }, classes: {
            "ui-droppable-active": "ui-state-default"
        },
        start: function (event, ui) {
            ui.helper.data('text', $(this).text());
        }
    });
    var targetId;
    $('#droppable').droppable({

        accept: '#Siparişler li, #tema li',
        over: function (event, ui) {
            $('.builder-droparea').on('mouseover', '.droppableDiv', function (event) {
                targetId = $(this).attr('id');
            });

        },
        drop: function (event, ui) {

            const itemType = ui.draggable.attr('id');
            var imageToAdd = `<img data-toggle="modal" data-target="#genel-offcanava" width="100%" src='img/cat.jpg' />`;
            var videoToAdd = `<video data-toggle="modal" data-target="#genel-offcanava" width="100%"  autoplay><source src="video/code.mp4" type="video/mp4"></video>`;
            var textToAdd = `<p data-toggle="modal" data-target="#genel-offcanava">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>`
            var buttonToAdd = '<button data-toggle="modal" data-target="#genel-offcanava" class="btn btn-primary" type="submit">Simple Button</button>';
            var titleToAdd = '<h1 data-toggle="modal" data-target="#title-offcanava" class="titleOpt" aria-expanded="false" aria-controls="builder-offcanava">Text Here</h1>';
            var sayacToAdd = '<h2 data-toggle="modal" data-target="#genel-offcanava" >00-00-00</h2>';
            var simgeToAdd = '<i data-toggle="modal" data-target="#genel-offcanava" class="mdi mdi-emoticon-excited-outline" style="font-size:24px"></i>';
            var ctaToAdd = `
                   <form class="row" data-toggle="modal" data-target="#genel-offcanava">
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Email">
                        <input type="text" class="form-control" id="inputPassword2" placeholder="Password">
                        <button type="submit" class="btn btn-success mb-3">Confirm</button>
                    </form>
                    `;
            var bolucuToAdd = `<hr data-toggle="modal" data-target="#genel-offcanava" class="hr w-100 h-25 bg-secondary" />`;
            var ayiriciToAdd = `  <i data-toggle="modal" data-target="#genel-offcanava" class="bg-secondary m-2" style="height: 200px; width: 10px;"></i>`;
            var urunKaydiriciToAdd = `
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Web Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1em;
            text-align: center;
        }
        main {
            padding: 1em;
        }
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 0.5em;
            position: fixed;
            width: 100%;
            bottom: 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Welcome to My Web Page</h1>
    </header>
    <main>
        <h2>About</h2>
        <p>This is a simple HTML template. You can modify this template to suit your needs.</p>
    </main>
    <footer>
        <p>&copy; 2024 My Web Page</p>
    </footer>
</body>
</html>

            `;



            $("#" + targetId).attr("data-target", "#" + itemType + '-offcanava');
            $("#" + targetId).html(eval(itemType + 'ToAdd'));
            //$(".droppableDiv").append(htmlToAdd);
        }
    });


    $(function () {
        $(".builder-droparea").sortable({
            start: function (event, ui) {
                $(".builder-widget").find('p').html('Remove Widget!');
                $(".builder-widget").addClass("widget-remove-area ");
            },
            stop: function (event, ui) {
                $(".builder-widget").removeClass("widget-remove-area ");
                var item = ui.item;
                $(".builder-widget ").find('p').html('Add widget here');
                var binArea = $("#bin").offset();
                var fixedBinArea = $("#binFixed").offset();
                if (Math.abs(binArea.top - ui.position.top) <= 100) {
                    item.remove();
                }
                if (Math.abs(fixedBinArea.top - ui.position.top) <= 100) {
                    item.remove();
                }
            },

        });

        $(".builder-droparea").disableSelection();
    });
    $("body").on('click', '.bolmel', function (e) {
        $(this).parent().remove();
        var containerHeader = `<div class="builder-bolmel-col d-flex mb-1">`;

        var bolmelToTemplate = `
            <div data-col="1" class="droppableDiv" data-toggle="modal" data-target=""`;

        var bolmelToClousre = `></div>`;
        var bolmelId = 'id =' + Math.floor(Math.random() * 1000);

        let bolmelToAdd = '';
        let bolmelCount = $(this).attr('data-col');
        if (bolmelCount === '3c') {
            bolmelToAdd = `
            <div data-col="1" class="droppableDiv" style="width:25%" data-toggle="modal" data-target="" ${bolmelId} ></div>
            <div data-col="1" class="droppableDiv" style="width:50%" data-toggle="modal" data-target="" ${bolmelId + 'a'}></div>
            <div data-col="1" class="droppableDiv" style="width:25%" data-toggle="modal" data-target="" ${bolmelId + 'b'}></div>
            `
            $(containerHeader + bolmelToAdd + '</div>').appendTo($(".builder-droparea")).stop().animate({ marginTop: '5px' }, 500);
        } else if (bolmelCount === '2l') {
            bolmelToAdd = `
            <div data-col="1" class="droppableDiv" style="width:25%" data-toggle="modal" data-target="" ${bolmelId} ></div>
            <div data-col="1" class="droppableDiv" style="width:75%" data-toggle="modal" data-target="" ${bolmelId + 'a'}></div>
            `
            $(containerHeader + bolmelToAdd + '</div>').appendTo($(".builder-droparea")).stop().animate({ marginTop: '5px' }, 500);
        } else if (bolmelCount === '2r') {
            bolmelToAdd = `
            <div data-col="1" class="droppableDiv" style="width:75%" data-toggle="modal" data-target="" ${bolmelId} ></div>
            <div data-col="1" class="droppableDiv" style="width:25%" data-toggle="modal" data-target="" ${bolmelId + 'a'}></div>
            `
            $(containerHeader + bolmelToAdd + '</div>').appendTo($(".builder-droparea")).stop().animate({ marginTop: '5px' }, 500);
        }

        else {
            for (let x = 1; x <= bolmelCount; x++) {
                bolmelToAdd += bolmelToTemplate + (bolmelId + x) + bolmelToClousre;
            }
            $(containerHeader + bolmelToAdd + '</div>').appendTo($(".builder-droparea")).stop().animate({ marginTop: '5px' }, 500);
        }

        // $(".builder-droparea").append(containerHeader + bolmelToAdd + '</div>');


    });
    $('.builder-widget').on('click', function () {
        var htmlToAdd = `
        <div class="builder-bolmel d-flex mb-5">
            <div  class="bolmel" data-col="1">
                <span></span>
                <p class="bolmel-name">Tek Bölmeli</p>
            </div>
            <div  class="bolmel" data-col="2">
                <span></span>
                <span></span>
                <p class="bolmel-name">İkili Bölmeli</p>
            </div>
            <div  class="bolmel" data-col="3">
                <span></span>
                <span></span>
                <span></span>
                <p class="bolmel-name">Üç Bölmeli</p>
            </div>
            <div  class="bolmel" data-col="4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="bolmel-name">Dört Bölmeli</p>
            </div>
            <div class="bolmel" data-col="5">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <p class="bolmel-name">Beş Bölmeli</p>
            </div>
            <div class="bolmel" data-col="3c">
                <span style="width:25%"></span>
                <span></span>
                <span style="width:25%"></span>   
                <p class="bolmel-name">Merkezli Bölmeli</p>
            </div>
            <div class="bolmel" data-col="2l">
                <span style="width:25%"></span>
                <span></span>
                <p class="bolmel-name">Sag Merkezli</p>
            </div>
            <div class="bolmel" data-col="2r">
                <span ></span>
                <span style="width:25%"></span>
                <p class="bolmel-name">Sag Merkezli</p>
            </div>
        </div>
        
    `;
        if ($(".bolmel").length == 0) {
            if ($(this).attr("id") == "binFixed") {
                $(htmlToAdd).appendTo($(".builder-droparea")).stop().animate({ margin: '10px' }, 500);
            } else {
                $(htmlToAdd).prependTo($(".builder-droparea")).stop().animate({ margin: '10px' }, 500);
            }

        } else {
            $(".builder-droparea").effect("shake")
        }

    });

    $(".builder-droparea").on("click", '.droppableDiv', function () {
        $("#titleVal").val($(this).text());
        $("#titleURL").val($(this).find('a').attr('href'));


        colId = $(this).attr("id");
        var UrlType = $("#" + colId).find('a').attr("target");

        $("#" + UrlType).prop('checked', true).click();
    });
    $("#titleVal").on("change", function () {
        $("#" + colId).find("h1").html($(this).val())
    });




});

function hizalama(dir) {
    $("#" + colId).removeClass('justify-content-start justify-content-center justify-content-end');
    $("#" + colId).addClass(dir);
}
function renkChange(renkHex) {
    $("#" + colId).css('color', renkHex);
}
function ffChange(ff) {
    $("#" + colId).css('font-family', ff);
}
function fStyle(fs) {
    $("#" + colId).children(":first").removeClass('text-decoration-underline text-decoration-line-through fw-bolder fw-normal fw-light fst-italic fw-light');
    $("#" + colId).children(":first").addClass(fs);
}
function baslikURL(url) {

    if (url != '') {
        if ($("#" + colId + ' a').length > 0) {
            $("#" + colId + ' h1').unwrap();
            $("#" + colId).children(":first").wrap(`<a href='${url}'></a>`);


        } else {
            $("#" + colId).children(":first").wrap(`<a href='${url}'></a>`);

        }

    } else {
        $("#" + colId + ' h1').unwrap();
    }
}
function baslikURLType(type) {
    if ($("#" + colId + ' a').length > 0) {
        $("#" + colId + ' a').attr('target', type);
    }
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + 31536000000); //1 year  
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
function yeniSayfa() {
    var yeniSayfa = $("#sayfabasligi").val()
    var yeniSayfaToAdd = `<li class="active">
                            <a class="sidenav-item-link" href="#" >
                                <span class="nav-text w-100" onclick="clearBuilder()">${yeniSayfa}</span>
                                <span class="mdi mdi-cog" data-toggle="modal" data-target="#sayfaSetting-offcanava"></span>
                            </a>
                          </li>`
    $("#sayfalar").prepend(yeniSayfaToAdd);
    clearBuilder();


}
function clearBuilder() {
    $(".builder-droparea").empty();
}

function doMargin() {
    var rightMargin = $("#kenarSag").val() + 'px';
    var leftMargin = $("#kenarSol").val() + 'px';;
    var topMargin = $("#kenarUst").val() + 'px';;
    var bottomMargin = $("#kenarAlt").val() + 'px';;
    $("#" + colId).children().css('margin-left', leftMargin);
    $("#" + colId).children().css('margin-top', topMargin);
    $("#" + colId).children().css('margin-right', rightMargin);
    $("#" + colId).children().css('margin-bottom', bottomMargin);
}

function doPadding() {
    var rightPadding = $("#dolguSag").val() + 'px';
    var leftPadding = $("#dolguSol").val() + 'px';;
    var topPadding = $("#dolguUst").val() + 'px';;
    var bottomPadding = $("#dolguAlt").val() + 'px';;
    $("#" + colId).children().css('padding-left', leftPadding);
    $("#" + colId).children().css('padding-top', topPadding);
    $("#" + colId).children().css('padding-right', rightPadding);
    $("#" + colId).children().css('padding-bottom', bottomPadding);
}