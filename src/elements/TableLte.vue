<template>
  <table class="table table-hover">
    <tbody>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }">
          {{ key | capitalize }}
          <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
      <tr v-for="entry in filteredData">
        <td v-for="key in columns">
          <template v-if="key == 'action'">
            <template v-for="action in actions">
              <router-link v-if="!action.modal" :to="{name: action.link.name, params: { 'id': entry.id }}">
                <i :class="action.icon"></i>
                <small> {{ action.label }} </small>
              </router-link>
              <a v-else href="#" data-toggle="modal" :data-target="modalId" @click="openModal(action.name, entry.id)">
                <i :class="action.icon"></i>
                <small> {{ action.label }} </small>
              </a>
            </template>
          </template>
          <template v-else>
            {{ entry[key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableLTE',
  props: {
    name: String,
    data: Array,
    columns: Array,
    actions: Array,
    filterKey: String,
  },
  data() {
    const sorts = {};
    if (this.actions) {
      this.columns.push('action');
    }
    this.columns.forEach((key) => {
      sorts[key] = 1;
    });
    return {
      sortKey: '',
      sortOrders: sorts || {},
      modalId: '#modal-lte',
    };
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey;
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
      const order = this.sortOrders[sortKey] || 1;
      let data = this.data;
      if (filterKey) {
        data = data.filter(row => this.getFilterKey(row, filterKey));
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          const row1 = a[sortKey];
          const row2 = b[sortKey];
          let res = row1 === row2 ? 0 : row1;
          res = res > row2 ? 1 : -1;

          return res * order;
        });
      }
      return data;
    },
  },
  filters: {
    capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
    getFilterKey(row, filterKey) {
      const keys = Object.keys(row).some((key) => {
        const rowKey = String(row[key]);
        return rowKey.toLowerCase().indexOf(filterKey) > -1;
      });
      return keys;
    },
    openModal(name, id) {
      const data = { id, name };
      this.modalId = `#${name}`;
      this.$store.dispatch('addModalData', data);
    },
  },
};
</script>

<style>
th, td {
  min-width: 80px;
}

th.active {
  color: #000;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
