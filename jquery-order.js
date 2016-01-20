$.fn.extend({
    ajaxOrder: function (options) {
        var defaults = {
            fields_clear: 'input[type="text"], textarea',
            callback: function (data) {
                alert(data.message);
            }
        };
        options = $.extend(defaults, options);

        $(this).on('submit', function (e) {
            var $target = $(e.target),
                $fields_clear = $target.find(options.fields_clear);

            e.preventDefault();

            $.ajax({
                type: 'post',
                url: $target.attr('action'),
                dataType: 'json',
                data: $target.serialize(),
                success: function (data) {
                    $fields_clear.val('');
                    options.callback(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert("Произошла внутренняя ошибка. Пожалуйста перезвоните нам.");
                }
            });
        });
    }
});