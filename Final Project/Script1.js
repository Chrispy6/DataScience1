//event1
d3.select('#showPdfLink').on('click', function () {
            // Toggle the visibility of the PDF container
            var pdfContainer = d3.select('#pic1');
            pdfContainer.style('visibility', pdfContainer.style('visibility') === 'hidden' ? 'visible' : 'hidden');
        });
//event2
document.addEventListener("DOMContentLoaded", function () {
    var textElement = d3.select("#picdes2");
    var pictureElement = d3.select("#pic2");

    function updateOpacity() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        // Calculate the visibility ratio
        var textVisibility = 1 - Math.max(0, Math.min(1, (textElement.node().offsetTop - scrollPosition) / windowHeight));
        var pictureVisibility = 1 - Math.max(0, Math.min(1, (pictureElement.node().offsetTop - scrollPosition) / windowHeight));

        // Update opacity
        textElement.style("opacity", textVisibility);
        pictureElement.style("opacity", pictureVisibility);
    }

    // Listen to the scroll event
    window.addEventListener("scroll", updateOpacity);

    // Initial update
    updateOpacity();
});
//event3
var textElement = d3.select("#conclusion");
    var containerWidth = document.getElementById("container").offsetWidth;

    d3.select(window).on("scroll", function() {
        var scrollPosition = window.scrollY;

        var triggerOffset = 200;

        if (scrollPosition > triggerOffset) {
            textElement.transition().duration(500).style("left", "50%");
        }
    });