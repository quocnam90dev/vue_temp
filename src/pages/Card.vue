<template>
  <q-page class="flex">
    <div class="fit row wrap wrapper">
      <div class="col-12 content__top">
        <div class="row">
          <div class="content__top--price col-6">
            <span class="price--label">Available balance</span>
            <span class="price--symbol">$$</span>
            <strong>3,000</strong>
          </div>
          <div class="col-6 text-right">
            <div class="visible-xs mobile__logo">
              <img src="@/assets/green_logo.svg" alt="" />
            </div>
            <q-btn icon="add_circle" label="New card" class="btn--new_card" />
          </div>
        </div>

        <q-tabs v-model="tab" narrow-indicator align="left" class="tab__header">
          <q-tab
            class="text-grey-7"
            name="my_debit_cards"
            label="My debit cards"
          />
          <q-tab
            class="text-grey-7"
            name="all_company_cards"
            label="All company cards"
          />
        </q-tabs>

        <div class="visible-xs card__xs">
          <UiCarousel :height="'230px'" />
        </div>
      </div>
      <div class="col-12">
        <q-card class="main__content">
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="my_debit_cards">
              <div class="my_debit_cards--wrapper">
                <div class="row q-col-gutter-xl">
                  <div class="col-xs-12 col-sm-12 col-md-6 hidden-xs">
                    <UiCarousel :height="'320px'" />
                    <UiQuickActions />
                  </div>
                  <div class="col-xs-12 col-sm-12 col-md-6 custom__on_xs">
                    <UiQuickActions class="visible-xs" />
                    <UiExpansionItem />
                  </div>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="all_company_cards"> </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import UiCarousel from "@/components/UiCarousel.vue";
import UiQuickActions from "@/components/UiQuickActions.vue";
import UiExpansionItem from "@/components/UiExpansionItem.vue";
export default {
  data() {
    return {
      tab: "my_debit_cards",
    };
  },
  components: { UiCarousel, UiQuickActions, UiExpansionItem },
};
</script>