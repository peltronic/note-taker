<template>
    <b-row class="">
        <b-col cols="9">
            <div v-if="!isEditMode" class="note-box contents">{{ contents }}</div>
            <b-form-input v-if="isEditMode" type="text" v-model="newContents"> </b-form-input>
        </b-col>
        <b-col cols="3">
            <div v-if="!isEditMode">
                <span v-on:click="onEdit($event)"><pencil-icon /></span>
                <span v-on:click="onDelete($event)">Delete</span>
            </div>
            <div v-if="isEditMode">
                <span v-on:click="onUpdate($event)"><content-save-icon /></span>
                <span v-on:click="isEditMode=false"><close-icon /></span>
            </div>
        </b-col>
    </b-row>
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
.note-box {
    border: #5a5a5a solid 1px;
    padding: 0.5em 0.5em;
}
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
