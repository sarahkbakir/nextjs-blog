import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Card from '../components/Card'
import Blog from "./Blog";


export default function Home({}) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
     
      <section className={utilStyles.headingMd}>
   
      </section>

      {/* blog section */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Blog">
          <a>
            <h2 className={utilStyles.headingLg}>Blog</h2>
          </a>
        </Link>
      </section>


      {/* Skilss section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/skills">
          <a>
            <h2 className={utilStyles.headingLg}>Skills</h2>
          </a>
        </Link>
      </section>

      {/* certificates and projects section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/certificates">
          <a>
            <h2 className={utilStyles.headingLg}>Projects</h2>
          </a>
        </Link>
      </section>

      {/* contact section */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/Contact">
          <a>
            <h2 className={utilStyles.headingLg}>Contact</h2>
          </a>
        </Link>
      </section>
    </Layout>
  );
}
