const imgModal = document.getElementById("imgModal");
const imgModalSrc = document.getElementById("imgModalSrc");
const imgClose = document.querySelector(".imgClose");

const projectModal = document.getElementById("projectModal");
const modalBanner = document.getElementById("modalBanner");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalDesc = document.getElementById("modalDesc");
const modalGallery = document.getElementById("modalGallery");
const projectModalContent = document.querySelector(".projectModalContent");

const closeProject = document.querySelector(".closeProject");


// IMAGE ZOOM MODAL

function enableImageZoom(img) {
    img.addEventListener("click", (e) => {
        e.stopPropagation();

        imgModal.classList.add("active");
        imgModalSrc.src = img.src;

        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        document.body.style.position = "";
        document.body.style.width = "";
    });
}

document.querySelectorAll(".zoom-enabled img").forEach(img => {
    enableImageZoom(img);
});

function closeImgModal() {
    imgModal.classList.remove("active");
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
}

imgClose.addEventListener("click", closeImgModal);

imgModal.addEventListener("click", (e) => {
    if (e.target === imgModal) {
        closeImgModal();
    }
});


// PROJECT DATA

const projects = {
    atos: {
        title: "A Taste of Sandari",
        year: "2026",
        banner: "src/ATOS_Banner.png",
        desc: "'A Taste of Sandari' is an annual convention held at Club Ananda, bringing together caterers, suppliers, and various wedding service providers in one venue. The event allows couples and vendors to connect, explore services, and discuss wedding plans in a convenient and engaging setting.",
        images: [
            { type: "video", src: "src/Club Ananda Anniversary Video.webm" },
            { type: "image", src: "src/ATOS poster.webp" },
            { type: "image", src: "src/ATOS Card.webp" }
        ]
    },

    investment_night: {
        title: "Investment Night",
        year: "2026",
        banner: "src/Investment Night_Banner.png",
        desc: "Investment Night is an off-site open-house event that introduces Sandari Calatagan to potential investors through presentations, visuals, and discussions about the community’s lifestyle, masterplan, and investment value.",
        images: [
            { type: "image", src: "src/Investors Night_Invitation_Static_01.webp" },
            { type: "video", src: "src/Investors Night Video Invitation.webm" },
        ]
    },

    sales_connect: {
        title: "Sales Connect",
        year: "2026",
        banner: "src/Sales Connect_Banner.png",
        desc: "Sales Connect is an appreciation and networking event for Sandari’s brokers and sales partners that recognizes top performers, shares updates, and strengthens collaboration through a structured awards and engagement program.",
        images: [
            { type: "image", src: "src/Sales Connect 01.webp" },
            { type: "video", src: "src/GA_Welcome Video.webm" },
            { type: "image", src: "src/Sales Connect 02.webp" },
            { type: "image", src: "src/Sales Connect 03.webp" }
        ]
    },

    wedding_feast: {
        title: "Wedding Feast",
        year: "2026",
        banner: "src/Wedding Feast_Banner.png",
        desc: "Wedding Feast is an intimate wedding showcase event that gathers select suppliers and couples in a curated setting, allowing guests to explore wedding ideas, meet vendors, and experience Sandari’s celebration of love in a more personal scale.",
        images: [
            { type: "image", src: "src/Wedding Feast Poster Invitation.webp" },
        ]
    },

    club_ananda: {
        title: "Club Ananda",
        year: "2026 - Present",
        banner: "src/Club Ananda_Banner.png",
        desc: "Club Ananda is a premier venue brand dedicated to crafting extraordinary experiences in a setting where nature and celebration meet. With its picturesque landscapes, versatile event spaces, and wellness-centered philosophy, Club Ananda has become a sought-after destination for weddings, events, and memorable gatherings in the South.",
        images: [
            { type: "video", src: "src/Club Ananda Ad .webm" },
            { type: "video", src: "src/POV Reel.webm" },
            { type: "image", src: "src/Club Ananda Post 1.png" },
            { type: "image", src: "src/The Wedding Library_Club Ananda.png" },
        ]
    },

    sbatulao: {
        title: "Sandari Batulao",
        year: "2026 - Present",
        banner: "src/Sandari Batulao_Banner.png",
        desc: "Sandari Batulao is a wellness-focused mountain community in Batangas that promotes holistic living through nature, sustainability, and thoughtfully designed spaces. Surrounded by scenic landscapes, it offers a peaceful environment that encourages balance, relaxation, and connection with the outdoors.",
        images: [
            { type: "image", src: "src/ATOS Card.webp" }
        ]
    },

    scalatagan: {
        title: "Sandari Calatagan",
        year: "2026 - Present",
        banner: "src/Sandari Calatagan_Banner.png",
        desc: "Sandari Calatagan is a coastal wellness community in Batangas that blends seaside living with sustainable design and modern amenities. Inspired by the tranquility of the ocean, it offers a serene environment that supports rest, recreation, and a balanced lifestyle.",
        images: [
            { type: "video", src: "src/Calatagan video.webm" }
        ]
    },

    sandbox: {
        title: "Sandbox",
        year: "2024",
        banner: "src/Sandbox.webp",
        desc: "Sandbox is a thesis appreciation and awards night for graduating Multimedia Arts students of De La Salle–College of Saint Benilde, showcasing and recognizing the best works from the batch in a celebration of creativity and excellence.",
        images: [
            { type: "video", src: "src/Sandbox_Video.webm" },
            { type: "image", src: "src/Awards_01.jpg" },
            { type: "image", src: "src/Awards_02.jpg" },
            { type: "image", src: "src/Awards_03.jpg" }
        ]
    },

    bloom: {
        title: "Bloom",
        year: "2023",
        banner: "src/Bloom_Icon.webp",
        desc: "The 'Bloom Project' is a compassionate initiative shedding light on the challenges faced by women with PCOS in the Philippines. Through a website and magazine, it offers a holistic perspective, acknowledging the emotional toll of PCOS alongside its physical effects. By fostering empathy and understanding, the project provides support and resources, empowering women to navigate their journey with resilience and grace. It's a beacon of solidarity and hope, celebrating the strength and beauty that can flourish amidst adversity.",
        images: [
            { type: "image", src: "src/Bloom.webp" },
            { type: "image", src: "src/BloomAboutUs.webp" },
            { type: "image", src: "src/BloomStories.webp" }
        ]
    },

    adrik: {
        title: "Evening with Adrik",
        year: "2021",
        banner: "src/Evening With Adrik.webp",
        desc: "'An Evening with Adrik' is a charitable musical concert aimed at raising funds to support budding artists lacking financial resources. The event's primary objective is to procure new instruments, enabling these talents to pursue their passion with greater ease and proficiency. By attending this concert, patrons not only enjoy an enchanting musical experience but also contribute to a meaningful cause, nurturing the next generation of artists and enriching the cultural landscape.",
        images: [
            { type: "image", src: "src/The new adventure begins_Adrik Cristobal-Poster.webp" }
        ]
    }
};


