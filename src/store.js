import Vue from 'vue';

const defaultColorCode = "#6c757d";

export const store = {
    colors : [
        { "key": "default", "code": defaultColorCode },
        { "key": "blue", "code": "#007bff" },
        { "key": "indigo", "code": "#6610f2" },
        { "key": "purple", "code": "#6f42c1" },
        { "key": "pink", "code": "#e83e8c" },
        { "key": "red", "code": "#dc3545" },
        { "key": "orange", "code": "#fd7e14" },
        { "key": "yellow", "code": "#ffc107" },
        { "key": "green", "code": "#28a745" },
        { "key": "teal", "code": "#20c997" },
        { "key": "cyan", "code": "#17a2b8" },
    ],
    notes: [
        { "contents": "Example Note 1", "colorKey": "default" },
        { "contents": "Example Note 2", "colorKey": "default" },
        { "contents": "Example Note 3", "colorKey": "green" },
    ],
    storeNote (payload,colorKey="default") {
        this.notes.push({ 
            "contents": payload, 
            "colorKey": colorKey, // this.getNoteColorCode(colorKey)
        });
    },
    updateNote (index, payload) {
        this.notes[index].contents = payload; // update contents at index
    },
    getNoteColorCode(colorKey) {
        let code = defaultColorCode;
        let color = this.colors.find( o => { return o.key==colorKey });
        if ( color != undefined ) {
            code = color.code;
        }
        return code;
    },
    setNoteColor (index, colorKey) {
        this.notes[index]["colorKey"] = colorKey;
    },
    deleteNote (index, payload) {
        this.notes.splice(index,1); // remove 1 element at index
    },
}
