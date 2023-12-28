import styled from 'styled-components';
import Head from 'next/head';

import { Community } from '../components/community';
import { Providers } from '../components/providers';
import { Benefits } from '../components/benefits';
import { Footer } from '../components/footer';
import { Paths } from '../components/paths';
import { Hero } from '../components/hero';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>B-MAIL</title>
        <link rel="icon" type="image/png" href="https://imgur.com/RnWXx5m" />
        <meta
          property="og:title"
          content="B-MAIL"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://bmail.luvnft.com"
        />
        <meta
          property="og:description"
          content="Like an email address, but for your Bitcoin. An Internet Identifier that allows anyone to send you Bitcoin instantly over the Lightning Network. No scanning QR codes or pasting invoices."
        />
        <meta
          property="og:image"
          content="https://imgur.com/a/T3UC3nt"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@andreneves" />
        <meta name="twitter:creator" content="@andreneves" />
        <meta name="twitter:title" content="The Lightning Address" />
        <meta name="twitter:description" content="Like an email address, but for your Bitcoin. A massively simpler way for anyone to send you Bitcoin instantly on the Lightning Network. No scanning QR codes or pasting invoices." />
        <meta name="twitter:image" content="https://imgur.com/a/T3UC3nt" />

        <script defer data-domain="bmail.luvnft.com" src="https://plausible.io/js/plausible.js" />
      </Head>
      <Wrapper>
        <Hero />
        <Benefits />
        <Paths />
        <Providers />
        <Community />
        <Footer />
      </Wrapper>
    </>
  );
}
