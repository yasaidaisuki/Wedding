import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Container, Card, Text } from "@nextui-org/react";
import Wrapper from "./wrapper";

const containerStyle = {
    width: "auto",
    height: "500px",
};

const center = {
    lat: 43.7916270953937,
    lng: -79.52203610337222,
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
        <Wrapper title="Location">
            <Container>
                <Text
                    h1
                    size={30}
                    css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 80%",
                    }}
                    weight="bold"
                >
                    PPradise Banquet & Convention Centre:
                    <br />
                    7601 Jane St, Concord, ON L4K 1X2
                </Text>
                <Card>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={9}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                    >
                        {/* Child components, such as markers, info windows, etc. */}
                        <></>
                    </GoogleMap>
                </Card>
            </Container>
        </Wrapper>
    ) : (
        <></>
    );
};

export default Location;
