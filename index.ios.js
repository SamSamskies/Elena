/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MapboxGLMap = require('react-native-mapbox-gl');
var mapRef = 'mapRef';
var {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBarIOS,
  View,
} = React;

var Elena = React.createClass({
  mixins: [MapboxGLMap.Mixin],
  getInitialState() {
    return {
      center: {
        latitude: 37.768704,
        longitude: -122.489285
      },
      zoom: 15,
      annotations: [{
        latitude: 40.72052634,
        longitude:  -73.97686958312988,
        title: 'This is marker 1',
        subtitle: 'It has a rightCalloutAccessory too',
        rightCalloutAccessory: {
            url: 'http://png-3.findicons.com/files/icons/2799/flat_icons/256/gear.png',
            height: 25,
            width: 25
        }
      },{
        latitude: 40.714541341726175,
        longitude:  -74.00579452514648,
        title: 'Important!',
        subtitle: 'Neat, this is a subtitle'
      }]
    };
  },
  onRegionChange(location) {
    this.setState({ currentZoom: location.zoom });
  },
  onRegionWillChange(location) {
    console.log(location);
  },
  onUpdateUserLocation(location) {
    console.log(location);
  },
  onOpenAnnotation(annotation) {
    console.log(annotation);
  },
  onRightAnnotationTapped(e) {
    console.log(e);
  },
  render: function() {
    StatusBarIOS.setHidden(true);
    return (
      <View style={styles.container}>
        <MapboxGLMap
          style={styles.map}
          direction={0}
          rotateEnabled={true}
          scrollEnabled={false}
          zoomEnabled={false}
          showsUserLocation={true}
          ref={mapRef}
          accessToken={'sk.eyJ1Ijoic2Ftc2Ftc2tpZXMiLCJhIjoiMDI5ZDdhMmRlODk0ZDZiNTFhZWJjYTM5NDNiOTQ2MGIifQ.rSszdQJ7TltJlJAE52t0iw'}
          styleURL={'asset://styles/light-v7.json'}
          centerCoordinate={this.state.center}
          userLocationVisible={true}
          zoomLevel={this.state.zoom}
          onRegionChange={this.onRegionChange}
          onRegionWillChange={this.onRegionWillChange}
          annotations={this.state.annotations}
          onOpenAnnotation={this.onOpenAnnotation}
          onRightAnnotationTapped={this.onRightAnnotationTapped}
          onUpdateUserLocation={this.onUpdateUserLocation} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  map: {
    flex: 5
  },
  text: {
    padding: 2
  }
});

AppRegistry.registerComponent('Elena', () => Elena);
