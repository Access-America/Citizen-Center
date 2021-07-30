<template>
    <footer class="text-white">
        <div class="return-top bg-base-lightest">
            <div class="px-2 py-1 m-auto md:px-4 max-w-desktop">
                <a
                    class="underline text-primary-default hover:text-primary-dark"
                    href="#"
                    >Return to top</a
                >
            </div>
        </div>
        <div class="pb-2 bottom bg-primary-darker">
            <div
                class="flex flex-col-reverse m-auto md:flex-row md:justify-between md:py-3 md:px-4 max-w-desktop"
            >
                <div class="flex items-center px-2 py-3 md:pl-0 dept-of-tech">
                    <img
                        class="mr-2 tech-logo"
                        src="@/assets/images/dept-of-tech-logo.svg"
                        imgAlt="Access America"
                    />
                    <div class="flex items-center font-bold tech-header">
                        Access America
                    </div>
                </div>
                <div>
                    <div class="justify-end hidden md:flex social">
                        <a
                            href="https://twitter.com/USAccessAmerica"
                            class="social-link"
                            target="_blank"
                        >
                            <img
                                src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/social-icons/twitter16.svg"
                            />
                        </a>
                    </div>
                    <div class="p-2 text-white md:pr-0">
                        <div
                            class="hidden font-bold md:block md:mb-1 md:text-right contact-header"
                        >
                            Contact Us
                        </div>
                        <div class="md:text-right">
                            <a href="mailto:info@accessamerica.us">
                                info@accessamerica.us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({}),
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
}
</script>

<style scoped>
.head-inner {
    @screen md {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }
}

.tech-logo {
    width: 48px;
    height: 48px;

    @screen md {
        width: 80px;
        height: 80px;
    }
}

.tech-header {
    font-size: 24px;
    line-height: 26px;
}

.social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: #f2f2f2;
    margin-left: 8px;
}

.social-link:hover {
    opacity: 0.75;
}

.contact-header {
    font-size: 22px;
    line-height: 26px;
}
</style>
