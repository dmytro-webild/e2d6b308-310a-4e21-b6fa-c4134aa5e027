"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { Shield, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="none"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Crumblez"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      background={{
        variant: "gradient-bars",
      }}
      title="Fresh, Bold, Unapologetic."
      description="Crumblez brings you streetwear that defines the moment. High-quality designs for those who break the mold."
      testimonials={[
        {
          name: "Alex R.",
          handle: "@alexstreet",
          testimonial: "The quality is insane, best fits I've owned.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j46zc5&_wi=1",
        },
        {
          name: "Maya J.",
          handle: "@mayacloth",
          testimonial: "Crumblez designs are just on another level.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dmu4jm&_wi=1",
        },
        {
          name: "Sam K.",
          handle: "@samstyle",
          testimonial: "Always getting compliments in these pieces.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=30iz1p&_wi=1",
        },
        {
          name: "Jordan P.",
          handle: "@jordy_fashion",
          testimonial: "Bold and comfortable, my new go-to brand.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=x485rl&_wi=1",
        },
        {
          name: "Taylor V.",
          handle: "@tay_street",
          testimonial: "Obsessed with the cut and fabric quality.",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ll87i6&_wi=1",
        },
      ]}
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-4xjucgiw.jpg?_wi=1"
      imageAlt="Crumblez clothing hero"
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-4xjucgiw.jpg",
          alt: "Happy customer",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108794-7qn3wq5z.png",
          alt: "Fashion influencer",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-0q5px3zx.png",
          alt: "Brand fan",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-7ilny9w7.png",
          alt: "Urban explorer",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-0opzksy8.png",
          alt: "Trendsetter",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "LIMITED DROPS",
        },
        {
          type: "text-icon",
          text: "PREMIUM FABRIC",
          icon: Sparkles,
        },
        {
          type: "text",
          text: "GLOBAL SHIPPING",
        },
        {
          type: "text-icon",
          text: "STREET CERTIFIED",
          icon: Shield,
        },
        {
          type: "text",
          text: "UNAPOLOGETIC STYLE",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Redefining Streetwear"
      buttons={[
        {
          text: "Learn More",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Crumblez Original Tee",
          price: "$35",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108794-7qn3wq5z.png",
        },
        {
          id: "p2",
          name: "Vibe Hoodie Blue",
          price: "$75",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-0q5px3zx.png",
        },
        {
          id: "p3",
          name: "Classic Logo Cap",
          price: "$30",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-7ilny9w7.png",
        },
        {
          id: "p4",
          name: "Midnight Edition Tee",
          price: "$40",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-0opzksy8.png",
        },
        {
          id: "p5",
          name: "Logo Graphic Hoodie",
          price: "$80",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-4xjucgiw.jpg?_wi=2",
        },
        {
          id: "p6",
          name: "Crumblez Beanie",
          price: "$25",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j46zc5&_wi=2",
        },
      ]}
      title="Current Collection"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Chris B.",
          role: "Fan",
          testimonial: "Best brand out right now.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=j46zc5&_wi=3",
        },
        {
          id: "2",
          name: "Jen D.",
          role: "Influencer",
          testimonial: "The graphics are fire, need everything.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=dmu4jm&_wi=2",
        },
        {
          id: "3",
          name: "Luke F.",
          role: "Customer",
          testimonial: "Shipping was fast and fit is perfect.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=30iz1p&_wi=2",
        },
        {
          id: "4",
          name: "Sarah H.",
          role: "Fan",
          testimonial: "So comfortable, I wear it daily.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=x485rl&_wi=2",
        },
        {
          id: "5",
          name: "Mike P.",
          role: "Customer",
          testimonial: "Top tier quality and style.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ll87i6&_wi=2",
        },
      ]}
      title="What They Say"
    />
  </div>

  <div id="social" data-section="social">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Fashion Daily",
        "Urban Culture",
        "Streetwear Times",
        "Modern Apparel",
        "Youth Style",
        "Urban Vibes",
        "Trend Setter",
      ]}
      title="As Seen In"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long for shipping?",
          content: "Orders arrive in 3-5 business days.",
        },
        {
          id: "f2",
          title: "Can I return items?",
          content: "Returns accepted within 14 days.",
        },
        {
          id: "f3",
          title: "Do you ship worldwide?",
          content: "Yes, we ship globally.",
        },
      ]}
      title="Quick Answers"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Stay Updated"
      description="Sign up for new drops."
      mediaAnimation="slide-up"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BYVqUGh9AA7nPixj8GIA5myirn/uploaded-1776285108795-4xjucgiw.jpg?_wi=3"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Crumblez"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All",
              href: "#products",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
