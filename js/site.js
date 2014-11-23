(function() {

    var template = $('#member-section')[0].innerHTML;

    var formatNumber = function (number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    $.getJSON('js/clan.json')
        .done(function(data) {
            var markup = [];
            var memberCount = 0;

            $.each(data.members, function(key, member) {
                memberCount++;
                var formatted = template
                    .replace('@img', 'images/th' + member.townhall + '.png')
                    .replace('@name', key)
                    .replace('@townhall', member.townhall)
                    .replace('@role', member.role);

                markup.push(formatted);
                console.log(formatted);
            });

            $('.clan-members').append(markup.join(''));
            $('.member-count').text(memberCount);
            $('.total-trophies').text(formatNumber(data.trophies));
            $('.wars-won').text(data.warsWon);

        });

})();