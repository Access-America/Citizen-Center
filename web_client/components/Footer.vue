<template>
    <footer class="footer">
        <div class="return-top">
            <div class="return-top-inner m-auto">
                <a href="#">Return to top</a>
            </div>
        </div>
        <div class="head">
            <div class="head-inner m-auto">
                <a href="#" class="link">Documentation</a>
                <a href="#" class="link">Features</a>
                <a href="#" class="link">Getting Started</a>
                <a href="#" class="link">About Us</a>
                <a href="#" class="link">Privacy Policy</a>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-inner m-auto">
                <div class="dept-of-tech">
                    <img
                        class="logo"
                        src="@/assets/images/dept-of-tech-logo.svg"
                        imgAlt="Department of Technology logo"
                    />
                    <div class="header">Department of Technology</div>
                </div>
                <div class="info-section">
                    <div class="social">
                        <a href="#" class="link">
                            <img src="@/assets/images/social/facebook.svg" />
                        </a>
                        <a href="#" class="link">
                            <img src="@/assets/images/social/twitter.svg" />
                        </a>
                        <a href="#" class="link">
                            <img src="@/assets/images/social/youtube.svg" />
                        </a>
                        <a href="#" class="link">
                            <img src="@/assets/images/social/rss.svg" />
                        </a>
                    </div>
                    <div class="contact-wrapper">
                        <div class="header">Agency Contact Center</div>
                        <div class="info">
                            <a href="tel:+1800-123-4567">(800) CALL-GOVT</a>
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
.footer {
    $max-screen-width: 1280px;

    color: white;

    .return-top {
        background: #eeeeee;

        .return-top-inner {
            padding: 4px 16px;
            max-width: $max-screen-width;

            @screen md {
                padding: 4px 32px;
            }

            a {
                color: #0f4f93;
                text-decoration: underline;
            }
        }
    }

    .head {
        background: #15498d;

        .head-inner {
            max-width: $max-screen-width;

            @screen md {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

                padding: 0 16px;
            }

            .link {
                color: white;
                white-space: nowrap;
                border-top: 1px solid #112f4e;
                padding: 16px;
                line-height: 19px;
                display: block;

                @screen md {
                    border: none;
                }

                &:hover {
                    background: #1855a5;
                }
            }
        }
    }

    .bottom {
        background: #112f4e;
        padding-bottom: 16px;

        .bottom-inner {
            display: flex;
            flex-direction: column-reverse;
            max-width: $max-screen-width;

            @screen md {
                justify-content: space-between;
                flex-direction: row;
                padding: 24px 32px;
            }
        }
    }

    .dept-of-tech {
        display: flex;
        padding: 24px 16px;

        @screen md {
            padding-left: 0;
        }

        .logo {
            width: 48px;
            height: 48px;
            margin-right: 16px;

            @screen md {
                width: 80px;
                height: 80px;
            }
        }

        .header {
            font-size: 24px;
            line-height: 26px;
            font-weight: 700;
            display: flex;
            align-items: center;
        }
    }

    .section-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .contact-wrapper {
        color: white;
        padding: 16px;

        @screen md {
            padding-right: 0;
        }

        .header {
            display: none;
            font-size: 22px;
            font-weight: 700;
            line-height: 26px;

            @screen md {
                display: block;
                text-align: right;
                margin-bottom: 8px;
            }
        }
        .info {
            display: flex;
            justify-content: space-between;

            a {
                color: white;
                text-decoration: none;

                &:first-child {
                    padding-right: 32px;
                }
            }
        }
    }

    .social {
        display: none;
        justify-content: flex-end;

        @screen md {
            display: flex;
        }

        .link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 48px;
            height: 48px;
            background: #f2f2f2;
            margin-left: 8px;

            &:hover {
                opacity: 0.75;
            }
        }
    }
}
</style>
