// This dictates whats rendered in the header and homepage
export const MENU = [
    {
        type: 'submenu',
        label: 'On The Pulse',
        img: 'taxes.svg',
        imgAlt: 'Filing taxes',
        submenu: [
            {
                label: 'Review Congressional Voting Histories',
                href: '/on-the-pulse/voting-histories',
            },
            {
                label: 'Review Special Interest Money in Politics',
                href: '/on-the-pulse/special-interest-money',
            },
            {
                label: 'View Congressional Bills and Supreme Court Cases',
                href: '/on-the-pulse/bills-cases',
            },
            {
                label: 'Contact Congressional Representatives',
                href: '/on-the-pulse/contact-representatives',
            },
            {
                label: 'Complete the U.S. Census',
                href: '/on-the-pulse/census',
            },
            {
                label: 'View the American Scorecard',
                href: '/on-the-pulse/american-scorecard',
            },
            {
                label: 'Citizen Survey',
                href: '/on-the-pulse/citizen-survey',
            },
        ],
    },
    {
        type: 'submenu',
        img: 'assistance.svg',
        imgAlt: 'Government Assistance',
        label: 'Benefits & Services',
        submenu: [
            {
                label: 'Apply for Government Assistance Programs',
                href: '/benefits-and-services/government-assistance',
            },
            {
                label: 'Apply for Unemployment',
                href: '/benefits-and-services/unemployment',
            },
            {
                label: 'Apply for or Renew Passport',
                href: '/benefits-and-services/passport',
            },
            {
                label: 'Useful Websites in Your Area',
                href: '/benefits-and-services/websites',
            },
        ],
    },
    {
        type: 'submenu',
        img: 'registration.svg',
        imgAlt: 'Voter Registration',
        label: 'Elections',
        submenu: [
            {
                label: 'Register to Vote',
                href: '/elections/register-to-vote',
            },
            {
                label: 'Check Voter Registration',
                href: '/elections/check-voter-registration',
            },
            {
                label: 'Online Voting',
                href: '/elections/vote-online',
            },
            {
                label: 'Request Absentee Ballot',
                href: '/elections/absentee-ballot',
            },
            {
                label: 'Register to Run for Office',
                href: '/elections/run-for-office',
            },
            {
                label: 'Volunteer as Poll Worker',
                href: '/elections/volunteer',
            },
        ],
    },
    {
        type: 'submenu',
        img: 'financial.svg',
        imgAlt: 'Financial',
        label: 'Financial',
        submenu: [
            {
                label: 'File Taxes',
                href: '/financial/file-taxes',
            },
            {
                label: 'Review Tax History',
                href: '/financial/tax-history',
            },
            {
                label: 'Connect Bank Account',
                href: '/financial/connect-bank',
            },
            {
                label: 'Pay Fines',
                href: '/financial/pay-fines',
            },
            {
                label: 'Sign up for Freedom Dividend',
                href: '/financial/freedom-dividend',
            },
        ],
    },
    {
        type: 'submenu',
        img: 'financial.svg',
        imgAlt: 'Financial',
        label: 'Profile',
        submenu: [
            {
                label: 'Update Your Information',
                href: '/profile/update',
            },
            {
                label: 'Link Family Members',
                href: '/profile/link-family',
            },
            {
                label: 'Apply for Name Change',
                href: '/profile/name-change',
            },
            {
                label: 'Receive Notifications',
                href: '/profile/notifications',
            },
            {
                label: 'Manage Permissions',
                href: '/profile/permissions',
            },
            {
                label: 'Decentralized Identity',
                href: '/profile/did',
            },
        ],
    },
]
