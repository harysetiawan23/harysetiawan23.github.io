const workExperienceBuilder = (
  job,
  company,
  region,
  duration,
  contract,
  type,
  tools,
  responsibility,
  achievement
) => {
  return {
    _job: job,
    _company: company,
    _duration: duration,
    _region: region,
    _contact: contract,
    _type: type,
    _tools: tools,
    _responsibility: responsibility,
    _achievement: achievement,
    get job() {
      return this._job
    },
    get company() {
      return this._company
    },
    get duration() {
      return this._duration
    },
    get region() {
      return this._region
    },
    get contract() {
      return this._contact
    },
    get type() {
      return this._type
    },
    get tools() {
      return this._tools
    },
    get responsibility() {
      return this._responsibility
    },
    get achievement() {
      return this._achievement
    },
    retrieveHTMLString() {
      const htmlPlain = `
        <div class='card'>
        <h3 id="work-role" class="work-role">${this._job}</h3>
        <div id="work-place" class="work-place">
          <p id="work-company" class="work-company">${this._company}</p>
          <p id="work-region" class="work-region">${this._region}</p>
          <p id="work-duration" class="work-duration">${this._duration}</p>
          <p id="work-contract" class="work-contract">${this._contact}</p>
          <p id="work-type" class="work-type">${this._type}</p>
        </div>
        <div id="tools">
          <p><b>Tools : </b> ${this._tools.join(", ")}</p>
          <p class='job-section-header'>Responsibilities</p>
          <ul>
            ${this._responsibility.map(responsibility => `<li>${responsibility}</li>`).join("")}
          </ul>
          <p class='job-section-header'>Achievement</p>
          <ul>
            ${this._achievement.map(achievement => `<li>${achievement}</li>`).join("")}
          </ul>
        </div>
      </div>
      `
      return htmlPlain
    }
  }
}

const parseSkillToPils = skills => skills.map(skill => `<div class="pill">${skill.toUpperCase()}</div>`).join("")

const workAtSlash = workExperienceBuilder(
  "DevOps Engineer",
  "Slash",
  "Denpasar - Bali",
  "April 2023 - December 2023",
  "Full Time",
  "Remote",
  ["AWS", "Terraform", "Confluent Cloud", "Kubernetes", "Docker", "Helm", "ArgoCD", "Traefik Proxy", "ELK", "Circle CI", "bash"],
  [
    "Collaboration and Infrastructure Updates  :  Collaborate effectively with stakeholders to identify and implement essential infrastructure changes and updates, ensuring alignment with organizational goals and objectives.",
    "Resource Provisioning and Management  :  Proficient in deploying and managing a wide range of AWS components, including Amazon S3, Amazon Elastic Kubernetes Service(EKS), Application Load Balancers(ALB), Amazon CloudFront, Worker Nodes, and integrating Web Application Firewall(WAF) as required.Utilize Terraform to maintain infrastructure as code within designated workspaces while strictly adhering to AWS IAM Role - based authorization.",
    "CI / CD Oversight  :  Oversee and maintain continuous integration processes to guarantee the smooth operation of the software development pipeline, facilitating efficient and automated code deployments.",
    "Security Enforcement  :  Enforce the principle of Least Privilege when provisioning resources, prioritizing security by minimizing unnecessary access and permissions, thereby safeguarding system integrity.",
    "Collaborative Troubleshooting  :  Collaborate with developers to troubleshoot and resolve issues, ensuring system reliability and optimal performance, with a focus on timely issue resolution.",
    " Dependency Management  :  Address and rectify dependency - related issues and proactively",
  ],
  [
    "Successfully Provision and Upgrade New Kubernetes Cluster and Its Supporting Tools like ALB, ACM, Ingress Proxy",
    "Successfully Implement Least Previliege on Infra Project and Permission",
    "Successfully Provision Monitoring Tools using ELK"
  ]
)

