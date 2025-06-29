import { cocktailLists, mockTailLists } from '../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            },
        });

        parallaxTimeline
            .from('#c-left-leaf', {
                x: -100,
                y: 100,
            })
            .from('#c-right-leaf', {
                x: 100,
                y: 100,
            });
        gsap.from('.popular ul li', {
            scrollTrigger: {
                trigger: '.popular ul',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            x: -100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
        });

        gsap.from('.loved ul li', {
            scrollTrigger: {
                trigger: '.loved ul',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            x: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
        });
    }, []);
    return (
        <section id="cocktails" className="noisy">
            <img
                src="/images/cocktail-left-leaf.png"
                alt="l-leaf"
                id="c-left-leaf"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="r-leaf"
                id="c-right-leaf"
            />
            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(
                            ({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className="md:me-28">
                                        <h3>{name}</h3>
                                        <p>
                                            {country} | {detail}
                                        </p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(
                            ({ name, country, detail, price }) => (
                                <li key={name}>
                                    <div className="me-28">
                                        <h3>{name}</h3>
                                        <p>
                                            {country} | {detail}
                                        </p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};
