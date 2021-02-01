const git = require("nodegit");
const config = require("./config/config");
const axios = require("axios");

function getAllProjects() {
    const axiosInstance = axios.create({});

    return axiosInstance({
        url: `http://${config.url}/api/v4/projects?private_token=${config.token}`,
        method: 'get',
    });
}

async function run() {
    try {
        const response = await getAllProjects();
        const projects = response.data;

        for (let i = 0; i < projects.length; i++) {
            const prj = projects[i];
            if (prj.namespace.name == "GitLab Instance") {
                continue;
            }

            await git.Clone(`http://oauth2:${config.token}@${prj.http_url_to_repo.replace("http://", "")}`, `./projects/${prj.path}`);
        }
    } catch (error) {
        console.log(error);
    }
}

run();