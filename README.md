# Dash

_Pronounced "dash"_

Cross-platform dashboards, easily create them with simple callbacks. Maybe pluginnable so it'll work with React, Discord, Vue, etc?

````ts
createDashboard([
  {
    type: "checkbox",
    label: "You have read and agree to the ToS",
    description: "By checking this, you affirm that you have read the Terms of Service.",
    initialValue: () => fetchFromDB() || false,
    onChange: writeToDB,
  },
  {
    type: "string",
    label: "Username",
    initialValue: fetchFromDB,
    onChange: writeToDB,
  },
  {
    type: "graph",
    style: "bar",
    labels: ["Guilds", "Time"],
    value: fetchFromDB,
  },
]);```
````
