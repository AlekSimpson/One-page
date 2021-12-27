import { Wrapper, Container, Heading, Link } from "./Links.style.js";

const Links = () => {
    return (
        <Wrapper>
            <Container>
                <Heading color="blue">~/school</Heading>
                <Link href="https://classroom.google.com">google classroom</Link>
                <Link href="https://gmail.com">gmail</Link>
                <Link href="https://my.asu.edu/">asu</Link>
                <Link href="https://google.com">google</Link>
            </Container>

            <Container>
                <Heading color="purple">~/dev</Heading>
                <Link href="https://github.com/">github</Link>
                <Link href="https://stackoverflow.com/">stackoverflow</Link>
                <Link href="https://wiki.archlinux.org/">archwiki</Link>
                <Link href="https://google.com">google</Link>
            </Container>

            <Container>
                <Heading color="green">~/fun</Heading>
                <Link href="https://www.youtube.com">youtube</Link>
                <Link href="https://www.twitch.tv">twitch</Link>
                <Link href="https://netflix">netflix</Link>
                <Link href="https://www.reddit.com/">reddit</Link>
            </Container>
        </Wrapper>
    );
};

export default Links;
