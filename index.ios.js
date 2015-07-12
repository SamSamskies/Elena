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
var stages = {
  landsEnd: {
    latitude: 37.767644,
    longitude:  -122.494835,
    title: 'Kanye West',
    subtitle: 'Lands End Stage',
    rightCalloutAccessory: {
      url: "http://www.eurweb.com/wp-content/uploads/2012/04/kanye-west-19.jpg",
      height: 30,
      width: 30
    }
  },
  sutro: {
    latitude: 37.769769,
    longitude: -122.493317,
    title: 'Chromeo',
    subtitle: 'Sutro Stage',
    rightCalloutAccessory: {
      url: "http://www.brooklynvegan.com/img/bp/chromeo-tour.jpg",
      height: 30,
      width: 30
    }
  },
  panhandle: {
    latitude: 37.770031,
    longitude:  -122.485402,
    title: 'Charlie XCX',
    subtitle: 'Panhandle Stage',
    rightCalloutAccessory: {
      url: "http://954live.com/sites/default/files/assets/artist/charli-xcx/charli-xcx-1607027371.jpeg",
      height: 30,
      width: 30
    }
  },
  twinPeaks: {
    latitude: 37.769652,
    longitude: -122.482421,
    title: 'TV On The Radio',
    subtitle: 'Twin Peaks Stage',
    rightCalloutAccessory: {
      url: "http://3.bp.blogspot.com/-Wadh5TidhKU/TXBtw3nxQfI/AAAAAAAAASc/R7QDD7bDiWQ/s1600/tv-on-the-radio.jpg",
      height: 30,
      width: 30
    }
  }
};

var Elena = React.createClass({
  mixins: [MapboxGLMap.Mixin],
  getInitialState() {
    return {
      center: {
        latitude: 37.768704,
        longitude: -122.489285
      },
      zoom: 15,
      annotations: [
        stages.landsEnd,
        stages.sutro,
        stages.panhandle,
        stages.twinPeaks
      ]
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
  componentDidUpdate: function() {
    setTimeout(function() {
      this.selectAnnotationAnimated(mapRef, 0);
    }.bind(this), 1000);
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
