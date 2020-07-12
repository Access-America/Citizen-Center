<template>
  <div v-if="showModal" class="tw-fixed tw-inset-0 tw-flex tw-items-center tw-justify-center tw-z-50 tw-overflow-auto">
    <transition
      enter-active-class="tw-transition-all tw-duration-100 tw-ease-out"
      leave-active-class="tw-transition-all tw-duration-150 tw-ease-in"
      enter-class="tw-opacity-0"
      enter-to-class="tw-opacity-100"
      leave-class="tw-opacity-100"
      leave-to-class="tw-opacity-0"
      appear
      @before-leave="backdropLeaving = true"
      @after-leave="backdropLeaving = false"
    >
      <div v-if="showBackdrop">
        <div class="tw-absolute tw-inset-0 tw-bg-black tw-opacity-50" @click="close"></div>
        <div class="tw-absolute tw-top-0 tw-right-0 tw-px-5 tw-py-4 tw-cursor-pointer" @click="open = false">
          <svg xmlns="http://www.w3.org/2000/svg" class="tw-h-4 tw-w-4">
            <path fill="#fff"
                  d="M14.414 15a.616.616 0 00.22-.04.542.542 0 00.197-.129.553.553 0 00.169-.406.55.55 0 00-.169-.405l-6.52-6.514L14.83.98A.546.546 0 0015 .575a.553.553 0 00-.169-.406A.56.56 0 0014.42 0a.56.56 0 00-.411.169L7.5 6.683.991.169A.56.56 0 00.58 0a.56.56 0 00-.411.169A.553.553 0 000 .575.55.55 0 00.169.98l6.52 6.526L.17 14.02a.55.55 0 00-.169.405c0 .158.056.293.169.406A.558.558 0 00.587 15a.585.585 0 00.405-.169L7.5 8.317l6.509 6.514a.558.558 0 00.405.169z"
            />
          </svg>
        </div>
      </div>
    </transition>

    <transition
      enter-active-class="tw-transition-all tw-duration-100 tw-ease-out"
      leave-active-class="tw-transition-all tw-duration-150 tw-ease-in"
      enter-class="tw-opacity-0 tw-transform tw-scale-70"
      enter-to-class="tw-opacity-100 tw-scale-100"
      leave-class="tw-opacity-100 tw-scale-100"
      leave-to-class="tw-opacity-0 tw-scale-70"
      appear
      @before-leave="cardLeaving = true"
      @after-leave="cardLeaving = false"
    >
      <div v-if="showContent" class="tw-relative tw-w-3/4 tw-mx-auto">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['open'],
  data () {
    return {
      showModal: false,
      showBackdrop: false,
      showContent: false,
      backdropLeaving: false,
      cardLeaving: false
    }
  },
  computed: {
    leaving () {
      return this.backdropLeaving || this.cardLeaving
    }
  },
  watch: {
    open: {
      handler (newValue) {
        if (newValue) {
          this.show()
        } else {
          this.close()
        }
      },
      immediate: true
    },
    leaving (newValue) {
      if (newValue === false) {
        this.showModal = false
        this.$emit('close')
      }
    }
  },
  mounted () {
    const onEscape = (e) => {
      if (this.open && e.keyCode === 27) {
        this.close()
      }
    }

    document.addEventListener('keydown', onEscape)

    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    show () {
      this.showModal = true
      this.showBackdrop = true
      this.showContent = true
    },
    close () {
      this.showBackdrop = false
      this.showContent = false
    }
  }
}
</script>
