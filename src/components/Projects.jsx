import ProjCard from "./ProjCard";

const proj_gen = (name, repo, img) => {
    return {
        name: name,
        repo: repo,
        img: img
    }
}

const proj_arr = [
    proj_gen("NC Games (Backend)", "https://github.com/iy2k22/nc-games-be", "..."),
    proj_gen("NC Games (Frontend)", "https://github.com/iy2k22/fe-nc-games", "..."),
    proj_gen("benchIt", "https://github.com/valentinbiz/benchIt", "..."),
];

const Projects = () => (
    <div id="projects">
        {proj_arr.map((proj) => (<ProjCard name={proj.name} repo={proj.repo} img={proj.img} />))}
    </div>
);

export default Projects;