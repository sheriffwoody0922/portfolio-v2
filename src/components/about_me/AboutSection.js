import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm Harry`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify', 'Linux']}>
                    <ParagraphLight>
                        I got into computers when I was a kid. We didn’t have one at home yet, so I’d go to my friend’s house after school, they had a big beige PC. We used to mess around with this program called <a class='link link-primary' href='https://en.wikipedia.org/wiki/Encarta' target='_blank' rel='noreferrer'>Encarta</a>, it was like a digital encyclopedia, and sometimes we’d play old MS-DOS games like Gorillas or Nibbles. Half the time we had no idea what we were doing, but it was super fun. I started learning just by clicking stuff, breaking things, and figuring it out later.
                    </ParagraphLight>
                    <ParagraphLight>
                        Later on, I got curious about how things worked behind the screen. I started playing with simple tricks, like editing websites in the browser or messing around on school computers. That’s when I found out about <a class='link link-primary' href='https://en.wikipedia.org/wiki/Kevin_Mitnick' target='_blank' rel='noreferrer'>Kevin Mitnick</a> and thought he was the coolest guy ever. The way he talked about social engineering and thinking outside the box really stuck with me. I wanted to be like him, not to cause trouble, but to understand how things worked and find ways around the rules.
                    </ParagraphLight>
                    <ParagraphLight>
                        My parents are both psychologists, so they really wanted me to do something more “human-focused.” They pushed me toward social work, and I went along with it. I finished my degree and even worked in that field for a bit. But deep down, I still loved tech. Eventually, I switched paths and got into web development. It felt like coming back home.
                    </ParagraphLight>
                    <ParagraphLight>
                        After switching careers, I started freelancing on platforms like Upwork and Freelancer. At first, I took on small website projects, mostly simple business sites using WordPress. As I got more confident, I moved into e-commerce stuff with WooCommerce and started building medium-sized online stores. It wasn’t always easy, but I loved the freedom and the fact that I was finally doing something I actually enjoyed. Somewhere along the way, I met my wife too, so yeah… things worked out pretty well.
                    </ParagraphLight>
                    <ParagraphLight>
                        But after a while, I started feeling like something was missing. Between 2016 and 2018, the world of programming changed a lot, like Node.js and Python were blowing up, cloud services were everywhere, and web development was moving way beyond just making websites. I realized I didn’t want to stick to small projects forever. I wanted to be part of something bigger, to work with a team, build something cool, and keep learning. So I started looking for new opportunities where I could grow and really level up.
                    </ParagraphLight>
                    <ParagraphLight>
                        That’s when I started working with different companies like Leafcloud, Newsela, Percona, and Zayo. Each one taught me something new. I got experience with cloud service management, database monitoring, project migrations, and remote support for managed services. It was a big step up from building websites alone. Over time, I got really comfortable working with tools like Node.js and Python, and picked up a bunch of other skills along the way. It felt good to be part of real teams, solving real problems.
                    </ParagraphLight>
                    <ParagraphLight>
                        Now, I’m a dad to a daughter and a son, and life’s busier than ever, but in the best way. I still try to learn something new every day, whether it’s testing out a new tech stack, coding small side projects, or just keeping up with what’s happening in the dev world. I’m hoping to join a web development team where I can keep growing and build cool stuff with others. My motto’s pretty simple: “Be positive, be easy, and life will bless you.” So far, it’s working out.                    
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;