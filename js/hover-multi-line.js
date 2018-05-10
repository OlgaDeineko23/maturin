function multilineTextUnderline() {
    var text = document.querySelector('.text');
    var words = text.innerText.split(' ');

    var initialText = text.innerText;
    var widths = [];
    var lineHeight = parseInt(window.getComputedStyle(text, null).getPropertyValue('line-height'), 10);
    var firstWord = 0;
    text.innerText = words[0];
    var currentHeight = text.offsetHeight;


    function getWidths() {
        words.forEach(function(word, i) {
            text.innerText = words.slice(firstWord, i + 1).join(' ');
            if(currentHeight < text.offsetHeight) {
                text.innerText = words.slice(firstWord, i).join(' ');
                widths.push(text.offsetWidth);
                firstWord = i;

                if(i === words.length - 1) {
                    text.innerText = words[i];
                    widths.push(text.offsetWidth);
                }
            } else if(i === words.length - 1) {
                widths.push(text.offsetWidth);

            }
        });
    }

    getWidths();
    text.innerText = initialText;



    //rendering underlines
    var container = document.querySelector('.container');
    var containerWidth = container.offsetWidth;
    var lines = [];
    $('.line').remove();

    widths.forEach(function(lineWidth, i) {
        var line = document.createElement('div');
        line.classList.add('line');
        line.style.top = lineHeight * (i + 1) - 2 + 'px';

        lines.push(line);
    });

    lines.forEach(function(line) {
        container.appendChild(line);
    });

    container.addEventListener('mouseenter', function() {
        lines.forEach(function(line, i) {
            line.style.width = widths[i] + 'px';
            line.style.left = 0;
            line.style.right = 'auto';
        });
    });
    container.addEventListener('mouseleave', function() {
        lines.forEach(function(line, i) {
            line.style.width = 0;
            line.style.left = 0;
            line.style.right = 'auto';
        });
    });
}

multilineTextUnderline();

window.addEventListener('resize', function() {
    multilineTextUnderline();
});