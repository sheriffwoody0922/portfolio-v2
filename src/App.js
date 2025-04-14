import './App.css';
import Footer from './components/UI/Footer';
import BlogSection from './components/blog_posts/BlogSection';
import ProjectsSection from './components/projects/ProjectsSection';
import AboutSection from './components/about_me/AboutSection';
import Testimonies from './components/about_me/Testimonies';
import ContactSection from './components/contact/ContactSection';
import Header from './components/UI/Header';
import Family from './components/about_me/Family';

// Easter egg
console.log('    __  __     ____                               __    ____',
  '\n   / / / /__  / / /___       _      ______  _____/ /___/ / /',
  '\n  / /_/ / _ \\/ / / __ \\     | | /| / / __ \\/ ___/ / __  / / ',
  '\n / __  /  __/ / / /_/ /     | |/ |/ / /_/ / /  / / /_/ /_/  ',
  '\n/_/ /_/\\___/_/_/\\____( )    |__/|__/\\____/_/  /_/\\__,_(_)   ',
  '\n                     |/                                     ',
  '\n\nThanks for visiting my portfolio site! Please, feel free to contact me using any of these options:',
  '\n📧 Email: work@damiandemasi.com',
  '\n🐤 Twitter: https://twitter.com/DamianDemasi',
  '\n👨‍💼 LinkedIn: https://www.linkedin.com/in/damian-demasi/');

function App() {

  return (
    <>
      {/* Header */}
      <Header />
      {/* Projects */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mb-1'></div>
      <ProjectsSection />
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>
      {/* Blog Posts */}
      <BlogSection />;
      {/* About me */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-10 -mb-1'></div>
      <AboutSection />
      <div class='bg-wave-bottom w-full h-96 bg-no-repeat bg-cover -mt-5'></div>
      <Family />
      {/* Contact */}
      <div class='bg-wave-top w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover mt-8 -mb-1'></div>
      <ContactSection />
      <div class='bg-wave-bottom w-full h-32 lg:h-64 2xl:h-96 bg-no-repeat bg-cover -mt-5'></div>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;