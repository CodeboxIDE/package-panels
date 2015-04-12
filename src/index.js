require("./stylesheets/main.less");
var settings = require("./settings");

var commands = codebox.require("core/commands");

var manager = new codebox.tabs.Manager({
    tabMenu: false
});
manager.$el.addClass("component-panels");

// Add tabs to grid
codebox.app.grid.addView(manager, {
    width: 20,
    at: 0
});

// Render the tabs manager
manager.render();

// Toggle panels display
commands.register({
    id: "view.panels.toggle",
    title: "View: Toggle Side Bar",
    run: function() {
        settings.data.set("visible", !settings.data.get("visible"));
        codebox.settings.save();
    }
});

// Update visibility
settings.data.on("change:visible", function() {
    manager._gridOptions.enabled = settings.data.get("visible");
    codebox.app.grid.update();
});

// Add to View menu
if (codebox.menubar) {
    codebox.menubar.createMenu("view", {
        caption: "Toggle Side Bar",
        command: "view.panels.toggle"
    });
}


// Make the tab manager global
codebox.panels = manager;
