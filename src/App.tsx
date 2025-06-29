import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import { Navbar } from './components';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (
        <main>
            <Navbar />
        </main>
    );
};
