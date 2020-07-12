
import Head from "next/head";
import HeadContent from "./HeadContent";
import { Container } from "semantic-ui-react";
import Header from "./Header";


function Layouts({ children, user }) {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.3.1/antd.css" />

        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />

        <link rel="stylesheet" type="text/css" href="/assets/landingpage/lib/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/landingpage/lib/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/landingpage/lib/animate/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/landingpage/lib/venobox/venobox.css" />

        <link rel="stylesheet" type="text/css" href="/assets/landingpage/lib/owlcarousel/assets/owl.carousel.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/landingpage/css/style.css" />
        <link rel="stylesheet" type="text/css" href="/assets/landingpage/css/App.css" />

        <script type="text/javascript" src="/assets/landingpage/lib/jquery/jquery.min.js"></script>
        <script type="text/javascript" src="/assets/landingpage/lib/jquery/jquery-migrate.min.js"></script>

        <script type="text/javascript" src="/assets/landingpage/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script type="text/javascript" src="/assets/landingpage/lib/easing/easing.min.js"></script>

        <script type="text/javascript" src="/assets/landingpage/lib/superfish/hoverIntent.js"></script>
        <script type="text/javascript" src="/assets/landingpage/lib/superfish/superfish.min.js"></script>

        <script type="text/javascript" src="/assets/landingpage/lib/wow/wow.min.js"></script>
        <script type="text/javascript" src="/assets/landingpage/lib/venobox/venobox.min.js"></script>
        <script type="text/javascript" src="/assets/landingpage/lib/owlcarousel/owl.carousel.min.js"></script>

        <script type="text/javascript" src="/assets/landingpage/js/main.js"></script>






        <title>ReactReserve</title>
      </Head>
      <Header user={user} />
      <Container text style={{ paddingTop: "1em" }}>
        {children}
      </Container>
    </>
  );
}

export default Layouts;
