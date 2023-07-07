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
  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "polarArea",
    data: {
      datasets: [
        {
          label: "Intelligence Type",
          data: [6, 8, 12, 7, 4, 8, 10, 7],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          display: false,
        },
      },
    },
  });

  // chart 2 
  const ctx2 = document.getElementById("myChart2");

  new Chart(ctx2, {
    type: "bar",
    data: {
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
    },
    options: {
      legend: {
        display: true,
      },
      tooltips: {
        enabled: false,
      },
      scales: {
        xAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            ticks: {
              beginAtZero: true,
              max: 20,
            },
          },
        ],
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            value: "10",
            borderColor: "tomato",
            borderWidth: 1,
          },
        ],
        drawTime: "afterDraw", // (default)
      },
    },
  });

  // chart 3 
  const ctx3 = document.getElementById("myChart3");

  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: [
        "Focusing",
        "Reading",
        "Writing",
        "Listening",
        "Speaking",
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
            "rgba(255, 99, 132)",
            "rgba(255, 159, 64)",
            "rgba(255, 205, 86)",
            "rgba(75, 192, 192)",
            "rgba(54, 162, 235)",
            "rgba(153, 102, 255)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
          ],
          borderColor: [
            "rgba(255, 99, 132)",
            "rgba(255, 159, 64)",
            "rgba(255, 205, 86)",
            "rgba(75, 192, 192)",
            "rgba(54, 162, 235)",
            "rgba(153, 102, 255)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
            "rgba(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    },
  });

});
