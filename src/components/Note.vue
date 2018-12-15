<template>
    <div class="">
        <span v-if="!isEditMode" class="contents">{{ contents }}</span>
        <span v-if="!isEditMode" v-on:click="onEdit($event)" class="clickme_to_edit"><pencil-icon /></span>
        <span v-if="!isEditMode" v-on:click="onDelete($event)" class="clickme_to_delete">Delete</span>
        <span v-if="isEditMode">
            <b-form-input type="text" v-model="newContents"> </b-form-input>
            <span v-on:click="onUpdate($event)"> <content-save-icon /> </span>
            <span v-on:click="isEditMode=false"> <close-icon /> </span>
        </span>
    </div>
</template>

<script>
import { store } from '../store.js';
import PencilIcon from "vue-material-design-icons/Pencil.vue"
import ContentSaveIcon from "vue-material-design-icons/ContentSave.vue"
import CloseIcon from "vue-material-design-icons/Close.vue"

export default {
    name: 'Note',
    props: {
        contents: String,
        index: Number,
    },
    data () {
        return {
            isEditMode: false,
            newContents: '',
        }
    },
    methods: {
        onEdit (e) {
            console.log('edit...');
            this.newContents = this.contents;
            this.isEditMode = true;
        },
        onUpdate (e) {
            console.log('update...');
            store.updateNote(this.index, this.newContents);
            this.isEditMode = false;
        },
        onDelete (e) {
            console.log('delete...');
            store.deleteNote(this.index);
        },
    },
    components: {
        PencilIcon,
        ContentSaveIcon,
        CloseIcon,
    }
}
</script>

<style scoped>
/*
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
*/
</style>
