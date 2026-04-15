import Hero from './Hero';
import Projects from './Projects';

const Main = () => {
  return (
    <main className="flex flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden">
      <Hero />
      <Projects />
    </main>
  );
};

export default Main;
