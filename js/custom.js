$(document).ready(function () {
  "use strict";



  /*======== 3. TOOLTIPS AND POPOVER ========*/
  $('[data-toggle="tooltip"]').tooltip({
    container: "body",
    template:
      '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
  });
  $('[data-toggle="popover"]').popover();

  /*======== 4. JVECTORMAP DASHBOARD ========*/
  var mapData = {
    US: 1298,
    FR: 540,
    DE: 350,
    BW: 450,
    NA: 250,
    ZW: 300,
    AU: 760,
    GB: 120,
    ZA: 450
  };

  if (document.getElementById("world")) {
    $("#world").vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },
      markerStyle: {
        initial: {
          stroke: "transparent"
        },
        hover: {
          stroke: "rgba(112, 112, 112, 0.30)"
        }
      },

      markers: [
        {
          latLng: [54.673629, -62.347026],
          name: "America",
          style: {
            fill: "limegreen"
          }
        },
        {
          latLng: [62.466943, 11.797592],
          name: "Europe",
          style: {
            fill: "orange"
          }
        },
        {
          latLng: [23.956725, -8.768815],
          name: "Africa",
          style: {
            fill: "red"
          }
        },
        {
          latLng: [-21.943369, 123.102198],
          name: "Australia",
          style: {
            fill: "royalblue"
          }
        }
      ]
    });
  }

  /*======== 5. JVECTORMAP ANALYTICS ========*/
  var mapData2 = {
    IN: 19000,
    US: 13000,
    TR: 9500,
    DO: 7500,
    PL: 4600,
    UK: 4000
  };

  if (document.getElementById("analytic-world")) {
    $("#analytic-world").vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      zoomOnScroll: false,
      regionStyle: {
        initial: {
          fill: "#e4e4e4",
          "fill-opacity": 0.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        }
      },

      series: {
        regions: [
          {
            values: mapData2,
            scale: ["#6a9ef9", "#b6d0ff"],
            normalizeFunction: "polynomial"
          }
        ]
      }
    });
  }

  /*======== 6. JVECTORMAP WIDGET ========*/
  if (document.getElementById("demoworld")) {
    $("#demoworld").vectorMap({
      map: "world_mill",
      backgroundColor: "transparent",
      regionStyle: {
        initial: {
          fill: "#9c9c9c"
        }
      }
    });
  }

  function callToaster(positionClass) {
    if (document.getElementById("toaster")) {
      toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: positionClass,
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
      };
      toastr.success("Welcome to sleek", "Howdy!");
    }
  }

  if (document.dir != "rtl") {
    callToaster("toast-top-right");
  } else {
    callToaster("toast-top-left");
  }




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
  $('.dropdown-menu, .dropdown-menu label').click(function (e) {
    e.stopPropagation();
    $("div.daterangepicker").click(function (e) {
      e.stopPropagation();
    });
  });
  $("div.daterangepicker").click(function (e) {
    e.stopPropagation();
  });


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
