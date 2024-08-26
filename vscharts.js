var activity = document.getElementById("activity");
  if (activity !== null) {
    var activityData = [
      {
        first: [0, 65, 52, 115, 98, 165, 125],
        second: [45, 38, 100, 87, 152, 187, 85]
      },
      {
        first: [0, 65, 77, 33, 49, 100, 100],
        second: [88, 33, 20, 44, 111, 140, 77]
      },
      {
        first: [0, 40, 77, 55, 33, 116, 50],
        second: [55, 32, 20, 55, 111, 134, 66]
      },
      {
        first: [0, 44, 22, 77, 33, 151, 99],
        second: [60, 32, 120, 55, 19, 134, 88]
      }
    ];

    var config = {
      type: "line",
      data: {
        labels: [
          "Pzt",
          "Salı",
          "Çarş",
          "Perş",
          "Cuma",
          "Cmt",
          "Paz"
        ],
        datasets: [
          {
            label: "Active",
            backgroundColor: "rgba(65, 105, 225, 0.2)",
            borderColor: "rgb(82, 136, 255)",
            data: activityData[0].first,
            lineTension: 0.2,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          },
          {
            label: "Inactive",
            backgroundColor: "transparent",
            borderColor: "rgb(255, 199, 15)",
            data: activityData[0].second,
            lineTension: 0.2,
            borderWidth: 1,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255,255,255,1)",
            pointHoverBackgroundColor: "rgba(255,255,255,1)",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBorderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
              },
              ticks: {
                fontColor: "#8a909d", 
              },
            }
          ],
          yAxes: [
            {
              gridLines: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                stepSize: 50,
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif"
              }
            }
          ]
        },
        tooltips: {
          mode: "index",
          intersect: false,
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5
        }
      }
    };

    var ctx = document.getElementById("activity").getContext("2d");
    var myLine = new Chart(ctx, config);

    var items = document.querySelectorAll("#user-activity .nav-tabs .nav-item");
    items.forEach(function(item, index){
      item.addEventListener("click", function() {
        config.data.datasets[0].data = activityData[index].first;
        config.data.datasets[1].data = activityData[index].second;
        myLine.update();
      });
    });
  }

  var cUser = document.getElementById("currentUser");
  if (cUser !== null) {
    var myUChart = new Chart(cUser, {
      type: "bar",
      data: {
        labels: [
          "Pzt",
          "Salı",
          "Çarş",
          "Perş",
          "Cuma",
          "Cmt",
          "Paz"
        ],
        datasets: [
          {
            label: "Sipariş",
            data: [25, 30, 27, 43, 39, 18, 42],
            backgroundColor: "#B6D4F7",
            hoverBackgroundColor: "#1368CF"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                drawBorder: true,
                display: false,
              },
              ticks: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: false, // hide main x-axis line
                beginAtZero: true,
                callback: function(tick, index, array) {
                  return index % 2 ? "" : tick;
                }
              },
              barPercentage: 1.8,
              categoryPercentage: 0.2
            }
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: true,
                display: true,
                color: "#eee",
                zeroLineColor: "#eee"
              },
              ticks: {
                fontColor: "#8a909d",
                fontFamily: "Roboto, sans-serif",
                display: true,
                beginAtZero: true
              }
            }
          ]
        },

        tooltips: {
          mode: "index",
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 15,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          xPadding: 10,
          yPadding: 7,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2,
          caretSize: 6,
          caretPadding: 5
        }
      }
    });
  }

  var doughnut = document.getElementById("doChart");
  if (doughnut !== null) {
    var myDoughnutChart = new Chart(doughnut, {
      type: "doughnut",
      data: {
        labels: ["Yeni", "Hazırlanan", "Kargolanan", "Teslim Edilen" , "İptal", "Tamamlanan"],
        datasets: [
          {
            labels: ["Yeni", "Hazırlanan", "Kargolanan", "Teslim Edilen" , "İptal", "Tamamlanan"],
            data: [4100, 2500, 1800, 2300, 122, 1233],
            backgroundColor: ["rgba(19, 104, 207, 0.3)" , "rgba(37, 22, 213, 0.3)" , "rgba(37, 195, 208, 0.3)" , "rgba(255, 176, 32, 0.3)" , "rgba(249, 48, 48, 0.3)", "rgba(3, 120, 71, 0.3)"],
            hoverBackgroundColor: ["#1368CF", "#2516D5", "#25C3D0", "#FFB020", "#F93030", "#037847"],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        cutoutPercentage: 65,
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              return "Sipariş  : " + data["labels"][tooltipItem[0]["index"]];
            },
            label: function(tooltipItem, data) {
              return data["datasets"][0]["data"][tooltipItem["index"]];
            }
          },
          titleFontColor: "#888",
          bodyFontColor: "#555",
          titleFontSize: 12,
          bodyFontSize: 14,
          backgroundColor: "rgba(256,256,256,0.95)",
          displayColors: true,
          borderColor: "rgba(220, 220, 220, 0.9)",
          borderWidth: 2
        }
      }
    });
  }