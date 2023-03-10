import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import { Image } from "@nextui-org/react";

import Header from "../components/NavBar";
import Wrapper from "../components/wrapper";

type Props = {
    allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <Wrapper title="Welcome">
            <Image
                src="https://firebasestorage.googleapis.com/v0/b/weddingwebsite-2d923.appspot.com/o/cover%2Fcover.jpg?alt=media&token=61f6085a-4cf2-4605-be4a-6bfe03b23976"
                alt={`Cover Image`}
                className="cover-image"
                width={1300}
                height={630}
            />
        </Wrapper>
    );
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
    ]);

    return {
        props: { allPosts },
    };
};
