define([
    "less!src/stylesheets/main.less"
], function() {
    var manager = new codebox.tabs.Manager({
        draggable: false
    });
    manager.$el.addClass("component-panels");

    // Add tabs to grid
    codebox.app.grid.addView(manager, {
        width: 20,
        at: 0
    });

    // Render the tabs manager
    manager.render();

    // Make the tab manager global
    codebox.panels = manager;
});