 import style from './Maps.module.scss'
  import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
  import './map.css'
 export interface MapPageprops{}
 const Maps = () => {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDLpmhyr0DbY2aSgZLNHrZ3_8e9g0y1YG8"
      })
    
    return (
            <div className="map">
        { isLoaded ? (
                <GoogleMap
                  mapContainerStyle={{width:"100%", height:"100%"}}
                  center={
                    {lat: -1.432639, 
                     lng:   -48.456145
                     
                    }
                  }
                  zoom={15}
                 
                >
                  { /* Child components, such as markers, info windows, etc. */ }
                  <></>
                </GoogleMap>
            ) : 
            <></>
               }
      
     </div>)
}
    

  

 export default Maps;