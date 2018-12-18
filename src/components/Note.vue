<template>
    <b-row class="">
        <b-col cols="9">
            <div v-if="!isEditMode" class="note-box contents" :style="'background-color:'+getColorCode(colorKey)+';'">{{ contents }}</div>
            <b-form-input v-if="isEditMode" type="text" v-model="newContents"> </b-form-input>
        </b-col>
        <b-col class="ctrls" cols="3">
            <div v-if="!isEditMode">
                <span v-on:click="onEdit($event)"><pencil-icon /></span>
                <span v-on:click="onDelete($event)">Delete</span>
            </div>
            <div v-if="isEditMode">
                <span v-on:click="onUpdate($event)"><content-save-icon /></span>
                <span :id="'palette-'+index"><palette-icon :style="'color:'+getColorCode(colorKey)+';'"/></span>
                <b-popover :target="'palette-'+index" title="Choose a color...">
                    <ul class="color-list">
                        <li v-for="cobj,cnt in this.colors" v-bind:key="cnt" v-on:click="setColor($event, cobj.key)" :style="'background-color: '+cobj.code+';'" class="choose-color" :data-color="cobj.key"></li>
                    </ul>
                </b-popover>
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
import PaletteIcon from "vue-material-design-icons/Palette.vue"

export default {
    name: 'Note',
    props: {
        contents: String,
        colorKey: String, // the color key
        index: Number,
    },
    data () {
        return {
            colors: store.colors,
            isEditMode: false,
            newContents: '',
        }
    },
    methods: {
        onEdit (e) {
            this.newContents = this.contents;
            this.isEditMode = true;
        },
        onUpdate (e) {
            store.updateNote(this.index, this.newContents);
            this.isEditMode = false;
        },
        onDelete (e) {
            store.deleteNote(this.index);
        },
        setColor (e, colorKey) {
            store.setNoteColor(this.index, colorKey);
            this.isEditMode = false;
        },
        getColorCode(key) {
            // given a color code 'key', return the color 'code'
            return store.getNoteColorCode(key);
        },
    },
    components: {
        PencilIcon,
        ContentSaveIcon,
        CloseIcon,
        PaletteIcon,
    }
}
</script>

<style scoped>
.note-box {
    border: #5a5a5a solid 1px;
    padding: 0.5em 0.5em;
    color: #fff;
    font-weight: bold;
}
.ctrls {
    margin-top: 0.3em;
}
ul.color-list {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
}
ul.color-list li {
    display: inline-block;
    margin-right: 0.5em;
    min-width: 20px;
    min-height: 20px;
}
</style>
