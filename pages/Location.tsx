import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Container, Card } from "@nextui-org/react";
import Header from "./NavBar";

const containerStyle = {
    width: "400px",
    height: "400px",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

type Props = { nonce: string };

const Location = ({ nonce }: Props) => {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyALUzQ2gB6Lloo6GEOt84hTQEMeMvDnFX4",
        nonce: nonce,
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    return isLoaded ? (
        <div>
            <Header />
            <Container>
                <Card css={{ $$cardColor: "$colors$primary" }}>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </Card>
            </Container>
        </div>
    ) : (
        <></>
    );
};

export default Location;
