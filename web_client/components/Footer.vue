<template>
    <footer class="text-white">
        <div class="return-top bg-base-lightest">
            <div class="m-auto py-1 px-2 md:px-4 max-w-desktop">
                <a
                    class="underline text-primary hover:text-primary-dark"
                    href="#"
                    >Return to top</a
                >
            </div>
        </div>
        <div class="head bg-primary-dark">
            <div class="head-inner m-auto max-w-desktop md:px-2">
                <a
                    href="#"
                    class="block link border-t-1px p-2 border-primary-darker text-white hover:underline md:border-0"
                    >Documentation</a
                >
                <a
                    href="#"
                    class="block link border-t-1px p-2 border-primary-darker text-white hover:underline md:border-0"
                    >Features</a
                >
                <a
                    href="#"
                    class="block link border-t-1px p-2 border-primary-darker text-white hover:underline md:border-0"
                    >Getting Started</a
                >
                <a
                    href="#"
                    class="block link border-t-1px p-2 border-primary-darker text-white hover:underline md:border-0"
                    >About Us</a
                >
                <a
                    href="#"
                    class="block link border-t-1px p-2 border-primary-darker text-white hover:underline md:border-0"
                    >Privacy Policy</a
                >
            </div>
        </div>
        <div class="bottom pb-2 bg-primary-darker">
            <div
                class="m-auto flex flex-col-reverse max-w-desktop md:justify-between md:flex-row md:py-3 md:px-4"
            >
                <div class="dept-of-tech flex items-center py-3 px-2 md:pl-0">
                    <img
                        class="tech-logo mr-2"
                        src="@/assets/images/dept-of-tech-logo.svg"
                        imgAlt="Access America"
                    />
                    <div class="tech-header flex items-center font-bold">
                        Access America
                    </div>
                </div>
                <div>
                    <div class="social hidden justify-end md:flex">
                        <a href="#" class="social-link">
                            <img
                                src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/social-icons/facebook25.svg"
                            />
                        </a>
                        <a href="#" class="social-link">
                            <img
                                src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/social-icons/twitter16.svg"
                            />
                        </a>
                        <a href="#" class="social-link">
                            <img
                                src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/social-icons/youtube15.svg"
                            />
                        </a>
                        <a href="#" class="social-link">
                            <img
                                src="@/node_modules/@hursey013/tailwindcss-uswds/dist/img/social-icons/rss25.svg"
                            />
                        </a>
                    </div>
                    <div class="text-white p-2 md:pr-0">
                        <div
                            class="contact-header font-bold hidden md:block md:text-right md:mb-1"
                        >
                            Agency Contact Center
                        </div>
                        <div class="flex justify-between">
                            <a
                                class="text-white md:pr-4"
                                href="tel:+1800-123-4567"
                                >(800) CALL-GOVT</a
                            >
                            <a href="mailto:info@agency.gov">info@agency.gov</a>
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
