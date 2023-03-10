import Container from "./container";
import MoreStories from "./more-stories";
import HeroPost from "./hero-post";
import Intro from "./intro";
import Layout from "./layout";
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
