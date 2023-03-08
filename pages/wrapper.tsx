import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";

import Header from "./NavBar";

type Props = {
    children: React.ReactNode;
    title: string;
};

export default function Wrapper({ title, children }: Props) {
    return (
        <>
            <Layout>
                <Header />
                <Container>
                    <Intro title={title} />
                    {children}
                </Container>
            </Layout>
        </>
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
