<template>
  <v-app>
    <v-main>
      <v-card>
        <v-tabs v-model="tab" bg-color="primary">
          <v-tab value="one">Item One(VUE)</v-tab>
          <v-tab value="two">Item Two(VUE)</v-tab>
          <v-tab value="three">Item Three(VUE)</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="tab">
            <v-window-item value="one">
              One(VUE)
            </v-window-item>

            <v-window-item value="two">
              Two(VUE)
            </v-window-item>

            <v-window-item value="three">
              Three(VUE)
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card> </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>
