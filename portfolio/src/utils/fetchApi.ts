import { Experience, PageInfo, Project, Skill, Social } from "@/typings";

export const fetchPageInfo = async()  =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPageInfo`);
    const data = await res.json();

    const pageInfo : PageInfo = data.pageInfo;

    return pageInfo;
}

export const fetchSocials = async()  =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSocials`);
    const data = await res.json();

    const skills : Social[] = data.socials;

    return skills;
}

export const fetchExperinces = async()  =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getExperience`);
    const data = await res.json();

    const experiences : Experience[] = data.experiences;

    return experiences;
}

export const fetchProjects = async()  =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);
    const data = await res.json();

    const projects : Project[] = data.project

    return projects;
}

export const fetchSkills = async()  =>{

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getSkills`);
    const data = await res.json();

    const skills : Skill[] = data.skills;

    return skills;
}