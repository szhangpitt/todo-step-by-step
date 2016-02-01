(function ($) {
    $('body').prepend('<h1>It runs! </h1>');

    $.getJSON('data/data.json', function (todos) {
        console.log(todos);
    });
        
}(jQuery));