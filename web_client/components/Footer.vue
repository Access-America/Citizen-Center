<template>
    <footer class="text-white">
        <div class="return-top">
            <div class="m-auto py-1 px-2 md:px-4 xl:container">
                <a class="underline" href="#">Return to top</a>
            </div>
        </div>
        <div class="head">
            <div class="head-inner m-auto xl:container md:px-2">
                <a href="#" class="link">Documentation</a>
                <a href="#" class="link">Features</a>
                <a href="#" class="link">Getting Started</a>
                <a href="#" class="link">About Us</a>
                <a href="#" class="link">Privacy Policy</a>
            </div>
        </div>
        <div class="bottom pb-2">
            <div
                class="m-auto flex flex-col-reverse xl:container md:justify-between md:flex-row md:py-3 md:px-4"
            >
                <div class="dept-of-tech flex items-center py-3 px-2 md:pl-0">
                    <img
                        class="tech-logo mr-2"
                        src="@/assets/images/dept-of-tech-logo.svg"
                        imgAlt="Department of Technology logo"
                    />
                    <div class="tech-header flex items-center font-bold">
                        Department of Technology
                    </div>
                </div>
                <div>
                    <div class="social hidden justify-end md:flex">
                        <a href="#" class="social-link">
                            <img src="@/assets/images/social/facebook.svg" />
                        </a>
                        <a href="#" class="social-link">
                            <img src="@/assets/images/social/twitter.svg" />
                        </a>
                        <a href="#" class="social-link">
                            <img src="@/assets/images/social/youtube.svg" />
                        </a>
                        <a href="#" class="social-link">
                            <img src="@/assets/images/social/rss.svg" />
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
.return-top {
    background: #eeeeee;
}

.return-top a {
    color: #0f4f93;
}

.head {
    background: #15498d;
}

.head-inner {
    @screen md {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

.head-inner .link {
    border-top: 1px solid #112f4e;
    color: white;
    padding: 16px;
    display: block;

    @screen md {
        border: none;
    }
}

.head-inner .link:hover {
    background: #1855a5;
}

.bottom {
    background: #112f4e;
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
