const allProjectImages = import.meta.glob(
    "/src/assets/projects/**/*.{png,jpg,jpeg,webp,svg,PNG,JPG,JPEG,WEBP,SVG}",
    { eager: true, import: "default", query: "?url" }
);

const normalizeSlug = (slug) =>
    slug.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9\-_]/g, "");

export const getImagesForProject = (slug) => {
    const normalizedSlug = normalizeSlug(slug);
    return Object.entries(allProjectImages)
        .filter(([path]) => {
            // Normalize path to lowercase and replace backslashes with forward slashes for consistency
            const normalizedPath = path.toLowerCase().replace(/\\/g, "/");
            return normalizedPath.includes(normalizedSlug);
        })
        .sort(([a], [b]) =>
            a.localeCompare(b, undefined, {numeric: true, sensitivity: "base"})
        )
        .map(([, url]) => url);
};

export const projects = [
    {
        title: "BEL AIR RESIDENCE",
        slug: "bel-air-residence",
        program: "Single Family Residential",
        location: "Bel Air",
        size: "24,000 SF",
        type: "New Construction",
        status: "Unbuilt",
        category: "RESIDENTIAL",
        description:
            "This 11 bedroom private home sits on a hillside site in Bel Air with expansive views of Los Angeles. The contemporary style of the home incorporates subtle nods to the client’s Japanese roots through the use of natural materials that blurred the line between landscape and architecture. This project was unbuilt due to economic strains from the pandemic.",
        credits: "Some renderings by Polynates. Work completed while at BA Collective.",
        images: getImagesForProject("Bel_Air_Residence"),
    },
    {
        title: "BA COLLECTIVE STUDIO",
        slug: "ba-collective-studio",
        program: "Office",
        location: "Santa Monica",
        size: "4,500 SF",
        type: "New Construction",
        status: "Completed 2021",
        category: "RESIDENTIAL",
        description:
            "Located on Main Street, Santa Monica, this ground-up commercial building serves as BA Collective’s new studio and owns the title of Santa Monica’s first mass timber building. The rooftop solar canopy further promotes sustainable design while the rotated brick facade creates a dynamic pattern that ties into the neighboring context through the use of traditional materials.",
        credits: "Photos by Bruce Damonte. Work completed while at BA Collective.",
        images: getImagesForProject("BA_Collective_Studio"),
    },
    {
        title: "PARADIGM TALENT AGENCY",
        slug: "paradigm-talent-agency",
        program: "Office",
        location: "Beverly Hills",
        size: "82,000 SF",
        type: "Tenant Improvement",
        status: "Completed 2018",
        category: "RESIDENTIAL",
        description:
            "For this 82,000 square-foot project in Beverly Hills, Paradigm Talent Agency challenged the design team to create a space which would foster collaboration, chance encounters and unity across three floors. This project was a full tenant improvement venture within an existing core and shell, and a redesign of the existing courtyard. The build-out consisted of advanced design elements and challenges.",
        credits: "Photos by Eric Laignel. Work completed while at Rottet Studio.",
        images: getImagesForProject("Paradigm-Talent-Agency"),
    },
    {
        title: "HOLLYWOOD RESIDENCE",
        slug: "hollywood-residence",
        program: "Single Family Residential",
        location: "Hollywood Hills",
        size: "7,500 SF",
        type: "New Construction",
        status: "In Construction",
        category: "COMMERCIAL",
        description:
            "Located on a peninsula in the Hollywood Hills with almost 360 degree views of Los Angeles, this 4 bedroom home is designed as entirely new construction for an owner to occupy. The most public interior spaces are located on the second level where the best views are experienced. The landscape berms up at the front to conceal the more private ground level.",
        credits: "Work completed while at BA Collective.",
        images: getImagesForProject("Hills_Residence"),
    },
    {
        title: "ROYAL CREST RESIDENCE",
        slug: "royal-crest-residence",
        program: "Single Family Residential",
        location: "Encino",
        size: "6,000 SF",
        type: "Renovation",
        status: "Permitting",
        category: "RESIDENTIAL",
        description:
            "This single family home major renovation was designed and submitted for permitting with the intention of resale. The design draws inspiration from the original mid-century home with some modern touches to bring it up to date. A new bridge at the second level ties the primary suite to the new guest rooms and an outdoor terrace overlooking the backyard.",
        credits: "Work completed while at BA Collective.",
        images: getImagesForProject("Royal-Crest-Residence"),
    },
    {
        title: "MALIBU RESIDENCE",
        slug: "malibu-residence",
        program: "Single Family Residential",
        location: "Malibu",
        size: "10,000 SF",
        type: "Concept Design",
        status: "Proposal Completed",
        category: "COMMERCIAL",
        description:
            "This Malibu home was designed as new construction for the owner to occupy. The house sits at the peak of a hill with unobstructed views of the ocean and surrounding canyons. The curvature of the architecture seamlessly integrates with the landscape and frames views of key landmarks.",
        credits: "Work completed while at BA Collective.",
        images: getImagesForProject("Malibu_Residence"),
    },
    {
        title: "SHERMAN OAKS RESIDENCE",
        slug: "sherman_oaks_residence",
        program: "Single Family Residential",
        location: "Sherman Oaks",
        size: "2,971 SF",
        type: "Exterior Renovation",
        status: "Completed 2025",
        category: "RESIDENTIAL",
        description:
            "This Malibu home was designed as new construction for the owner to occupy. The house sits at the peak of a hill with unobstructed views of the ocean and surrounding canyons. The curvature of the architecture seamlessly integrates with the landscape and frames views of key landmarks.",
        credits: "Work completed while at BA Collective.",
        images: getImagesForProject("Sherman_Oaks_Residence"),
    },
    {
        title: "MULHOLLAND RESIDENCE",
        slug: "mulholland_residence",
        program: "Single Family Residential",
        location: "Sherman Oaks",
        size: "3,024 SF",
        type: "Addition",
        status: "Permitting",
        category: "RESIDENTIAL",
        description:
            "This project involves the design of a new addition to the decks and living area for a modern home in Sherman Oaks.",
        credits: "Work completed while at BA Collective.",
        images: getImagesForProject("Mulholland_Residence"),
    },
    {
        title: "CLARKSON LAW OFFICE HQ",
        slug: "clarkson_law_office_hq",
        program: "Single Family Residential",
        location: "",
        size: "",
        type: "",
        status: "",
        category: "",
        description:
            "The project involved the comprehensive interior remodeling of an existing space with the goal of transforming it into a dynamic, communal work environment, inspired by contemporary coworking models like WeWork. The design intent focused on creating a flexible and inclusive space that supports collaboration, creativity, and productivity.\n" +
            "The remodeled interior features a variety of distinct zones tailored to diverse working styles and social interactions, including open lounge areas, huddle rooms for small team discussions, a central bar for informal gatherings, and multiple seating arrangements ranging from individual desks to communal tables. Flexibility was a key consideration in the design, allowing the space to seamlessly adapt for events, workshops, and social functions.\n" +
            "This adaptive, multi-use approach encourages both individual focus and collective engagement, fostering a vibrant professional community within a versatile and inviting setting.",
        credits: "",
        images: getImagesForProject("Clarkson_Law_Office_HQ"),
    }
];
