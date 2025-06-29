import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { Hero, Navbar } from './components';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />

            <div className={'h-dvh bg-black'} />
        </main>
    );
};
