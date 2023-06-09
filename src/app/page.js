'use client';
import { useRef } from 'react';
import Head from 'next/head';

import LandingPage from '@/components/pages/LandingPage';
import Teams from '@/components/pages/Teams';
import Nav from '@/components/pages/Nav';
import Contact from '@/components/pages/Contact';
import Events from '@/components/pages/Events';
import Menu from '@/components/pages/Menu';
import AboutPage from '@/components/pages/About';
import { FormspreeProvider } from '@formspree/react';

function App() {
	const landingRef = useRef(null);
	const aboutRef = useRef(null);
	const teamsRef = useRef(null);
	const eventsRef = useRef(null);
	const contactRef = useRef(null);

	return (
		<>
			<FormspreeProvider project='2170976576030637424'>
				<Head>
					<title>Sky Lab</title>
				</Head>
				<div className='App'>
					<div className='font-bebasNeue relative bg-customDarkPurple flex flex-row justify-center text-customLightPink tracking-[0.16em]'>
						<Nav
							refs={{ aboutRef, landingRef, teamsRef, eventsRef, contactRef }}
						/>
						<div className=' h-screen overflow-y-scroll scroll-smooth snap-proximity snap-y justify-center w-full'>
							<Menu
								refs={{ aboutRef, landingRef, teamsRef, eventsRef, contactRef }}
							/>
							<LandingPage ref={landingRef} />
							<AboutPage ref={aboutRef} />
							<Teams ref={teamsRef} />
							<Events ref={eventsRef} />
							<Contact ref={contactRef} />
						</div>
					</div>
				</div>
			</FormspreeProvider>
		</>
	);
}

export default App;
