import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedBlogData } from '../lib/blog'
import Link from 'next/link'
import Date from '../components/date'


export default function Blog ({ allData }) {

    return (
        <Layout BlogSection>
  
          <section className={utilStyles.headingMd}>
            <p>Welcome to my blog, I just wrote a post about how I started my Front-End Development journey from scratch with some useful resources. {<br/>} 
             </p>
    
          </section>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Projects, Skills and certificates :</h2>
            
            <ul className={utilStyles.list}>
              {allData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                <Link href={`/blog/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                {<br/>}{<br/>}
              </li>
              
              ))}
            </ul>
          </section>

  
          </Layout>
  )
}





export async function getStaticProps() {
    const allData = getSortedBlogData()
    return {
      props: {
        allData
      }
    }
  }