<template>
  <h1>Modal LTE</h1>
</template>

<script>
export default {
  name: 'ModalLTE',
  props: {
    data: Array,
    columns: Array,
    actions: Array,
    filterKey: String,
  },
  data() {
    const sorts = {};
    if (this.actions) {
      this.columns.push('Action');
      this.actions.forEach((key) => {
        console.log(key);
      });
      this.data.forEach((key) => {
        key.push();
      });
    }
    this.columns.forEach((key) => {
      sorts[key] = 1;
    });
    return {
      sortKey: '',
      sortOrders: sorts || {},
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
  },
  ready() {
    console.log('aaa');
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
