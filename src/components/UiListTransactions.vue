<template>
  <div class="detail_transactions__list">
    <q-list padding>
      <q-item v-for="(transaction, i) in transactions" :key="i">
        <q-item-section top avatar>
          <q-avatar square :class="transaction.color">
            <img :src="transaction.icon" />
          </q-avatar>
        </q-item-section>

        <q-item-section class='detail_transactions__list--content'>
          <q-item-label>{{ transaction.name }}</q-item-label>
          <q-item-label caption>{{ transaction.date }}</q-item-label>
          <div class='btn__refund'>
            <q-btn
              flat
              no-caps
              text-color="secondary"
              class="debit_card_ico"
              label="Refund on debit card"
            />
          </div>
        </q-item-section>

        <q-item-section side top class="sidetop__price">
          <q-item-label caption :class="`price ${i == 0 ? 'active' : ''}`">{{
            transaction.price
          }}</q-item-label>
          <q-icon name="keyboard_arrow_right" class="ico__right__arrow" />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        {
          icon: this.$func.getStaticImage("file-storage.svg"),
          name: "Hamleys",
          date: "20 May 2020",
          price: "+ S$ 150",
          color: "ico_bg_blue",
        },
        {
          icon: this.$func.getStaticImage("flights.svg"),
          name: "Hamleys",
          date: "20 May 2020",
          price: "+ S$ 150",
          color: "ico_bg_green",
        },
        {
          icon: this.$func.getStaticImage("megaphone.svg"),
          name: "Hamleys",
          date: "20 May 2020",
          price: "+ S$ 150",
          color: "ico_bg_pink",
        },
        {
          icon: this.$func.getStaticImage("file-storage-1.svg"),
          name: "Hamleys",
          date: "20 May 2020",
          price: "+ S$ 150",
          color: "ico_bg_blue",
        },
      ],
    };
  },
};
</script>