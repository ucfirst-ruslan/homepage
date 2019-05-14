jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 62
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  // Javascript Chart
  var doughnutData = [{
      value: 10,
      color: "#7a377f"
    },
    {
      value: 90,
      color: "#ecf0f1"
    }
  ];
  var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);

  // PHP Chart
  var doughnutData = [{
    value: 30,
    color: "#7a377f"
  },
  {
    value: 70,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("php").getContext("2d")).Doughnut(doughnutData);

  // Html Chart
  var doughnutData = [{
    value: 35,
    color: "#7a377f"
  },
  {
    value: 65,
    color: "#ecf0f1"
  }
  ];
  var myDoughnut = new Chart(document.getElementById("html-css").getContext("2d")).Doughnut(doughnutData);
});
