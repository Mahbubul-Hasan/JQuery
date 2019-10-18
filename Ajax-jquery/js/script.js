// $(document).ready(function ()
// {
    $("#searchText").keyup(function ()
    {

        $.ajax(
            {
                method   : "get",
                url      : "serverPage.php",
                type     : "json",
                data     : {text : $(this).val()},

                success  : function (data)
                {
                    $("#result").text(data);
                }
            }
        );
    });
// });
