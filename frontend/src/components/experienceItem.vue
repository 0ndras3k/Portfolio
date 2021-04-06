<template>
<div
class="row
no-gutters
justify-content-end
justify-content-md-around
align-items-start
timeline-nodes">
    <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
        <h3 class=" text-light">{{ post }}</h3>
        <p>{{ desc }}</p>
    </div>
    <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
        <slot name="company_link" />
    </div>
    <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
        <time>{{ starttime }}</time> - <time>{{ endtime }}</time>
    </div>
</div>
</template>

<script lang="ts">
export default {
  name: 'experienceItem',
  props: {
    post: {
      type: String,
      default: 'Full-Stack Developer',
    },
    desc: {
      type: String,
      default: ' ',
    },
    starttime: {
      type: String,
      default: ' ',
    },
    endtime: {
      type: String,
      default: 'Now',
    },
  },
};
</script>
