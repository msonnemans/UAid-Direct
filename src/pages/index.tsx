import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
			<div id="wrapper" className="divided">

					<section className="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div className="content">
              <img src="images/logo.jpeg" style={{width: '30vh'}}/>
							<h1 style={{display: 'none'}}>UAid Direct</h1>
							<p className="major">We bring direct help to those in Ukraine who do not have a choice in war</p>
							<ul className="actions stacked">
								<li><a href="#first" className="button big wide smooth-scroll-middle">Help us now</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/cherkasy-0b-2.jpg" alt="" />
						</div>
					</section>

					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
						<div className="content">
							<h2>Our Mission</h2>
							<p>To provide direct help to those in Ukraine who do not have a choice in war. Our focus is on helping women and children that are often overlooked, neglected, vulnerable and unable to evacuate: orphanages, nursing homes, domestic violence shelters, safe homes and hospitals. </p>
              <p>We take food, medicine, hygiene supplies and clothing via the quickest and safest route into Ukraine, often able to deliver within 48-72 hours of receiving an order. As a completely volunteer-led effort, we use 100% of your donations to carry out our mission.</p>
							<ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/cherkasy-0b-1.jpg" alt="" />
						</div>
					</section>

					<section className="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>Our Approach</h2>
							<p>We work in three simple layers:</p>
							<ol className="actions stacked">
								<li>Requests, verification and prioritisation. Each request for help we receive is vetted by a dedicated team of four people with direct contacts in Ukraine. We ensure these are highest priority and their need for help is urgent.</li>
                <li>Sourcing and storage. Once verified, each request is picked up by our dedicated sourcing team operating in Przemysl, Poland. We do our best to source from existing donations, but our work relies on your help with both goods and funding. </li>
                <li>Transport and follow up. Once our sourcing team is ready, the goods are labelled and loaded with one of our drivers. We use a network of trusted Ukrainian and international drivers. </li>
							</ol>
						</div>
						<div className="image">
							<img src="images/front-3.jpeg" alt="" />
						</div>
					</section>

					<section className="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
						<div className="content">
							<h2>About us</h2>
							<p>UAid Direct is a volunteer led group of like-minded individuals. As per our mission, we have determined a niche where we can be most effective. Some of our group have experience all over the world with various crisis situations, others have gained invaluable expertise and knowhow since the start of the war. </p>
							<ul className="actions stacked">
								<li><a href="#" className="button">Learn More</a></li>
							</ul>
						</div>
						<div className="image">
							<img src="images/1 IF 3.jpg" alt="" />
						</div>
					</section>


					{/* <section className="wrapper style1 align-center">
						<div className="inner">
							<h2>Our Completed Missions</h2>
						
						</div>

							<div className="gallery style2 medium lightbox onscroll-fade-in">
								<article>
									<a href="images/gallery/fulls/01.jpg" className="image">
										<img src="images/gallery/thumbs/01.jpg" alt="" />
									</a>
									<div className="caption">
										<h3>Ipsum Dolor</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className="actions fixed">
											<li><span className="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/02.jpg" className="image">
										<img src="images/gallery/thumbs/02.jpg" alt="" />
									</a>
									<div className="caption">
										<h3>Feugiat Lorem</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className="actions fixed">
											<li><span className="button small">Details</span></li>
										</ul>
									</div>
								</article>
								<article>
									<a href="images/gallery/fulls/03.jpg" className="image">
										<img src="images/gallery/thumbs/03.jpg" alt="" />
									</a>
									<div className="caption">
										<h3>Magna Amet</h3>
										<p>Lorem ipsum dolor amet, consectetur magna etiam elit. Etiam sed ultrices.</p>
										<ul className="actions fixed">
											<li><span className="button small">Details</span></li>
										</ul>
									</div>
								</article>							
							</div>

					</section> */}


					<section className="wrapper style1 align-center">
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
									<p>These can be general or specific. For example, for helping children, helping with our transport network (vehicle purchase or fuel costs) or for specific goods.</p>
								</section>
								<section>
									<span className="icon solid style2 major fa-heart"></span>
									<h3>Help Us</h3>
									<p>We welcome your help. If you would like to help us with transport, warehousing or sourcing get in touch.</p>
								</section>								
							</div>
						</div>
					</section>		

					<footer className="wrapper style1 align-center">
						<div className="inner">
							<ul className="icons">
								<li><a href="https://www.facebook.com/UAid.Direct/" target="_blank" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
								<li><a href="https://www.instagram.com/uaid.direct/" className="icon brands style2 fa-instagram" target="_blank"><span className="label">Instagram</span></a></li>
							</ul>
						</div>
					</footer>

			</div>
    </Layout>
  );
}
