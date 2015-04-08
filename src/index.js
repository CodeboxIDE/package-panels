require("./stylesheets/main.less");

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

// Make the tab manager global
codebox.panels = manager;
