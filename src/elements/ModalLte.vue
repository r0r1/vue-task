<template>
  <div :class="modal" :id="name" role="dialog" aria-labelledby="tableModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <form class="form-horizontal" @submit.prevent="action()" novalidate>
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">{{ title }}</h4>
          </div>
          <div class="modal-body">
            <slot>
              <p>{{ body }}</p>
            </slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ModalLTE',
  props: {
    name: {
      type: String,
      default: 'modal-lte',
    },
    confirm: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
    },
  },
  data() {
    return {
      show: true,
      modal: 'modal fade in',
    };
  },
  methods: {
    closeModal() {
      this.show = false;
    },
  },
  computed: {
    show() {
      if (this.show) {
        this.modal = 'modal fade in';
      } else {
        this.modal = 'modal fade out';
      }
    },
    ...mapGetters([
      'modalData',
    ]),
  },
};
</script>
