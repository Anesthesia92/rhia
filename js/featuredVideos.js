const featuredVideosList = [
  {
    time: "05:24",
    name: "Tanzania's deadly pink lake ",
    url: "https://www.youtube.com/embed/DJlmVOSEvGA",
  },
  {
    name: "When go Maldives",
    time: "03:55",
    url: "https://www.youtube.com/embed/2-KVPLwRkCA",
  },

  {
    name: " Exploring China's creative capital ",
    time: "04:33",
    url: "https://www.youtube.com/embed/v0rY4x87xfs",
  },
  {
    name: "Wynwood walls",
    time: "05:30",
    url: "https://www.youtube.com/embed/gotEdEs0FC0",
  },
  {
    name: "Wynwood walls",
    time: "05:30",
    url: "https://www.youtube.com/embed/gotEdEs0FC0",
  },
];

featuredVideosList.forEach(function (item, i) {
  $(".featured-videos__pics-list").append(`<div class="featured-videos__pics-icon">
              <iframe
                      class="featured-videos__pics-icon-video"
                      src="${item.url}"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
              ></iframe>
              <p class="featured-videos__pics-description">
             ${item.name}<br /><span> ${item.time} </span>
              </p>
            </div>`);
});

$(".featured-videos__pics-icon").on(`click`, function () {
  const link = $(this).find("iframe.featured-videos__pics-icon-video:first").attr("src");
  $(".featured-videos__pics-player").attr("src", link)
});


