import Head from "next/head";
import { getDocsets, truncate } from "../src/utils";

const Home = ({ repos }) => (
  <div className="container">
    <Head>
      <title>Zeal User Contributions</title>
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
      <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png" />
      <link rel="icon" href="/favicon-62.png" sizes="62x62" type="image/png" />
      <link
        rel="icon"
        href="/favicon-192.png"
        sizes="192x192"
        type="image/png"
      />
      <meta
        name="description"
        content="Non-Official Zeal User Contributions Repository - Create by xantiagoma"
      ></meta>
    </Head>

    <main>
      <h1 className="title">
        <img src="/favicon-192.png" alt="Zeal Logo" /> <br />
        Welcome to
        <br />
        Zeal User Contributions
      </h1>

      <p className="description">
        Non-Official Zeal User Contributions Repository
      </p>

      <div className="grid">
        {repos.map(
          ({
            name,
            version,
            "icon@2x": icon2x,
            icon: icon1x,
            author,
            urls,
          }) => {
            const icon = icon2x || icon1x;
            const authorName = author && author.name;
            const authorLink = author && author.link;
            return (
              <div href="#" className="card" key={name}>
                <h3 title={name + " @ " + version}>
                  {!!icon && (
                    <>
                      <img
                        src={"data:image/png;base64," + icon}
                        alt={name + " icon"}
                        title={name + " icon"}
                      />
                      &nbsp;
                    </>
                  )}
                  {truncate(name, 20)} <br />
                  <small>version: {truncate(version, 7)}</small>
                </h3>
                {author && (
                  <>
                    <p>
                      <strong>Author</strong>:{" "}
                      <a href={authorLink}>{authorName}</a>
                    </p>
                    <p>
                      <strong>Download</strong>:&nbsp;
                      {urls.map((url, index) => (
                        <a key={url} href={url} download={true}>
                          mirror#{index + 1}&nbsp;
                        </a>
                      ))}
                    </p>
                    <p>
                      <strong>Feed URL</strong>:{" "}
                      <a href={"/api/docsets/" + name}>XML</a>
                    </p>
                    <p>
                      <strong>Feed URL (.xml)</strong>:{" "}
                      <a href={"/api/docsets/" + name + ".xml"}>XML</a>
                    </p>
                  </>
                )}
              </div>
            );
          }
        )}
      </div>
    </main>

    <footer>
      Create by &nbsp;
      <a href="https://github.com/xantiagoma">
        <code>xantiagoma</code>
      </a>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        flex-wrap: wrap;
        margin-top: 3rem;
        max-width: 90vw;
      }

      .card {
        margin: 1rem auto;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        flex-basis: 47%;
      }

      .card:hover,
      .card:focus,
      .card:active {
        border-color: #0070f3;
      }

      a:hover,
      a:focus {
        color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

Home.getInitialProps = async () => {
  const repos = await getDocsets();
  return { repos };
};

export default Home;
