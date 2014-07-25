define([
    "src/manager",
    "less!src/stylesheets/main.less"
], function(PanelsManager) {
    var manager = new PanelsManager();

    // Add panel to grid
    codebox.app.grid.addView(manager, {
        width: 20
    });

    // Render the panel
    manager.render();

    // Export it
    codebox.panels = manager;
});