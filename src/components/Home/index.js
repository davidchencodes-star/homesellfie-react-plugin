import { useEffect } from "@wordpress/element";
import HomeHeader from './HomeHeader';
import HomeUsp from './HomeUsp';
import HomeContent from './HomeContent';
import HomeFooter from './HomeFooter';

const Home = () => {

    useEffect(() => {
        const disableHomepageLink = () => {
            setTimeout(() => {
                const logoLinks = document.querySelectorAll('a[href="https://staging.homesellfie.de/"], a[href="https://homesellfie.de/"], a[href="/"]');

                logoLinks.forEach(logoLink => {
                    // Disable pointer & navigation
                    logoLink.style.pointerEvents = "none";
                    logoLink.style.cursor = "default";
                });
            }, 100)
        }

         // Run immediately
        disableHomepageLink();

        // Re-run on resize (debounced for performance)
        let resizeTimer;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(disableHomepageLink, 200);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);
    
    return (
        <>
            <HomeHeader />
            <HomeUsp />
            <HomeContent />
            <HomeFooter />
        </>
    )
}

export default Home;