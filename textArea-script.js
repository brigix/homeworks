// eslint-disable-next-line no-unused-vars
function do_resize(textArea) {
  var minRows = 5;
  var maxRows = 10;
  var txt = textArea.value;
  var cols = textArea.cols;
  var arraytxt = txt.split("\n");
  var rows = arraytxt.length;

  for (var i = 0; i < arraytxt.length; i++) {
    rows += parseInt(arraytxt[i].length / cols);
  }

  if (rows >= maxRows) {
    textArea.rows = maxRows;
  } else {
    if (rows <= minRows) {
      textArea.rows = minRows;
    } else {
      textArea.rows = rows;
    }
  }
}
