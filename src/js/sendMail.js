export function mailSend() {

    $(function () {
        const CATALOG_SEND = document.getElementById('catalog-send')
        $('form').submit(function (e) {
            e.preventDefault();
            var $form = $(this),
                formID;
            let formData = new FormData(this);
            $("form#analytics").serializeArray().forEach(function (field) {
                formData.append(field.name, field.value)
            });
            formID = "#" + $form.attr('id') + " button";  // Формируем переменную с номер формы и добавляем селектор button
            $(formID).prop('disabled', true);
            $(formID).css({'opacity': 0.3});

            if (CATALOG_SEND.value === '1') {
                console.log('отправка каталога');
                $.ajax({
                    url: './php/send-catalog.php',
                    type: 'POST',
                    contentType: false,
                    processData: false,
                    data: new FormData(this)
                })
                $.ajax({
                    url: $form.attr('action'),
                    type: $form.attr('method'),
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function () {
                    $('.morph-button').removeClass('active open');
                    $('.modal-content-send').fadeIn();
                    $('form').trigger('reset');
                    $(formID).prop('disabled', false);
                    $(formID).css({'opacity': 1});
                    document.location.href = './thanks.html'
                });

            } else {
                console.log('отправка Лида');
                $.ajax({
                    url: $form.attr('action'),
                    type: $form.attr('method'),
                    data: formData,
                    cache: false,
                    contentType: false,
                    processData: false
                }).done(function () {
                    $('.morph-button').removeClass('active open');
                    $('.modal-content-send').fadeIn();
                    $('form').trigger('reset');
                    $(formID).prop('disabled', false);
                    $(formID).css({'opacity': 1});
                    document.location.href = './thanks.html'
                });
            }

        });
    });

    $(document).ready(function () {
        let url_string = location.href;
        let url = new URL(url_string);
        let utm_source = url.searchParams.get('utm_source');
        let utm_medium = url.searchParams.get('utm_medium');
        let utm_campaign = url.searchParams.get('utm_campaign');
        let utm_content = url.searchParams.get('utm_content');
        let utm_term = url.searchParams.get('utm_term');
        let yclid = url.searchParams.get('yclid');
        let gclid = url.searchParams.get('gclid');
        let pm_position = url.searchParams.get('pm_position');
        let keyword = url.searchParams.get('keyword');
        let clientid;
        let googlecid;

        $('.analytics input[name="utm_source"]').val(utm_source);
        $('.analytics input[name="utm_medium"]').val(utm_medium);
        $('.analytics input[name="utm_campaign"]').val(utm_campaign);
        $('.analytics input[name="utm_content"]').val(utm_content);
        $('.analytics input[name="utm_term"]').val(utm_term);
        $('.analytics input[name="yclid"]').val(yclid);
        $('.analytics input[name="gclid"]').val(gclid);
        $('.analytics input[name="pm_position"]').val(pm_position);
        $('.analytics input[name="keyword"]').val(keyword);

        if (document.cookie.search('(?:^|;)\\s*_ga=([^;]*)') !== -1) {
            googlecid = document.cookie.match('(?:^|;)\\s*_ga=([^;]*)');
            $('.analytics input[name="googlecid"]').val(googlecid[0].slice(10));
        } else {
            googlecid = 'GA - отсуствует'
            $('.analytics input[name="googlecid"]').val(googlecid);
        }

        if (document.cookie.search('(?:^|;)\\s*_ym_uid=([^;]*)') !== -1) {
            clientid = document.cookie.match('(?:^|;)\\s*_ym_uid=([^;]*)');
            $('.analytics input[name="clientid"]').val(clientid[1]);
        } else {
            clientid = 'YM - отсуствует'
            $('.analytics input[name="clientid"]').val(clientid);
        }

    });

}