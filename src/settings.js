module.exports = codebox.settings.schema("Panels",
    {
        "title": "Panels / Side Bar",
        "type": "object",
        "properties": {
            "visible": {
                "description": "Show Side Bar",
                "type": "boolean",
                "default": true
            }
        }
    }
);