// PROJECT MODAL OPEN

document.querySelectorAll("[data-project]").forEach(item => {
    item.addEventListener("click", () => {

        const key = item.getAttribute("data-project");
        const project = projects[key];

        if (!project) return;

        modalBanner.src = project.banner;
        modalTitle.textContent = project.title;
        modalYear.textContent = project.year;
        modalDesc.textContent = project.desc;

        modalGallery.innerHTML = "";

        project.images.forEach(item => {

            // IMAGE
            if (item.type === "image") {
                const img = document.createElement("img");
                img.src = item.src;

                enableImageZoom(img);

                modalGallery.appendChild(img);
            }

            // VIDEO
            if (item.type === "video") {
                const video = document.createElement("video");

                video.src = item.src;
                video.controls = true;
                video.preload = "metadata";
                video.playsInline = true;

                modalGallery.appendChild(video);
            }

        });

        projectModalContent.scrollTop = 0; // reset scroll

        projectModal.classList.add("active");

            requestAnimationFrame(() => {
        projectModalContent.scrollTop = 0;
        });

        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
    });
});


// PROJECT MODAL CLOSE

function closeProjectModal() {
    projectModal.classList.remove("active");

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";

    document.body.style.position = "";
    document.body.style.width = "";

    projectModalContent.scrollTo(0, 0);

        // STOP ALL VIDEOS
    const videos = modalGallery.querySelectorAll("video");

    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
}

closeProject.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});


// Video Fullscreen
document.addEventListener("fullscreenchange", () => {
    document.querySelectorAll(".projectGallery video").forEach(video => {
        video.classList.remove("fullscreen-portrait", "fullscreen-landscape");
    });

    const video = document.fullscreenElement;

    if (video && video.tagName === "VIDEO") {
        if (video.videoHeight > video.videoWidth) {
            video.classList.add("fullscreen-portrait");
        } else {
            video.classList.add("fullscreen-landscape");
        }
    }
});