//*barrel file
import { 
    Navbars, 
    HomeSection, 
    AboutSection, 
    ServicesSection, 
    InfoSection, 
    CardsSection, 
    PlanSection, 
    ConversationSection, 
    FormSection, 
    FooterSection, 
    CustomCursor,
} from './components'; // Solo importa desde el archivo index.jsx
import useMenu from './hooks/useMenu'


function App() {
    const [isOpen, toggleMenu] = useMenu();

    return (
        <>
        <CustomCursor />
            <Navbars isOpen={isOpen} toggleMenu={toggleMenu} />
            <main>
                <section id="home">
                    <HomeSection />  
                </section>

                <section id="we">
                    <AboutSection /> {/* Lo mismo para AboutSection */}
                </section>

                <section className="services" id="services">
                    <ServicesSection /> {/* También para Services */}
                </section>

                <section className="info">
                    <InfoSection />
                </section>

                <section className="cards" id="planes">
                    <CardsSection />
                </section>

                <section className="plan">
                    <PlanSection />
                </section>

                <section className="conversation">
                    <ConversationSection/>
                </section>
                <section className="link__form">
                    <FormSection/>
                </section>
            </main>
            <FooterSection/> 
        </>
    );
}


export default App
