import Vue from 'vue';

export const store = {
    notes: [
        { "contents": "My 1" },
        { "contents": "His 2" },
        { "contents": "Their 3" }
    ],
    storeNote (payload) {
        this.notes.push({ "contents": payload } );
    },
    updateNote (index, payload) {
        this.notes[index].contents = payload; // update contents at index
    },
    deleteNote (index, payload) {
        this.notes.splice(index,1); // remove 1 element at index
    },
}
