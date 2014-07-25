define(function() {
    var hr = codebox.require("hr/hr");

    var PanelsManager = hr.View.extend({
        className: "component-panels-manager",

        initialize: function(options) {
            PanelsManager.__super__.initialize.apply(this, arguments);


        },

        // Add a panel
        add: function(options) {

        },

        render: function() {
            return this.ready();
        }
    });

    return PanelsManager;
});