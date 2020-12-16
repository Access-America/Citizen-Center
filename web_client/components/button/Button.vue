<template>
    <a v-if="to" :href="to" :class="classObject">
        <slot></slot>
    </a>
    <button v-else :class="classObject">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        // possible "kinds":
        // - primary
        // - secondary
        // - accent
        // - base
        // - outline
        // - disabled
        // - unstyled
        kind: {
            type: String,
            default: 'primary',
        },
        // possible "sizes":
        // - big
        size: {
            type: String,
            default: '',
        },
        to: {
            type: String,
            default: '',
        },
    },
    computed: {
        classObject() {
            const staticClasses = [
                'button',
                'no-underline',
                'mr-05',
                'mb-1',
                'shadow-none',
                'text-center',
                'font-bold',
                'font-ui',
                'inline-block',
                'cursor-pointer',
                'rounded-md',
                'border-0',
                'appearance-none',
                'text-ui-sm',
                'w-full',
                'sm:w-auto',
                'sm:mb-0',
            ].reduce((acc, val) => {
                acc[val] = true
                return acc
            }, {})

            return {
                ...staticClasses,
                'text-white':
                    this.kind === 'primary' ||
                    this.kind === 'secondary' ||
                    this.kind === 'base' ||
                    this.kind === 'disabled',

                primary: this.kind === 'primary',
                'bg-primary': this.kind === 'primary',
                'hover:bg-primary-dark': this.kind === 'primary',

                secondary: this.kind === 'secondary',
                'bg-secondary': this.kind === 'secondary',
                'hover:bg-secondary-dark': this.kind === 'secondary',

                accent: this.kind === 'accent',
                'bg-accent-cool-dark': this.kind === 'accent',
                'hover:bg-accent-cool-darker': this.kind === 'accent',
                'text-darkest': this.kind === 'accent',

                base: this.kind === 'base',
                'bg-base': this.kind === 'base',
                'hover:bg-base-dark': this.kind === 'base',

                outline: this.kind === 'outline',
                'bg-white': this.kind === 'outline',
                'text-primary-dark': this.kind === 'outline',
                'hover:text-primary-darker': this.kind === 'outline',

                unstyled: this.kind === 'unstyled',

                disabled: this.kind === 'disabled',
                'cursor-none': this.kind === 'disabled',
                'bg-base-light': this.kind === 'disabled',
                'pointer-events-none': this.kind === 'disabled',

                big: this.size === 'big',
                'py-2': this.size === 'big',
                'px-205': this.size === 'big',
                'text-ui-lg': this.size === 'big',
            }
        },
    },
}
</script>

<style scoped>
.button {
    padding: 0.75rem 1.25rem;
    line-height: 0.9;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
}

.button.outline {
    box-shadow: inset 0 0 0 2px #005ea2;
}

.button.outline:hover {
    box-shadow: inset 0 0 0 2px #1a4480;
}

.button.unstyled {
    color: #005ea2;
    text-decoration: underline;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    font-weight: normal;
    margin: 0;
    padding: 0;
    text-align: left;
}

.button.unstyled:hover {
    color: #1a4480;
}
</style>
