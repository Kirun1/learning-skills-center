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
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Marks",
          data: [1, 15, 20, 20, 11, 7, 9, 20, 16, 8, 5, 8],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
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
  });

  // chart 3 
  const ctx3 = document.getElementById("myChart3");

  new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["Focusing", "Reading", "Writing", "Listening", "Speaking", "Logical Reasoning", "Spatial Reasoning", "Visual Abstraction", "Auditory Abstraction", "Visual Order", "Auditory Order", "Writing Memory"],
      datasets: [
        {
          label: "Marks",
          data: [1, 15, 20, 20, 11, 7, 9, 20, 16, 8, 5, 8],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(201, 203, 207, 0.2)",
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
  });

});
