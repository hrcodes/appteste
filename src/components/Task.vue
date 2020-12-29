<template>
  <ol>
    <li v-for="(card, idx) in cards" :key="idx" :class="card.class">
      <header class="card-item__titles card-item__spacing">
        <h4 class="card-item__title"
            @click="$emit('clicktitle', card.description)"
        >
            {{ card.title }}
        </h4>
        <p class="card-item__subtitle">{{ card.subtitle }}</p>
      </header>
      <footer class="card-item__last-line">
        <ul class="card-item__faces card-item__spacing">
          <li>{{ card.face1 }}</li>
          <li>{{ card.face2 }}</li>
          <li>{{ card.face3 }}</li>
          <li>{{ card.face4 }}</li>
          <li>{{ card.morefaces }}</li>
        </ul>
        <div :class="card.indicator"></div>
      </footer>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      cards: [
        {
          class: 'card-item',
          title: 'Molly Moreas',
          subtitle: 'Photo Shoot',
          description: 'This is a card to make a photo shoot of the project and test out descriptions',
          face1: '@',
          face2: '@',
          face3: '@',
          face4: '@',
          morefaces: '...',
          indicator: 'indicator indicator--high card-item__indicator',
        },
        {
          class: 'card-item',
          title: 'Nike Lebron',
          subtitle: 'Loading Page',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'BCA',
          subtitle: 'Website Developer',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Plainthing',
          subtitle: '',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: '',
          subtitle: '',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Pharmacy Illustration',
          subtitle: 'Ilustration',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'ESDM Video',
          subtitle: 'Motion Graphic',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
        {
          class: 'card-item',
          title: 'Minerba',
          subtitle: 'Motion Graphic',
          description: '',
          face1: '',
          face2: '',
          face3: '',
          face4: '',
          morefaces: '',
          indicator: '',
        },
      ],
    };
  },
  methods: {
    //
  },
});

</script>
