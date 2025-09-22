import React from "react";

export const ProjectsContext = React.createContext({
    projects: [],
    isLoading: true,
    error: null,
    refresh: () => {
    },
});