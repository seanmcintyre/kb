interface Source {
    name: string;
    color: string;
}

export const sources: Record<string, Source> = {
    'MSNBC': {
        name: 'MSNBC',
        color: 'rgba(48, 97, 255, 0.334)' // MSNBC's dark theme color
    },
    'Vox': {
        name: 'Vox',
        color: 'rgb(255, 242, 0, 0.334)' // Vox's signature green
    },
    'them': {
        name: 'them',
        color: 'rgb(228, 230, 252, 0.334)' // them's vibrant red
    },
    'Xtra': {
        name: 'Xtra',
        color: 'rgba(250, 40, 145, 0.334)' // Xtra's white
    }
}; 