/**
 * custom jsDoc tag for Vuex actions.
 * @module lib/action
 */

'use strict';

exports.name = 'action';
exports.options = {
    mustHaveValue: false,
    mustNotHaveDescription: true,
    canHaveType: false,
    canHaveName: false,
    onTagged(doclet, tag) { /* eslint-disable-line */
        doclet.action = {
            name: tag.value.name,
            type: tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : ''
        };
    }
};

exports.newDocletHandler = function(e) {
    const action = e.doclet.action;
    if (action) {
        e.doclet.addTag('function');
        e.doclet.scope = 'action';
        e.doclet.description = `<h5>Action:</h5>
                                <table class="params">
                                <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                                <tr>
                                <td class="type">${action.type}</td>
                                <td class="name last">${action.name}</td>
                                </tr>
                                </table>
                                ${e.doclet.description}`;
    }
};