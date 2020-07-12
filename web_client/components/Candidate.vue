<template>
  <div class="tw-border tw-border-base-lighter tw-rounded tw-flex tw-flex-col tw-w-72">
    <img :src="profilePic" :alt="name" class="tw-h-40 tw-w-auto tw-object-cover tw-object-top">
    <div class="tw-p-6 tw-flex tw-flex-col tw-justify-between tw-h-full">
      <div>
        <h3 class="tw-text-ink tw-font-bold tw-text-xl">
          {{ name }} - ({{ affiliation }})
        </h3>
        <p class="tw-mt-6 tw-text-ink tw-leading-relaxed">
          <slot></slot>
        </p>
      </div>

      <div class="tw-mt-8 tw-flex tw-flex-col tw-items-center">
        <a :href="votingRecord" class="tw-text-center tw-block tw-underline">See Voting Record</a>
        <a :href="contactURL" class="usa-button tw-block tw-mt-6">Contact {{ officeType }} Office</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Candidate',
  props: {
    name: {
      type: String,
      default: 'Kamala Harris'
    },
    affiliation: {
      type: String,
      default: 'D'
    },
    house: {
      type: Boolean,
      default: false
    },
    senate: {
      type: Boolean,
      default: false
    },
    contactURL: {
      type: String,
      default: 'https://www.harris.senate.gov/'
    },
    votingRecord: {
      type: String,
      default: 'https://www.harris.senate.gov/about/voting-record'
    }
  },
  computed: {
    profilePic () {
      return this.getImgPath()
    },
    officeType () {
      if (this.senate) {
        return 'Senate'
      }
      return 'Congressional'
    }
  },
  methods: {
    getImgPath () {
      return require(`~/assets/images/${this.name}.jpg`)
    }
  }
}
</script>

<style scoped>

</style>
