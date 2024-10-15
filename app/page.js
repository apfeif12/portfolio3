import About from "@/components/About";
import ContactsInfo from "@/components/ContactsInfo";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";

const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
    ssr: false,
});

const Page = () => {
    return (
        <GlitcheLayout onepage={true}>
            <Hero mouse={true} />
            <About />
            <Skills />
            <RecentWorks />
            <ContactsInfo />
        </GlitcheLayout>
    );
};
export default Page;
