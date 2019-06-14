# Mapping_The_World

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, we will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.


### Visualization

Our first task is to visualize an earthquake data set.

1. **Getting our data set**

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. We visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When we click on a data set, for example 'All Earthquakes from the Past 30 Days', we will be given a JSON representation of that data. We used the URL of this JSON to pull in the data for our visualization.


2. **Import & Visualize the Data**

   Created a map using Leaflet that plots all of the earthquakes from your data set based on their longitude and latitude.

   * Our data markers should reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   * Included popups that provide additional information about the earthquake when a marker is clicked.

   * Created a legend that will provide context for your map data.

