import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import { GetStaticProps } from "next";
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";
import run from "../main";
import { useEffect } from "react";
import Link from "next/dist/client/link";

type Props = {
  posts: PostContent[];
};

export default function Index({ posts }: Props) {
  useEffect(() => {
    run();
  }, []);

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <nav className="top-bar">
        <Link href="/">
          <a>
            <img src="/logo.jpg" />
          </a>
        </Link>
        <Link href="/">Home</Link>
        <Link href="/help">Help</Link>
        <Link href="/donate">Donate</Link>
        <Link href="/Dopomohu">Як подати заявку на допомогу</Link>
      </nav>
      <div id="wrapper" className="divided">
        <section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
          <div className="content">
            <h1>UAid Direct</h1>
            <p className="major">To provide direct help to those in Ukraine affected by the war</p>
            <ul className="actions">
              <li>
                <Link href="/donate">
                  <a className="button primary-button big wide smooth-scroll-middle">Donate</a>
                </Link>
              </li>
              <li>
                <a href="/help" className="button big wide smooth-scroll-middle">
                  Help information
                </a>
              </li>
            </ul>
          </div>
          <div className="image">
            <img src="images/cover.jpg" alt="" />
          </div>
        </section>

        <section
          className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
          id="first"
        >
          <div className="content">
            <h2>Our Mission</h2>
            <p>
              To provide direct help to those in Ukraine who do not have a choice in war. Our focus is on helping women
              and children that are often overlooked, neglected, vulnerable and unable to evacuate: orphanages, nursing
              homes, domestic violence shelters, safe homes and hospitals.{" "}
            </p>
            <p>
              We take food, medicine, hygiene supplies and clothing via the quickest and safest route into Ukraine,
              often able to deliver within 48-72 hours of receiving an order. As a completely volunteer-led effort, we
              use 100% of your donations to carry out our mission.
            </p>
            {/* <ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul> */}
          </div>
          <div className="image">
            <img src="images/mission.jpg" alt="" />
          </div>
        </section>

        <section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>Our Approach</h2>
            <p>We work in three simple layers:</p>
            <ol className="actions stacked">
              <li>
                Requests, verification and prioritisation. Each request for help we receive is vetted by a dedicated
                team of four people with direct contacts in Ukraine. We ensure these are highest priority and their need
                for help is urgent.
              </li>
              <li>
                Sourcing and storage. Once verified, each request is picked up by our dedicated sourcing team operating
                in Przemysl, Poland. We do our best to source from existing donations, but our work relies on your help
                with both goods and funding.{" "}
              </li>
              <li>
                Transport and follow up. Once our sourcing team is ready, the goods are labelled and loaded with one of
                our drivers. We use a network of trusted Ukrainian and international drivers.{" "}
              </li>
            </ol>
          </div>
          <div className="image">
            <img src="images/approach.jpg" alt="" />
          </div>
        </section>

        <section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
          <div className="content">
            <h2>About us</h2>
            <p>
              UAid Direct is a volunteer led group of like-minded individuals. As per our mission, we have determined a
              niche where we can be most effective. Some of our group have experience all over the world with various
              crisis situations, others have gained invaluable expertise and knowhow since the start of the war. UAid
              Direct has no religious affiliation.
            </p>
            <h4>Highlights</h4>
            <ul>
              <li>180+ aid deliveries since the beginning of April 2022 to 60+ locations.</li>
              <li>700+ pallets of goods distributed.</li>
              <li>11,000,000L worth of water purification tablets distributed across all the front line oblasts.</li>
              <li>Medical supplies ranging from cancer, trauma, psychiatric, female care to over the counter. </li>
              <li>Generators supporting hospitals, GP practices and liberated communities </li>
              <li>Tens of tons of non-perishable food. </li>
            </ul>
            {/* <ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul> */}
          </div>
          <div className="image">
            <img src="images/about_us.jpg" alt="" />
          </div>
        </section>

        <section className="wrapper style1 align-center">
          <div className="inner">
            <h2>Our Completed Missions</h2>
          </div>

          <div className="gallery style2 medium lightbox onscroll-fade-in">
            {posts.map((x) => (
              <article key={x.slug}>
                <a href={`/missions/${x.slug}`} className="image">
                  <img src={`/images/${x.image}`} alt="" />
                </a>
                <div className="caption">
                  <h3>{x.title}</h3>
                  <ul className="actions fixed">
                    <li>
                      <span className="button small">View</span>
                    </li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrapper style1 align-center" id="donations">
          <div className="inner">
            <h2>How you can help</h2>
            <p>100% of donations are used to carry out our mission.</p>
            <div className="items style1 medium onscroll-fade-in">
              <section>
                <span className="icon solid style2 major fa-box"></span>
                <h3>Donate Goods</h3>
                <p>Food, medicine, hygiene items, clothing and equipment.</p>
              </section>
              <section>
                <span className="icon solid style2 major fa-wallet"></span>
                <h3>Financial Donations</h3>
                <p>
                  These can be general or specific. For example, for helping children, helping with our transport
                  network (vehicle purchase or fuel costs) or for specific goods.
                </p>
              </section>
              <section>
                <span className="icon solid style2 major fa-heart"></span>
                <h3>Help Us</h3>
                <p>
                  We welcome your help. If you would like to help us with transport, warehousing or sourcing get in
                  touch.
                </p>
              </section>
            </div>
            <ul style={{ display: "flex", justifyContent: "center", listStyle: "none" }}>
              <li style={{ padding: 0 }}>
                <Link href="/donate">
                  <a className="button primary-button big wide smooth-scroll-middle">Donate</a>
                </Link>
              </li>
              <li>
                <a href="/help" className="button big wide smooth-scroll-middle">
                  More information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="gfm-embed"
              data-url="https://www.gofundme.com/f/uaid-direct-humanitarian-relief-for-ukraine/widget/large/"
            ></div>
          </div>
        </section>
        {/* <section className="wrapper style1 align-center" id="donations">
          <div className="inner">
            <h2>Financial donations</h2>
            <p>Please email <a href="mailto:Uaid.direct@gmail.com">Uaid.direct@gmail.com</a> for donation opportunities</p>
							<h3>Money transfer</h3>
							<ul style={{listStyle: 'none'}}>
								<li>Account beneficiary: Konrad Malinowski</li>
								<li>IBAN: GB11 REVO 0099 7043 0265 56</li>
								<li>BIC/SWIFT: REVOGB21</li>
								<li>Reference: <b>UAid Direct</b></li>
							</ul>
            <p>Please let us know when you have transferred money so we can properly thank you.</p>
            <h3>GoFundMe</h3>
            <a href="https://gofund.me/05186f58">UAid Direct</a>
          </div>
        </section> */}

        <footer className="wrapper style1 align-center">
          <div className="inner">
            <p>UAid Direct is a Ukrainian registered charity foundation. Reg number: 44710733</p>
            <ul className="icons">
              <li>
                <a
                  href="https://www.facebook.com/UAid.Direct/"
                  target="_blank"
                  className="icon brands style2 fa-facebook-f"
                >
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/uaid.direct/"
                  className="icon brands style2 fa-instagram"
                  target="_blank"
                >
                  <span className="label">Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, 1000);
  return {
    props: {
      posts,
    },
  };
};
