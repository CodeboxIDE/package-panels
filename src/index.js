define([
    "less!src/stylesheets/main.less"
], function() {
    var manager = new codebox.tabs.Manager();

    // Add tabs to grid
    codebox.app.grid.addView(manager, {
        width: 20
    });

    // Render the tabs manager
    manager.render();

    // Make the tab manager global
    codebox.panels = manager;
});