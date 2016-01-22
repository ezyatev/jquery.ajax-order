$.fn.extend({
    ajaxOrder: function (options) {
        var defaults = {
            fieldsClear: 'input[type="text"], textarea',
            preloaderClass: 'ajax-loading',
            onSuccess: function (data) {
                alert(data.message);
            },
            onError: function () {
                alert("Произошла внутренняя ошибка. Пожалуйста перезвоните нам.");
            }
        };
        options = $.extend(defaults, options);

        $(this).on('submit', function (e) {
            var $target = $(e.target),
                $fieldsClear = $target.find(options.fieldsClear),
                $submitBtn = $target.find("input:submit, button:submit");

            e.preventDefault();

            $.ajax({
                type: 'post',
                url: $target.attr('action'),
                dataType: 'json',
                data: $target.serialize(),
                beforeSend: function () {
                    $submitBtn.addClass(options.preloaderClass);
                },
                success: function (data) {
                    $fieldsClear.val('');
                    options.onSuccess(data);
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    options.onError();
                },
                complete: function () {
                    $submitBtn.removeClass(options.preloaderClass);
                }
            });
        });
    }
});