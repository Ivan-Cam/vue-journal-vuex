export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Pariatur qui exercitation minim nulla nisi minim voluptate eiusmod nulla adipisicing.',
            picture: null,
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Ut adipisicing commodo veniam non ut anim.Ut adipisicing commodo veniam non ut anim.',
            picture: null,
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Laboris excepteur aute consectetur quis culpa aliquip laborum occaecat.',
            picture: null,
        },
    ]
})