$(document).ready(function () {
  // Open mobile nav when 'mobile-nav-open' is clicked
  $("#mobile-nav-open").click(function () {
    $(".mobile-navigation-menu").removeClass("hidden");
  });

  // Close mobile nav when 'mobile-nav-close' is clicked
  $("#mobile-nav-close").click(function () {
    $(".mobile-navigation-menu").addClass("hidden");
  });

  // Owl carousel initializer
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });

  // chartjs   
  const data = {
    labels: [
      "Focusing",
      "Visual Memory",
      "Visual Motor Learning",
      "Auditory Memory",
      "Verbal Production",
      "Logical Reasoning",
      "Spatial Reasoning",
      "Visual Abstraction",
      "Auditory Abstraction",
      "Visual Order",
      "Auditory Order",
      "Writing Memory",
    ],
    datasets: [
      {
        label: "Marks",
        data: [1, 15, 20, 20, 11, 7, 9, 20, 16, 8, 5, 8],
        backgroundColor: [
          "rgba(98, 191, 105)",
          "rgba(237, 74, 70)",
          "rgba(240, 155, 241)",
          "rgba(163, 72, 161)",
          "rgba(85, 81, 164)",
          "rgba(122, 244, 79)",
          "rgba(251, 212, 109)",
          "rgba(170, 155, 143)",
          "rgba(241, 132, 75)",
          "rgba(250, 215, 87)",
          "rgba(201, 77, 115)",
          "rgba(239, 104, 95)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Configuration for the chart
  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "horizontal",
              scaleID: "y",
              value:
                data.datasets[0].data.reduce((a, b) => a + b, 0) /
                data.datasets[0].data.length,
              borderColor: "red",
              borderWidth: 2,
              label: {
                enabled: true,
                content: "Average",
              },
            },
          ],
        },
      },
    },
  };

  // Create the chart
  const myChart = new Chart(document.getElementById("myChart"), config);  

  /* =======================================================
   Tabs 
   ========================================================*/
   $(".button-tab").click(function () {
     // Hide all tab panes
     $(".tab-pane").addClass("hidden");

     // Show the corresponding tab pane
     const index = $(this).index();
     $(".tab-pane:eq(" + index + ")").removeClass("hidden");
   });

});
