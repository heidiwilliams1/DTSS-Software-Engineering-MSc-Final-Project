# MSc Project - Data Visualisation App for Sky Bet Football In-Play Event Pages

Final Project for Digital and Technology Solutions MSc.
This app fetches free kick, red/yellow card and offside data from Sky Betting and Gaming's football meta data API. 
The data is supplied by external suppliers who are attending the live games. 
The data is then displayed on a pitch svg to display the location of the event and timestamp on hover.

# Set Up

In your terminal run:
- cd data-visualisation
- npm install
- npm start

The app will launch in your browser. 
The data is displayed in each coresponding tab - 'Free Kicks', 'Offsides', 'Red Cards', 'Yellow Cards'

Note: must be connected to the SBG VPN to recieve a response from the FMD API. Otherwise a blank graph will be shown. 