const workAtDFlow = workExperienceBuilder(
  "DevOps Engineer",
  "DFlow",
  "Denpasar - Bali",
  "June 2021 - April 2023",
  "Full Time",
  "Remote",
  ["AWS", "Terraform", "Kubernetes", "Bitbucket CI", "Portainer", "Argo CD", "Istio", "bash"],
  [
    "System Architecture Design: Develop and implement robust system architectures for Kubernetes clusters, ensuring scalability, availability, and reliability.",
    "Resource Management: Implement and manage essential resources on Kubernetes, including AWS Application Load Balancer (ALB), access keys, Simple Email Service (SES), and CloudFront to optimize service delivery.",
    "Resource Monitoring: Effectively monitor resources and troubleshoot slow response times to maintain optimal performance and user experience.",
    "Database Migration and Environmental Setup: Execute database migrations and establish environments to support smooth and secure data transitions.",
    "Service Migration: Led the migration of services from shared hosting to containerized solutions within Kubernetes, ensuring minimal disruptions and improved efficiency.",
    "Collaboration with Developers: Actively collaborate with developers to enhance service effectiveness and efficiency, focusing on making services more reliable and performing efficiently.",
    "Stakeholder Collaboration: Engage with stakeholders to define and refine system architecture, ensuring alignment with organizational goals and objectives."
  ],
  [
    "Successfully Migrate Existing on-premiese deployment to Kubernetes Cluster with Supporting Tools like ALB, ACM, Cloudfront",
    "Successfully Designing Architecture for DFlow's SAAS Product",
    "Successfully Provision Monitoring Tools using Prometheus + Grafana"
  ]
)

const workDevopsAtChainToB = workExperienceBuilder(
  "DevOps Engineer",
  "PT Chaintob International",
  "Badung, Bali",
  "January 2021 - June 2021",
  "Full Time",
  "On-site",
  ["AWS", "Docker Swarm", "Gitlab", "Node-Red", "Kong API Gateway"],
  [
    "System Architecture Design: Create and implement robust system architectures for Docker Swarm clusters, emphasizing scalability, fault tolerance, and reliability.",
    "Resource Management: Implement and manage critical resources on Docker Swarm, including AWS Application Load Balancer (ALB), access keys, and Simple Email Service (SES), to optimize service delivery.",
    "Resource Monitoring: Proficiently monitor resources and troubleshoot slow response times to maintain peak performance and a positive user experience.",
    "Database Migration and Environmental Setup: Execute database migrations and set up environments to support secure and seamless data transitions.",
    "API Marketplace Architecture: Design and architect API marketplace services, leveraging Kong API Gateway for improved efficiency and reliability.",
    "Collaboration with Developers: Actively collaborate with developers to enhance service effectiveness and efficiency, focusing on delivering reliable and efficient services."
  ],
  [
    "Successfully Migrate Existing on-premise deployment to Docker Swarm",
    "Design and architect API marketplace services using Kong API Gateway",
    "Effectively Monitor Resources and troubleshoot performance issues"
  ]
);

const workBackendAtChaintoB = workExperienceBuilder(
  "Backend Engineer",
  "PT Chaintob International",
  "Badung, Bali",
  "March 2020 - June 2021",
  "Full Time",
  "On-site",
  ["AWS", "Docker Swarm", "Gitlab", "Node-Red", "Kong API Gateway", "NodeJS", "Strapi", "NestJS", "RestAPI"],
  [
    "Backend Service Development: Create and manage multiple backend services using Strapi and Node.js, ensuring robust and scalable solutions.",
    "Business Process Translation: Collaborate with stakeholders to effectively translate business processes into application requirements, aligning technology solutions with organizational objectives.",
    "Feature Delivery: Maintain and deliver features on schedule, ensuring a seamless development process and meeting project milestones.",
    "Docker Swarm Hosting: Host services in Docker Swarm, managing containerized deployments and ensuring service availability and reliability.",
    "Serverless Development: Research and create serverless services, emphasizing low-code/no-code development using Node-RED for efficient and cost-effective solutions.",
    "AI-Enabled API Services: Develop API services with AI capabilities, including Face Recognition, to enhance functionality and provide innovative solutions."
  ],
  [
    "Effectively translate business processes into application requirements",
    "Host services in Docker Swarm, ensuring availability and reliability",
    "Research and implement serverless services using Node-RED"
  ]
);

const workAtStarworks = workExperienceBuilder(
  "Backend Engineer",
  "Starworks Global Pte. Ltd",
  "Badung, Bali",
  "June 2019 - March 2020",
  "Full Time",
  "On-site",
  ["NodeJS", "Strapi", "NestJS", "RestAPI", "Web3", "Ethereum Network", "Python"],
  [
    "Backend Service Development: Create and manage multiple backend services using Nest.js, ensuring scalability, maintainability, and adherence to industry best practices.",
    "Blockchain Transaction Services: Develop backend services that facilitate and execute blockchain transactions, optimizing security, transparency, and efficiency.",
    "Business Process Translation: Collaborate with stakeholders to effectively translate intricate business processes into application requirements, aligning technology solutions with organizational goals and needs."
  ],
  [
    "Develop backend services for blockchain transactions",
    "Translate intricate business processes into application requirements",
    "Ensure scalability and maintainability of backend services"
  ]
);

