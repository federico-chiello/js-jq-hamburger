// Si inizia sempre richiamando il document.
$(document).ready(function(){
  // Per evitare di scrivere $(''), creo le variabili:
  var apertura = $('.header-right > a i');
  var chiusura = $('.hamburger-menu > a i');
  var menuVisibile = $('.hamburger-menu');

  // Dopo aver inserito le variabili, devo utilizzare il metodo click() per far comparire e scomparire il menu dopo un click.
  apertura.click(function() {
    menuVisibile.show();
  });
  chiusura.click(function() {
    menuVisibile.hide();
  });
});
