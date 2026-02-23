if (typeof document.currentNum == 'undefined') {
  document.currentNum = 0;
  document.timeout = 0;
}

console.log(document.referrer)

function handleDigit(num) {

  clearTimeout(document.timeout)
  document.timeout = 0;
  document.currentNum = document.currentNum * 10 + num
  document.timeout = setTimeout(() => {

    gotoSlide(document.currentNum);
    document.currentNum = 0;

  }, 500);
}

function gotoSlide(num) {

  this.Reveal.slide(num - 1)
}

/* Make all list elements fragments, unless in a nofragment list */
if (document.querySelector("div.reveal.present")) {

  for (let input of document.getElementsByTagName('li')) {
    var section = input.closest("ul.nofragment")
    if (!section)
      input.classList.add("fragment");
  }
}

Reveal.initialize({
  center: false,
  progress: false,
  history: true,
  controls: false,
  transition: 'none',
  slideNumber: true,
  slideNumber: 'c',
  display: 'flex',
  fragment: false,
  margin: 0,
  minScale: 1,
  maxScale: 1,
  help: true,
  navigationMode: 'linear',
  hashOneBasedIndex: true,
  keyboard: {
    48: function() { handleDigit(0); },
    49: function() { handleDigit(1); },
    50: function() { handleDigit(2); },
    51: function() { handleDigit(3); },
    52: function() { handleDigit(4); },
    53: function() { handleDigit(5); },
    54: function() { handleDigit(6); },
    55: function() { handleDigit(7); },
    56: function() { handleDigit(8); },
    57: function() { handleDigit(9); },
    13: function() { 

      clearTimeout(document.timeout)
      document.timeout = 0;
      gotoSlide(document.currentNum);
      document.currentNum = 0;
    },
    72: function() {

        if (!event.altKey)
            return

        document.location.host = document.location.host == 'mlcollard.net' ? 'localhost:4000' : 'mlcollard.net';
    },
  }
});

/* Enable/disable fragments */
if (document.querySelector("div.reveal.present")) {

  Reveal.configure({ fragments: true })

  Reveal.addKeyBinding( { keyCode: 77, key: 'M', description: 'Toggle presentation Mode' }, () => {

      if (Reveal.getConfig().fragments)
        Reveal.configure({ fragments: false })
      else
        Reveal.configure({ fragments: true })
  });

}

Reveal.addKeyBinding( { keyCode: 65, key: 'A', description: 'All Notes' }, () => {
  const url = new URL(document.referrer)
  if (document.referrer.endsWith("notes.html"))
    document.location = document.referrer;
});

var sections = document.getElementsByTagName("section").length;
Reveal.registerKeyboardShortcut('1 / 2 / ... / ' + sections + ' ENTER', 'Go to slide 1-' + sections);
