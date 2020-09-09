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
      <img src="/favicon-192.png" alt="Zeal Logo" className="logo" /> <br />
      <h1 className="title">
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
  </div>
);

Home.getInitialProps = async () => {
  const repos = await getDocsets();
  return { repos };
};

export default Home;
