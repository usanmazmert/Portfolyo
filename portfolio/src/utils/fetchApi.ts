import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";

export const fetchPageInfo = async()  =>{
    const query = groq`
    *[_type == "pageInfo"][0]
    `;

    const pageInfo: PageInfo = await sanityClient.fetch(query);
    return pageInfo;
}

export const fetchSocials = async()  =>{

    const query = groq`
        *[_type == "social"]{
        ..., 
        }
    `;

    const socials: Social[] = await sanityClient.fetch(query);

    return socials;
}

export const fetchExperinces = async()  =>{
    const query = groq`
        *[_type == "experience"]{
        ...,
        technologies[]->
        }
    `;
    const experiences: Experience[] = await sanityClient.fetch(query);

    return experiences;
}

export const fetchProjects = async()  =>{
    const query = groq`
        *[_type == "project"]{
            ...,
            technologies[]->
        }
    `;
   const projects: Project[] = await sanityClient.fetch(query);

    return projects;
}

export const fetchSkills = async()  =>{
    const query = groq`
        *[_type == "skill"]
    `;

    const skills: Skill[] = await sanityClient.fetch(query);
    return skills;
}