const workAtBookandlink = workExperienceBuilder(
  "DevOps Engineer",
  "Bookandlink",
  "Badung, Bali",
  "June 2023 - present",
  "Part Timer, Project Base",
  "Remote",
  ["AWS", "Terraform", "Bitbucket CI", "ArgoCD", "Helm", "Datadog"],
  [
    "Database Monitoring: Implement Datadog APM monitoring tools for database systems, ensuring optimal performance and troubleshooting capabilities.",
    "Cloud Migration: Facilitate the migration process from on-premises to AWS Cloud, utilizing Kubernetes, Terraform, ArgoCD, and Bitbucket for efficient and controlled transitions.",
    "Database Migration: Assist in migrating databases using AWS Database Migration Service (DMS) to ensure data integrity and minimal downtime."
  ],
  [
    "Implement Datadog APM for optimal database performance",
    "Facilitate efficient and controlled cloud migration to AWS",
    "Assist in database migration using AWS DMS"
  ]
);

const workAtJetwings = workExperienceBuilder(
  "DevOps Principle Implementation and Service Hosting Setup",
  "Jetwings",
  "Badung, Bali",
  "June 2023 - present",
  "Part Timer, Project Base",
  "Remote",
  ["Ubuntu", "Docker-Swarm", "Golang", "Github Action", "Traefik Proxy"],
  [
    "Infrastructure Management: Establish and manage infrastructure on Ubuntu using Docker Swarm, ensuring robust and scalable solutions.",
    "Service Proxy Management: Manage service proxies effectively with Traefik to route and balance traffic efficiently.",
    "DevOps and Containerization: Implement Continuous Integration and Continuous Deployment (CI/CD) pipelines and containerization for ERP services, optimizing development and deployment processes.",
    "Dependency Refactoring: Enhance ERP's backend by refactoring dependencies, improving system performance, and maintainability."
  ],
  [
    "Establish and manage infrastructure on Ubuntu using Docker Swarm",
    "Effectively manage service proxies with Traefik for efficient traffic routing",
    "Implement CI/CD pipelines and containerization for ERP services",
    "Enhance ERP's backend by refactoring dependencies"
  ]
);


const workExperience = [workAtSlash.retrieveHTMLString(), workAtDFlow.retrieveHTMLString(), workDevopsAtChainToB.retrieveHTMLString(), workBackendAtChaintoB.retrieveHTMLString(), workAtStarworks.retrieveHTMLString()].join("")
const skillSet = parseSkillToPils(['AWS', 'Kubernetes', 'Docker', 'Github', 'Bitbucket', 'ArgoCD', 'Helm', 'Terraform', 'CDN', 'Cloudflare (TUNNEL)', 'Twingate'])
const projectExperience = [workAtBookandlink.retrieveHTMLString(), workAtJetwings.retrieveHTMLString()].join("")

const workSection = document.getElementById('experience')
workSection.innerHTML = workExperience

const skillSection = document.getElementById('skills-pills')
skillSection.innerHTML = skillSet

const projectSection = document.getElementById('project-experience')
projectSection.innerHTML = projectExperience

let menuExpanded = false
const hamburgerButtonMenu = document.getElementById('hamburger-menu')
const hamburgerMenu = document.getElementById('mobile-menu')

const showMenu = (isMenuShowed) => {
  if (isMenuShowed) {
    hamburgerButtonMenu.classList.remove('fa-bars')
    hamburgerButtonMenu.classList.add('fa-x')
  } else {
    hamburgerButtonMenu.classList.add('fa-bars')
    hamburgerButtonMenu.classList.remove('fa-x')
  }

  hamburgerMenu.style.display = isMenuShowed ? 'block' : 'none'
}

hamburgerButtonMenu.addEventListener('click', (e) => {
  menuExpanded = !menuExpanded
  showMenu(menuExpanded)
})

hamburgerMenu.addEventListener('click', (e) => {
  menuExpanded != menuExpanded
  showMenu(false)
})