import React, { useState, useEffect } from "react";
import { Card, Col, Grid, Text, Pagination, Image } from "@nextui-org/react";
import Wrapper from "../components/page-wrapper";
import { listAll, getDownloadURL } from "firebase/storage";
import { imageRef } from "../firebase/config";

const Album = () => {
    const PAGE_CHUNK_SIZE = 10;
    const [pageNum, setPageNum] = useState(1);
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        listAll(imageRef)
            .then((res) => {
                res.items.forEach((itemRef) => {
                    // All the items under listRef.
                    const currentURL = getDownloadURL(itemRef).then((url) => {
                        setImageUrls((prev) => [...prev, url]);
                    });
                });
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
    }, []);

    const imageCards = (page) => {
        const imageChunk = imageUrls.slice(
            page - 1,
            (page - 1) * PAGE_CHUNK_SIZE + PAGE_CHUNK_SIZE
        );
        return imageChunk.map((photo) => {
            return (
                <Grid xs={6} md={3}>
                    <Card>
                        <Card.Image
                            src={photo}
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            alt="Card image background"
                        />
                    </Card>
                </Grid>
            );
        });
    };

    return (
        <Wrapper title="Album">
            <Grid.Container gap={2} justify="center">
                <Grid.Container gap={2} justify="center">
                    {imageCards(pageNum)}
                </Grid.Container>
            </Grid.Container>
            <Pagination
                onlyDots
                total={imageUrls.length / PAGE_CHUNK_SIZE}
                initialPage={pageNum}
                onChange={(page) => setPageNum(page)}
            />
        </Wrapper>
    );
};

export default Album;
