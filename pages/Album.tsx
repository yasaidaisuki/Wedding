import React, { useState, useEffect } from "react";
import { Container, Text } from "@nextui-org/react";
import Wrapper from "../components/page-wrapper";
import { storage } from "../firebase/config";

const Album = () => {
    // Get all the images from Storage
    const [files, setFiles] = useState();

    useEffect(() => {
        const fetchImages = async () => {
            let result = await storage
                .ref()
                .child("Name Of Your Files Map in storage")
                .listAll();
            let urlPromises = result.items.map((imageRef) =>
                imageRef.getDownloadURL()
            );

            return Promise.all(urlPromises);
        };

        const loadImages = async () => {
            const urls = await fetchImages();
            setFiles(urls);
        };
        loadImages();
    }, []);

    console.log(files);
    return (
        <Wrapper title="Album">
            <Container></Container>
        </Wrapper>
    );
};

export default Album;
