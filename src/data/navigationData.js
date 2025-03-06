export const mainNavigation = [
    {
        id: 'home',
        label: 'Home',
        path: '/',
        hasDropdown: false
    },
    {
        id: 'courses', // updated id to match the new label
        label: 'Courses',
        hasDropdown: true,
        dropdownItems: [
            {
                id: 'ca',
                label: 'CA',
                path: 'courses/ca',
                hasDropdown: true,
                dropdownItems: [
                    { id: 'ca final', label: 'CA Final', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cafinal' },
                    { id: 'ca inter', label: 'CA Inter', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cainter' },
                    { id: 'ca foundation', label: 'CA Foundation', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cafoundation' },
                ]

            },
            {
                id: 'cma',
                label: 'CMA',
                path: 'courses/cma',
                dropdownItems: [
                    { id: 'cma final', label: 'CMA Final', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cmafinal' },
                    { id: 'cma inter', label: 'CMA Inter', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cmainter' },
                    { id: 'cma foundation', label: 'CMA Foundation', content: "The LAKSHYA COLLEGE OF COMMERCE (LCC) stands out as the premier destination for students seeking a top-notch commerce education.", path: 'courses/cmafoundation' },
                ]
            },
            { id: 'mec', label: 'MEC & CEC', path: 'courses/mec' },
            { id: 'acca', label: 'ACCA', path: 'courses/acca' },
            { id: 'degree', label: 'Degree', path: 'courses/degree' },
        ]
    },
    {
        id: 'test series',
        label: 'Test Series',
        hasDropdown: true,
        dropdownItems: [
            { id: 'ca final', label: 'CA Final Test Series', path: '/test/cafinal' },
            { id: 'test series', label: 'Test Series', path: '/test/test' },
        ]
    },
    {
        id: 'books',
        label: 'Books',
        path: '/books',
        hasDropdown: false,
    },
    {
        id: 'blogs',
        label: 'Blogs',
        path: '/blogs',
        hasDropdown: false
    },
    {
        id: 'about',
        label: 'About Us',
        path: '/about',
        hasDropdown: false
    },
    {
        id: 'rankers',
        label: 'Rankers',
        path: '/rankers',
        hasDropdown: false
    },
    {
        id: '',
        label: 'FAQ',
        path: '/faq',
        hasDropdown: false
    }
];
