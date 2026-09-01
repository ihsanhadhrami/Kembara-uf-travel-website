import React from "react";
import "@/index.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import ServiceGrid from "@/components/ServiceGrid";
import DestinationGrid from "@/components/DestinationGrid";
import SocialProof from "@/components/SocialProof";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

function App() {
    return (
        <SmoothScroll>
            <div
                data-testid="app-root"
                className="relative bg-uf-navy text-uf-cream overflow-x-hidden"
            >
                <Nav />
                <main>
                    <Hero />
                    <Marquee />
                    <Manifesto />
                    <ServiceGrid />
                    <DestinationGrid />
                    <SocialProof />
                    <BookingCTA />
                </main>
                <Footer />
            </div>
        </SmoothScroll>
    );
}

export default App;
