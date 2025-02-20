<script>


export default {
    props: {
        contacts: { type: Array, default: [] },
        activeIndex: { type: Number, default: -1 },
    },
    emits: ["update:activeIndex", "edit-id"],
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        },
        goToEditContact(id) {
            this.$emit("edit-id", id);
        }

    }
};
</script>
<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="(contact, index) in contacts" :key="contact._id"
            :class="{ active: index === activeIndex }" @click="updateActiveIndex(index)"
            @dblclick="goToEditContact(contact._id)">
            {{ contact.name }}
        </li>
    </ul>
</template>