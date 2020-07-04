var paragraph
var textbox
var slider

function setup(){
  noCanvas()
  textbox = createInput('enter text')
  slider = createSlider(10,64,15)
  paragraph = createP('Paragraph')

  textbox.input(updateText)
  slider.input(updateSize)
}

function updateSize(){
  paragraph.style("font-size", slider.value() + "pt")
}

function updateText(){
  paragraph.html(textbox.value())
}

function draw() {
}
