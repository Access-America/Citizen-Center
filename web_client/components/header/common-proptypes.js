export const menuProps = {
    type: Array,
    default() {
        return [
            {
                type: 'submenu',
                label: '',
                submenu: [
                    {
                        label: '',
                        href: '#',
                    },
                ],
            },
            {
                type: 'link',
                label: '',
                href: '#',
            },
        ]
    },
}
