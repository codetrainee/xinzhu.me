(function toc() {
  var my_toc = document.getElementById("TOC");
  if (my_toc) {
    var toc = document.getElementById("TOC").children[0];

    function removeElement(elementId) {
      // Removes an element from the document
      var element = document.getElementById(elementId);
      element.parentNode.removeChild(element);
    }

    removeElement("TOC");

    var inserted_text =
      '<aside id="toc" class="show-toc"><div class="toc-title">Table of Contents</div><nav id="TableOfContents"><ul><li id="insert-here"></ul></li></ul></li></ul></nav></aside>';

    var Tag = document.getElementsByTagName("article")[0];

    Tag.insertAdjacentHTML("afterend", inserted_text);

    document
      .getElementById("insert-here")
      .insertAdjacentElement("afterbegin", toc);

    document.getElementById("insert-here").removeAttribute("id");

    var button =
      '<button id="toc-btn" class="hdr-btn desktop-only-ib" title="Table of Contents"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg></button>';

    var btn = document.getElementsByClassName("hdr-right hdr-icons")[0];

    btn.insertAdjacentHTML("afterbegin", button);
  }
})();
