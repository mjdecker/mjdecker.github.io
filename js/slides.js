Array.prototype.stanDeviate = function(){
   var i,j,total = 0, mean = 0, diffSqredArr = [];
   for(i=0;i<this.length;i+=1){
       total+=this[i];
   }
   mean = total/this.length;
   for(j=0;j<this.length;j+=1){
       diffSqredArr.push(Math.pow((this[j]-mean),2));
   }
   return (Math.sqrt(diffSqredArr.reduce(function(firstEl, nextEl){
            return firstEl + nextEl;
          })/this.length));
};

/* Dynamically create a style for all quoteXX */
const allClasses = Array.from(document.querySelectorAll('[class]')).flatMap(e => e.className.toString().split(/\s+/))
const classes = new Set()

allClasses.forEach(c => classes.add(c))

allClasses.forEach(function(className) {

  if (!className.startsWith('quote'))
      return;

  var size = className.substring(5)
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.' + className + '{ font-size : ' + size + '%; }';
  // console.log(style.innerHTML)
  document.getElementsByTagName('head')[0].appendChild(style);
});

/* Copy the class from the heading to the section, since it is
   easy to add a class to an h1 but not the section */
var h1s = document.getElementsByTagName('h1');
h1s.forEach(function(h1) {
    if (h1.className)
        h1.closest('section').classList.add(h1.className)
})

/* Adjust font-size based on number of lines of gist */
for (let script of document.querySelectorAll('script:not(.tiny):not(.small):not(.medium):not(smaller)[src^="https://gist.github.com"]')) {

    if (!script.nextElementSibling)
        continue

    if (!script.nextElementSibling.nextElementSibling)
        continue

    if (!script.nextElementSibling.nextElementSibling.getElementsByTagName('table')[0])
        continue
    
    const lines = script.nextElementSibling.nextElementSibling.getElementsByTagName('table')[0].getElementsByTagName('tr').length
    // console.log(lines)
    var classSize = "fs16"
    if (lines <= 10)
        classSize = "fs16";
    else if (lines <= 22)
        classSize = "fs16";
    else if (lines <= 23)
        classSize = "fs16";
    else if (lines <= 24)
        classSize = "fs13";
    else if (lines <= 25)
        classSize = "fs12";
    // else if (lines <= 30)
    //     classSize = "fs9";
    // else if (lines <= 35)
    //     classSize = "fs9";
    // else if (lines <= 40)
    //     classSize = "fs9";
    // else if (lines <= 45)
    //     classSize = "fs9";
    else
        classSize = "fs9";
    script.classList.add(classSize)
    // console.log(script.getAttribute('src'))
    // console.log("ADDED" + classSize)
}

/* All slides, i.e., sections */
var sections = document.body.firstElementChild.firstElementChild.children

console.log("SIZE: " + sections.length)

function wrapInner(nodes) {
    var wrapper = document.createElement("div");
    nodes.forEach(function(node) {
      node.parentNode.insertBefore(wrapper, node);
      wrapper.appendChild(node);
    });

    return wrapper
}

function wrapInnerItem(node) {
    var wrapper = document.createElement("div");
    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);

    return wrapper
}

function wrapOuter(node1, node2) {

    var wrapper = document.createElement('div')
    wrapper.appendChild(node1)
    wrapper.appendChild(node2)

    return wrapper
}

function wrapOuter3(node1, node2, node3) {

    var wrapper = document.createElement('div')
    wrapper.appendChild(node1)
    wrapper.appendChild(node2)
    wrapper.appendChild(node3)

    return wrapper
}

