$("#searchText").keyup(function ()
{
   var content = $(this).val();
   var xmlHttp = new XMLHttpRequest();
   var serverPage = "serverPage.php?data="+ content;
   xmlHttp.open("get", serverPage);

   xmlHttp.onreadystatechange = function ()
   {
       if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
       {
           $("#result").text(xmlHttp.responseText);
       }
   }
   xmlHttp.send(null);
});