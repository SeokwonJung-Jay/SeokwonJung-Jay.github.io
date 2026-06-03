$(document).ready(function () {
  // add toggle functionality to abstract, award and bibtex buttons
  // Use the closest publication entry as the scope so the toggles work
  // regardless of where the trigger link sits within the entry.
  let pubScope = function (el) {
    let entry = $(el).closest(".pub-entry");
    return entry.length ? entry : $(el).parent().parent();
  };
  $("a.abstract").click(function () {
    pubScope(this).find(".abstract.hidden").toggleClass("open");
    pubScope(this).find(".award.hidden.open").toggleClass("open");
    pubScope(this).find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.award").click(function () {
    pubScope(this).find(".abstract.hidden.open").toggleClass("open");
    pubScope(this).find(".award.hidden").toggleClass("open");
    pubScope(this).find(".bibtex.hidden.open").toggleClass("open");
  });
  $("a.bibtex").click(function () {
    pubScope(this).find(".abstract.hidden.open").toggleClass("open");
    pubScope(this).find(".award.hidden.open").toggleClass("open");
    pubScope(this).find(".bibtex.hidden").toggleClass("open");
  });
  $("a").removeClass("waves-effect waves-light");

  // bootstrap-toc
  if ($("#toc-sidebar").length) {
    // remove related publications years from the TOC
    $(".publications h2").each(function () {
      $(this).attr("data-toc-skip", "");
    });
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
      offset: 100,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href = "../css/jupyter.css";
  cssLink.rel = "stylesheet";
  cssLink.type = "text/css";

  let jupyterTheme = determineComputedTheme();

  $(".jupyter-notebook-iframe-container iframe").each(function () {
    $(this).contents().find("head").append(cssLink);

    if (jupyterTheme == "dark") {
      $(this).bind("load", function () {
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark",
        });
      });
    }
  });

  // trigger popovers
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
  });
});
