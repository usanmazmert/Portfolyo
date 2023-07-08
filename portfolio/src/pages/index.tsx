import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import {AiOutlineArrowUp} from "react-icons/ai"
import { fetchExperinces, fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from '@/utils/fetchApi'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'

const inter = Inter({ subsets: ['latin'] })


type Props = {
  pageInfo : PageInfo,
  skills? : Skill[],
  experiences? : Experience[],
  projects? : Project[],
  socials? : Social[],

}

export default function Home({pageInfo, socials, experiences, skills, projects} : Props) {

  return (
    <div id='main' onScroll={(e) => {
      const homeBtn : HTMLElement = document.getElementById("home-btn")!;
      const main : Element = document.querySelector("#main")!;
      if(main.scrollTop > 300){
        homeBtn.style.display = "block";
      }else{
        homeBtn.style.display = "none"
      }
    }} className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-hidden'>
      <Head>
        <title>Mert Ali Usanmaz | Portfolyo</title>
      </Head>
      <Header socials={socials} />
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className='snap-center'>
        <WorkExperience projects={experiences} />
      </section>
      <section id="skills" className='snap-center'>
        <Skills skills={skills} />
      </section>
      <section id="projects" className='snap-center'>
        <Projects experiences = {projects} />
      </section>
      <section className='snap-center' id="contact">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link id="home-btn" className='w-10 h-10 fixed hidden right-10 bottom-4 animate-bounce' href="#hero">
        <div className='w-full h-full rounded-sm bg-scrollbar-yellow'>
          <AiOutlineArrowUp color='black' opacity={80} className='mx-auto h-full text-3xl'/>
        </div>
      </Link>

    </div>
  )
}


export const getStaticProps : GetStaticProps<Props> = async () => {

  const pageInfo = await fetchPageInfo();
  const experiences = await fetchExperinces();
  const socials = await fetchSocials();
  const projects = await fetchProjects();
  const skills = await fetchSkills();

  return {
    props: {
      pageInfo,
      experiences,
      socials,
      projects,
      skills
    },

    revalidate: 10
  }
}