/* Slide format: Side-by-side of div and list */
sections.forEach(function(section) {

    console.log("A")
    var left = section.querySelectorAll("section > div.side");
    if (left.length != 1)
        return

    console.log("B")
    var ul = section.querySelectorAll("section > ul");
    if (ul.length != 1)
        return

    console.log(section.children[0].innerText + "div.side + ul")

    left[0].classList.add('quotes')

    /* Wrap both the scripts divs */
    var outerWrapper = wrapOuter(left[0], ul[0])
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of blockquotes with single list */
sections.forEach(function(section) {

    /* At least a single blockquote */
    var blockquotes = section.querySelectorAll("section > blockquote");
    if (!blockquotes.length)
      return;

    /* A single list */
    var ul = section.getElementsByTagName("ul");
    if (ul.length == 0)
      return;

    console.log(section.children[0].innerText + "blockquote + single list")

    /* Wrap the blockquotes */
    var quoteWrapper = wrapInner(blockquotes)
    quoteWrapper.classList.add('quotes')

    /* Wrap both the blockquotes div and the list */
    var outerWrapper = wrapOuter(quoteWrapper, ul[0])
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of table with single list */
sections.forEach(function(section) {

    /* At least a single blockquote */
    var blockquotes = section.querySelectorAll("section > table")
    if (!blockquotes.length)
      return;

    /* A single list */
    var ul = section.getElementsByTagName("ul");
    if (ul.length == 0)
      return;

    console.log(section.children[0].innerText + "table + ul")

    /* Wrap the blockquotes */
    var quoteWrapper = wrapInner(blockquotes)
    quoteWrapper.classList.add('quotes')

    /* Wrap both the blockquotes div and the list */
    var outerWrapper = wrapOuter(quoteWrapper, ul[0])
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of image with single list */
sections.forEach(function(section) {

    /* At least a single paragraph */
    var par = section.getElementsByTagName("p");
    if (par.length == 0)
      return;

    var nodesToWrap = par[0].getElementsByTagName('img')
    if (nodesToWrap.length == 0)
       return

    /* A single list */
    var ulstuff = section.getElementsByTagName("ul");
    if (ulstuff.length == 0)
      return;

    console.log(section.children[0].innerText + " image + ul")

    /* Wrap the blockquotes */
    if (par.length == 1)
        var quoteWrapper = wrapInnerItem(par[0])
    else 
        var quoteWrapper = wrapInner(par)
    quoteWrapper.classList.add('images')

    /* Wrap both the blockquotes div and the list */
    var outerWrapper = wrapOuter(quoteWrapper, ulstuff[0])
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of two images */
sections.forEach(function(section) {

    /* Two images side-by-side */
    var par = section.querySelectorAll("section > p")
    if (par.length != 2)
      return;

    console.log(section.children[0].innerText + " image + image")

    /* Wrap the images */
    var quoteWrapper1 = wrapInnerItem(par[0])
    quoteWrapper1.classList.add('images')

    var quoteWrapper2 = wrapInnerItem(par[1])
    quoteWrapper2.classList.add('images')

    /* Wrap both the blockquotes div and the list */
    var outerWrapper = wrapOuter(quoteWrapper1, quoteWrapper2)
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of script with single list */
sections.forEach(function(section) {

    /* At least a single script */
    var scripts = section.getElementsByTagName("script");
    if (scripts.length != 1)
      return;

    /* A single list */
    var ul = section.getElementsByTagName("ul")
    if (ul.length == 0)
      return;

    console.log(section.children[0].innerText + "script + ul")

    /* Wrap the script, including the generated elements which follow*/
    var quoteWrapper = document.createElement("div");
    scripts.forEach(function(node) {
      var next = node.nextElementSibling
      var nextnext = node.nextElementSibling.nextElementSibling
      node.parentNode.insertBefore(quoteWrapper, node);
      quoteWrapper.appendChild(node);
      quoteWrapper.appendChild(next);
      quoteWrapper.appendChild(nextnext);
    });
    quoteWrapper.classList.add('quotes')
    quoteWrapper.classList.add(...scripts[0].classList)
    // if (!scripts.classList)
    //   quoteWrapper.classList.add('medium')

    /* Wrap both the scripts div and the list */
    var outerWrapper = wrapOuter(quoteWrapper, ul[0])
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of two scripts */
sections.forEach(function(section) {

    var scripts = section.querySelectorAll("section:not(.leave) > script");
    if (scripts.length != 2)
      return;

    if (scripts[0].classList.contains("exclude"))
        return;

    if (scripts[1].classList.contains("exclude"))
        return;

    console.log(section.children[0].innerText + "script + script")

    /* Wrap each script, including the generated elements which follow*/
    var quoteWrapper1 = document.createElement("div");
    var node = scripts[0]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper1, node);
    quoteWrapper1.appendChild(node);
    quoteWrapper1.appendChild(next);
    quoteWrapper1.appendChild(nextnext);
    quoteWrapper1.classList.add('quotes')
    quoteWrapper1.classList.add(...scripts[0].classList)

    var quoteWrapper2 = document.createElement("div");
    node = scripts[1]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper2, node);
    quoteWrapper2.appendChild(node);
    quoteWrapper2.appendChild(next);
    quoteWrapper2.appendChild(nextnext);
    quoteWrapper2.classList.add('quotes')
    quoteWrapper2.classList.add(...scripts[1].classList)

    /* Wrap both the scripts divs */
    var outerWrapper = wrapOuter(quoteWrapper1, quoteWrapper2)
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of script and image */
sections.forEach(function(section) {

    var scripts = section.querySelectorAll("section > script");
    if (scripts.length != 1)
        return;

    var images = section.querySelectorAll("section > p > img");
    if (images.length != 1)
        return;

    if (scripts[0].classList.contains("exclude"))
        return;

    console.log(section.children[0].innerText + "script + image")

    /* Wrap each script, including the generated elements which follow*/
    var quoteWrapper1 = document.createElement("div");
    var node = scripts[0]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper1, node);
    quoteWrapper1.appendChild(node);
    quoteWrapper1.appendChild(next);
    quoteWrapper1.appendChild(nextnext);
    quoteWrapper1.classList.add('quotes')
    quoteWrapper1.classList.add(...scripts[0].classList)

    // var quoteWrapper2 = document.createElement("div");
    // node = scripts[1]
    // var next = node.nextElementSibling
    // var nextnext = node.nextElementSibling.nextElementSibling
    // node.parentNode.insertBefore(quoteWrapper2, node);
    // quoteWrapper2.appendChild(node);
    // quoteWrapper2.appendChild(next);
    // quoteWrapper2.appendChild(nextnext);
    // quoteWrapper2.classList.add('quotes')
    // quoteWrapper2.classList.add(...scripts[1].classList)

    /* Wrap both the scripts divs */
    // if (scripts[0] == section.children[1]) {
    //     var outerWrapper = wrapOuter(quoteWrapper1, images[0])
    //     outerWrapper.classList.add('outer')
    //     section.appendChild(outerWrapper)
    // } else {
        var outerWrapper = wrapOuter(images[0].parentNode, quoteWrapper1)
        outerWrapper.classList.add('outer')
        section.appendChild(outerWrapper)
    // }
});

/* Slide format: Side-by-side of three scripts */
sections.forEach(function(section) {

    var scripts = section.querySelectorAll("section > script");
    if (scripts.length != 3)
      return;

    if (scripts[0].classList.contains("exclude"))
        return;

    if (scripts[1].classList.contains("exclude"))
        return;

    if (scripts[2].classList.contains("exclude"))
        return;

    console.log(section.children[0].innerText + "script + script + script")

    /* Wrap each script, including the generated elements which follow*/
    var quoteWrapper1 = document.createElement("div");
    var node = scripts[0]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper1, node);
    quoteWrapper1.appendChild(node);
    quoteWrapper1.appendChild(next);
    quoteWrapper1.appendChild(nextnext);
    quoteWrapper1.classList.add('quotes')
    quoteWrapper1.classList.add(...scripts[0].classList)

    var quoteWrapper2 = document.createElement("div");
    node = scripts[1]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper2, node);
    quoteWrapper2.appendChild(node);
    quoteWrapper2.appendChild(next);
    quoteWrapper2.appendChild(nextnext);
    quoteWrapper2.classList.add('quotes')
    quoteWrapper2.classList.add(...scripts[1].classList)

    var quoteWrapper3 = document.createElement("div");
    node = scripts[2]
    var next = node.nextElementSibling
    var nextnext = node.nextElementSibling.nextElementSibling
    node.parentNode.insertBefore(quoteWrapper3, node);
    quoteWrapper3.appendChild(node);
    quoteWrapper3.appendChild(next);
    quoteWrapper3.appendChild(nextnext);
    quoteWrapper3.classList.add('quotes')
    quoteWrapper3.classList.add(...scripts[1].classList)

    /* Wrap both the scripts divs */
    var outerWrapper = wrapOuter3(quoteWrapper1, quoteWrapper2, quoteWrapper3)
    outerWrapper.classList.add('outer')
    section.appendChild(outerWrapper)
});

/* Slide format: Side-by-side of script with single list */
sections.forEach(function(section) {

    /* A single list */
    /* A single list */
    if (section.children.length != 2)
        return;
    var ul = section.children[1]
    if (ul.tagName != "UL")
        return

    // console.log(section.getElementsByTagName('h1')[0].innerText)
    // console.log(section.children.length)
    var lis = ul.getElementsByTagName('li')
    var min = 1000;
    var max = 0;
    var total = 0;
    var data = []
    lis.forEach(function(node) {
        data.push(node.innerText.length)
        total = total + node.innerText.length;
        if (node.innerText.length > max)
            max = node.innerText.length;
        if (node.innerText.length < min)
            min = node.innerText.length;
    });

    // console.log("total: " + total)
    // console.log("min: " + min)
    // console.log("max: " + max)
    average = total / lis.length
    // console.log("average: " + (total / lis.length))
    // console.log("std: " + data.stanDeviate())

    if (max < average + 2 * data.stanDeviate() && min > average - 2 * data.stanDeviate())
        return

    if (max > 150)
        return

    section.classList.add('narrow')
    // console.log("NARROW")
});

sections.forEach(function(section) {

    /* A single list */
    var ulstuff = section.getElementsByTagName("ul");
    if (ulstuff.length != 1)
      return;

    ulstuff[0].getElementsByTagName('li').forEach(function(li) {

      // console.log(li)
      // console.log(li.getClientRects()[0].top)
    });

    // for (var blu in lis) {
      // console.log(blu.getClientRects())
    // }
    // ulstuff[0].style.height = "60vh !important"
});

sections.forEach(function(section) {

    /* h1 is only whitespace */
    var h1 = section.getElementsByTagName("h1");
    if (h1[0].innerText != "\xa0")
      return;

    section.children[1].style.marginTop = "-10vh";
});

sections.forEach(function(section) {
    const allPTags = section.getElementsByTagName("p");
    if (allPTags.length != 1)
        return;

    allPTags.forEach((elem) => {
        if (elem.innerText === "" && elem.childNodes.length === 1 && elem.childNodes[0].tagName === "IMG") {
            elem.parentNode.insertBefore(elem.childNodes[0], elem);
            elem.remove();
        }
    });
});

for (let script of document.querySelectorAll('script[src^="https://gist.github.com"]')) {

    const urlParams = new URLSearchParams(script.src);
    var start
    var end
    for (const [key, value] of urlParams) {

        if (key == "start")
            start = parseInt(value);
        if (key == "end")
            end = parseInt(value);
    }

    console.log("range(" + start + ", " + end + ")")

    var trs = script.nextElementSibling.nextElementSibling.querySelectorAll("tr")
    console.log(trs.length)
    for (var i = 0; i < (start - 1); ++ i) {
        trs[i].style.display = "none";
    }
    for (var i = (end - 1); i < trs.length; ++ i) {
        trs[i].style.display = "none";
    }
    // for (let tr of script.querySelectorAll("+ link + div.gist tr")) {
    //     console.log(tr)
    // }


}

