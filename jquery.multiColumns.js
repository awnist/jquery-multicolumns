/*
 * jQuery Multi Columns
 * Copyright (c) 2013 Awnist
 *
 * http://github.com/awnist/jquery-multicolumns
 *
 */
(function ($) {

    $.fn.multiColumns = function (children, options) {
        var settings = $.extend({}, $.fn.multiColumns.defaults, {
            children: children,
            parent: $(this)
        }, options);

        var parent_height = settings.parent.height();

        // Columns we'll eventually create, contains $ objects
        var cols = [[]];

        // Counter for current height tally
        var col_heights = 0;

        $.each($(settings.children, settings.parent), function (i, el) {

            // Size of this child
            var h = $(el).outerHeight();

            // Add to tally
            col_heights += h;

            // If the current tally is bigger than height...
            if (col_heights > parent_height) {
                // ... make a new column
                cols.push([el]);
                col_heights = h;
            } else {
                // otherwise, push into current column.
                cols[cols.length - 1].push(el);
            }
        });

        // Wrap everything in DOM columns
        $(cols).each(function (i) {
            $(cols[i]).wrapAll('<div class="jQmultiColumn jQmultiColumns' + (i + 1) + '" style="float:left" />');
        });

    };

    // Publicly accessible defaults, currently unused
    $.fn.multiColumns.defaults = {
        //width      : 'auto',
    };

})(jQuery);
