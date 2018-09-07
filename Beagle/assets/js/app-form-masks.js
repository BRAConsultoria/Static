var App = (function () {
    'use strict';

    App.masks = function ( ) {

        $("[data-mask='date']").mask("99/99/9999");
        $("[data-mask='phone']").mask("(99) 9999-9999");
        $("[data-mask='cpf']").mask("999.999.999-99");
        $("[data-mask='cnpj']").mask("99.999.999/9999-99");
        $("[data-mask='rg']").mask("9.999.999");
        $("[data-mask='hora']").mask("99:99");
        $("[data-mask='cep']").mask("99999-999");

    };

    return App;
})(App || {});
