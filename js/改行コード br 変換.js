/*
 reference :http://akinov.hatenablog.com/entry/2014/09/16/235554
*/

// js
str.replace(/\r?\n/g, '<br>');

// jquery
var str = $('textarea').val();
$('#text').html(str.replace(/\r?\n/g, '<br>'));