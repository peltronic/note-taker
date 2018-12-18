<template>
    <b-container>

        <b-row class="justify-content-center">

            <b-col cols="9" id="list">

                <div id="heading">
                    <h2>List of Notes ({{ this.notes.length }})</h2>
                    <b-button v-if="!isCreateFormVisible" size="sm" variant="success" @click="createNote()" id="new-note-button">New Note</b-button>
                    <div v-if="isCreateFormVisible">
                        <b-row>
                            <b-col cols="9">
                                <b-form-input id="note-content" type="text" v-model="createForm.contents" required placeholder="Type the note..."> </b-form-input>
                            </b-col>
                            <b-col class="ctrls" cols="3">
                                <span v-on:click="onStore($event)"> <content-save-icon /> </span>
                                <span v-on:click="resetForm()"> <close-icon /> </span>
                                <span id="palette-new"><palette-icon :style="'color:'+getColorCode(this.createForm.colorKey)+';'"/></span>
                                <b-popover ref="new_note_color_palette" target="palette-new" title="Choose a color...">
                                    <ul class="color-list">
                                        <li v-for="cobj,cnt in this.colors" v-bind:key="cnt" v-on:click="closePalette($event,cobj.key)" :style="'background-color: '+cobj.code+';'" class="choose-color" :data-color="cobj.key"></li>
                                    </ul>
                                </b-popover>
                            </b-col>
                        </b-row>
                    </div>
                </div>

                <hr />

                <ul id="note-list">
                    <li v-for="nobj,cnt in this.notes" v-bind:key="cnt">
                        <note :index="cnt" :contents="nobj.contents" :colorKey="nobj.colorKey"></note>
                     </li>
                </ul>

            </b-col>

        </b-row>

    </b-container>
</template>

<script>
import { store } from '../store.js';
import Note from './Note.vue';
import ContentSaveIcon from "vue-material-design-icons/ContentSave.vue"
import CloseIcon from "vue-material-design-icons/Close.vue"
import PaletteIcon from "vue-material-design-icons/Palette.vue"

export default {
    name: 'Book',
    data () {
        return {
            colors: store.colors,
            isCreateFormVisible: false,
            notes: store.notes,
            createForm: {
                contents: '',
                colorKey: 'default',
            },
        }
    },
    methods: {
        createNote () {
            // render 'create' form
            this.isCreateFormVisible = true;
        },
        onStore (e) {
            // create the note in storage, then reset the form
            e.preventDefault();
            if ( '' != this.createForm.contents ) {
                // only create if it has some contents...
                store.storeNote(this.createForm.contents, this.createForm.colorKey);
            }
            this.resetForm();
        },
        closePalette(e, colorKey) {
            this.createForm.colorKey = colorKey;
            this.$refs.new_note_color_palette.$emit('close');
        },
        resetForm () {
            // reset values, then hide form
            this.createForm.contents = ''; 
            this.createForm.colorKey = 'default';
            this.isCreateFormVisible = false;
        },
        getColorCode(key) {
            // given a color code 'key', return the color 'code'
            return store.getNoteColorCode(key);
        },
    },
    components: {
        Note,
        ContentSaveIcon,
        CloseIcon,
        PaletteIcon,
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
span {
    display: inline-block;
}
#heading {
    margin-bottom: 1.1em;
}
#heading h2 {
    margin-bottom: 0.5em;
}
#heading #new-note-button {
    font-weight: bold;
}
ul#note-list {
    text-align: left;
}
ul#note-list > li {
    margin-bottom: 0.9em;
}
.ctrls {
    margin-top: 0.3em;
}
h3 {
    margin: 40px 0 0;
}
ul.color-list {
    margin-bottom: 0;
}
ul.color-list li {
    display: inline-block;
    margin-right: 0.5em;
    min-width: 20px;
    min-height: 20px;
}
a {
    color: #42b983;
}
</style>
