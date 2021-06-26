<template>
  <div class="card__ui">
    <q-btn
      label="Show card number"
      flat
      no-caps
      icon="visibility"
      text-color="primary"
      class="show_card_number"
    />
    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-type="flat"
      control-color="primary"
      navigation
      :height="height"
      class="text-purple rounded-borders"
    >
      <q-carousel-slide name="style" class="q-carousel__slide--card">
        <div class="card__visa text-white">
          <div class="card__visa--top">
            <img src="@/assets/aspire_logo-1.svg" alt="">
          </div>
          <div class="card__visa--name">
            <span>Mark Henry</span>
          </div>
          <div class="card__visa--numbers">
            <ul>
              <li v-for="i in 3" :key="i">
                <span v-for="i in 4" :key="i" class='dotted'></span>
              </li>
              <li>2020</li>
            </ul>
          </div>
          <div class="card__visa--footer">
            <span class="date">
              Thru: 12/20
            </span>
            <span>CVV: ***</span>
          </div>
          <div class="card__visa--bot--logo">
            <img src="@/assets/visa_logo.svg" alt="">
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center text-black">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
  props: ['height']
};
</script>
<style lang="sass">
.card__ui
  position: relative
  .show_card_number
    bottom: 100%
    right: 0
    position: absolute
  .q-carousel__navigation
    bottom: 0
    margin-bottom: 0
    .q-carousel__navigation-icon--active
      i
        width: 15px
        background: #01d167
        border-radius: 10px
    .q-btn
      margin: 0
    .q-btn__content
      font-size: 5px
  .q-carousel__slide--card
    padding: 0
  .card__visa
    padding: 27px
    border-radius: 10px
    border: 1px solid rgba(1, 209, 103, 1)
    background: rgba(1, 209, 103, 1)
    &--top
      text-align: right
      margin-bottom: 27px
      @media all and (max-width: 768px)
        margin-bottom: 0
    &--name
      font-size: 24px
      font-weight: bold
      line-height: 1.5
      margin-bottom: 30px
      @media all and (max-width: 768px)
        margin-bottom: 0
    &--numbers
      font-size: 16px
      font-weight: bold
      margin-bottom: 20px
      @media all and (max-width: 768px)
        margin-bottom: 0
      ul
        list-style: none
        padding: 0
        width: 100%
        li
          display: inline-block
          margin-right: 20px
          &:last-child
            margin-right: 0
        @media all and (max-width: 768px)
          margin: 0
      .dotted
        display: inline-block
        width: 10px
        height: 10px
        margin-right: 3px
        background: #fff
        border-radius: 100%
    &--footer
      font-weight: bold
      font-size: 16px
      span
        display: inline-block
        margin-right: 36px
    &--bot--logo
      text-align: right
      margin-top: 4px
</style>