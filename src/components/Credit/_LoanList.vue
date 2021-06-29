<template>
  <div class="q-pa-md">
    <div class="row">
      <div class="col-3">
        <h2>Loan List</h2>
      </div>
      <div class="col-6">
        <q-btn
          style="background: #ff0080; color: white"
          label="Create Loan"
          icon="add"
          @click="cardOpened.open = true"
        />
        <FormCreate :card-opened="cardOpened" />
      </div>
    </div>
    <q-separator />
    <br />
    <q-markup-table separator="vertical" flat bordered>
      <thead>
        <tr>
          <th width="20%" class="text-left">Purpose</th>
          <th width="10%" class="text-right">Amount required</th>
          <th width="10%" class="text-right">Loan Term</th>
          <th width="20%" class="text-right">
            Date Signed (Weekly repayment feq)
          </th>
          <th width="25%" class="text-right">Reason</th>
          <th class="text-right">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">
            <q-btn outline color="warning" label="Repay" no-caps />
          </td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
          <td class="text-right">
            <q-btn outline color="primary" label="Repaid" no-caps />
          </td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
          <td class="text-right">
            <q-btn outline color="primary" label="Repaid" no-caps />
          </td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
          <td class="text-right">
            <q-btn outline color="warning" label="Repay" no-caps />
          </td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
          <td class="text-right">
            <q-btn outline color="warning" label="Repay" no-caps />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import FormCreate from "@/components/Credit/_Form.vue"
export default {
  components: { FormCreate },
  data() {
    return {
      cardOpened: { open: false },
    }
  },
}
</script>