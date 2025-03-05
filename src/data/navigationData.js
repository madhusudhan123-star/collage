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
                    {
                        id: 'ca final', label: 'CA Final', path: 'courses/cafinal',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
                    {
                        id: 'ca inter', label: 'CA Inter', path: 'courses/cainter',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
                    {
                        id: 'ca foundation', label: 'CA Foundation', path: 'courses/cafoundation',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
                ]

            },
            {
                id: 'cma',
                label: 'CMA',
                path: 'courses/cma',
                dropdownItems: [
                    {
                        id: 'cma final', label: 'CMA Final', path: 'courses/cmafinal',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
                    {
                        id: 'cma inter', label: 'CMA Inter', path: 'courses/cmainter',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
                    {
                        id: 'cma foundation', label: 'CMA Foundation', path: 'courses/cmafoundation',
                        hasDropdown: true,
                        dropdownItems: [
                            { id: 'ca final old', label: 'Enroll For Face to Face batch', path: 'courses/enroll' },
                            { id: 'ca final new', label: 'Buy online course', path: 'courses/online' },
                            { id: 'ca final info', label: 'Know about a course', path: 'courses/caknow' },
                        ]
                    },
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
