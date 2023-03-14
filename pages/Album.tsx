import React, { useState, useEffect } from "react";
import { Card, Grid, Pagination, Loading } from "@nextui-org/react";
import Wrapper from "../components/page-wrapper";
import { listAll, getDownloadURL } from "firebase/storage";
import { imageRef } from "../firebase/config";

const Album = () => {
    const PAGE_CHUNK_SIZE = 10;
    const TOTAL_PAGE = 6;
    const DELAY_TIME = 1000;

    const [loading, setLoading] = useState(true);
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
                setLoading(false);
                const myPromise = new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve("foo");
                    }, 300);
                });
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
            });
    }, []);

    const imageCards = (page) => {
        const chunkStart = (page - 1) * PAGE_CHUNK_SIZE;
        const chunkEnd = (page - 1) * PAGE_CHUNK_SIZE + PAGE_CHUNK_SIZE;
        const imageChunk = imageUrls.slice(chunkStart, chunkEnd);
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

    if (loading) {
        const resetTimeout = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("timeout");
            }, 300);
        });
        resetTimeout.then(() => setLoading(false));
        return (
            <Wrapper title="Album">
                <Loading />
            </Wrapper>
        );
    } else {
        return (
            <Wrapper title="Album">
                <Grid.Container gap={2} justify="center">
                    <Grid.Container gap={2} justify="center">
                        {imageCards(pageNum)}
                    </Grid.Container>
                </Grid.Container>
                <Pagination
                    onlyDots
                    total={TOTAL_PAGE}
                    initialPage={pageNum}
                    onChange={(page) => {
                        setLoading(true);
                        setPageNum(page);
                    }}
                />
            </Wrapper>
        );
    }
};

export default Album;
