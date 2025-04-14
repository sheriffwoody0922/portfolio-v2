import { useEffect, useState } from 'react';
import locationPin from '../../assets/img/locationPin.png';
import hero1 from '../../assets/img/hero1.png';
import resume from '../../assets/pdf/HarryAndreasyanResume.pdf';
import EmailOptions from './EmailOptions';

const Hero = props => {
    const [isAnimated1, setIsAnimated1] = useState(true);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);

    useEffect(() => {

        // const timer = setTimeout(() => {
        //     if (isAnimated1) {
        //         setIsAnimated2(!isAnimated2); // Set        
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated2) {
        //         setIsAnimated3(!isAnimated3); // Set        
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000   + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        //     if (isAnimated3) {
        //         setIsAnimated1(!isAnimated1); // Set        
        //         setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //         setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
        //     }
        // }, 2000);
        // console.log(new Date().getSeconds());

        const timer = setTimeout(() => {
            setIsAnimated2(!isAnimated2); // Set
            setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000); // Remove (2000 + 2000 = 4 sec animation)
            setTimeout(() => {
                setIsAnimated3(!isAnimated3); // Set
                setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000); // Remove
                setTimeout(() => {
                    setIsAnimated1(!isAnimated1); // Set
                    setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000); // Remove
                }, 1000);
            }, 2000);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [isAnimated1, isAnimated2, isAnimated3]);

    const commonClasses = 'inline-block subpixel-antialiased';
    const commonBigTextClasses = 'text-5xl md:text-7xl lg:text-8xl';
    const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl ${commonClasses} ${isAnimated1 && 'name-gradient'}`;
    const tailwindClassSenior = `${commonBigTextClasses} ${commonClasses} ${isAnimated2 && 'first-word-gradient'} lg:pt-4 md:ml-0 lg:ml-2`;
    const tailwindClassSoftware = `${commonBigTextClasses} ${commonClasses} ${isAnimated3 && 'second-word-gradient'} md:ml-0 lg:ml-6`;
    const tailwindClassEngineer = `pb-4 ${commonBigTextClasses} ${commonClasses} ${isAnimated3 && 'second-word-gradient'} md:ml-0 lg:ml-12`;

    return (
        <div class='hero min-h-85vh'>
            <div class='text-left hero-content items-start'>
                <div>
                    <img src={hero1} alt='Hrayr Andreasyan in the street.' class='mt-10 hidden lg:block lg:mt-16 lg:max-w-xs xl:max-w-md' />
                </div>
                <div class='max-w-2xl mt-12'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Yerevan, Armenia</p>
                    <h1 class='mb-5 font-bold font-poppins'>
                        <span class={tailwindClassName}>Hrayr Andreasyan,</span><br />
                        <span class={tailwindClassSenior}>Senior </span><br />
                        <span class={tailwindClassSoftware} >Software</span><br />
                        <span class={tailwindClassEngineer} >Engineer</span>
                    </h1>
                    {/* <p class='my-8 md:my-16 text-neutral xl:leading-loose'>
                        I am Hrayr, also known as Harry, a Senior Software Engineer based in Yerevan, Armenia.  Specializing in building fast, scalable web apps with the latest tech. I’m big on clean code, love mentoring, and always look for smart ways to solve tricky problems. Turning complicated stuff into simple, useful things that people actually enjoy using.
                    </p> */}
                    <a href={resume} target='_blank' rel="noreferrer" class='btn mr-10 btn-md text-xs mb-5 sm:mb-0'>Get my Resume</a>
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:hrair5@inbox.ru' target='_blank' rel="noreferrer" class="btn btn-outline btn-md text-xs px-12">hrair5@inbox.ru</a>
                        <EmailOptions />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;