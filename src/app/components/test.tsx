'use client';

import { ReactLenis, useLenis } from 'lenis/react';

const ControlledScroll = () => {
    const sections = ['Section 1', 'Section 2', 'Section 3'];
    const lenis = useLenis();

    const scrollToSection = (index: number) => {
        const target = document.getElementById(`section-${index}`);

        if (target) lenis?.scrollTo(target);
    };

    return (
        <ReactLenis root>
            <div>
                <nav className="fixed top-0 left-0 z-10 p-4 bg-gray-800 text-white">
                    {sections.map((_, index) => (
                        <button
                            key={index}
                            className="mx-2"
                            onClick={() => scrollToSection(index)}
                        >
                            Go to {index + 1}
                        </button>
                    ))}
                </nav>
                {sections.map((section, index) => (
                    <section
                        id={`section-${index}`}
                        key={index}
                        className="h-screen flex justify-center items-center text-white text-3xl"
                        style={{
                            background: `hsl(${(index * 60) % 360}, 70%, 50%)`,
                        }}
                    >
                        {section}
                    </section>
                ))}
            </div>
        </ReactLenis>
    );
};

export default ControlledScroll;
