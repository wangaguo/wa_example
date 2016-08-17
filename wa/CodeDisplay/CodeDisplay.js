function codeDisplay()
{
  var codes = document.getElementsByTagName("code");
  for(code=0; code<codes.length; code++)
  {
    var newCode;
    var CodeContent = codes[code].innerHTML.replace(/^<br[ ]?\/?>/gm, "")
                                   .replace(/<br[ ]?\/?>/g, "\n")
                                   .replace(/</g, "&lt;")
                                   .replace(/>/g, "&gt;")
                                   .split('\n');

    newCode = '<ol>';
    for (line=0; line<CodeContent.length; line++)
    {
      if( (line == 0 || line == 1 || line == (CodeContent.length - 2)|| line == (CodeContent.length - 1))  
         && (/(&lt;!--|--&gt;|^[\s\t�@]*$)/.test(CodeContent[line])) )
      {
      }
      else if(CodeContent[line].trim() != "")
      {
          newCode += '<li>' + CodeContent[line].replace(/ /g,"&nbsp;") + '</li>';
      }
    }
    newCode += '</ol>';
    codes[code].innerHTML = newCode;
  }
}

if(window.attachEvent)
{
  window.attachEvent("onload",  codeDisplay);
}
else if(window.addEventListener)
{
  window.addEventListener('load',  codeDisplay,  false);
}
